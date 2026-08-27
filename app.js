/* Daily Movement — 20-exercise routine, 1 minute each.
   Clips parsed from two Instagram reels; see SOURCES below. */

const SOURCES = {
  wc: {
    label: 'Morning mobility',
    who:   '@wildcard.wellness',
    url:   'https://www.instagram.com/reel/DccLrCiPQ5w/',
  },
  leo: {
    label: 'Beginner strength',
    who:   '@leo.moves',
    url:   'https://www.instagram.com/reel/DcG2OkupHcn/',
  },
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
];

const EX_SECONDS   = 60;   // one minute per exercise
const DEMO_SECONDS = 15;   // demo loops for the first 15 seconds
const RING_LEN     = 2 * Math.PI * 52;

const pad2  = n => String(n).padStart(2, '0');
const clip  = n => `clips/${pad2(n)}.mp4`;
const poster= n => `posters/${pad2(n)}.jpg`;
const mmss  = s => `${Math.floor(s / 60)}:${pad2(Math.floor(s % 60))}`;

const $ = id => document.getElementById(id);

/* ================= list view ================= */

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
      // only one demo at a time
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

/* counts that depend on the routine length */
const TOTAL = EXERCISES.length;
$('wCount').textContent  = TOTAL;
$('heroMins').textContent = TOTAL;

/* ================= progress strip ================= */

const strip = $('wStrip');
EXERCISES.forEach(() => strip.appendChild(document.createElement('li')));
const stripCells = [...strip.children];

/* ================= audio (3-2-1 countdown) ================= */

let audioCtx = null;

function unlockAudio() {
  if (audioCtx) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  try {
    audioCtx = new AC();
    // silent blip so iOS treats the context as user-activated
    const g = audioCtx.createGain();
    g.gain.value = 0;
    g.connect(audioCtx.destination);
    const o = audioCtx.createOscillator();
    o.connect(g);
    o.start();
    o.stop(audioCtx.currentTime + 0.01);
  } catch (_) { audioCtx = null; }
}

function tick() {
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const t = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(880, t);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.28, t + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(t);
  osc.stop(t + 0.2);
}

/* ================= wake lock ================= */

let wakeLock = null;

async function keepAwake() {
  if (!('wakeLock' in navigator)) return;
  try { wakeLock = await navigator.wakeLock.request('screen'); } catch (_) {}
}
function releaseAwake() {
  if (wakeLock) { wakeLock.release().catch(() => {}); wakeLock = null; }
}
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && W.active && !W.paused) keepAwake();
});

/* ================= workout ================= */

const listView    = $('listView');
const workoutView = $('workoutView');
const doneView    = $('doneView');
const wVideo      = $('wVideo');
const videoWrap   = document.querySelector('.w-videowrap');
const replayBtn   = $('replayBtn');
const ringFg      = $('ringFg');
const ringWrap    = document.querySelector('.ring-wrap');
const pauseLabel  = $('pauseLabel');
const pauseIcon   = $('pauseIcon');

const ICON_PAUSE = 'M6 5h4v14H6zm8 0h4v14h-4z';
const ICON_PLAY  = 'M8 5v14l11-7z';

const W = {
  active: false,
  paused: false,
  idx: 0,
  exStart: 0,      // epoch ms the current exercise began (shifted on pause)
  pauseAt: 0,      // epoch ms the workout was paused
  beeped: new Set(),
  manual: false,   // user re-opened the demo; stop auto-pausing it
  prefetch: null,
};

ringFg.style.strokeDasharray = RING_LEN;

function elapsedInExercise() {
  const now = W.paused ? W.pauseAt : Date.now();
  return (now - W.exStart) / 1000;
}

function loadExercise(i, { autoplayDemo = true } = {}) {
  W.idx = i;
  W.exStart = Date.now();
  W.pauseAt = 0;
  W.beeped.clear();
  W.manual = false;

  const ex = EXERCISES[i];
  const next = EXERCISES[i + 1];

  $('wIndex').textContent = i + 1;
  $('wNum').textContent   = ex.n;
  $('wName').textContent  = ex.name;
  $('wNext').textContent  = next ? next.name : 'Finish';

  stripCells.forEach((cell, k) => {
    cell.className = k < i ? 'is-done' : (k === i ? 'is-now' : '');
  });

  wVideo.poster = poster(ex.n);
  wVideo.src = clip(ex.n);
  wVideo.load();
  if (autoplayDemo) showDemo();

  // warm the next clip so the switch is instant
  if (next) {
    if (!W.prefetch) {
      W.prefetch = document.createElement('video');
      W.prefetch.muted = true;
      W.prefetch.preload = 'auto';
    }
    W.prefetch.src = clip(next.n);
  }
}

function showDemo() {
  videoWrap.classList.remove('idle');
  replayBtn.hidden = true;
  wVideo.play().catch(() => {});
}

function hideDemo() {
  wVideo.pause();
  videoWrap.classList.add('idle');
  replayBtn.hidden = false;
}

replayBtn.addEventListener('click', () => {
  W.manual = true;          // stay on until the minute ends or they tap the video
  showDemo();
});

