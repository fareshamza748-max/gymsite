/* ═══════════════════════════════════════════
   GymPro v3 — State Manager
   ═══════════════════════════════════════════ */
const STATE_KEY = 'gympro_v3';

function defaultState() {
  return {
    onboarded: false,
    theme: 'dark',
    profile: {
      name:'', age:null, weight:null, height:null, goal:'fitness',
    },
    gym: {
      enabled: false,
      splitId: null,       // key in SPLITS
      days: [],            // ['الاثنين','الأربعاء','الجمعة']
      customDays: [],      // [{label, exIds, dayName}] for custom split
    },
    rehab: {
      programId: null,     // key in REHAB_PROGRAMS
      days: [],
      currentPhase: 1,
      startDate: null,
    },
    core: {
      programId: null,
      days: [],
    },
    cardio: {
      type: null,          // id from CARDIO_OPTIONS
      days: [],
      durationMin: 30,
    },
    // Daily tracking
    done: {},              // 'YYYY-MM-DD_exId' → true
    history: {},           // 'YYYY-MM-DD' → { gym:n, rehab:n, core:n, cardio:n }
    weightLog: [],         // [{date, v}]
    perfLog: {},           // exId → [{date, wt, reps, note}]
    streak: 0,
    lastDate: null,
    customExercises: [],   // user-added exercises
  };
}

let S = (() => {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (!raw) return defaultState();
    const saved = JSON.parse(raw);
    const def = defaultState();
    // Deep merge top-level sections
    return {
      ...def, ...saved,
      profile: { ...def.profile, ...(saved.profile||{}) },
      gym:     { ...def.gym,     ...(saved.gym||{}) },
      rehab:   { ...def.rehab,   ...(saved.rehab||{}) },
      core:    { ...def.core,    ...(saved.core||{}) },
      cardio:  { ...def.cardio,  ...(saved.cardio||{}) },
    };
  } catch(e) { return defaultState(); }
})();

function save() { try { localStorage.setItem(STATE_KEY, JSON.stringify(S)); } catch(e){} }

/* ── Date Helpers ── */
function today() { return new Date().toISOString().split('T')[0]; }
function todayDayName() { return WEEK_DAYS[new Date().getDay()]; }

function last7Days() {
  const arr=[], n=new Date();
  for(let i=6;i>=0;i--){ const d=new Date(n); d.setDate(d.getDate()-i); arr.push(d.toISOString().split('T')[0]); }
  return arr;
}

/* ── Done Tracking ── */
function isDone(exId) { return !!S.done[today()+'_'+exId]; }

function toggleDone(exId) {
  const k = today()+'_'+exId;
  S.done[k] = !S.done[k];
  updateHistory(); save();
  return S.done[k];
}

function updateHistory() {
  const td = today();
  const gymExs   = getTodayGymExs();
  const rehabExs = getTodayRehabExs();
  const coreExs  = getTodayCoreExs();
  S.history[td] = {
    gym:   gymExs.filter(id => S.done[td+'_'+id]).length,
    rehab: rehabExs.filter(id => S.done[td+'_'+id]).length,
    core:  coreExs.filter(id => S.done[td+'_'+id]).length,
    total: [...gymExs,...rehabExs,...coreExs].filter(id => S.done[td+'_'+id]).length,
  };
}

function updateStreak() {
  const td = today();
  if (S.lastDate === td) return;
  const y = new Date(); y.setDate(y.getDate()-1);
  const yd = y.toISOString().split('T')[0];
  const yHist = S.history[yd];
  const ydDone = yHist ? yHist.total > 0 : false;
  S.streak = (S.lastDate === yd && ydDone) ? (S.streak||0)+1 : 0;
  S.lastDate = td; save();
}

/* ── Today's Exercises ── */
function getTodayGymExs() {
  if (!S.gym.enabled || !S.gym.splitId) return [];
  const split = SPLITS[S.gym.splitId];
  if (!split) return [];
  const dayName = todayDayName();
  if (!S.gym.days.includes(dayName)) return [];
  // figure out which session (cycle through schedule)
  const gymDayIdx = S.gym.days.indexOf(dayName);
  const sessionIdx = gymDayIdx % split.schedule.length;
  return split.schedule[sessionIdx]?.exIds || [];
}

