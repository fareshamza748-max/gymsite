/* ═══════════════════════════════════════════
   GymPro v3 — Feature Modules
   Timer + PR Tracker + Notifications + Animations
   ═══════════════════════════════════════════ */

/* ─────────────────────────────────────
   REST TIMER
───────────────────────────────────── */
const RestTimer = (() => {
  let _duration = 90;   // seconds
  let _remaining = 0;
  let _interval  = null;
  let _onTick    = null;
  let _onDone    = null;
  let _running   = false;

  function start(seconds, onTick, onDone) {
    stop();
    _duration  = seconds;
    _remaining = seconds;
    _onTick    = onTick;
    _onDone    = onDone;
    _running   = true;
    _interval  = setInterval(_tick, 1000);
    _tick();
  }

  function _tick() {
    if (_onTick) _onTick(_remaining, _duration);
    if (_remaining <= 0) { done(); return; }
    _remaining--;
  }

  function done() {
    stop();
    buzz();
    if (_onDone) _onDone();
  }

  function stop() {
    clearInterval(_interval);
    _interval = null;
    _running  = false;
  }

  function isRunning() { return _running; }

  function buzz() {
    // Vibration API
    if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
    // Audio beep
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      [0, 0.15, 0.3].forEach(delay => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine'; osc.frequency.value = 880;
        gain.gain.setValueAtTime(0.3, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.12);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.12);
      });
    } catch(e) {}
  }

  return { start, stop, isRunning, buzz };
})();

/* ─────────────────────────────────────
   PR (Personal Record) TRACKER
───────────────────────────────────── */
const PRTracker = {
  // Returns true if this is a new PR
  check(exId, wt, reps) {
    if (!wt || !reps) return false;
    const logs = S.perfLog[exId] || [];
    if (!logs.length) return true; // first log = first PR
    const prev1RM = logs.reduce((best, l) => {
      const est = this.est1RM(l.wt, l.reps);
      return est > best ? est : best;
    }, 0);
    const new1RM = this.est1RM(wt, reps);
    return new1RM > prev1RM && prev1RM > 0;
  },

  // Epley formula: 1RM = wt × (1 + reps/30)
  est1RM(wt, reps) {
    if (!wt || !reps) return 0;
    return Math.round(wt * (1 + reps / 30));
  },

  // Get best 1RM for exercise
  best1RM(exId) {
    const logs = S.perfLog[exId] || [];
    if (!logs.length) return null;
    return logs.reduce((best, l) => {
      const est = this.est1RM(l.wt, l.reps);
      return est > best ? est : best;
    }, 0);
  },

  // Get progression over time (for chart)
  getProgression(exId) {
    const logs = S.perfLog[exId] || [];
    return logs.map(l => ({
      date: l.date,
      wt: l.wt,
      reps: l.reps,
      est1RM: this.est1RM(l.wt, l.reps),
    }));
  },

  // Get all PRs as events
  getAllPRs() {
    const prs = [];
    Object.keys(S.perfLog || {}).forEach(exId => {
      const logs = S.perfLog[exId];
      let bestSoFar = 0;
      logs.forEach(l => {
        const est = this.est1RM(l.wt, l.reps);
        if (est > bestSoFar && bestSoFar > 0) {
          prs.push({ exId, exName: EX[exId]?.name || exId, date: l.date, wt: l.wt, reps: l.reps, est1RM: est });
        }
        if (est > bestSoFar) bestSoFar = est;
      });
    });
    return prs.sort((a, b) => b.date.localeCompare(a.date));
  },
};

/* ─────────────────────────────────────
   VOLUME TRACKER (weekly tonnage)
───────────────────────────────────── */
const VolumeTracker = {
  // Weekly volume per muscle group
  getWeeklyVolume() {
    const week = last7Days();
    const vol  = {};
    week.forEach(ds => {
      Object.keys(EX).forEach(id => {
        if (!S.done[ds + '_' + id]) return;
        const muscle = EX[id]?.muscle;
        if (!muscle) return;
        const logs = (S.perfLog[id] || []).filter(l => l.date === ds);
        const load  = logs.reduce((sum, l) => sum + (l.wt * l.reps || 0), 0);
        vol[muscle] = (vol[muscle] || 0) + (load || 1);
      });
    });
    return vol;
  },

  // Consistency score (0-100) for last 4 weeks
  getConsistency() {
    const days28 = [];
    const now = new Date();
    for (let i = 27; i >= 0; i--) {
      const d = new Date(now); d.setDate(d.getDate() - i);
      days28.push(d.toISOString().split('T')[0]);
    }
    const activeDays = days28.filter(ds => (S.history[ds]?.total || 0) > 0).length;
    return Math.round((activeDays / 28) * 100);
  },
};