wVideo.addEventListener('click', () => {
  if (!replayBtn.hidden) return;
  W.manual = false;
  hideDemo();
});

function render() {
  const el = Math.min(elapsedInExercise(), EX_SECONDS);
  const remaining = Math.max(0, EX_SECONDS - el);
  const secs = Math.ceil(remaining - 0.0001);

  $('wSeconds').textContent = Math.max(0, secs);
  ringFg.style.strokeDashoffset = RING_LEN * (1 - remaining / EX_SECONDS);
  ringWrap.classList.toggle('urgent', secs <= 3 && secs > 0);

  const totalLeft = (EXERCISES.length - W.idx) * EX_SECONDS - el;
  $('wTotal').textContent = `${mmss(Math.max(0, totalLeft))} left`;
}

let loopId = null;
function startLoop() { if (!loopId) loopId = setInterval(frame, 100); }
function stopLoop()  { clearInterval(loopId); loopId = null; }

function frame() {
  if (!W.active) { stopLoop(); return; }

  if (!W.paused) {
    const el = elapsedInExercise();

    // demo window: loop for the first 15s, then park on a frame
    if (!W.manual && el >= DEMO_SECONDS && replayBtn.hidden) hideDemo();

    // 3-2-1 countdown
    const secsLeft = Math.ceil(EX_SECONDS - el - 0.0001);
    if (secsLeft >= 1 && secsLeft <= 3 && !W.beeped.has(secsLeft)) {
      W.beeped.add(secsLeft);
      tick();
    }

    if (el >= EX_SECONDS) {
      if (W.idx + 1 >= EXERCISES.length) return finish();
      loadExercise(W.idx + 1);
    }
  }

  render();
}

function startWorkout() {
  unlockAudio();
  keepAwake();

  // stop any list demos still playing
  grid.querySelectorAll('video').forEach(v => {
    v.pause();
    v.closest('.card').classList.remove('playing');
  });

  W.active = true;
  W.paused = false;
  setPausedUI(false);

  listView.hidden = true;
  doneView.hidden = true;
  workoutView.hidden = false;

  loadExercise(0);
  render();
  startLoop();
}

function setPausedUI(paused) {
  pauseLabel.textContent = paused ? 'Resume' : 'Pause';
  pauseIcon.querySelector('path').setAttribute('d', paused ? ICON_PLAY : ICON_PAUSE);
}

function togglePause() {
  if (!W.active) return;
  if (W.paused) {
    W.exStart += Date.now() - W.pauseAt;   // don't count paused time
    W.paused = false;
    W.pauseAt = 0;
    keepAwake();
    if (elapsedInExercise() < DEMO_SECONDS || W.manual) showDemo();
    setPausedUI(false);
    startLoop();
  } else {
    W.paused = true;
    W.pauseAt = Date.now();
    wVideo.pause();
    releaseAwake();
    setPausedUI(true);
  }
  render();
}

function skip() {
  if (!W.active) return;
  if (W.idx + 1 >= EXERCISES.length) return finish();
  loadExercise(W.idx + 1);
  if (W.paused) { W.paused = false; setPausedUI(false); startLoop(); }
  render();
}

function prev() {
  if (!W.active) return;
  // restart the current exercise if we're past the first few seconds
  const target = elapsedInExercise() > 3 || W.idx === 0 ? W.idx : W.idx - 1;
  loadExercise(target);
  if (W.paused) { W.paused = false; setPausedUI(false); startLoop(); }
  render();
}

function finish() {
  const done = W.idx + 1;
  W.active = false;
  stopLoop();
  wVideo.pause();
  releaseAwake();
  workoutView.hidden = true;
  doneView.hidden = false;
  $('doneStat').textContent =
    `${done} exercise${done === 1 ? '' : 's'} · ${mmss(done * EX_SECONDS)}`;
}

function goHome() {
  W.active = false;
  stopLoop();
  wVideo.pause();
  wVideo.removeAttribute('src');
  wVideo.load();
  releaseAwake();
  workoutView.hidden = true;
  doneView.hidden = true;
  listView.hidden = false;
  window.scrollTo(0, 0);
}

$('startBtn').addEventListener('click', startWorkout);
$('pauseBtn').addEventListener('click', togglePause);
$('skipBtn').addEventListener('click', skip);
$('prevBtn').addEventListener('click', prev);
$('endBtn').addEventListener('click', () => { if (W.idx > 0) finish(); else goHome(); });
$('againBtn').addEventListener('click', startWorkout);
$('homeBtn').addEventListener('click', goHome);

document.addEventListener('keydown', e => {
  if (!W.active) {
    if (e.code === 'Space' || e.code === 'Enter') { /* let buttons handle it */ }
    return;
  }
  if (e.code === 'Space')      { e.preventDefault(); togglePause(); }
  if (e.code === 'ArrowRight') { e.preventDefault(); skip(); }
  if (e.code === 'ArrowLeft')  { e.preventDefault(); prev(); }
  if (e.code === 'Escape')     { e.preventDefault(); goHome(); }
});