function getTodayGymSession() {
  if (!S.gym.enabled || !S.gym.splitId) return null;
  const split = SPLITS[S.gym.splitId];
  if (!split) return null;
  const dayName = todayDayName();
  if (!S.gym.days.includes(dayName)) return null;
  const gymDayIdx = S.gym.days.indexOf(dayName);
  const sessionIdx = gymDayIdx % split.schedule.length;
  return { ...split.schedule[sessionIdx], sessionIdx, splitName: split.name };
}

function getTodayRehabExs() {
  if (!S.rehab.programId) return [];
  const prog = REHAB_PROGRAMS[S.rehab.programId];
  if (!prog) return [];
  const dayName = todayDayName();
  if (S.rehab.days.length && !S.rehab.days.includes(dayName)) return [];
  const phase = prog.phases.find(p => p.phase === S.rehab.currentPhase) || prog.phases[0];
  return [...(phase.morning||[]), ...(phase.evening||[])];
}

function getTodayRehabPhase() {
  if (!S.rehab.programId) return null;
  const prog = REHAB_PROGRAMS[S.rehab.programId];
  if (!prog) return null;
  return prog.phases.find(p => p.phase === S.rehab.currentPhase) || prog.phases[0];
}

function getTodayCoreExs() {
  if (!S.core.programId) return [];
  const dayName = todayDayName();
  if (S.core.days.length && !S.core.days.includes(dayName)) return [];
  return CORE_PROGRAMS[S.core.programId]?.exIds || [];
}

function isGymDay() { return S.gym.enabled && S.gym.days.includes(todayDayName()); }
function isRehabDay() { return !!S.rehab.programId && (!S.rehab.days.length || S.rehab.days.includes(todayDayName())); }
function isCoreDay() { return !!S.core.programId && (!S.core.days.length || S.core.days.includes(todayDayName())); }
function isCardioDay() { return !!S.cardio.type && (!S.cardio.days.length || S.cardio.days.includes(todayDayName())); }

function totalTodayDone() {
  const all = [...getTodayGymExs(), ...getTodayRehabExs(), ...getTodayCoreExs()];
  const td = today();
  return all.filter(id => S.done[td+'_'+id]).length;
}

function totalTodayAll() {
  return getTodayGymExs().length + getTodayRehabExs().length + getTodayCoreExs().length;
}

/* ── Performance Log ── */
function logPerf(exId, {wt, reps, note}) {
  if (!S.perfLog[exId]) S.perfLog[exId] = [];
  S.perfLog[exId].push({ date:today(), wt:wt||0, reps:reps||0, note:note||'' });
  save();
}

function getLastPerf(exId) {
  const l = S.perfLog[exId];
  return l && l.length ? l[l.length-1] : null;
}

function getAllPerfLogs() {
  const all = [];
  Object.entries(S.perfLog).forEach(([id, logs]) => {
    const ex = EX[id];
    logs.forEach(l => all.push({ ...l, exId:id, exName:ex?.name||id, exAr:ex?.ar||'' }));
  });
  return all.sort((a,b) => b.date.localeCompare(a.date));
}

/* ── Weight Log ── */
function logWeight(v) { S.weightLog.push({date:today(), v:parseFloat(v)}); save(); }
function getLatestWeight() { return S.weightLog.length ? S.weightLog[S.weightLog.length-1].v : null; }

/* ── Theme ── */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', S.theme||'dark');
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = (S.theme==='dark') ? '☀️' : '🌙';
}
function toggleTheme() {
  S.theme = S.theme==='dark' ? 'light' : 'dark';
  applyTheme(); save();
}

/* ── Rehab Phase Advancement ── */
function advanceRehabPhase() {
  if (!S.rehab.programId) return;
  const prog = REHAB_PROGRAMS[S.rehab.programId];
  if (!prog) return;
  if (S.rehab.currentPhase < prog.phases.length) {
    S.rehab.currentPhase++;
    save();
    return true;
  }
  return false;
}

/* ── Profile helpers ── */
function getBMI() {
  const {weight, height} = S.profile;
  if (!weight || !height) return null;
  return (weight / ((height/100)**2)).toFixed(1);
}

/* ── Format date ── */
function fmtDate(ds) {
  const m=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  const d = new Date(ds);
  return `${d.getDate()} ${m[d.getMonth()]}`;
}

/* ── Reset ── */
function resetAll() {
  localStorage.removeItem(STATE_KEY);
  S = defaultState();
  save();
}
