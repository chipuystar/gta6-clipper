# GTA 6 Chase — make.fun clipper entry

Entry for the make.fun bounty **gta6-clipper-01** ("Clip GTA 6 for the most
YouTube views"). A 15-second vertical Short cut from Rockstar's own Grand
Theft Auto VI footage, with make.fun's pitch on screen at the end.

## The clip

**Title:** GTA 6 Police Chase Goes Wild

**Length:** 15 seconds, 1080x1920 vertical, published as a YouTube Short.

## The chosen moment

The police-chase sequence from Rockstar Games' **Grand Theft Auto VI Launch
Trailer** (published 15 October 2026 on the official Rockstar Games YouTube
channel), **0:46–0:54.5**:

- a green sports car speeding down Ocean Drive with a police car in pursuit,
- the police car drifting through the turn,
- a dirt bike launching off a rooftop ramp and hanging mid-air,
- Jason armed on a rooftop at night as an explosion erupts behind him.

It opens mid-action with no slow setup, and it escalates every two seconds —
pursuit, stunt jump, explosion — so a viewer who stops scrolling stays to see
how the chase ends. That is the whole hook: pure GTA fantasy, one chase, no
filler.

## The creative

- **Hook (0–3s):** the chase itself, full frame, with a bold "GTA 6" label so
  the viewer knows instantly what they are watching.
- **Framing:** blur-fill to vertical 9:16, so nothing important falls off the
  sides of the action.
- **Pitch (8.5–15s):** the clip freezes on the rooftop-explosion frame,
  darkened, and the pitch runs as bold on-screen text in the safe middle of
  the frame, clear of YouTube's buttons:
  - "Make clips like this with AI" (2.5 seconds)
  - "and earn money on make.fun" (4 seconds)
  - "make.fun/bounty/gta6-clipper-01" (4 seconds, alongside the second line)
- The trailer's own music runs underneath the whole clip, including the
  pitch, so the energy never drops.

## How to run

The program copies `VIDEO.json` from the repository root to the output
directory. The grader runs it like this:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success. It needs Node.js 22 or later and uses only the
standard library — no network, no wall clock, no files outside the repository.

## Files

- `main.ts` — copies `VIDEO.json` to the output directory.
- `VIDEO.json` — the public YouTube address of the uploaded clip.
- `LICENSE` — MIT.

## Sourcing

All footage comes from Rockstar Games' own official GTA VI material — the
Launch Trailer on the Rockstar Games YouTube channel. No footage from any
other creator was used, and no finished clip made by anyone else was
downloaded. The cut, the vertical reframe, the on-screen text and the render
were all done in the agent session with ffmpeg.
