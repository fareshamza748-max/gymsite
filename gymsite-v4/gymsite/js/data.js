/* ═══════════════════════════════════════════════════════
   GymPro v3 — Master Data File
   All exercises, programs, splits
   ═══════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────
   EXERCISE MASTER LIST
   cat: 'gym' | 'rehab' | 'core' | 'cardio'
   muscle groups for filtering/stats
───────────────────────────────────────── */
const EX = {

  /* ══ GYM — CHEST ══ */
  bench_press:    { name:'Bench Press',           ar:'ضغط المقعد',              cat:'gym', muscle:'صدر',      sets:'4×8',  note:'حط كتفيك للخلف قبل النزول' },
  incline_db:     { name:'Incline DB Press',      ar:'ضغط مائل بدمبل',         cat:'gym', muscle:'صدر',      sets:'4×10', note:'يحمي الكتف أكتر من البار' },
  incline_bar:    { name:'Incline Barbell Press', ar:'ضغط مائل بالبار',        cat:'gym', muscle:'صدر',      sets:'4×8',  note:'' },
  cable_fly:      { name:'Cable Fly',             ar:'فراشة كابل',             cat:'gym', muscle:'صدر',      sets:'3×15', note:'' },
  dips_chest:     { name:'Chest Dips',            ar:'ديبس الصدر',             cat:'gym', muscle:'صدر',      sets:'3×10', note:'انحني للأمام' },
  pec_deck:       { name:'Pec Deck',              ar:'فراشة ماكينة',           cat:'gym', muscle:'صدر',      sets:'3×12', note:'' },

  /* ══ GYM — BACK ══ */
  deadlift:       { name:'Deadlift',              ar:'ديدلفت',                 cat:'gym', muscle:'ظهر',      sets:'4×5',  note:'ابعد عنه لو SI بيوجع' },
  romanian_dl:    { name:'Romanian Deadlift',     ar:'ديدلفت روماني',          cat:'gym', muscle:'ظهر',      sets:'4×10', note:'ركّز على hinge مش squat' },
  pullup:         { name:'Pull-Up',               ar:'سحب علوي',               cat:'gym', muscle:'ظهر',      sets:'3×8',  note:'نزّل لوح الكتف الأول' },
  lat_pulldown:   { name:'Lat Pulldown',          ar:'سحب كابل علوي',          cat:'gym', muscle:'ظهر',      sets:'4×12', note:'لو Pull-up صعب' },
  cable_row:      { name:'Seated Cable Row',      ar:'رو كابل',                cat:'gym', muscle:'ظهر',      sets:'4×12', note:'' },
  chest_row:      { name:'Chest-Supported Row',   ar:'رو مدعوم بالصدر',        cat:'gym', muscle:'ظهر',      sets:'4×12', note:'الأحفظ للوضعية' },
  db_row:         { name:'Dumbbell Row',          ar:'رو دمبل',                cat:'gym', muscle:'ظهر',      sets:'4×10', note:'' },
  tbar_row:       { name:'T-Bar Row',             ar:'رو T-Bar',               cat:'gym', muscle:'ظهر',      sets:'4×10', note:'' },

  /* ══ GYM — SHOULDERS ══ */
  ohp:            { name:'Overhead Press',        ar:'ضغط علوي بالبار',        cat:'gym', muscle:'كتف',      sets:'4×8',  note:'مش ورا الراس أبداً' },
  arnold_press:   { name:'Arnold Press',          ar:'ضغط أرنولد',             cat:'gym', muscle:'كتف',      sets:'4×10', note:'ركّز على الحركة مش الوزن' },
  db_ohp:         { name:'DB Shoulder Press',     ar:'ضغط كتف بدمبل',          cat:'gym', muscle:'كتف',      sets:'4×10', note:'' },
  lateral_raise:  { name:'Lateral Raises',        ar:'رفع جانبي',              cat:'gym', muscle:'كتف',      sets:'3×15', note:'كتفك للخلف مش للأمام' },
  front_raise:    { name:'Front Raises',          ar:'رفع أمامي',              cat:'gym', muscle:'كتف',      sets:'3×12', note:'' },
  face_pulls_gym: { name:'Face Pulls',            ar:'شد كابل للوجه',          cat:'gym', muscle:'كتف',      sets:'3×15', note:'مهم جداً لصحة الكتف' },
  rear_delt_fly:  { name:'Rear Delt Fly',         ar:'فراشة الكتف الخلفي',     cat:'gym', muscle:'كتف',      sets:'3×15', note:'' },
  upright_row:    { name:'Upright Row',           ar:'رو رأسي',                cat:'gym', muscle:'كتف',      sets:'3×12', note:'بعرض كتف — مش واسع' },

  /* ══ GYM — ARMS ══ */
  barbell_curl:   { name:'Barbell Curl',          ar:'كيرل بار',               cat:'gym', muscle:'بايسبس',  sets:'3×12', note:'' },
  db_curl:        { name:'Dumbbell Curl',         ar:'كيرل دمبل',              cat:'gym', muscle:'بايسبس',  sets:'3×12', note:'' },
  hammer_curl:    { name:'Hammer Curl',           ar:'كيرل هامر',              cat:'gym', muscle:'بايسبس',  sets:'3×12', note:'' },
  preacher_curl:  { name:'Preacher Curl',         ar:'كيرل واجهة',             cat:'gym', muscle:'بايسبس',  sets:'3×10', note:'' },
  tricep_pd:      { name:'Tricep Pushdown',       ar:'ضغط تراي سبس كابل',      cat:'gym', muscle:'ترايسبس', sets:'3×15', note:'كوعك ثابت جنبك' },
  skull_crusher:  { name:'Skull Crushers',        ar:'سحق الجمجمة',            cat:'gym', muscle:'ترايسبس', sets:'3×12', note:'' },
  overhead_tri:   { name:'Overhead Tricep Ext',   ar:'تمديد تراي سبس علوي',    cat:'gym', muscle:'ترايسبس', sets:'3×12', note:'ابدأ بخفيف لو في شد' },
  dips_tri:       { name:'Tricep Dips',           ar:'ديبس التراي سبس',        cat:'gym', muscle:'ترايسبس', sets:'3×10', note:'' },

  /* ══ GYM — LEGS ══ */
  squat:          { name:'Back Squat',            ar:'سكوات بالبار',           cat:'gym', muscle:'أرجل',    sets:'4×8',  note:'' },
  goblet_squat:   { name:'Goblet Squat',          ar:'سكوات الكأس',            cat:'gym', muscle:'أرجل',    sets:'4×10', note:'آمن على الكتف والرقبة' },
  leg_press:      { name:'Leg Press',             ar:'ضغط الأرجل',             cat:'gym', muscle:'أرجل',    sets:'4×12', note:'' },
  lunges:         { name:'Lunges',                ar:'لانج',                   cat:'gym', muscle:'أرجل',    sets:'3×10', note:'كل ناحية' },
  hip_thrust:     { name:'Hip Thrust',            ar:'دفع الورك',              cat:'gym', muscle:'أرجل',    sets:'4×12', note:'أفضل من leg press للـ SI' },
  leg_curl:       { name:'Leg Curl',              ar:'ليج كيرل',               cat:'gym', muscle:'أرجل',    sets:'3×12', note:'' },
  leg_ext:        { name:'Leg Extension',         ar:'ليج اكستنشن',            cat:'gym', muscle:'أرجل',    sets:'3×12', note:'' },
  rdl_db:         { name:'DB Romanian DL',        ar:'ديدلفت روماني بدمبل',    cat:'gym', muscle:'أرجل',    sets:'4×10', note:'' },
  calf_raise:     { name:'Calf Raises',           ar:'رفع الساق',              cat:'gym', muscle:'أرجل',    sets:'3×20', note:'' },

  /* ══ REHAB — NECK / POSTURE ══ */
  chin_tuck:      { name:'Chin Tucks',            ar:'شد الذقن للخلف',         cat:'rehab', muscle:'رقبة',  sets:'3×10',  note:'اعملها كل ساعتين على الكمبيوتر', dur:30 },
  cerv_lateral:   { name:'Cervical Lateral Stretch', ar:'شد الرقبة الجانبي',  cat:'rehab', muscle:'رقبة',  sets:'30ث×2', note:'برفق — مش قوة', dur:60 },
  lev_scap:       { name:'Levator Scapulae Stretch', ar:'شد رافع لوح الكتف',  cat:'rehab', muscle:'رقبة',  sets:'30ث×2', note:'ركّز على اليمين', dur:60 },
  neck_retract:   { name:'Neck Retraction + Ext',ar:'شد الرقبة للخلف',        cat:'rehab', muscle:'رقبة',  sets:'3×10',  note:'بطيء ومتحكم', dur:30 },
  thoracic_ext:   { name:'Thoracic Extension',   ar:'فتح الصدر على الكرسي',   cat:'rehab', muscle:'ظهر',   sets:'3×10',  note:'على حافة الكرسي أو فوم رول', dur:30 },
  doorway_str:    { name:'Doorway Chest Stretch', ar:'شد الصدر بالباب',        cat:'rehab', muscle:'صدر',   sets:'3×30ث', note:'لتصحيح rounded shoulders', dur:90 },

  /* ══ REHAB — SCAPULA / SHOULDER ══ */
  wall_angels:    { name:'Wall Angels',           ar:'ملاك الحائط',            cat:'rehab', muscle:'كتف',   sets:'3×10',  note:'بطيء — ظهرك ملاصق الحائط', dur:60 },
  serratus_wall:  { name:'Serratus Activation',   ar:'تنشيط الـ Serratus',     cat:'rehab', muscle:'كتف',   sets:'3×12',  note:'Push-up plus على الحائط', dur:45 },
  prone_ytw:      { name:'Prone Y-T-W',           ar:'Y-T-W مستلقي على بطنك',  cat:'rehab', muscle:'ظهر',   sets:'2×10',  note:'كل حركة لوحدها — بطيء', dur:60 },
  face_pulls_r:   { name:'Face Pulls (Rehab)',    ar:'شد كابل للوجه (تأهيل)',   cat:'rehab', muscle:'كتف',   sets:'3×15',  note:'وزن خفيف — ركّز على الدوران', dur:45 },
  band_ext_rot:   { name:'Band External Rotation',ar:'دوران خارجي بشريط',      cat:'rehab', muscle:'كتف',   sets:'3×15',  note:'كوع ثابت جنب الجسم', dur:45 },
  scap_retract:   { name:'Scapular Retraction',   ar:'ضم لوح الكتف',           cat:'rehab', muscle:'كتف',   sets:'3×15',  note:'بين كل سيت في الجيم', dur:30 },
  sleeper_str:    { name:'Sleeper Stretch',        ar:'الشد النائم',            cat:'rehab', muscle:'كتف',   sets:'3×40ث', note:'للـ subscapularis العميق', dur:120 },

  /* ══ REHAB — TERES / LAT ══ */
  teres_stretch:  { name:'Teres Major Stretch',   ar:'شد teres major',         cat:'rehab', muscle:'كتف',   sets:'3×40ث', note:'⭐ تحت الباط — ذراع عابر الصدر', dur:120, priority:true },
  lat_str:        { name:'Lat Hanging Stretch',   ar:'شد اللاتس بالتعليق',     cat:'rehab', muscle:'ظهر',   sets:'3×30ث', note:'⭐ علّق على بار بكامل وزنك', dur:90, priority:true },
  foam_lat:       { name:'Foam Roll — Lats',      ar:'فوم رول للاتس',          cat:'rehab', muscle:'ظهر',   sets:'60ث×2', note:'⭐ قبل أي تمرين كتف أو ظهر', dur:120, priority:true },
  lat_sidebend:   { name:'Lat Side Bend Stretch', ar:'شد جانبي للاتس',         cat:'rehab', muscle:'ظهر',   sets:'3×30ث', note:'يد فوق الرأس — انحن جانباً', dur:90 },

  /* ══ REHAB — LOWER BACK / SI ══ */
  glute_bridge:   { name:'Glute Bridge',          ar:'جسر الأرداف',            cat:'rehab', muscle:'أرجل',  sets:'3×12',  note:'تقوية glutes لتخفيف SI', dur:45 },
  single_bridge:  { name:'Single Leg Glute Bridge',ar:'جسر برجل واحدة',       cat:'rehab', muscle:'أرجل',  sets:'3×10',  note:'كل ناحية', dur:60 },
  dead_bug:       { name:'Dead Bug',              ar:'الخنفساء الميتة',        cat:'rehab', muscle:'core',  sets:'3×8',   note:'ضهرك ملاصق الأرض طول الوقت', dur:60 },
  bird_dog:       { name:'Bird Dog',              ar:'كلب الطير',              cat:'rehab', muscle:'core',  sets:'3×10',  note:'كل ناحية — ببطء', dur:60 },
  hip_flexor_str: { name:'Kneeling Hip Flexor Str',ar:'شد flexor الورك ركبة',  cat:'rehab', muscle:'أرجل',  sets:'3×40ث', note:'مهم جداً لتخفيف SI', dur:120 },
  figure4:        { name:'Figure-4 Stretch',      ar:'شد figure-4',            cat:'rehab', muscle:'أرجل',  sets:'40ث×2', note:'آمن على SI', dur:80 },
  pallof:         { name:'Pallof Press',          ar:'ضغط البالوف',            cat:'rehab', muscle:'core',  sets:'3×12',  note:'ثبات core بدون ضغط على SI', dur:45 },
  cat_cow:        { name:'Cat-Cow',               ar:'القطة والبقرة',          cat:'rehab', muscle:'ظهر',   sets:'2×10',  note:'بطيء مع التنفس', dur:40 },

  /* ══ REHAB — TRICEPS ══ */
  tricep_str:     { name:'Overhead Tricep Stretch',ar:'شد التراي سبس العلوي',  cat:'rehab', muscle:'ترايسبس',sets:'3×30ث',note:'اليد ورا الرأس — الناحية اليمين', dur:90 },

  /* ══ CORE ══ */
  plank:          { name:'Plank',                 ar:'بلانك',                  cat:'core',  muscle:'core',  sets:'3×30ث', note:'جسم مستقيم — مش أرداف للأعلى', dur:90 },
  side_plank:     { name:'Side Plank',            ar:'بلانك جانبي',            cat:'core',  muscle:'core',  sets:'3×20ث', note:'كل ناحية', dur:60 },
  hollow_hold:    { name:'Hollow Body Hold',      ar:'وضعية المجوف',           cat:'core',  muscle:'core',  sets:'3×20ث', note:'ظهرك ملاصق الأرض', dur:60 },
  ab_wheel:       { name:'Ab Wheel Rollout',      ar:'عجلة البطن',             cat:'core',  muscle:'core',  sets:'3×8',   note:'مش لو عندك ألم أسفل ظهر', dur:45 },
  hanging_knee:   { name:'Hanging Knee Raise',    ar:'رفع الركبة تعليق',       cat:'core',  muscle:'core',  sets:'3×12',  note:'', dur:45 },
  russian_twist:  { name:'Russian Twist',         ar:'لف جذع',                 cat:'core',  muscle:'core',  sets:'3×20',  note:'كل ناحية', dur:45 },
  mountain_climb: { name:'Mountain Climbers',     ar:'متسلق الجبل',            cat:'core',  muscle:'core',  sets:'3×20',  note:'كل ناحية', dur:45 },
  leg_raise:      { name:'Leg Raises',            ar:'رفع الأرجل',             cat:'core',  muscle:'core',  sets:'3×12',  note:'', dur:45 },
  copenhagen:     { name:'Copenhagen Plank',      ar:'بلانك كوبنهاجن',         cat:'core',  muscle:'core',  sets:'3×20ث', note:'كل ناحية — للحوض', dur:60 },

  /* ══ CARDIO ══ */
  treadmill:      { name:'Treadmill',             ar:'جهاز الجري',             cat:'cardio', muscle:'كارديو', sets:'20-40 دقيقة', note:'' },
  bike:           { name:'Stationary Bike',       ar:'دراجة ثابتة',            cat:'cardio', muscle:'كارديو', sets:'20-40 دقيقة', note:'' },
  rowing:         { name:'Rowing Machine',        ar:'ماكينة التجديف',         cat:'cardio', muscle:'كارديو', sets:'15-20 دقيقة', note:'ممتاز للظهر' },
  elliptical:     { name:'Elliptical',            ar:'إليبتيكال',              cat:'cardio', muscle:'كارديو', sets:'20-30 دقيقة', note:'' },
  jump_rope:      { name:'Jump Rope',             ar:'حبل القفز',              cat:'cardio', muscle:'كارديو', sets:'5-10 دقيقة', note:'' },
  hiit:           { name:'HIIT',                  ar:'تمرين متقطع عالي الكثافة',cat:'cardio', muscle:'كارديو', sets:'20 دقيقة', note:'' },
  walk:           { name:'Walking',               ar:'المشي',                  cat:'cardio', muscle:'كارديو', sets:'30-45 دقيقة', note:'' },
};