/* ─────────────────────────────────────
   NOTIFICATIONS
───────────────────────────────────── */
const Notifs = {
  async requestPermission() {
    if (!('Notification' in window)) return false;
    const perm = await Notification.requestPermission();
    return perm === 'granted';
  },

  isSupported() {
    return 'Notification' in window && 'serviceWorker' in navigator;
  },

  schedule(title, body, delayMs) {
    if (Notification.permission !== 'granted') return;
    setTimeout(() => {
      new Notification(title, {
        body,
        icon: './icon.svg',
        badge: './icon.svg',
        vibrate: [200, 100, 200],
      });
    }, delayMs);
  },

  // Daily workout reminder
  setDailyReminder(hour, minute) {
    S.notifTime = { hour, minute };
    save();
    this.scheduleTodayReminder(hour, minute);
  },

  scheduleTodayReminder(hour, minute) {
    const now = new Date();
    const target = new Date();
    target.setHours(hour, minute, 0, 0);
    if (target <= now) target.setDate(target.getDate() + 1);
    const delay = target - now;
    const gymDay = S.gym.enabled && S.gym.days.includes(WEEK_DAYS[target.getDay()]);
    const msg = gymDay ? 'يوم جيم — جهّز نفسك! 🏋️' : 'وقت التأهيل والكور ⚡';
    this.schedule('GymPro 💪', msg, delay);
  },
};

/* ─────────────────────────────────────
   ANIMATION HELPERS
───────────────────────────────────── */
const Anim = {
  // Confetti burst for PR
  prConfetti(x, y) {
    const colors = ['#c8ff00','#ff6b35','#00d4ff','#b084ff','#ff4d8d'];
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:999;overflow:hidden';
    document.body.appendChild(container);
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = 6 + Math.random() * 8;
      const angle = Math.random() * 360;
      const dist  = 80 + Math.random() * 140;
      const tx = Math.cos(angle * Math.PI / 180) * dist;
      const ty = Math.sin(angle * Math.PI / 180) * dist - 60;
      p.style.cssText = `
        position:absolute;width:${size}px;height:${size}px;
        background:${color};border-radius:${Math.random()>.5?'50%':'2px'};
        left:${x}px;top:${y}px;
        animation:confettiFly .8s ease-out forwards;
        --tx:${tx}px;--ty:${ty}px;
        animation-delay:${Math.random() * 0.15}s;
      `;
      container.appendChild(p);
    }
    setTimeout(() => container.remove(), 1200);
  },

  // Pulse animation on element
  pulse(el) {
    if (!el) return;
    el.style.animation = 'none';
    el.offsetHeight; // reflow
    el.style.animation = 'pulse .4s ease';
  },

  // Slide in from bottom
  slideIn(el, delay = 0) {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    setTimeout(() => {
      el.style.transition = 'opacity .3s ease, transform .3s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, delay);
  },
};

/* ─────────────────────────────────────
   TIMER UI — injected into workout cards
───────────────────────────────────── */
let _timerExId     = null;
let _timerDuration = 90;

function openTimerModal(exId, exName) {
  _timerExId = exId;
  const modal = document.getElementById('timer-overlay');
  if (!modal) return;
  document.getElementById('timer-ex-name').textContent = exName || EX[exId]?.name || '';
  document.getElementById('timer-display').textContent = formatTimer(_timerDuration);
  document.getElementById('timer-circle-fill').style.strokeDashoffset = '0';
  document.getElementById('timer-status').textContent = 'اختار مدة الراحة';
  document.getElementById('timer-start-btn').textContent = 'ابدأ';
  document.getElementById('timer-start-btn').onclick = startTimer;
  openOverlay('timer-overlay');
}

function startTimer() {
  const btn = document.getElementById('timer-start-btn');
  if (RestTimer.isRunning()) {
    RestTimer.stop();
    btn.textContent = 'ابدأ';
    document.getElementById('timer-status').textContent = 'متوقف';
    return;
  }
  btn.textContent = 'إيقاف';
  document.getElementById('timer-status').textContent = 'خد راحتك...';
  const circle = document.getElementById('timer-circle-fill');
  const CIRCUMFERENCE = 2 * Math.PI * 54;
  circle.style.strokeDasharray = CIRCUMFERENCE;

  RestTimer.start(
    _timerDuration,
    (remaining, total) => {
      document.getElementById('timer-display').textContent = formatTimer(remaining);
      const progress = (total - remaining) / total;
      circle.style.strokeDashoffset = CIRCUMFERENCE * (1 - progress);
      // Color change in last 10 seconds
      circle.style.stroke = remaining <= 10 ? 'var(--acc2)' : 'var(--acc)';
    },
    () => {
      document.getElementById('timer-status').textContent = '✅ انتهت الراحة!';
      document.getElementById('timer-start-btn').textContent = 'ابدأ';
      document.getElementById('timer-display').textContent = '00:00';
      circle.style.strokeDashoffset = CIRCUMFERENCE;
    }
  );
}

function setTimerDuration(secs) {
  _timerDuration = secs;
  if (!RestTimer.isRunning()) {
    document.getElementById('timer-display').textContent = formatTimer(secs);
  }
  document.querySelectorAll('.timer-preset').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.secs) === secs);
  });
}

