/* ═══════════════════════════════════════════
   GymPro — Exercise SVG Illustrations
   All inline SVGs, viewBox="0 0 200 200"
   Stroke-based, male figure only
   ═══════════════════════════════════════════ */

const EXERCISE_SVGS = {

/* ────────────────────────────────────────────
   chin_tuck — Chin Tuck
   Shows: head moving backward with arrow
──────────────────────────────────────────── */
chin_tuck: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Body -->
  <line x1="100" y1="85" x2="100" y2="145" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Shoulders -->
  <line x1="100" y1="95" x2="68" y2="118" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="95" x2="132" y2="118" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Forearms -->
  <line x1="68" y1="118" x2="64" y2="140" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <line x1="132" y1="118" x2="136" y2="140" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <!-- Legs -->
  <line x1="100" y1="145" x2="85" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="145" x2="115" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Head (forward - ghost) -->
  <circle cx="113" cy="58" r="16" stroke="#555" stroke-width="2" stroke-dasharray="5 4"/>
  <!-- Neck ghost -->
  <line x1="113" y1="74" x2="107" y2="85" stroke="#555" stroke-width="2" stroke-dasharray="4 3"/>

  <!-- Head (corrected) -->
  <circle cx="97" cy="56" r="16" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Neck -->
  <line x1="97" y1="72" x2="100" y2="85" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Chin tuck arrow (backward) -->
  <path d="M112 60 Q104 56 98 60" stroke="#c8ff00" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <polyline points="98,56 98,62 104,60" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Label -->
  <text x="100" y="194" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Chin Tuck</text>
</svg>`,

/* ────────────────────────────────────────────
   cerv_stretch — Cervical Lateral Stretch
   Shows: head tilting sideways, hand on head
──────────────────────────────────────────── */
cerv_stretch: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Body -->
  <line x1="100" y1="88" x2="100" y2="148" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Shoulders -->
  <line x1="100" y1="98" x2="68" y2="118" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="98" x2="132" y2="118" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Right arm up to head -->
  <line x1="132" y1="118" x2="124" y2="96" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <line x1="124" y1="96" x2="118" y2="78" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <!-- Left arm down -->
  <line x1="68" y1="118" x2="64" y2="142" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <!-- Legs -->
  <line x1="100" y1="148" x2="87" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="148" x2="113" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Head tilted right -->
  <circle cx="110" cy="62" r="16" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Neck angled -->
  <line x1="104" y1="77" x2="100" y2="88" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Stretch arc arrow -->
  <path d="M96 48 Q110 40 120 50" stroke="#c8ff00" stroke-width="2" stroke-dasharray="4 3" fill="none" stroke-linecap="round"/>

  <text x="100" y="194" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Cervical Stretch</text>
</svg>`,

/* ────────────────────────────────────────────
   lev_stretch — Levator Scapulae Stretch
   Shows: head rotated+tilted, hand on head
──────────────────────────────────────────── */
lev_stretch: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Body -->
  <line x1="100" y1="88" x2="100" y2="148" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <line x1="100" y1="98" x2="68" y2="120" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="98" x2="132" y2="120" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Left arm up -->
  <line x1="68" y1="120" x2="76" y2="96" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <line x1="76" y1="96" x2="84" y2="76" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <!-- Right arm rest -->
  <line x1="132" y1="120" x2="136" y2="144" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <!-- Legs -->
  <line x1="100" y1="148" x2="87" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="148" x2="113" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Head tilted-rotated -->
  <circle cx="90" cy="62" r="16" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="96" y1="77" x2="100" y2="88" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Direction arrow -->
  <path d="M100 46 Q88 38 80 48" stroke="#c8ff00" stroke-width="2" stroke-dasharray="4 3" fill="none" stroke-linecap="round"/>

  <!-- Stretch target dot -->
  <circle cx="86" cy="106" r="4" fill="#c8ff00" opacity=".6"/>
  <line x1="90" y1="77" x2="86" y2="102" stroke="#c8ff00" stroke-width="1.5" stroke-dasharray="3 2" stroke-linecap="round"/>

  <text x="100" y="194" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Levator Stretch</text>
</svg>`,

/* ────────────────────────────────────────────
   doorway — Doorway Chest Stretch
   Shows: figure in doorway, arms on sides
──────────────────────────────────────────── */
doorway: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Door frame -->
  <line x1="44" y1="20" x2="44" y2="178" stroke="#555" stroke-width="4" stroke-linecap="round"/>
  <line x1="156" y1="20" x2="156" y2="178" stroke="#555" stroke-width="4" stroke-linecap="round"/>
  <line x1="44" y1="20" x2="156" y2="20" stroke="#555" stroke-width="4" stroke-linecap="round"/>

  <!-- Body -->
  <line x1="100" y1="88" x2="100" y2="148" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Neck -->
  <line x1="100" y1="72" x2="100" y2="88" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="100" cy="58" r="14" stroke="#e0e0e0" stroke-width="3"/>

  <!-- Arms on doorframe (90°) -->
  <line x1="100" y1="102" x2="44" y2="102" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="102" x2="156" y2="102" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Forearms on frame -->
  <line x1="44" y1="102" x2="44" y2="124" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <line x1="156" y1="102" x2="156" y2="124" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>

  <!-- Chest arrow (forward) -->
  <path d="M100 112 L100 128" stroke="#c8ff00" stroke-width="2" stroke-dasharray="4 3" stroke-linecap="round"/>
  <polyline points="94,124 100,130 106,124" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Legs -->
  <line x1="100" y1="148" x2="88" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="148" x2="112" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <text x="100" y="194" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Doorway Stretch</text>
</svg>`,

/* ────────────────────────────────────────────
   wall_angels — Wall Angels
   Shows: figure against wall, arms sliding up
──────────────────────────────────────────── */
wall_angels: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Wall -->
  <line x1="20" y1="15" x2="20" y2="185" stroke="#555" stroke-width="5" stroke-linecap="round"/>

  <!-- Body against wall -->
  <line x1="36" y1="92" x2="36" y2="152" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Neck -->
  <line x1="36" y1="76" x2="36" y2="92" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="36" cy="62" r="14" stroke="#e0e0e0" stroke-width="3"/>

  <!-- Arms DOWN position (ghost) -->
  <line x1="36" y1="106" x2="20" y2="110" stroke="#444" stroke-width="3" stroke-linecap="round"/>
  <line x1="20" y1="110" x2="20" y2="134" stroke="#444" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="36" y1="106" x2="52" y2="110" stroke="#444" stroke-width="3" stroke-linecap="round"/>
  <line x1="52" y1="110" x2="52" y2="134" stroke="#444" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Arms UP position (active) -->
  <line x1="36" y1="106" x2="20" y2="92" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="20" y1="92" x2="20" y2="62" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <line x1="36" y1="106" x2="52" y2="92" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="52" y1="92" x2="52" y2="62" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>

  <!-- Up arrows -->
  <polyline points="16,70 20,62 24,70" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="48,70 52,62 56,70" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Legs -->
  <line x1="36" y1="152" x2="26" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="36" y1="152" x2="46" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <text x="100" y="194" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Wall Angels</text>
</svg>`,

/* ────────────────────────────────────────────
   serratus — Serratus Activation (Push-up Plus)
   Shows: push-up position, protracted scapula
──────────────────────────────────────────── */
serratus: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Wall -->
  <line x1="30" y1="60" x2="30" y2="140" stroke="#555" stroke-width="5" stroke-linecap="round"/>

  <!-- Body horizontal against wall -->
  <line x1="30" y1="100" x2="130" y2="100" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="150" cy="100" r="16" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Neck -->
  <line x1="134" y1="100" x2="130" y2="100" stroke="#e0e0e0" stroke-width="3.5"/>

  <!-- Arms (elbows bent) -->
  <line x1="70" y1="100" x2="50" y2="80" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="50" y1="80" x2="30" y2="88" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="90" y1="100" x2="70" y2="80" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="70" y1="80" x2="30" y2="86" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Scapula protraction arrow -->
  <path d="M85 88 Q75 76 65 82" stroke="#c8ff00" stroke-width="2" fill="none" stroke-linecap="round"/>
  <polyline points="65,76 65,84 72,82" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Push direction arrow -->
  <line x1="30" y1="74" x2="44" y2="74" stroke="#c8ff00" stroke-width="1.5" stroke-dasharray="3 2"/>
  <polyline points="40,70 46,74 40,78" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Legs -->
  <line x1="30" y1="100" x2="20" y2="138" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="40" y1="100" x2="30" y2="138" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <text x="100" y="194" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Serratus Activation</text>
</svg>`,

/* ────────────────────────────────────────────
   dead_bug — Dead Bug
   Shows: supine, opposite arm-leg extended
──────────────────────────────────────────── */
dead_bug: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Floor -->
  <line x1="10" y1="148" x2="190" y2="148" stroke="#333" stroke-width="2"/>

  <!-- Torso on floor -->
  <line x1="80" y1="120" x2="140" y2="120" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="158" cy="120" r="14" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Neck -->
  <line x1="144" y1="120" x2="140" y2="120" stroke="#e0e0e0" stroke-width="3"/>

  <!-- Left arm extended up -->
  <line x1="140" y1="116" x2="156" y2="86" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="156" y1="86" x2="170" y2="64" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>

  <!-- Right arm up (90° bent - table top) -->
  <line x1="118" y1="116" x2="118" y2="88" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <line x1="118" y1="88" x2="118" y2="72" stroke="#e0e0e0" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>

  <!-- Left leg extended (active) -->
  <line x1="80" y1="124" x2="52" y2="136" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="52" y1="136" x2="28" y2="144" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>

  <!-- Right leg 90° bent (table top) -->
  <line x1="96" y1="124" x2="96" y2="148" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <line x1="96" y1="148" x2="112" y2="148" stroke="#e0e0e0" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>

  <!-- Opposite arrows -->
  <polyline points="164,70 170,62 174,70" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="24,140 20,148 28,148" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Lower back flat indicator -->
  <line x1="108" y1="120" x2="108" y2="148" stroke="#c8ff00" stroke-width="1.5" stroke-dasharray="3 2" opacity=".5"/>

  <text x="100" y="175" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Dead Bug</text>
</svg>`,

/* ────────────────────────────────────────────
   glute_bridge — Glute Bridge
   Shows: supine, hips raised, arrows up
──────────────────────────────────────────── */
glute_bridge: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Floor -->
  <line x1="10" y1="170" x2="190" y2="170" stroke="#333" stroke-width="2"/>

  <!-- Head on floor -->
  <circle cx="30" cy="148" r="13" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Upper back -->
  <line x1="43" y1="148" x2="80" y2="148" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Hips raised -->
  <path d="M80 148 Q100 100 120 110 Q140 118 150 140" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round" fill="none"/>

  <!-- Legs -->
  <line x1="150" y1="140" x2="158" y2="170" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <line x1="120" y1="110" x2="128" y2="170" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Arms flat -->
  <line x1="60" y1="152" x2="40" y2="162" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="152" x2="90" y2="165" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>

  <!-- Hip up arrows (acc color) -->
  <line x1="100" y1="108" x2="100" y2="88" stroke="#c8ff00" stroke-width="2.5" stroke-linecap="round"/>
  <polyline points="94,94 100,86 106,94" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Glute squeeze dots -->
  <circle cx="102" cy="112" r="3" fill="#c8ff00" opacity=".8"/>
  <circle cx="114" cy="116" r="3" fill="#c8ff00" opacity=".8"/>

  <text x="100" y="194" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Glute Bridge</text>
</svg>`,

/* ────────────────────────────────────────────
   hip_flexor — Kneeling Hip Flexor Stretch
   Shows: kneeling lunge, forward lean, highlight on hip
──────────────────────────────────────────── */
hip_flexor: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Floor -->
  <line x1="10" y1="178" x2="190" y2="178" stroke="#333" stroke-width="2"/>

  <!-- Back knee on floor -->
  <circle cx="56" cy="176" r="5" stroke="#e0e0e0" stroke-width="2"/>
  <!-- Back shin on floor -->
  <line x1="56" y1="176" x2="36" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Back thigh -->
  <line x1="56" y1="176" x2="94" y2="140" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Hips -->
  <ellipse cx="98" cy="138" rx="10" ry="8" stroke="#e0e0e0" stroke-width="2.5"/>

  <!-- Front thigh -->
  <line x1="98" y1="138" x2="128" y2="160" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Front shin -->
  <line x1="128" y1="160" x2="134" y2="178" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Front foot -->
  <line x1="134" y1="178" x2="154" y2="178" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>

  <!-- Torso upright -->
  <line x1="98" y1="138" x2="96" y2="96" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="94" cy="82" r="14" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Arms -->
  <line x1="96" y1="108" x2="76" y2="128" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <line x1="96" y1="108" x2="116" y2="120" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>

  <!-- Hip flexor highlight + arrow -->
  <path d="M70 152 Q80 136 94 140" stroke="#c8ff00" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-dasharray="5 3"/>
  <circle cx="72" cy="154" r="5" fill="#c8ff00" opacity=".5"/>

  <!-- Forward drive arrow -->
  <line x1="98" y1="138" x2="112" y2="128" stroke="#c8ff00" stroke-width="2" stroke-linecap="round"/>
  <polyline points="108,124 114,128 110,134" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <text x="100" y="196" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Hip Flexor Stretch</text>
</svg>`,

/* ────────────────────────────────────────────
   figure4 — Figure-4 Stretch
   Shows: supine, ankle on knee, leg opening
──────────────────────────────────────────── */
figure4: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Floor -->
  <line x1="10" y1="175" x2="190" y2="175" stroke="#333" stroke-width="2"/>

  <!-- Head -->
  <circle cx="28" cy="116" r="13" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Upper back -->
  <line x1="41" y1="116" x2="90" y2="116" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Bent knee (right, planted) -->
  <line x1="90" y1="116" x2="108" y2="148" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <line x1="108" y1="148" x2="108" y2="175" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Figure-4 leg (left, crossed) -->
  <line x1="80" y1="116" x2="86" y2="148" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="86" y1="148" x2="108" y2="148" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Ankle on knee indicator -->
  <circle cx="108" cy="148" r="5" stroke="#c8ff00" stroke-width="2"/>

  <!-- Opening arrow -->
  <path d="M86 138 Q92 128 98 132" stroke="#c8ff00" stroke-width="2" fill="none" stroke-linecap="round"/>
  <polyline points="94,128 100,132 96,138" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Arms -->
  <line x1="60" y1="120" x2="48" y2="136" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="120" x2="92" y2="132" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>

  <!-- Hip circle -->
  <circle cx="92" cy="148" r="4" fill="#c8ff00" opacity=".5"/>

  <text x="100" y="195" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Figure-4 Stretch</text>
</svg>`,

/* ────────────────────────────────────────────
   face_pulls — Face Pulls (Cable)
   Shows: standing, arms pulling to face level
──────────────────────────────────────────── */
face_pulls: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Cable anchor -->
  <rect x="170" y="85" width="8" height="8" rx="2" fill="#555"/>
  <line x1="174" y1="89" x2="152" y2="96" stroke="#888" stroke-width="2"/>
  <line x1="174" y1="89" x2="152" y2="106" stroke="#888" stroke-width="2"/>

  <!-- Body -->
  <line x1="90" y1="86" x2="90" y2="148" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="90" cy="72" r="14" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Neck -->
  <line x1="90" y1="72" x2="90" y2="86" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Arms pulling back (external rotation highlighted) -->
  <line x1="90" y1="100" x2="118" y2="94" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="118" y1="94" x2="152" y2="96" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <line x1="90" y1="100" x2="118" y2="110" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="118" y1="110" x2="152" y2="106" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>

  <!-- External rotation arcs -->
  <path d="M118 94 Q124 100 118 108" stroke="#c8ff00" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="3 2"/>

  <!-- Pull-back arrow -->
  <line x1="110" y1="102" x2="92" y2="102" stroke="#c8ff00" stroke-width="2" stroke-linecap="round"/>
  <polyline points="96,98 90,102 96,106" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Legs -->
  <line x1="90" y1="148" x2="78" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="90" y1="148" x2="102" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <text x="90" y="196" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Face Pulls</text>
</svg>`,

/* ────────────────────────────────────────────
   band_rotation — Band External Rotation
   Shows: elbow at side, forearm rotating out
──────────────────────────────────────────── */
band_rotation: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Band anchor (left wall) -->
  <rect x="18" y="95" width="8" height="8" rx="2" fill="#555"/>
  <line x1="26" y1="99" x2="110" y2="106" stroke="#888" stroke-width="2" stroke-dasharray="5 3"/>

  <!-- Body -->
  <line x1="110" y1="86" x2="110" y2="148" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="110" cy="72" r="14" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Neck -->
  <line x1="110" y1="72" x2="110" y2="86" stroke="#e0e0e0" stroke-width="3.5"/>

  <!-- Left arm relaxed -->
  <line x1="110" y1="100" x2="86" y2="114" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="86" y1="114" x2="78" y2="136" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>

  <!-- Right arm: elbow fixed, forearm rotating -->
  <!-- Upper arm down -->
  <line x1="110" y1="100" x2="134" y2="106" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Forearm ghost (start) -->
  <line x1="134" y1="106" x2="110" y2="106" stroke="#444" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
  <!-- Forearm active (rotated out) -->
  <line x1="134" y1="106" x2="158" y2="90" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Rotation arc -->
  <path d="M112 106 A22 22 0 0 1 158 90" stroke="#c8ff00" stroke-width="1.5" fill="none" stroke-dasharray="4 3" stroke-linecap="round"/>

  <!-- Arrow at end -->
  <polyline points="152,84 158,88 154,94" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Elbow anchor dot -->
  <circle cx="134" cy="106" r="4" fill="#c8ff00" opacity=".7"/>

  <!-- Legs -->
  <line x1="110" y1="148" x2="98" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="110" y1="148" x2="122" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <text x="100" y="196" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Band External Rotation</text>
</svg>`,

/* ────────────────────────────────────────────
   prone_ytw — Prone Y-T-W
   Shows: prone figure, arm positions Y T W
──────────────────────────────────────────── */
prone_ytw: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Bench/surface -->
  <rect x="20" y="120" width="160" height="8" rx="3" fill="#2a2a2a" stroke="#444" stroke-width="1"/>

  <!-- Torso -->
  <line x1="60" y1="116" x2="140" y2="116" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="155" cy="108" r="12" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Neck -->
  <line x1="143" y1="110" x2="140" y2="116" stroke="#e0e0e0" stroke-width="3"/>

  <!-- Y position arms (upper) -->
  <line x1="130" y1="112" x2="150" y2="88" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <line x1="114" y1="112" x2="108" y2="84" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <!-- Y label -->
  <text x="162" y="90" fill="#c8ff00" font-size="12" font-weight="bold" font-family="sans-serif">Y</text>

  <!-- T position arms (middle, dashed) -->
  <line x1="104" y1="116" x2="80" y2="98" stroke="#00d4ff" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
  <line x1="72" y1="116" x2="52" y2="100" stroke="#00d4ff" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
  <!-- T label -->
  <text x="38" y="98" fill="#00d4ff" font-size="12" font-weight="bold" font-family="sans-serif">T</text>

  <!-- W position (elbows out, lower) -->
  <line x1="90" y1="116" x2="72" y2="108" stroke="#ff6b35" stroke-width="2.5" stroke-dasharray="3 4" stroke-linecap="round"/>
  <line x1="72" y1="108" x2="62" y2="116" stroke="#ff6b35" stroke-width="2.5" stroke-dasharray="3 4" stroke-linecap="round"/>
  <line x1="80" y1="116" x2="90" y2="108" stroke="#ff6b35" stroke-width="2.5" stroke-dasharray="3 4" stroke-linecap="round"/>
  <!-- W label -->
  <text x="46" y="118" fill="#ff6b35" font-size="12" font-weight="bold" font-family="sans-serif">W</text>

  <!-- Up arrows for Y -->
  <polyline points="144,92 150,84 156,92" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <text x="100" y="148" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Prone Y-T-W</text>
</svg>`,

/* ────────────────────────────────────────────
   pallof — Pallof Press
   Shows: standing, cable at chest, pressing out
──────────────────────────────────────────── */
pallof: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Cable anchor -->
  <rect x="170" y="95" width="8" height="8" rx="2" fill="#555"/>
  <line x1="170" y1="99" x2="132" y2="102" stroke="#888" stroke-width="2"/>

  <!-- Body -->
  <line x1="96" y1="86" x2="96" y2="148" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="96" cy="72" r="14" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Neck -->
  <line x1="96" y1="72" x2="96" y2="86" stroke="#e0e0e0" stroke-width="3.5"/>

  <!-- Arms: pressing forward (horizontal) -->
  <!-- At-chest ghost -->
  <line x1="96" y1="102" x2="116" y2="102" stroke="#444" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
  <!-- Extended active -->
  <line x1="96" y1="102" x2="132" y2="102" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Press-out arrow -->
  <line x1="118" y1="102" x2="136" y2="102" stroke="#c8ff00" stroke-width="2" stroke-linecap="round"/>
  <polyline points="130,97 136,102 130,107" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Anti-rotation indicator -->
  <path d="M92 92 Q88 102 92 112" stroke="#c8ff00" stroke-width="1.5" fill="none" stroke-dasharray="3 2" stroke-linecap="round"/>
  <line x1="86" y1="92" x2="102" y2="92" stroke="#333" stroke-width="1" stroke-dasharray="2 2"/>
  <line x1="86" y1="112" x2="102" y2="112" stroke="#333" stroke-width="1" stroke-dasharray="2 2"/>

  <!-- Legs slightly staggered -->
  <line x1="96" y1="148" x2="82" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="96" y1="148" x2="110" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <text x="96" y="196" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Pallof Press</text>
</svg>`,

/* ────────────────────────────────────────────
   single_bridge — Single Leg Glute Bridge
   Shows: supine, one leg extended, hips raised
──────────────────────────────────────────── */
single_bridge: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Floor -->
  <line x1="10" y1="170" x2="190" y2="170" stroke="#333" stroke-width="2"/>

  <!-- Head -->
  <circle cx="28" cy="148" r="13" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Upper back -->
  <line x1="41" y1="148" x2="80" y2="148" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Hips raised -->
  <path d="M80 148 Q100 100 122 112" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round" fill="none"/>

  <!-- Bent leg (planted) -->
  <line x1="122" y1="112" x2="140" y2="148" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <line x1="140" y1="148" x2="152" y2="170" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Straight leg extended (active) -->
  <line x1="100" y1="104" x2="66" y2="130" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="66" y1="130" x2="40" y2="148" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>

  <!-- Up arrow -->
  <line x1="100" y1="106" x2="100" y2="86" stroke="#c8ff00" stroke-width="2.5" stroke-linecap="round"/>
  <polyline points="94,92 100,84 106,92" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Glute dot -->
  <circle cx="102" cy="112" r="3.5" fill="#c8ff00" opacity=".8"/>

  <!-- Arms flat -->
  <line x1="60" y1="152" x2="46" y2="164" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <line x1="78" y1="152" x2="88" y2="164" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>

  <text x="100" y="192" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Single Leg Bridge</text>
</svg>`,

/* ────────────────────────────────────────────
   bird_dog — Bird Dog
   Shows: quadruped, opposite arm+leg extended
──────────────────────────────────────────── */
bird_dog: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Floor -->
  <line x1="10" y1="160" x2="190" y2="160" stroke="#333" stroke-width="2"/>

  <!-- Torso horizontal -->
  <line x1="66" y1="110" x2="134" y2="110" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Head -->
  <circle cx="150" cy="106" r="13" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="137" y1="108" x2="134" y2="110" stroke="#e0e0e0" stroke-width="3"/>

  <!-- Support arm (left, down) -->
  <line x1="118" y1="110" x2="118" y2="135" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="118" y1="135" x2="114" y2="160" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>

  <!-- Support leg (right, down) -->
  <line x1="80" y1="110" x2="82" y2="135" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="82" y1="135" x2="80" y2="160" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>

  <!-- Extended arm (right → forward, active) -->
  <line x1="134" y1="110" x2="156" y2="102" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="156" y1="102" x2="178" y2="96" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <polyline points="170,92 178,96 172,102" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Extended leg (left → back, active) -->
  <line x1="66" y1="110" x2="44" y2="118" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="44" y1="118" x2="22" y2="124" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <polyline points="28,118 22,124 30,128" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Spine neutral indicator -->
  <line x1="90" y1="106" x2="112" y2="106" stroke="#444" stroke-width="1.5" stroke-dasharray="3 2"/>

  <text x="100" y="178" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Bird Dog</text>
</svg>`,

/* ────────────────────────────────────────────
   arnold_press — Arnold Press
   Shows: seated, dumbbell rotation at shoulder
──────────────────────────────────────────── */
arnold_press: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Bench -->
  <rect x="68" y="150" width="64" height="10" rx="4" fill="#222" stroke="#444" stroke-width="1.5"/>
  <line x1="78" y1="160" x2="74" y2="178" stroke="#444" stroke-width="2" stroke-linecap="round"/>
  <line x1="122" y1="160" x2="126" y2="178" stroke="#444" stroke-width="2" stroke-linecap="round"/>

  <!-- Torso seated -->
  <line x1="100" y1="90" x2="100" y2="150" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="100" cy="76" r="14" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Neck -->
  <line x1="100" y1="76" x2="100" y2="90" stroke="#e0e0e0" stroke-width="3.5"/>

  <!-- Left arm: Start position (palms in, elbows out) -->
  <line x1="100" y1="104" x2="74" y2="110" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="74" y1="110" x2="68" y2="92" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <!-- Left dumbbell -->
  <rect x="58" y="88" width="16" height="6" rx="2" stroke="#666" stroke-width="1.5"/>

  <!-- Right arm: End position (pressed up, rotated) -->
  <line x1="100" y1="104" x2="126" y2="92" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="126" y1="92" x2="138" y2="62" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <!-- Right dumbbell (top) -->
  <rect x="132" y="56" width="16" height="6" rx="2" stroke="#c8ff00" stroke-width="1.5"/>

  <!-- Rotation arrow -->
  <path d="M68 92 Q80 82 86 70" stroke="#c8ff00" stroke-width="1.5" fill="none" stroke-dasharray="4 3" stroke-linecap="round"/>
  <polyline points="82,66 88,70 84,76" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Up arrow -->
  <line x1="140" y1="70" x2="144" y2="56" stroke="#c8ff00" stroke-width="2" stroke-linecap="round"/>
  <polyline points="140,60 144,54 148,60" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <text x="100" y="196" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Arnold Press</text>
</svg>`,

/* ────────────────────────────────────────────
   lateral_raise — Lateral Raises
   Shows: standing, arms lifting sideways
──────────────────────────────────────────── */
lateral_raise: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Body -->
  <line x1="100" y1="86" x2="100" y2="148" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="100" cy="72" r="14" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Neck -->
  <line x1="100" y1="72" x2="100" y2="86" stroke="#e0e0e0" stroke-width="3.5"/>
  <!-- Legs -->
  <line x1="100" y1="148" x2="86" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="148" x2="114" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Arms down (ghost) -->
  <line x1="100" y1="100" x2="78" y2="118" stroke="#333" stroke-width="3" stroke-linecap="round"/>
  <line x1="78" y1="118" x2="72" y2="136" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="100" y1="100" x2="122" y2="118" stroke="#333" stroke-width="3" stroke-linecap="round"/>
  <line x1="122" y1="118" x2="128" y2="136" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Arms raised (active) -->
  <line x1="100" y1="100" x2="60" y2="100" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="60" y1="100" x2="40" y2="108" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <line x1="100" y1="100" x2="140" y2="100" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="140" y1="100" x2="160" y2="108" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>

  <!-- Dumbbells -->
  <rect x="28" y="104" width="16" height="6" rx="2" stroke="#c8ff00" stroke-width="1.5"/>
  <rect x="154" y="104" width="16" height="6" rx="2" stroke="#c8ff00" stroke-width="1.5"/>

  <!-- Up arcs -->
  <path d="M68 118 Q60 108 60 100" stroke="#c8ff00" stroke-width="1.5" fill="none" stroke-dasharray="3 2" stroke-linecap="round"/>
  <path d="M132 118 Q140 108 140 100" stroke="#c8ff00" stroke-width="1.5" fill="none" stroke-dasharray="3 2" stroke-linecap="round"/>

  <text x="100" y="196" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Lateral Raises</text>
</svg>`,

/* ────────────────────────────────────────────
   incline_press — Incline Dumbbell Press
   Shows: incline bench, pressing up
──────────────────────────────────────────── */
incline_press: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Incline bench -->
  <line x1="20" y1="170" x2="90" y2="110" stroke="#444" stroke-width="6" stroke-linecap="round"/>
  <line x1="90" y1="110" x2="160" y2="110" stroke="#444" stroke-width="6" stroke-linecap="round"/>
  <line x1="20" y1="170" x2="20" y2="185" stroke="#444" stroke-width="4" stroke-linecap="round"/>
  <line x1="160" y1="110" x2="160" y2="185" stroke="#444" stroke-width="4" stroke-linecap="round"/>

  <!-- Body on bench -->
  <line x1="34" y1="158" x2="104" y2="108" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Head at incline top -->
  <circle cx="118" cy="96" r="13" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="105" y1="102" x2="104" y2="108" stroke="#e0e0e0" stroke-width="3.5"/>

  <!-- Arms pressing up -->
  <line x1="92" y1="112" x2="70" y2="96" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="70" y1="96" x2="58" y2="74" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>

  <line x1="106" y1="108" x2="130" y2="96" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="130" y1="96" x2="148" y2="74" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>

  <!-- Dumbbells -->
  <rect x="46" y="68" width="18" height="8" rx="2" stroke="#c8ff00" stroke-width="1.5" transform="rotate(-20 55 72)"/>
  <rect x="142" y="68" width="18" height="8" rx="2" stroke="#c8ff00" stroke-width="1.5" transform="rotate(20 151 72)"/>

  <!-- Press arrows -->
  <polyline points="60,78 56,70 64,68" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="142,76 146,68 152,74" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <text x="100" y="200" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Incline DB Press</text>
</svg>`,

/* ────────────────────────────────────────────
   goblet_squat — Goblet Squat
   Shows: squat position, dumbbell at chest
──────────────────────────────────────────── */
goblet_squat: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Standing ghost -->
  <line x1="100" y1="36" x2="100" y2="80" stroke="#2a2a2a" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 3"/>
  <circle cx="100" cy="26" r="10" stroke="#2a2a2a" stroke-width="2" stroke-dasharray="3 2"/>

  <!-- Squat position -->
  <!-- Torso leaning slightly -->
  <line x1="100" y1="96" x2="96" y2="130" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="104" cy="84" r="13" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Neck -->
  <line x1="100" y1="97" x2="104" y2="84" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Arms holding dumbbell at chest -->
  <line x1="100" y1="108" x2="80" y2="116" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <line x1="100" y1="108" x2="120" y2="116" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <!-- Dumbbell -->
  <rect x="82" y="112" width="36" height="8" rx="3" stroke="#c8ff00" stroke-width="2"/>
  <line x1="88" y1="110" x2="88" y2="122" stroke="#c8ff00" stroke-width="1.5"/>
  <line x1="112" y1="110" x2="112" y2="122" stroke="#c8ff00" stroke-width="1.5"/>

  <!-- Thighs -->
  <line x1="96" y1="130" x2="70" y2="152" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <line x1="96" y1="130" x2="122" y2="150" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Shins vertical -->
  <line x1="70" y1="152" x2="62" y2="185" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <line x1="122" y1="150" x2="130" y2="185" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Feet -->
  <line x1="62" y1="185" x2="42" y2="185" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <line x1="130" y1="185" x2="150" y2="185" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>

  <!-- Knee tracking arrows (outward) -->
  <line x1="66" y1="148" x2="52" y2="142" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round"/>
  <polyline points="56,138 50,142 56,146" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="126" y1="146" x2="140" y2="142" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round"/>
  <polyline points="136,138 142,142 136,146" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <text x="100" y="200" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Goblet Squat</text>
</svg>`,

/* ────────────────────────────────────────────
   hip_thrust — Hip Thrust
   Shows: bench behind, feet planted, hips up
──────────────────────────────────────────── */
hip_thrust: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Floor -->
  <line x1="10" y1="175" x2="190" y2="175" stroke="#333" stroke-width="2"/>
  <!-- Bench -->
  <rect x="20" y="118" width="66" height="14" rx="4" fill="#222" stroke="#444" stroke-width="1.5"/>
  <line x1="30" y1="132" x2="26" y2="175" stroke="#444" stroke-width="3" stroke-linecap="round"/>
  <line x1="74" y1="132" x2="78" y2="175" stroke="#444" stroke-width="3" stroke-linecap="round"/>

  <!-- Upper back on bench -->
  <line x1="30" y1="124" x2="64" y2="124" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Head up -->
  <circle cx="50" cy="110" r="13" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="50" y1="123" x2="50" y2="124" stroke="#e0e0e0" stroke-width="3.5"/>

  <!-- Hips raised - the bridge -->
  <path d="M64 124 Q90 80 118 90 Q136 96 148 124" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round" fill="none"/>

  <!-- Legs -->
  <line x1="148" y1="124" x2="162" y2="175" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <line x1="118" y1="90" x2="132" y2="175" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Barbell on hips -->
  <line x1="40" y1="84" x2="170" y2="84" stroke="#666" stroke-width="5" stroke-linecap="round"/>
  <rect x="36" y="80" width="10" height="14" rx="2" fill="#555" stroke="#777" stroke-width="1"/>
  <rect x="166" y="80" width="10" height="14" rx="2" fill="#555" stroke="#777" stroke-width="1"/>

  <!-- Padding at hip -->
  <rect x="84" y="80" width="30" height="10" rx="3" fill="#444" stroke="#666" stroke-width="1"/>

  <!-- Up arrow -->
  <line x1="106" y1="86" x2="106" y2="66" stroke="#c8ff00" stroke-width="2.5" stroke-linecap="round"/>
  <polyline points="100,72 106,64 112,72" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Glute dots -->
  <circle cx="110" cy="94" r="3.5" fill="#c8ff00" opacity=".8"/>
  <circle cx="124" cy="98" r="3" fill="#c8ff00" opacity=".6"/>

  <text x="100" y="195" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Hip Thrust</text>
</svg>`,

/* ────────────────────────────────────────────
   pullup — Pull-Up
   Shows: bar overhead, body hanging, pulling up
──────────────────────────────────────────── */
pullup: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Bar -->
  <line x1="30" y1="24" x2="170" y2="24" stroke="#777" stroke-width="6" stroke-linecap="round"/>
  <!-- Bar supports -->
  <line x1="50" y1="14" x2="50" y2="28" stroke="#555" stroke-width="4" stroke-linecap="round"/>
  <line x1="150" y1="14" x2="150" y2="28" stroke="#555" stroke-width="4" stroke-linecap="round"/>

  <!-- Hands on bar -->
  <circle cx="74" cy="28" r="5" stroke="#c8ff00" stroke-width="2"/>
  <circle cx="126" cy="28" r="5" stroke="#c8ff00" stroke-width="2"/>

  <!-- Arms pulling -->
  <line x1="74" y1="28" x2="82" y2="56" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="126" y1="28" x2="118" y2="56" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Torso -->
  <line x1="82" y1="56" x2="100" y2="66" stroke="#e0e0e0" stroke-width="2"/>
  <line x1="118" y1="56" x2="100" y2="66" stroke="#e0e0e0" stroke-width="2"/>
  <line x1="100" y1="66" x2="100" y2="120" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Head -->
  <circle cx="100" cy="52" r="14" stroke="#e0e0e0" stroke-width="3"/>

  <!-- Legs hanging -->
  <line x1="100" y1="120" x2="88" y2="160" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="120" x2="112" y2="160" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Slight bend -->
  <line x1="88" y1="160" x2="84" y2="185" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <line x1="112" y1="160" x2="116" y2="185" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>

  <!-- Up arrow -->
  <line x1="158" y1="80" x2="158" y2="44" stroke="#c8ff00" stroke-width="2" stroke-dasharray="4 3" stroke-linecap="round"/>
  <polyline points="152,50 158,42 164,50" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <text x="100" y="200" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Pull-Up</text>
</svg>`,

/* ────────────────────────────────────────────
   plank — Plank
   Shows: plank position, body straight, core tight
──────────────────────────────────────────── */
plank: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Floor -->
  <line x1="10" y1="152" x2="190" y2="152" stroke="#333" stroke-width="2"/>

  <!-- Body straight line (horizontal) -->
  <line x1="30" y1="118" x2="160" y2="118" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Head -->
  <circle cx="174" cy="114" r="13" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="161" y1="116" x2="160" y2="118" stroke="#e0e0e0" stroke-width="3.5"/>

  <!-- Forearms on ground -->
  <line x1="130" y1="118" x2="130" y2="150" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="130" y1="150" x2="110" y2="152" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <line x1="152" y1="118" x2="152" y2="150" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="152" y1="150" x2="168" y2="152" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>

  <!-- Toes on ground -->
  <line x1="30" y1="118" x2="26" y2="152" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="44" y1="118" x2="40" y2="152" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>

  <!-- Body alignment line -->
  <line x1="40" y1="114" x2="156" y2="114" stroke="#c8ff00" stroke-width="1" stroke-dasharray="5 4" opacity=".5"/>

  <!-- Core engagement indicator -->
  <circle cx="90" cy="116" r="10" stroke="#c8ff00" stroke-width="1.5" stroke-dasharray="3 3" opacity=".6"/>
  <text x="90" y="120" text-anchor="middle" fill="#c8ff00" font-size="8" opacity=".8">CORE</text>

  <!-- Clock timer (holds) -->
  <circle cx="36" cy="80" r="18" stroke="#333" stroke-width="2"/>
  <line x1="36" y1="80" x2="36" y2="66" stroke="#c8ff00" stroke-width="2" stroke-linecap="round"/>
  <line x1="36" y1="80" x2="46" y2="80" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round"/>

  <text x="100" y="176" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Plank</text>
</svg>`,

/* ────────────────────────────────────────────
   chest_row — Chest-Supported Row
   Shows: prone on incline, rowing dumbbells
──────────────────────────────────────────── */
chest_row: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Incline bench -->
  <line x1="20" y1="165" x2="90" y2="100" stroke="#444" stroke-width="6" stroke-linecap="round"/>
  <line x1="90" y1="100" x2="166" y2="100" stroke="#444" stroke-width="6" stroke-linecap="round"/>
  <line x1="20" y1="165" x2="20" y2="180" stroke="#444" stroke-width="4" stroke-linecap="round"/>
  <line x1="166" y1="100" x2="166" y2="180" stroke="#444" stroke-width="4" stroke-linecap="round"/>

  <!-- Body prone on bench -->
  <line x1="36" y1="150" x2="116" y2="98" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Head hanging down -->
  <circle cx="130" cy="88" r="12" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="118" y1="92" x2="116" y2="98" stroke="#e0e0e0" stroke-width="3.5"/>

  <!-- Arms rowing (pulled up active) -->
  <line x1="90" y1="102" x2="72" y2="86" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="72" y1="86" x2="58" y2="72" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>

  <line x1="74" y1="102" x2="60" y2="90" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="60" y1="90" x2="46" y2="78" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>

  <!-- Dumbbells at top -->
  <rect x="46" y="68" width="18" height="7" rx="2" stroke="#c8ff00" stroke-width="1.5" transform="rotate(-40 55 72)"/>
  <rect x="28" y="70" width="18" height="7" rx="2" stroke="#c8ff00" stroke-width="1.5" transform="rotate(-40 37 74)"/>

  <!-- Arms hanging (ghost) -->
  <line x1="90" y1="102" x2="80" y2="122" stroke="#333" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
  <line x1="74" y1="102" x2="64" y2="122" stroke="#333" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>

  <!-- Pull arrows -->
  <polyline points="62,76 56,70 52,78" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Scapula retraction indicator -->
  <path d="M80 102 Q90 96 96 100" stroke="#c8ff00" stroke-width="1.5" fill="none" stroke-dasharray="3 2" stroke-linecap="round"/>

  <text x="100" y="200" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Chest-Supported Row</text>
</svg>`,

/* ────────────────────────────────────────────
   romanian_dl — Romanian Deadlift
   Shows: hinge at hip, bar close to legs
──────────────────────────────────────────── */
romanian_dl: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Floor -->
  <line x1="10" y1="185" x2="190" y2="185" stroke="#333" stroke-width="2"/>

  <!-- Standing ghost -->
  <circle cx="140" cy="36" r="10" stroke="#333" stroke-width="2" stroke-dasharray="3 2"/>
  <line x1="140" y1="46" x2="140" y2="100" stroke="#333" stroke-width="3" stroke-dasharray="4 3" stroke-linecap="round"/>
  <line x1="140" y1="100" x2="128" y2="140" stroke="#333" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
  <line x1="140" y1="100" x2="152" y2="140" stroke="#333" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>

  <!-- Hinge position -->
  <!-- Head -->
  <circle cx="160" cy="84" r="14" stroke="#e0e0e0" stroke-width="3"/>

  <!-- Torso hinged forward -->
  <line x1="146" y1="88" x2="100" y2="112" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Hips back -->
  <ellipse cx="98" cy="112" rx="10" ry="7" stroke="#e0e0e0" stroke-width="2.5"/>

  <!-- Legs vertical -->
  <line x1="98" y1="119" x2="84" y2="185" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <line x1="100" y1="119" x2="114" y2="185" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>

  <!-- Arms + Bar -->
  <line x1="122" y1="98" x2="88" y2="144" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="112" y1="104" x2="82" y2="148" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Bar -->
  <line x1="44" y1="156" x2="130" y2="144" stroke="#777" stroke-width="5" stroke-linecap="round"/>
  <rect x="36" y="152" width="10" height="12" rx="2" fill="#555" stroke="#777" stroke-width="1"/>
  <rect x="128" y="140" width="10" height="12" rx="2" fill="#555" stroke="#777" stroke-width="1"/>

  <!-- Hip hinge arrow -->
  <path d="M90 108 Q84 100 88 92" stroke="#c8ff00" stroke-width="2" fill="none" stroke-linecap="round"/>
  <polyline points="84,96 88,90 94,96" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

  <!-- Back flat indicator -->
  <line x1="104" y1="108" x2="142" y2="90" stroke="#c8ff00" stroke-width="1.5" stroke-dasharray="4 3" opacity=".6"/>

  <text x="100" y="200" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Romanian Deadlift</text>
</svg>`,

};

/* ── Fallback SVG (generic figure) ── */
EXERCISE_SVGS._fallback = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <circle cx="100" cy="50" r="16" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="100" y1="66" x2="100" y2="120" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <line x1="100" y1="90" x2="72" y2="108" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="90" x2="128" y2="108" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="120" x2="84" y2="160" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="120" x2="116" y2="160" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
</svg>`;

/* ── Get SVG for exercise ID ── */
function getExSvg(id) {
  return EXERCISE_SVGS[id] || EXERCISE_SVGS._fallback;
}

/* ────────────────────────────────────────────
   NEW EXERCISES — Teres Major / Lat / Triceps
──────────────────────────────────────────── */

EXERCISE_SVGS.lat_stretch = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Anchor overhead -->
  <rect x="90" y="14" width="20" height="6" rx="2" fill="#555"/>
  <line x1="100" y1="20" x2="100" y2="36" stroke="#888" stroke-width="2"/>
  <!-- Body: side-lean hang stretch -->
  <circle cx="100" cy="48" r="13" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Arms up holding bar -->
  <line x1="100" y1="61" x2="86" y2="40" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="61" x2="114" y2="40" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Torso leaning to right -->
  <line x1="100" y1="61" x2="110" y2="118" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Hips -->
  <!-- Legs -->
  <line x1="110" y1="118" x2="98" y2="160" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="110" y1="118" x2="122" y2="160" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="98" y1="160" x2="94" y2="185" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <line x1="122" y1="160" x2="126" y2="185" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <!-- Lat stretch highlight -->
  <path d="M100 65 Q116 90 112 115" stroke="#c8ff00" stroke-width="2" fill="none" stroke-dasharray="5 3" stroke-linecap="round"/>
  <circle cx="106" cy="90" r="6" fill="#c8ff00" opacity=".3"/>
  <!-- Lean arrow -->
  <line x1="88" y1="100" x2="72" y2="110" stroke="#c8ff00" stroke-width="1.5" stroke-dasharray="3 2" stroke-linecap="round"/>
  <text x="100" y="197" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Lat Stretch (Hanging)</text>
</svg>`;

EXERCISE_SVGS.teres_stretch = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Body standing -->
  <line x1="94" y1="88" x2="94" y2="148" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <circle cx="94" cy="74" r="14" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="94" y1="74" x2="94" y2="88" stroke="#e0e0e0" stroke-width="3.5"/>
  <line x1="94" y1="148" x2="80" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="94" y1="148" x2="108" y2="178" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Right arm: cross-body stretch (teres major) -->
  <line x1="94" y1="104" x2="132" y2="96" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="132" y1="96" x2="156" y2="84" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Left arm: pressing right arm across -->
  <line x1="94" y1="104" x2="70" y2="96" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <line x1="70" y1="96" x2="54" y2="90" stroke="#e0e0e0" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="54" y1="90" x2="134" y2="96" stroke="#c8ff00" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
  <!-- Teres major target -->
  <circle cx="118" cy="102" r="7" fill="#c8ff00" opacity=".25"/>
  <circle cx="118" cy="102" r="3.5" fill="#c8ff00" opacity=".6"/>
  <!-- Arrow cross -->
  <path d="M92 98 Q118 92 152 84" stroke="#c8ff00" stroke-width="1.5" fill="none" stroke-dasharray="4 3" stroke-linecap="round"/>
  <text x="100" y="196" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Teres Major Stretch</text>
</svg>`;

EXERCISE_SVGS.tricep_stretch = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <line x1="100" y1="90" x2="100" y2="150" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <circle cx="100" cy="76" r="14" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="100" y1="76" x2="100" y2="90" stroke="#e0e0e0" stroke-width="3.5"/>
  <line x1="100" y1="150" x2="86" y2="180" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="150" x2="114" y2="180" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Right arm: overhead tricep stretch -->
  <line x1="100" y1="104" x2="120" y2="94" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="120" y1="94" x2="128" y2="66" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Forearm bent behind head -->
  <line x1="128" y1="66" x2="118" y2="96" stroke="#c8ff00" stroke-width="3" stroke-linecap="round" stroke-dasharray="5 3"/>
  <!-- Elbow point -->
  <circle cx="128" cy="66" r="4" fill="#c8ff00" opacity=".7"/>
  <!-- Left hand assisting -->
  <line x1="100" y1="104" x2="80" y2="94" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="94" x2="124" y2="70" stroke="#c8ff00" stroke-width="2" stroke-dasharray="4 3" stroke-linecap="round"/>
  <!-- Tricep target -->
  <circle cx="124" cy="80" r="6" fill="#c8ff00" opacity=".2"/>
  <circle cx="124" cy="80" r="3" fill="#c8ff00" opacity=".5"/>
  <!-- Pull down arrow -->
  <line x1="136" y1="80" x2="140" y2="96" stroke="#c8ff00" stroke-width="2" stroke-linecap="round"/>
  <polyline points="134,92 140,98 144,90" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="100" y="197" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Overhead Tricep Stretch</text>
</svg>`;

EXERCISE_SVGS.foam_lat = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Floor -->
  <line x1="10" y1="172" x2="190" y2="172" stroke="#333" stroke-width="2"/>
  <!-- Foam roller -->
  <ellipse cx="70" cy="168" rx="16" ry="6" fill="#2a2a2a" stroke="#555" stroke-width="1.5"/>
  <line x1="54" y1="168" x2="54" y2="148" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <line x1="86" y1="168" x2="86" y2="148" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <line x1="54" y1="148" x2="86" y2="148" stroke="#555" stroke-width="3" stroke-linecap="round"/>
  <!-- Body side-lying -->
  <line x1="86" y1="148" x2="158" y2="136" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <!-- Head -->
  <circle cx="172" cy="130" r="13" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="159" y1="133" x2="158" y2="136" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Bottom arm on roller (lat rolling) -->
  <line x1="102" y1="146" x2="86" y2="156" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Top arm -->
  <line x1="120" y1="140" x2="108" y2="120" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <!-- Legs stacked -->
  <line x1="86" y1="148" x2="68" y2="172" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="96" y1="148" x2="76" y2="172" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <!-- Pressure arrows -->
  <line x1="90" y1="140" x2="84" y2="152" stroke="#c8ff00" stroke-width="1.5" stroke-dasharray="3 2" stroke-linecap="round"/>
  <polyline points="80,148 84,154 90,150" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <!-- Lat highlight -->
  <circle cx="94" cy="142" r="8" fill="#c8ff00" opacity=".15"/>
  <text x="100" y="192" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Foam Roll — Lats</text>
</svg>`;

EXERCISE_SVGS.sleeper_stretch = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Floor -->
  <line x1="10" y1="168" x2="190" y2="168" stroke="#333" stroke-width="2"/>
  <!-- Body side-lying -->
  <line x1="40" y1="140" x2="140" y2="140" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <circle cx="156" cy="136" r="13" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="143" y1="138" x2="140" y2="140" stroke="#e0e0e0" stroke-width="3"/>
  <!-- Legs -->
  <line x1="40" y1="140" x2="32" y2="168" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="56" y1="140" x2="48" y2="168" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <!-- Bottom arm: elbow bent 90°, shoulder in int rotation -->
  <line x1="120" y1="136" x2="120" y2="112" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="120" y1="112" x2="108" y2="90" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Top arm pressing forearm DOWN (sleeper stretch) -->
  <line x1="100" y1="136" x2="100" y2="112" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
  <line x1="100" y1="112" x2="108" y2="90" stroke="#e0e0e0" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
  <!-- Press down arrow -->
  <line x1="108" y1="90" x2="108" y2="106" stroke="#c8ff00" stroke-width="2.5" stroke-linecap="round"/>
  <polyline points="102,102 108,108 114,102" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <!-- Target: posterior shoulder -->
  <circle cx="120" cy="130" r="6" fill="#c8ff00" opacity=".25"/>
  <circle cx="120" cy="130" r="3" fill="#c8ff00" opacity=".6"/>
  <text x="100" y="188" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Sleeper Stretch</text>
</svg>`;

EXERCISE_SVGS.tricep_pushdown = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Cable machine top -->
  <rect x="158" y="14" width="10" height="10" rx="2" fill="#555"/>
  <line x1="163" y1="24" x2="128" y2="92" stroke="#888" stroke-width="2"/>
  <!-- Rope handle -->
  <line x1="122" y1="94" x2="134" y2="94" stroke="#777" stroke-width="3" stroke-linecap="round"/>
  <!-- Body -->
  <line x1="96" y1="86" x2="96" y2="150" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <circle cx="96" cy="72" r="14" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="96" y1="72" x2="96" y2="86" stroke="#e0e0e0" stroke-width="3.5"/>
  <line x1="96" y1="150" x2="82" y2="180" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="96" y1="150" x2="110" y2="180" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Elbows at side (ghost top) -->
  <line x1="96" y1="100" x2="116" y2="94" stroke="#333" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
  <line x1="116" y1="94" x2="128" y2="72" stroke="#333" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
  <!-- Arms: pushed DOWN (active) -->
  <line x1="96" y1="100" x2="116" y2="104" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="116" y1="104" x2="124" y2="130" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Elbow anchor dot -->
  <circle cx="116" cy="104" r="4" fill="#c8ff00" opacity=".7"/>
  <!-- Down arrows -->
  <line x1="132" y1="110" x2="132" y2="130" stroke="#c8ff00" stroke-width="2" stroke-linecap="round"/>
  <polyline points="126,126 132,132 138,126" stroke="#c8ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <!-- Tricep target -->
  <circle cx="120" cy="116" r="5" fill="#c8ff00" opacity=".3"/>
  <text x="96" y="197" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Tricep Pushdown</text>
</svg>`;

EXERCISE_SVGS.overhead_tricep = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Bench (seated) -->
  <rect x="64" y="150" width="72" height="10" rx="4" fill="#222" stroke="#444" stroke-width="1.5"/>
  <line x1="74" y1="160" x2="70" y2="180" stroke="#444" stroke-width="2"/>
  <line x1="126" y1="160" x2="130" y2="180" stroke="#444" stroke-width="2"/>
  <!-- Body seated -->
  <line x1="100" y1="92" x2="100" y2="150" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <circle cx="100" cy="78" r="14" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="100" y1="78" x2="100" y2="92" stroke="#e0e0e0" stroke-width="3.5"/>
  <!-- Both arms overhead - upper arm vertical -->
  <line x1="100" y1="106" x2="84" y2="84" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="100" y1="106" x2="116" y2="84" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Forearms bent back (bottom of movement ghost) -->
  <line x1="84" y1="84" x2="78" y2="110" stroke="#333" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
  <line x1="116" y1="84" x2="122" y2="110" stroke="#333" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
  <!-- Forearms extended UP (top active) -->
  <line x1="84" y1="84" x2="80" y2="56" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="116" y1="84" x2="120" y2="56" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Dumbbell at top -->
  <rect x="78" y="48" width="44" height="10" rx="3" stroke="#c8ff00" stroke-width="2"/>
  <line x1="88" y1="46" x2="88" y2="60" stroke="#c8ff00" stroke-width="1.5"/>
  <line x1="112" y1="46" x2="112" y2="60" stroke="#c8ff00" stroke-width="1.5"/>
  <!-- Elbow dots -->
  <circle cx="84" cy="84" r="3.5" fill="#c8ff00" opacity=".7"/>
  <circle cx="116" cy="84" r="3.5" fill="#c8ff00" opacity=".7"/>
  <!-- Extension arrows -->
  <polyline points="74,62 80,54 86,62" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polyline points="114,62 120,54 126,62" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="100" y="196" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Overhead Tricep Extension</text>
</svg>`;

EXERCISE_SVGS.lat_pulldown = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Cable machine bar -->
  <line x1="30" y1="20" x2="170" y2="20" stroke="#666" stroke-width="4" stroke-linecap="round"/>
  <line x1="40" y1="12" x2="40" y2="24" stroke="#555" stroke-width="3"/>
  <line x1="160" y1="12" x2="160" y2="24" stroke="#555" stroke-width="3"/>
  <!-- Cable -->
  <line x1="100" y1="20" x2="100" y2="28" stroke="#888" stroke-width="2"/>
  <!-- Wide bar -->
  <line x1="52" y1="32" x2="148" y2="32" stroke="#777" stroke-width="5" stroke-linecap="round"/>
  <circle cx="58" cy="32" r="5" stroke="#c8ff00" stroke-width="2"/>
  <circle cx="142" cy="32" r="5" stroke="#c8ff00" stroke-width="2"/>
  <!-- Body seated -->
  <line x1="100" y1="90" x2="100" y2="148" stroke="#e0e0e0" stroke-width="4" stroke-linecap="round"/>
  <circle cx="100" cy="76" r="14" stroke="#e0e0e0" stroke-width="3"/>
  <line x1="100" y1="76" x2="100" y2="90" stroke="#e0e0e0" stroke-width="3.5"/>
  <!-- Seat/thigh support -->
  <line x1="74" y1="148" x2="126" y2="148" stroke="#444" stroke-width="4" stroke-linecap="round"/>
  <!-- Arms pulling bar down -->
  <line x1="100" y1="100" x2="70" y2="64" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="70" y1="64" x2="58" y2="40" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <line x1="100" y1="100" x2="130" y2="64" stroke="#c8ff00" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="130" y1="64" x2="142" y2="40" stroke="#c8ff00" stroke-width="3" stroke-linecap="round"/>
  <!-- Pull-down arrows -->
  <line x1="50" y1="46" x2="58" y2="64" stroke="#c8ff00" stroke-width="2" stroke-dasharray="3 2" stroke-linecap="round"/>
  <line x1="150" y1="46" x2="142" y2="64" stroke="#c8ff00" stroke-width="2" stroke-dasharray="3 2" stroke-linecap="round"/>
  <!-- Scapula depression arrows -->
  <line x1="80" y1="96" x2="80" y2="108" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round"/>
  <polyline points="74,104 80,110 86,104" stroke="#c8ff00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="100" y="168" text-anchor="middle" fill="#888" font-size="11" font-family="sans-serif">Lat Pulldown</text>
</svg>`;