/* ─────────────────────────────────────────
   GYM SPLITS
───────────────────────────────────────── */
const SPLITS = {
  ppl6: {
    name:'Push / Pull / Legs', short:'PPL', days:6,
    desc:'6 أيام — الأفضل لبناء العضل',
    schedule:[
      { label:'Push (صدر + كتف + تراي)',  exIds:['bench_press','incline_db','cable_fly','db_ohp','lateral_raise','face_pulls_gym','tricep_pd','skull_crusher'] },
      { label:'Pull (ظهر + بايسبس)',       exIds:['deadlift','pullup','cable_row','db_row','barbell_curl','hammer_curl','face_pulls_gym'] },
      { label:'Legs (أرجل + أرداف)',       exIds:['squat','leg_press','leg_curl','rdl_db','calf_raise','hip_thrust'] },
      { label:'Push (صدر + كتف + تراي)',  exIds:['incline_bar','pec_deck','arnold_press','rear_delt_fly','overhead_tri','dips_tri'] },
      { label:'Pull (ظهر + بايسبس)',       exIds:['romanian_dl','lat_pulldown','tbar_row','preacher_curl','db_curl'] },
      { label:'Legs (أرجل + أرداف)',       exIds:['goblet_squat','lunges','leg_ext','leg_curl','hip_thrust','calf_raise'] },
    ],
  },
  ppl3: {
    name:'PPL (3 أيام)', short:'PPL3', days:3,
    desc:'3 أيام — Push/Pull/Legs مرة',
    schedule:[
      { label:'Push (صدر + كتف + تراي)',  exIds:['bench_press','incline_db','db_ohp','lateral_raise','tricep_pd','face_pulls_gym'] },
      { label:'Pull (ظهر + بايسبس)',       exIds:['pullup','cable_row','chest_row','barbell_curl','hammer_curl'] },
      { label:'Legs (أرجل + أرداف)',       exIds:['squat','hip_thrust','leg_curl','rdl_db','calf_raise'] },
    ],
  },
  arnold: {
    name:'Arnold Split', short:'Arnold', days:3,
    desc:'3 أيام — كلاسيك أرنولد',
    schedule:[
      { label:'صدر + ظهر',                exIds:['bench_press','incline_db','cable_fly','pullup','cable_row','db_row'] },
      { label:'كتف + ترايسبس + بايسبس',   exIds:['arnold_press','lateral_raise','face_pulls_gym','tricep_pd','overhead_tri','barbell_curl','hammer_curl'] },
      { label:'أرجل',                      exIds:['squat','leg_press','hip_thrust','leg_curl','calf_raise','goblet_squat'] },
    ],
  },
  upper_lower: {
    name:'Upper / Lower', short:'UL', days:4,
    desc:'4 أيام — Upper/Lower تكراران',
    schedule:[
      { label:'Upper A (صدر + ظهر)',       exIds:['bench_press','incline_db','pullup','cable_row','face_pulls_gym','barbell_curl','tricep_pd'] },
      { label:'Lower A (أرجل + أرداف)',    exIds:['squat','hip_thrust','leg_curl','rdl_db','calf_raise'] },
      { label:'Upper B (كتف + ظهر)',       exIds:['db_ohp','lateral_raise','chest_row','lat_pulldown','rear_delt_fly','hammer_curl','skull_crusher'] },
      { label:'Lower B (أرجل + أرداف)',    exIds:['goblet_squat','lunges','leg_press','leg_ext','hip_thrust','calf_raise'] },
    ],
  },
  full_body: {
    name:'Full Body', short:'FB', days:3,
    desc:'3 أيام — كل الجسم في جلسة',
    schedule:[
      { label:'Full Body A',               exIds:['squat','bench_press','cable_row','db_ohp','barbell_curl','tricep_pd','hip_thrust'] },
      { label:'Full Body B',               exIds:['goblet_squat','incline_db','lat_pulldown','arnold_press','hammer_curl','overhead_tri','rdl_db'] },
      { label:'Full Body C',               exIds:['leg_press','incline_bar','chest_row','lateral_raise','preacher_curl','skull_crusher','hip_thrust'] },
    ],
  },
  bro: {
    name:'Bro Split', short:'Bro', days:5,
    desc:'5 أيام — عضلة في اليوم',
    schedule:[
      { label:'صدر',                       exIds:['bench_press','incline_db','incline_bar','cable_fly','pec_deck','dips_chest'] },
      { label:'ظهر',                       exIds:['deadlift','pullup','cable_row','db_row','tbar_row','lat_pulldown'] },
      { label:'كتف',                       exIds:['db_ohp','arnold_press','lateral_raise','front_raise','rear_delt_fly','upright_row'] },
      { label:'بايسبس + ترايسبس',         exIds:['barbell_curl','db_curl','hammer_curl','preacher_curl','tricep_pd','skull_crusher','overhead_tri','dips_tri'] },
      { label:'أرجل',                      exIds:['squat','leg_press','leg_curl','rdl_db','leg_ext','hip_thrust','calf_raise'] },
    ],
  },
  custom: {
    name:'مخصص', short:'Custom', days:0,
    desc:'اختار تمارينك وأيامك بنفسك',
    schedule:[], // user builds this
  },
};

