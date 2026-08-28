/* Daily Movement — four workouts built from three creators' routines.
   Clip boundaries were parsed from the source videos; see SOURCES. */

const SOURCES = {
  wc:  { label: 'Morning mobility',  who: '@wildcard.wellness', url: 'https://www.instagram.com/reel/DccLrCiPQ5w/' },
  leo: { label: 'Beginner strength', who: '@leo.moves',         url: 'https://www.instagram.com/reel/DcG2OkupHcn/' },
  drg: { label: 'Daily reps',        who: '@dailyrepsguy',      url: 'https://www.youtube.com/@dailyrepsguy/shorts' },
  tay: { label: 'D1 athlete mobility', who: '@tayroduncut_',    url: 'https://www.instagram.com/reel/DaLPpRmTK9Z/' },
};

const EXERCISES = [
  { n:  1, name: 'Lymphatic hops',                  src: 'wc'  },
  { n:  2, name: 'Body waves',                      src: 'wc'  },
  { n:  3, name: 'Arm swings',                      src: 'wc'  },
  { n:  4, name: 'Trunk twists',                    src: 'wc'  },
  { n:  5, name: 'Forward arm circles',             src: 'wc'  },
  { n:  6, name: 'Bodyweight squats',               src: 'wc'  },
  { n:  7, name: 'Backward arm circles',            src: 'wc'  },
  { n:  8, name: 'Dead arms',                       src: 'wc'  },
  { n:  9, name: 'Golf swings',                     src: 'wc'  },
  { n: 10, name: 'Marches',                         src: 'wc'  },
  { n: 11, name: 'Tiptoe arm swings',               src: 'wc'  },
  { n: 12, name: 'Twist the waist',                 src: 'wc'  },
  { n: 13, name: 'Ballet squats',                   src: 'wc'  },
  { n: 14, name: 'Wide arm step backs',             src: 'wc'  },
  { n: 15, name: 'Back step wave lunges',           src: 'wc'  },
  { n: 16, name: 'Pushups',                         src: 'wc'  },
  { n: 17, name: 'Lunge to forward fold',           src: 'leo' },
  { n: 18, name: 'Table taps',                      src: 'leo' },
  { n: 19, name: 'Back & head taps to elbow plank', src: 'leo' },
  { n: 20, name: 'Kneeling diagonal stretch',       src: 'leo' },
  { n: 21, name: 'Push-ups',                        src: 'drg' },
  { n: 22, name: 'Pull-ups',                        src: 'drg' },
  { n: 23, name: 'Crunches',                        src: 'drg' },
  { n: 24, name: 'Jump squats',                     src: 'drg' },
  { n: 25, name: 'Jump lunges',                     src: 'drg' },
  { n: 26, name: 'Dips',                            src: 'drg' },
  { n: 27, name: 'Inverted rows',                   src: 'drg' },
  { n: 28, name: 'Lying leg raises',                src: 'drg' },
  { n: 29, name: 'Plank',                           src: 'drg' },
  { n: 30, name: 'Pogo jumps',                      src: 'tay' },
  { n: 31, name: 'Body twists',                     src: 'tay' },
  { n: 32, name: 'Body waves',                      src: 'tay' },
  { n: 33, name: 'Elephant walks',                  src: 'tay' },
  { n: 34, name: 'Squat holds',                     src: 'tay' },
  { n: 35, name: 'Thoracic rotations',              src: 'tay' },
  { n: 36, name: 'Cossack squats',                  src: 'tay' },
  { n: 37, name: 'Pancake fold',                    src: 'tay' },
  { n: 38, name: "World's greatest stretch",        src: 'tay' },
  { n: 39, name: 'Cat cow',                         src: 'tay' },
  { n: 40, name: 'Needle threads',                  src: 'tay' },
  { n: 41, name: "90/90's",                         src: 'tay' },
  { n: 42, name: '90/90 folds',                     src: 'tay' },
  { n: 43, name: 'Shoulder dislocations',           src: 'tay' },
  { n: 44, name: 'Trunk twists',                    src: 'tay' },
];

const byNum = n => EXERCISES.find(e => e.n === n);
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);

