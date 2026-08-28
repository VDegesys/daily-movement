# Daily Movement

Five pick-and-go workouts built from four creators' routines, as a web app.

**Live:** https://vdegesys.github.io/daily-movement/

## Workouts

| Workout | Length | Format |
|---|---|---|
| Morning mobility | 16 min | 1 minute per exercise (#1-16) |
| Stretch block | 4 min | 1 minute per exercise (#17-20) |
| Everything timed | 20 min | 1 minute per exercise (#1-20) |
| Daily reps circuit | 20 min | Rounds of reps against the clock (#21-29) |
| D1 athlete mobility | ~10 min | Fifteen movements once through, self-paced (#30-44) |

**Timed workouts** run a minute per exercise. The demo loops for the first 15
seconds of each minute, then parks on a frame with a **Show demo** button.
3-2-1 countdown beeps before every change. Skip / previous / pause.

**The reps circuit** works the way dailyrepsguy does it: a 20-minute clock,
a fixed circuit, and as many rounds as you get through. Tap **Done** as you
finish each set and it tallies your cumulative reps — the finish screen shows
the full count per exercise, plus rounds completed. The plank is a 30-second
hold that counts itself down; leaving early credits the seconds you held.

**D1 athlete mobility** runs his prescription once through at your own pace.
The five 30-second holds count themselves down and advance on their own; the
rep steps wait for **Done**. The clock counts up so you can see your pace.

All modes keep a screen wake lock so the display stays on.

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

### D1 athlete mobility — [@tayroduncut_](https://www.instagram.com/reel/DaLPpRmTK9Z/)

His "10 minute morning mobility routine", in his order with his prescribed doses.

| # | Exercise | Dose | | # | Exercise | Dose |
|---|---|---|---|---|---|---|
| 30 | Pogo jumps | 30 sec | | 38 | World's greatest stretch | 5x each side |
| 31 | Body twists | 30 sec | | 39 | Cat cow | 10x |
| 32 | Body waves | 30 sec | | 40 | Needle threads | 5x each side |
| 33 | Elephant walks | 10x each leg | | 41 | 90/90's | 10x |
| 34 | Squat holds | 30 sec | | 42 | 90/90 folds | 5x each side |
| 35 | Thoracic rotations | 5x each side | | 43 | Shoulder dislocations | 5x |
| 36 | Cossack squats | 5x each side | | 44 | Trunk twists | 5x |
| 37 | Pancake fold | 30 sec | | | | |

Shoulder dislocations and trunk twists use a resistance band in the clips; a
towel or broomstick works, or do them empty-handed.

Note #32/#44 share names with #2/#4 from the mobility routine but are
different movements — the section headers keep them apart.

## Credit

All demo footage belongs to the creators linked above. Clips are short muted
excerpts of their videos, for personal use.

## Structure

    index.html      list, timed workout, reps workout and finish views
    styles.css      styling
    app.js          exercise data, routines, timed engine, reps/circuit engine
    clips/NN.mp4    44 muted demo clips (540x960)
    posters/NN.jpg  poster frame for each clip