/* ─────────────────────────────────────────
   REHAB PROGRAMS
───────────────────────────────────────── */
const REHAB_PROGRAMS = {
  tech_neck: {
    name:'Tech Neck Rehab',
    nameAr:'تأهيل Tech Neck',
    icon:'🖥️',
    desc:'للمكتبجيين وعشاق الموبايل — رقبة ووضعية وكتف أمامي',
    target:'رقبة + وضعية',
    duration:'6-8 أسابيع',
    freq:'يومي (10-15 دقيقة)',
    phases:[
      {
        phase:1, name:'فك التوتر', weeks:'1-2',
        morning:[ 'chin_tuck','cerv_lateral','lev_scap','cat_cow' ],
        evening:[ 'doorway_str','thoracic_ext','chin_tuck' ],
        note:'ابدأ بالجزء الصباحي قبل ما تفتح التليفون',
      },
      {
        phase:2, name:'التنشيط', weeks:'3-4',
        morning:[ 'chin_tuck','cerv_lateral','wall_angels','serratus_wall' ],
        evening:[ 'doorway_str','prone_ytw','thoracic_ext' ],
        note:'ضيف تذكير كل ساعتين للـ chin tuck',
      },
      {
        phase:3, name:'التقوية', weeks:'5-8',
        morning:[ 'chin_tuck','wall_angels','scap_retract','serratus_wall','prone_ytw' ],
        evening:[ 'doorway_str','face_pulls_r','band_ext_rot' ],
        note:'الهدف: وضعية مضبوطة تلقائياً',
      },
    ],
    tips:[
      'ارفع شاشة الكمبيوتر لمستوى عينيك',
      'لا تنام على بطنك',
      'كل ساعة: قف وافرد ظهرك لمدة دقيقتين',
    ],
  },

  shoulder_rehab: {
    name:'Shoulder & Scapula Rehab',
    nameAr:'تأهيل الكتف ولوح الكتف',
    icon:'🦴',
    desc:'للـ scapular winging والكتف المتقدم والـ rotator cuff',
    target:'كتف + لوح الكتف',
    duration:'8-10 أسابيع',
    freq:'يومي (15 دقيقة)',
    phases:[
      {
        phase:1, name:'التنشيط الأساسي', weeks:'1-3',
        morning:[ 'wall_angels','serratus_wall','scap_retract','chin_tuck' ],
        evening:[ 'doorway_str','band_ext_rot','lev_scap' ],
        note:'بطيء ومتحكم — مش سرعة',
      },
      {
        phase:2, name:'التقوية', weeks:'4-6',
        morning:[ 'wall_angels','prone_ytw','face_pulls_r','band_ext_rot','serratus_wall' ],
        evening:[ 'doorway_str','sleeper_str','scap_retract' ],
        note:'ابدأ Face Pulls في الجيم بوزن خفيف جداً',
      },
      {
        phase:3, name:'الاستقرار', weeks:'7-10',
        morning:[ 'prone_ytw','face_pulls_r','serratus_wall','wall_angels' ],
        evening:[ 'sleeper_str','band_ext_rot' ],
        note:'Face Pulls قبل كل تمرين كتف في الجيم',
      },
    ],
    tips:[
      'Face Pulls: warm-up إلزامي قبل أي تمرين ضغط',
      'مش overhead press ورا الراس أبداً',
      'Scapular retraction بين كل سيت في الجيم',
    ],
  },

  teres_lat: {
    name:'Teres & Lat Tightness',
    nameAr:'تأهيل الكتف الأيمن (Teres + Lat)',
    icon:'💪',
    desc:'للشد تحت الباط وإصلاح لوح الكتف الأيمن — مخصص لحالة Tech Neck مع Teres Major',
    target:'teres major + lat + subscapularis',
    duration:'6-10 أسابيع',
    freq:'يومي (12 دقيقة)',
    phases:[
      {
        phase:1, name:'تليين العضلات', weeks:'1-2',
        morning:[ 'foam_lat','teres_stretch','lat_str','tricep_str' ],
        evening:[ 'lat_sidebend','cat_cow','doorway_str' ],
        note:'⭐ Foam Roll أول حاجة — قبل ما تعمل أي حاجة',
      },
      {
        phase:2, name:'التمدد العميق', weeks:'3-4',
        morning:[ 'foam_lat','teres_stretch','sleeper_str','lat_str','wall_angels' ],
        evening:[ 'lat_sidebend','serratus_wall','scap_retract' ],
        note:'الشد المزمن بيبدأ يتحسن في الأسبوع 3',
      },
      {
        phase:3, name:'التقوية والثبات', weeks:'5-10',
        morning:[ 'foam_lat','face_pulls_r','serratus_wall','prone_ytw','wall_angels' ],
        evening:[ 'teres_stretch','sleeper_str','band_ext_rot' ],
        note:'ابدأ تضيف Lat Pulldown في الجيم بوزن خفيف',
      },
    ],
    tips:[
      'النوم على الجنب الأيسر أريح على الكتف الأيمن',
      'بعد أي تمرين سحب — اعمل teres stretch فوراً',
      'لو الشد اشتد: وقف Pulling exercises لأسبوع',
    ],
  },

  lower_back: {
    name:'Lower Back & SI Joint',
    nameAr:'تأهيل أسفل الظهر والـ SI',
    icon:'🦵',
    desc:'للألم تحت الظهر والمفصل العجزي الحرقفي',
    target:'SI Joint + glutes + core',
    duration:'6-8 أسابيع',
    freq:'يومي (12 دقيقة)',
    phases:[
      {
        phase:1, name:'تخفيف الضغط', weeks:'1-2',
        morning:[ 'cat_cow','hip_flexor_str','figure4','dead_bug' ],
        evening:[ 'glute_bridge','figure4','cat_cow' ],
        note:'مش deadlift — مش sit-ups',
      },
      {
        phase:2, name:'التقوية الأساسية', weeks:'3-5',
        morning:[ 'dead_bug','glute_bridge','bird_dog','hip_flexor_str','pallof' ],
        evening:[ 'figure4','cat_cow','single_bridge' ],
        note:'لو الألم زاد مع أي تمرين — وقّف وراجع',
      },
      {
        phase:3, name:'الاستقرار', weeks:'6-8',
        morning:[ 'single_bridge','bird_dog','pallof','dead_bug' ],
        evening:[ 'hip_flexor_str','figure4' ],
        note:'Hip Thrust في الجيم ممتاز للمرحلة دي',
      },
    ],
    tips:[
      'نم على جنبك بوسادة بين الركبتين',
      'ابعد عن الجلوس الطويل — قف كل ساعة',
      'Deadlift: مش الآن — Hip Thrust أحفظ',
    ],
  },

  full_posture: {
    name:'Full Posture Reset',
    nameAr:'إعادة ضبط الوضعية الكاملة',
    icon:'🧘',
    desc:'برنامج شامل للوضعية — رقبة + كتف + ظهر + SI',
    target:'الوضعية الكاملة',
    duration:'10-12 أسبوع',
    freq:'يومي (20 دقيقة)',
    phases:[
      {
        phase:1, name:'الأساسيات', weeks:'1-3',
        morning:[ 'chin_tuck','cat_cow','glute_bridge','doorway_str','dead_bug' ],
        evening:[ 'cerv_lateral','hip_flexor_str','wall_angels' ],
        note:'ركّز على الصباح — المساء اختياري',
      },
      {
        phase:2, name:'التنشيط', weeks:'4-6',
        morning:[ 'chin_tuck','wall_angels','serratus_wall','dead_bug','bird_dog','glute_bridge' ],
        evening:[ 'doorway_str','thoracic_ext','hip_flexor_str','prone_ytw' ],
        note:'وقت كل روتين ~15 دقيقة',
      },
      {
        phase:3, name:'التقوية', weeks:'7-12',
        morning:[ 'wall_angels','prone_ytw','face_pulls_r','serratus_wall','pallof','bird_dog' ],
        evening:[ 'doorway_str','sleeper_str','hip_flexor_str' ],
        note:'الهدف النهائي: وضعية مضبوطة دون تفكير',
      },
    ],
    tips:[
      'تصوّر نفسك كل أسبوعين لتشوف التحسن',
      'Posture reminder على التليفون كل ساعتين',
      'السباحة ممتازة كـ cardio مع برنامجك',
    ],
  },
};