/* His circuit: reps per round, repeated as many times as 20 minutes allows. */
const CIRCUIT = [
  { n: 21, reps: 25 },
  { n: 24, reps: 25 },
  { n: 22, reps: 5  },
  { n: 23, reps: 25 },
  { n: 26, reps: 10 },
  { n: 25, reps: 20 },
  { n: 27, reps: 10 },
  { n: 28, reps: 15 },
  { n: 29, hold: 30 },
];

/* His prescription, in his order. Holds count themselves down; rep steps wait for Done. */
const D1_MOBILITY = [
  { n: 30, hold: 30 },
  { n: 31, hold: 30 },
  { n: 32, hold: 30 },
  { n: 33, reps: 10, each: 'leg'  },
  { n: 34, hold: 30 },
  { n: 35, reps:  5, each: 'side' },
  { n: 36, reps:  5, each: 'side' },
  { n: 37, hold: 30 },
  { n: 38, reps:  5, each: 'side' },
  { n: 39, reps: 10 },
  { n: 40, reps:  5, each: 'side' },
  { n: 41, reps: 10 },
  { n: 42, reps:  5, each: 'side' },
  { n: 43, reps:  5 },
  { n: 44, reps:  5 },
];

const ROUTINES = [
  { id: 'mobility', kind: 'timed', name: 'Morning mobility',
    ids: range(1, 16), src: 'wc',
    blurb: 'The full back-and-joints routine. One minute per exercise.' },
  { id: 'stretch',  kind: 'timed', name: 'Stretch block',
    ids: range(17, 20), src: 'leo',
    blurb: 'Just the four mobility stretches. A quick reset.' },
  { id: 'full',     kind: 'timed', name: 'Everything timed',
    ids: range(1, 20),
    blurb: 'Mobility routine and stretch block back to back.' },
  { id: 'reps',     kind: 'reps',  mode: 'amrap', name: 'Daily reps circuit',
    minutes: 20, circuit: CIRCUIT, src: 'drg',
    blurb: 'Rounds of reps against a 20-minute clock. Tap Done as you finish each set.' },
  { id: 'd1',       kind: 'reps',  mode: 'once',  name: 'D1 athlete mobility',
    circuit: D1_MOBILITY, src: 'tay',
    blurb: 'Fifteen movements once through at your own pace. Holds time themselves.' },
];

const EX_SECONDS   = 60;
const DEMO_SECONDS = 15;
const RING_LEN     = 2 * Math.PI * 52;

const pad2   = n => String(n).padStart(2, '0');
const clip   = n => `clips/${pad2(n)}.mp4`;
const poster = n => `posters/${pad2(n)}.jpg`;
const mmss   = s => `${Math.floor(s / 60)}:${pad2(Math.floor(s % 60))}`;
const $ = id => document.getElementById(id);

/* ================= routine cards ================= */

const routinesEl = $('routines');

function routineMeta(r) {
  if (r.kind === 'reps') {
    return r.mode === 'amrap'
      ? `${r.minutes} min · ${r.circuit.length} exercises · rounds`
      : `~10 min · ${r.circuit.length} exercises · once through`;
  }
  return `${r.ids.length} min · ${r.ids.length} exercises · 1 min each`;
}

ROUTINES.forEach(r => {
  const card = document.createElement('button');
  card.className = 'routine' + (r.kind === 'reps' ? ' routine-alt' : '');
  const who = r.src ? `<span class="routine-who">${SOURCES[r.src].who}</span>` : '';
  card.innerHTML = `
    <span class="routine-head">
      <span class="routine-name">${r.name}</span>
      ${who}
    </span>
    <span class="routine-meta">${routineMeta(r)}</span>
    <span class="routine-blurb">${r.blurb}</span>
    <span class="routine-go">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
      Start
    </span>`;
  card.addEventListener('click', () => startRoutine(r));
  routinesEl.appendChild(card);
});

/* ================= exercise list ================= */

const grid = $('grid');
let lastSrc = null;

