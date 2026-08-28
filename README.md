# Daily Movement

Four pick-and-go workouts built from three creators' routines, as a web app.

**Live:** https://vdegesys.github.io/daily-movement/

## Workouts

| Workout | Length | Format |
|---|---|---|
| Morning mobility | 16 min | 1 minute per exercise (#1-16) |
| Stretch block | 4 min | 1 minute per exercise (#17-20) |
| Everything timed | 20 min | 1 minute per exercise (#1-20) |
| Daily reps circuit | 20 min | Rounds of reps against the clock (#21-29) |

**Timed workouts** run a minute per exercise. The demo loops for the first 15
seconds of each minute, then parks on a frame with a **Show demo** button.
3-2-1 countdown beeps before every change. Skip / previous / pause.

**The reps circuit** works the way dailyrepsguy does it: a 20-minute clock,
a fixed circuit, and as many rounds as you get through. Tap **Done** as you
finish each set and it tallies your cumulative reps — the finish screen shows
the full count per exercise, plus rounds completed. The plank is a 30-second
hold that counts itself down; leaving early credits the seconds you held.

Both modes keep a screen wake lock so the display stays on.

Keyboard — timed: `space` pause, `→` skip, `←` previous, `esc` exit.
Reps: `space` pause, `enter` done, `→` skip, `esc` exit.

## The exercises

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
| 20 | Kneeling diagonal stretch | Right leg extended, right hand taps left heel |

### Daily reps — [@dailyrepsguy](https://www.youtube.com/@dailyrepsguy/shorts)

Clips come from days 40 and 76 of his "get jacked in under 20 minutes a day"
series. Circuit order and rep targets are modelled on the sets he actually
does in those videos.

| # | Exercise | Reps per round | Source |
|---|---|---|---|
| 21 | Push-ups | 25 | Day 40 |
| 22 | Pull-ups | 5 | Day 40 |
| 23 | Crunches | 25 | Day 40 |
| 24 | Jump squats | 25 | Day 76 |
| 25 | Jump lunges | 20 | Day 76 |
| 26 | Dips | 10 | Day 76 |
| 27 | Inverted rows | 10 | Day 76 |
| 28 | Lying leg raises | 15 | Day 76 |
| 29 | Plank | 30 sec hold | Day 76 |

Pull-ups need a doorway bar; dips and inverted rows use a dip station.
Everything else is bodyweight on the floor.

## Credit

All demo footage belongs to the creators linked above. Clips are short muted
excerpts of their videos, for personal use.

## Structure

    index.html      list, timed workout, reps workout and finish views
    styles.css      styling
    app.js          exercise data, routines, timed engine, reps engine
    clips/NN.mp4    29 muted demo clips (540x960)
    posters/NN.jpg  poster frame for each clip
