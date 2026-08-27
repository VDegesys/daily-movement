# Daily Movement

A 20-minute daily movement routine as a web app.

**Live:** https://vdegesys.github.io/daily-movement/

- Browse all 20 exercises with a looping demo clip for each
- One-tap workout timer: 1 minute per exercise, 20 minutes total
- The demo loops for the first 15 seconds of each minute, then parks on a
  frame with a **Show demo** button so you can pull it back up any time
- 3-2-1 countdown beeps before each exercise change
- Skip / previous / pause, and a screen wake lock so the display stays on

Keyboard: `space` pause, `→` skip, `←` previous, `esc` exit.

## The routine

### Morning mobility — [@wildcard.wellness](https://www.instagram.com/reel/DccLrCiPQ5w/)

| # | Exercise | # | Exercise |
|---|---|---|---|
| 1 | Lymphatic hops | 9 | Golf swings |
| 2 | Body waves | 10 | Marches |
| 3 | Arm swings | 11 | Tiptoe arm swings |
| 4 | Trunk twists | 12 | Twist the waist |
| 5 | Forward arm circles | 13 | Ballet squats |
| 6 | Bodyweight squats | 14 | Wide arm step backs |
| 7 | Backward arm circles | 15 | Back step wave lunges |
| 8 | Dead arms | 16 | Pushups |

### Beginner strength — [@leo.moves](https://www.instagram.com/reel/DcG2OkupHcn/)

| # | Exercise | Cue from the reel |
|---|---|---|
| 17 | Lunge to forward fold | Both sides, one minute nonstop, slow and controlled |
| 18 | Table taps | Hips off the floor, reach your toes every rep |
| 19 | Back & head taps to elbow plank | Core tight, big circles, ten reps in total |
| 20 | Kneeling diagonal stretch | Right leg extended, right hand taps left heel; ten reps a side |

## Credit

Routines and all demo footage come from
[@wildcard.wellness](https://www.instagram.com/reel/DccLrCiPQ5w/) (1-16) and
[@leo.moves](https://www.instagram.com/reel/DcG2OkupHcn/) (17-20).
Clips are excerpts of those reels, muted, for personal use.

## Structure

    index.html      markup for the list, workout and finish views
    styles.css      styling
    app.js          exercise data, timer, demo-window logic
    clips/NN.mp4    20 muted demo clips (540x960)
    posters/NN.jpg  poster frame for each clip