EXERCISES.forEach(ex => {
  if (ex.src !== lastSrc) {
    lastSrc = ex.src;
    const src = SOURCES[ex.src];
    const head = document.createElement('h2');
    head.className = 'group-head';
    head.innerHTML =
      `<span>${src.label}</span>` +
      `<a href="${src.url}" target="_blank" rel="noopener">${src.who}</a>`;
    grid.appendChild(head);
  }

  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-media">
      <video src="${clip(ex.n)}" poster="${poster(ex.n)}" muted loop playsinline
             webkit-playsinline preload="none"></video>
      <div class="card-play"><span><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span></div>
    </div>
    <div class="card-body">
      <span class="card-num">${ex.n}</span>
      <span class="card-name">${ex.name}</span>
    </div>`;

  const video = card.querySelector('video');
  card.addEventListener('click', () => {
    if (video.paused) {
      grid.querySelectorAll('video').forEach(v => {
        if (v !== video && !v.paused) {
          v.pause();
          v.closest('.card').classList.remove('playing');
        }
      });
      video.play().then(() => card.classList.add('playing')).catch(() => {});
    } else {
      video.pause();
      card.classList.remove('playing');
    }
  });

  grid.appendChild(card);
});

function stopListDemos() {
  grid.querySelectorAll('video').forEach(v => {
    v.pause();
    v.closest('.card').classList.remove('playing');
  });
}

/* ================= audio + wake lock ================= */

let audioCtx = null;

function unlockAudio() {
  if (audioCtx) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  try {
    audioCtx = new AC();
    const g = audioCtx.createGain();
    g.gain.value = 0;
    g.connect(audioCtx.destination);
    const o = audioCtx.createOscillator();
    o.connect(g);
    o.start();
    o.stop(audioCtx.currentTime + 0.01);
  } catch (_) { audioCtx = null; }
}

function tick(freq = 880) {
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const t = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, t);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.28, t + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(t);
  osc.stop(t + 0.2);
}

let wakeLock = null;
async function keepAwake() {
  if (!('wakeLock' in navigator)) return;
  try { wakeLock = await navigator.wakeLock.request('screen'); } catch (_) {}
}
function releaseAwake() {
  if (wakeLock) { wakeLock.release().catch(() => {}); wakeLock = null; }
}
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && (T.active || R.active)) keepAwake();
});

/* ================= views ================= */

const listView    = $('listView');
const workoutView = $('workoutView');
const repsView    = $('repsView');
const doneView    = $('doneView');

function showView(el) {
  [listView, workoutView, repsView, doneView].forEach(v => { v.hidden = v !== el; });
}

/* shared demo-window helper: loops for DEMO_SECONDS, then parks on a frame */
function makeDemo(video, replayBtn) {
  const wrap = video.closest('.w-videowrap');
  const api = {
    manual: false,
    show() { wrap.classList.remove('idle'); replayBtn.hidden = true; video.play().catch(() => {}); },
    park() { video.pause(); wrap.classList.add('idle'); replayBtn.hidden = false; },
    get parked() { return !replayBtn.hidden; },
    load(n) {
      api.manual = false;
      video.poster = poster(n);
      video.src = clip(n);
      video.load();
      api.show();
    },
    clear() { video.pause(); video.removeAttribute('src'); video.load(); },
  };
  replayBtn.addEventListener('click', () => { api.manual = true; api.show(); });
  video.addEventListener('click', () => {
    if (api.parked) return;
    api.manual = false;
    api.park();
  });
  return api;
}

const ICON_PAUSE = 'M6 5h4v14H6zm8 0h4v14h-4z';
const ICON_PLAY  = 'M8 5v14l11-7z';

let loopId = null;
function startLoop(fn) { stopLoop(); loopId = setInterval(fn, 100); }
function stopLoop() { clearInterval(loopId); loopId = null; }

/* ================= timed engine ================= */

const tDemo = makeDemo($('wVideo'), $('replayBtn'));
const ringFg   = $('ringFg');
const ringWrap = document.querySelector('#workoutView .ring-wrap');

const T = {
  active: false, paused: false, idx: 0,
  exStart: 0, pauseAt: 0, beeped: new Set(),
  list: [], routine: null, prefetch: null,
};

ringFg.style.strokeDasharray = RING_LEN;

const tElapsed = () => ((T.paused ? T.pauseAt : Date.now()) - T.exStart) / 1000;

let tStrip = [];
function buildTimedStrip() {
  const strip = $('wStrip');
  strip.innerHTML = '';
  T.list.forEach(() => strip.appendChild(document.createElement('li')));
  tStrip = [...strip.children];
}

function tLoad(i) {
  T.idx = i;
  T.exStart = Date.now();
  T.pauseAt = 0;
  T.beeped.clear();

  const ex   = byNum(T.list[i]);
  const next = T.list[i + 1] ? byNum(T.list[i + 1]) : null;

  $('wIndex').textContent = i + 1;
  $('wNum').textContent   = ex.n;
  $('wName').textContent  = ex.name;
  $('wNext').textContent  = next ? next.name : 'Finish';

  tStrip.forEach((c, k) => { c.className = k < i ? 'is-done' : (k === i ? 'is-now' : ''); });
  tDemo.load(ex.n);

  if (next) {
    if (!T.prefetch) {
      T.prefetch = document.createElement('video');
      T.prefetch.muted = true;
      T.prefetch.preload = 'auto';
    }
    T.prefetch.src = clip(next.n);
  }
}

function tRender() {
  const el = Math.min(tElapsed(), EX_SECONDS);
  const remaining = Math.max(0, EX_SECONDS - el);
  const secs = Math.ceil(remaining - 0.0001);

  $('wSeconds').textContent = Math.max(0, secs);
  ringFg.style.strokeDashoffset = RING_LEN * (1 - remaining / EX_SECONDS);
  ringWrap.classList.toggle('urgent', secs <= 3 && secs > 0);
  $('wTotal').textContent = `${mmss(Math.max(0, (T.list.length - T.idx) * EX_SECONDS - el))} left`;
}

function tFrame() {
  if (!T.active) { stopLoop(); return; }
  if (!T.paused) {
    const el = tElapsed();
    if (!tDemo.manual && el >= DEMO_SECONDS && !tDemo.parked) tDemo.park();

    const left = Math.ceil(EX_SECONDS - el - 0.0001);
    if (left >= 1 && left <= 3 && !T.beeped.has(left)) { T.beeped.add(left); tick(); }

    if (el >= EX_SECONDS) {
      if (T.idx + 1 >= T.list.length) return tFinish();
      tLoad(T.idx + 1);
    }
  }
  tRender();
}

function tSetPaused(p) {
  $('pauseLabel').textContent = p ? 'Resume' : 'Pause';
  $('pauseIcon').querySelector('path').setAttribute('d', p ? ICON_PLAY : ICON_PAUSE);
}

function tTogglePause() {
  if (!T.active) return;
  if (T.paused) {
    T.exStart += Date.now() - T.pauseAt;
    T.paused = false; T.pauseAt = 0;
    keepAwake();
    if (tElapsed() < DEMO_SECONDS || tDemo.manual) tDemo.show();
    tSetPaused(false);
    startLoop(tFrame);
  } else {
    T.paused = true; T.pauseAt = Date.now();
    $('wVideo').pause();
    releaseAwake();
    tSetPaused(true);
  }
  tRender();
}

function tSkip() {
  if (!T.active) return;
  if (T.idx + 1 >= T.list.length) return tFinish();
  tLoad(T.idx + 1);
  if (T.paused) { T.paused = false; tSetPaused(false); startLoop(tFrame); }
  tRender();
}

function tPrev() {
  if (!T.active) return;
  tLoad(tElapsed() > 3 || T.idx === 0 ? T.idx : T.idx - 1);
  if (T.paused) { T.paused = false; tSetPaused(false); startLoop(tFrame); }
  tRender();
}

function tFinish() {
  const done = T.idx + 1;
  T.active = false;
  stopLoop();
  tDemo.clear();
  releaseAwake();
  $('doneTitle').textContent = 'Workout complete';
  $('doneStat').textContent =
    `${done} exercise${done === 1 ? '' : 's'} · ${mmss(done * EX_SECONDS)}`;
  $('doneTally').hidden = true;
  showView(doneView);
}

/* ================= reps engine ================= */

const rDemo = makeDemo($('rVideo'), $('rReplayBtn'));

const R = {
  active: false, paused: false, idx: 0, round: 1,
  start: 0, pauseAt: 0, exStart: 0, exPauseAt: 0,
  tally: {}, beeped: new Set(), holdBeeped: new Set(),
  routine: null, prefetch: null,
};

const rNow       = () => (R.paused ? R.pauseAt : Date.now());
const rElapsed   = () => (rNow() - R.start) / 1000;
const rExElapsed = () => (rNow() - R.exStart) / 1000;
const rLeft      = () => Math.max(0, R.routine.minutes * 60 - rElapsed());
const rIsAmrap   = () => R.routine.mode === 'amrap';

let rStrip = [];
function buildRepsStrip() {
  const strip = $('rStrip');
  strip.innerHTML = '';
  R.routine.circuit.forEach(() => strip.appendChild(document.createElement('li')));
  rStrip = [...strip.children];
}

function rStep() { return R.routine.circuit[R.idx]; }

function rUnitText(step) {
  if (step.hold) return 'sec hold';
  return step.each ? `reps each ${step.each}` : 'reps';
}

function rTallyText(step) {
  const ex = byNum(step.n);
  if (!rIsAmrap()) {
    const left = R.routine.circuit.length - R.idx - 1;
    return left ? `${left} to go` : 'Last one';
  }
  const got = R.tally[step.n] || 0;
  if (step.hold) return got ? `${got} sec held so far` : 'First hold of the day';
  return got ? `${got} ${ex.name.toLowerCase()} so far` : `First set of ${ex.name.toLowerCase()}`;
}

function rLoad(i) {
  R.idx = i;
  R.exStart = Date.now();
  R.exPauseAt = 0;
  R.holdBeeped.clear();

  const step = rStep();
  const ex   = byNum(step.n);
  const nextStep = R.routine.circuit[(i + 1) % R.routine.circuit.length];

  $('rTarget').textContent = step.hold ? step.hold : step.reps;
  $('rUnit').textContent   = rUnitText(step);
  $('rName').textContent   = ex.name;
  $('rTally').textContent  = rTallyText(step);
  $('rNext').textContent   = (!rIsAmrap() && i + 1 >= R.routine.circuit.length)
    ? 'Finish' : byNum(nextStep.n).name;
  $('rCount').textContent  = rIsAmrap()
    ? `Round ${R.round}`
    : `${i + 1} / ${R.routine.circuit.length}`;

  rStrip.forEach((c, k) => { c.className = k < i ? 'is-done' : (k === i ? 'is-now' : ''); });
  rDemo.load(ex.n);

  if (!R.prefetch) {
    R.prefetch = document.createElement('video');
    R.prefetch.muted = true;
    R.prefetch.preload = 'auto';
  }
  R.prefetch.src = clip(nextStep.n);
}

function rAdvance(credit) {
  const step = rStep();
  if (credit) {
    const got = step.hold
      ? Math.min(step.hold, Math.round(rExElapsed()))
      : step.reps;
    R.tally[step.n] = (R.tally[step.n] || 0) + got;
  }
  let next = R.idx + 1;
  if (next >= R.routine.circuit.length) {
    if (!rIsAmrap()) return rFinish();
    next = 0; R.round += 1;
  }
  rLoad(next);
  rRender();
}

function rRender() {
  if (rIsAmrap()) {
    const left = rLeft();
    $('rClock').textContent = mmss(left);
    $('rClock').classList.toggle('urgent-text', left <= 10);
  } else {
    $('rClock').textContent = mmss(rElapsed());
  }

  const step = rStep();
  if (step.hold) {
    const held = Math.min(step.hold, rExElapsed());
    $('rTarget').textContent = Math.max(0, Math.ceil(step.hold - held));
  }
}

function rFrame() {
  if (!R.active) { stopLoop(); return; }
  if (!R.paused) {
    if (!rDemo.manual && rExElapsed() >= DEMO_SECONDS && !rDemo.parked) rDemo.park();

    if (rIsAmrap()) {
      const secs = Math.ceil(rLeft() - 0.0001);
      if (secs >= 1 && secs <= 3 && !R.beeped.has(secs)) { R.beeped.add(secs); tick(); }
    }

    const step = rStep();
    if (step.hold) {
      const remain = Math.ceil(step.hold - rExElapsed() - 0.0001);
      if (remain >= 1 && remain <= 3 && !R.holdBeeped.has(remain)) {
        R.holdBeeped.add(remain); tick(660);
      }
      if (rExElapsed() >= step.hold) return rAdvance(true);
    }

    if (rIsAmrap() && rLeft() <= 0) return rFinish();
  }
  rRender();
}

function rSetPaused(p) {
  $('rPauseIcon').querySelector('path').setAttribute('d', p ? ICON_PLAY : ICON_PAUSE);
}

function rTogglePause() {
  if (!R.active) return;
  if (R.paused) {
    const gap = Date.now() - R.pauseAt;
    R.start += gap;
    R.exStart += gap;
    R.paused = false; R.pauseAt = 0;
    keepAwake();
    if (rExElapsed() < DEMO_SECONDS || rDemo.manual) rDemo.show();
    rSetPaused(false);
    startLoop(rFrame);
  } else {
    R.paused = true; R.pauseAt = Date.now();
    $('rVideo').pause();
    releaseAwake();
    rSetPaused(true);
  }
  rRender();
}

function rFinish() {
  const elapsed = rElapsed();
  const amrap = rIsAmrap();
  R.active = false;
  stopLoop();
  rDemo.clear();
  releaseAwake();

  if (amrap) {
    const rounds = Math.max(0, R.round - 1) + (R.idx > 0 ? 1 : 0);
    $('doneTitle').textContent = 'Time';
    $('doneStat').textContent =
      `${R.routine.minutes} minutes · ${rounds} round${rounds === 1 ? '' : 's'}`;
  } else {
    const done = R.idx + 1;
    $('doneTitle').textContent = 'Routine complete';
    $('doneStat').textContent =
      `${done} of ${R.routine.circuit.length} movements · ${mmss(elapsed)}`;
  }

  const list = $('doneTally');
  list.innerHTML = '';
  const entries = amrap
    ? R.routine.circuit.map(s => [s, R.tally[s.n] || 0]).filter(([, v]) => v > 0)
    : [];
  entries.forEach(([s, v]) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${byNum(s.n).name}</span><b>${v}${s.hold ? ' sec' : ''}</b>`;
    list.appendChild(li);
  });
  list.hidden = entries.length === 0;

  showView(doneView);
}