function formatTimer(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}

/* ─────────────────────────────────────
   PR CELEBRATION UI
───────────────────────────────────── */
function showPRCelebration(exName, wt, reps, est1RM) {
  const el = document.getElementById('pr-toast');
  if (!el) return;
  el.innerHTML = `
    <div style="font-size:24px;margin-bottom:4px">🏆</div>
    <div style="font-size:14px;font-weight:700">رقم قياسي جديد!</div>
    <div style="font-size:12px;margin-top:3px;opacity:.9">${exName}</div>
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:22px;font-weight:900;color:var(--acc);margin-top:6px">${wt}كج × ${reps} = ${est1RM}كج 1RM</div>`;
  el.classList.add('show');
  // Confetti from center
  Anim.prConfetti(window.innerWidth / 2, window.innerHeight / 3);
  setTimeout(() => el.classList.remove('show'), 4000);
}

/* ─────────────────────────────────────
   PROGRESS CHARTS (Canvas-based)
───────────────────────────────────── */
function renderProgressionChart(canvasId, exId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const data = PRTracker.getProgression(exId);
  const ctx  = canvas.getContext('2d');
  const W = canvas.offsetWidth || 340, H = 120;
  canvas.width = W; canvas.height = H;
  ctx.clearRect(0, 0, W, H);

  if (data.length < 2) {
    ctx.fillStyle = '#484848';
    ctx.font = '12px Cairo,sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('سجّل أداء أكتر لرسم التقدم', W/2, H/2);
    return;
  }

  const vals = data.map(d => d.est1RM);
  const mn   = Math.min(...vals) * 0.9;
  const mx   = Math.max(...vals) * 1.05;
  const xS   = i => (i / (data.length - 1)) * (W - 24) + 12;
  const yS   = v => H - 14 - ((v - mn) / (mx - mn)) * (H - 28);

  // Gradient fill
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, 'rgba(200,255,0,.2)');
  grad.addColorStop(1, 'rgba(200,255,0,0)');

  ctx.beginPath();
  ctx.moveTo(xS(0), yS(data[0].est1RM));
  data.forEach((d, i) => { if (i > 0) ctx.lineTo(xS(i), yS(d.est1RM)); });
  ctx.lineTo(xS(data.length - 1), H);
  ctx.lineTo(12, H);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.strokeStyle = '#c8ff00';
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';
  data.forEach((d, i) => i === 0 ? ctx.moveTo(xS(i), yS(d.est1RM)) : ctx.lineTo(xS(i), yS(d.est1RM)));
  ctx.stroke();

  // Dots + PR markers
  let bestSoFar = 0;
  data.forEach((d, i) => {
    const isPR = d.est1RM > bestSoFar && i > 0;
    if (d.est1RM > bestSoFar) bestSoFar = d.est1RM;
    ctx.beginPath();
    ctx.arc(xS(i), yS(d.est1RM), isPR ? 5 : 3, 0, Math.PI * 2);
    ctx.fillStyle = isPR ? '#ff6b35' : '#c8ff00';
    ctx.fill();
    if (isPR) {
      ctx.fillStyle = '#ff6b35';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('PR', xS(i), yS(d.est1RM) - 9);
    }
  });

  // Last value
  const last = data[data.length - 1];
  ctx.fillStyle = '#c8ff00';
  ctx.font = 'bold 11px Cairo,sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText(last.est1RM + 'كج 1RM', xS(data.length-1) + 2, yS(last.est1RM) - 8);
}