/* ─────────────────────────────────────────
   CORE PROGRAMS
───────────────────────────────────────── */
const CORE_PROGRAMS = {
  core_basic: {
    name:'Core للمبتدئين',
    icon:'⭐',
    desc:'ابدأ من هنا — آمن على الظهر والـ SI',
    exIds:[ 'dead_bug','glute_bridge','bird_dog','plank','side_plank' ],
    sets:'3 سيتات — 3 أيام أسبوعياً',
    duration:'20 دقيقة',
  },
  core_intermediate: {
    name:'Core المتوسط',
    icon:'⭐⭐',
    desc:'للي عنده أساس — تنويع وشدة أعلى',
    exIds:[ 'plank','side_plank','hollow_hold','dead_bug','pallof','mountain_climb','leg_raise' ],
    sets:'3-4 سيتات — 3 أيام',
    duration:'25 دقيقة',
  },
  core_advanced: {
    name:'Core المتقدم',
    icon:'⭐⭐⭐',
    desc:'للمستوى المتقدم — قوة وثبات',
    exIds:[ 'ab_wheel','hanging_knee','russian_twist','hollow_hold','copenhagen','side_plank','plank' ],
    sets:'4 سيتات — 4 أيام',
    duration:'30 دقيقة',
  },
  core_rehab_friendly: {
    name:'Core بدون ضغط على الظهر',
    icon:'🩺',
    desc:'مخصص لمن عنده ألم في الظهر أو SI',
    exIds:[ 'dead_bug','bird_dog','glute_bridge','single_bridge','pallof','side_plank' ],
    sets:'3 سيتات — 3 أيام',
    duration:'20 دقيقة',
  },
};