/* ================= routing ================= */

let lastRoutine = ROUTINES[0];

function startRoutine(r) {
  lastRoutine = r;
  unlockAudio();
  keepAwake();
  stopListDemos();
  T.active = false;
  R.active = false;
  stopLoop();

  if (r.kind === 'timed') {
    T.routine = r;
    T.list = r.ids.slice();
    T.active = true; T.paused = false;
    $('wCount').textContent = T.list.length;
    tSetPaused(false);
    buildTimedStrip();
    showView(workoutView);
    tLoad(0);
    tRender();
    startLoop(tFrame);
  } else {
    R.routine = r;
    R.active = true; R.paused = false;
    R.idx = 0; R.round = 1; R.tally = {};
    R.beeped.clear();
    R.start = Date.now(); R.pauseAt = 0;
    rSetPaused(false);
    buildRepsStrip();
    showView(repsView);
    rLoad(0);
    rRender();
    startLoop(rFrame);
  }
}

function goHome() {
  T.active = false;
  R.active = false;
  stopLoop();
  tDemo.clear();
  rDemo.clear();
  releaseAwake();
  showView(listView);
  window.scrollTo(0, 0);
}

$('pauseBtn').addEventListener('click', tTogglePause);
$('skipBtn').addEventListener('click', tSkip);
$('prevBtn').addEventListener('click', tPrev);
$('endBtn').addEventListener('click', () => { if (T.idx > 0) tFinish(); else goHome(); });