/* ─────────────────────────────────────────
   CARDIO OPTIONS
───────────────────────────────────────── */
const CARDIO_OPTIONS = [
  { id:'treadmill', name:'جهاز الجري',    icon:'🏃', note:'زيادة السرعة تدريجياً' },
  { id:'bike',      name:'دراجة ثابتة',   icon:'🚴', note:'لطيف على الركبة والـ SI' },
  { id:'rowing',    name:'ماكينة التجديف', icon:'🚣', note:'ممتاز للظهر العلوي' },
  { id:'elliptical',name:'إليبتيكال',     icon:'⚡', note:'Low-impact ممتاز' },
  { id:'walk',      name:'المشي',         icon:'🚶', note:'الأبسط والأفضل للمبتدئ' },
  { id:'jump_rope', name:'حبل القفز',     icon:'🪢', note:'كارديو عالي الكثافة' },
  { id:'hiit',      name:'HIIT',          icon:'🔥', note:'20 دقيقة تعادل ساعة جري' },
  { id:'swim',      name:'سباحة',         icon:'🏊', note:'الأفضل مع مشاكل الظهر والكتف' },
];

/* ─────────────────────────────────────────
   WEEK DAYS
───────────────────────────────────────── */
const WEEK_DAYS = ['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
const WEEK_SHORT = ['أح','اث','ث','أر','خم','ج','س'];