$('rPauseBtn').addEventListener('click', rTogglePause);
$('rDoneBtn').addEventListener('click', () => R.active && rAdvance(true));
$('rSkipBtn').addEventListener('click', () => R.active && rAdvance(false));
$('rEndBtn').addEventListener('click', () => {
  if (R.round > 1 || R.idx > 0 || Object.keys(R.tally).length) rFinish(); else goHome();
});

$('againBtn').addEventListener('click', () => startRoutine(lastRoutine));
$('homeBtn').addEventListener('click', goHome);

document.addEventListener('keydown', e => {
  if (T.active) {
    if (e.code === 'Space')      { e.preventDefault(); tTogglePause(); }
    if (e.code === 'ArrowRight') { e.preventDefault(); tSkip(); }
    if (e.code === 'ArrowLeft')  { e.preventDefault(); tPrev(); }
    if (e.code === 'Escape')     { e.preventDefault(); goHome(); }
  } else if (R.active) {
    if (e.code === 'Space')      { e.preventDefault(); rTogglePause(); }
    if (e.code === 'Enter')      { e.preventDefault(); rAdvance(true); }
    if (e.code === 'ArrowRight') { e.preventDefault(); rAdvance(false); }
    if (e.code === 'Escape')     { e.preventDefault(); goHome(); }
  }
});
