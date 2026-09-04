# FamilyHub — learning React in the open

This is a learning log, not a product. It is a course I wrote for myself: one family app,
seventeen stages, each stage a piece of React I wanted to use for real instead of reading
about. I put the plan together with an AI assistant so it would cover React broadly and in
the order that makes sense to learn it — then started working through it, stage by stage.

The rule I set: every stage has to end in something that runs. That is why the app grows
lopsided — accessible markup long before interactivity — rather than staying a folder of
exercises.

**What it looks like right now:** https://familyhub-orpin-ten.vercel.app/

## Where I am

Ten of fifty-nine boxes ticked. Stage 2 is the one I am on; stage 3 got started early
because the shopping list needed a place to live.

| # | Stage | Progress |
|---|---|---|
| 0 | Project setup — Vite, ESLint, Git | 4/4 ✅ |
| 1 | JSX, components, props | 5/5 ✅ |
| 2 | `useState` and event handlers | 0/3 ⬅ here |
| 3 | Lists, `map()`, keys | 1/3 |
| 4 | Forms and validation | 0/3 |
| 5 | `useEffect` | 0/2 |
| 6 | LocalStorage | 0/4 |
| 7 | React Router | 0/5 |
| 8 | Context API | 0/2 |
| 9 | Custom hooks | 0/3 |
| 10 | A UI component set | 0/5 |
| 11 | Responsive CSS | 0/4 |
| 12 | Working with an API | 0/4 |
| 13 | Performance | 0/3 |
| 14 | Supabase | 0/3 |
| 15 | PWA | 0/2 |
| 16 | Refactoring | 0/4 |

The plan itself lives in [ROADMAP.md](ROADMAP.md) (what to study and what to build at each
stage), the boxes in [CHECKLIST.md](CHECKLIST.md), and the same thing as a map in
[MINDMAP.md](MINDMAP.md), readable through [Markmap](https://markmap.js.org/repl). The
checklist and the mindmap are still in Russian — they are the files I tick daily; the code,
the roadmap and this file are in English.

## What the first two stages produced

Three widgets stand on one screen — a water tracker, a weather card and a shopping list.
Each began as a plain HTML prototype, kept in [artifacts/](artifacts), and was then cut
into small components: the water tracker alone is eleven of them around one container.

Two components are shared rather than repeated. `Card` gives every widget the same frame
and heading, and `LiveRegion` renders an `aria-live` element so a screen reader hears what
the page shows.

So the buttons look right and do nothing yet: composition and accessible markup came out
of stage 1, and state arrives with stage 2. That gap is the honest state of the log.

## Running it

```bash
npm install
npm run dev
```

`npm run build` writes `dist/`, `npm run preview` serves it, `npm run lint` runs ESLint.
Node 20 or newer.

## Structure

```
src/main.jsx                 entry point
src/App.jsx                  composes the widgets on one screen
src/components/<Name>/       one folder per component: .jsx next to its .css
src/components/Card/         shared frame — eyebrow, title, children
src/components/LiveRegion/   shared sr-only aria-live announcer
public/                      favicon, logo, icons, the plant illustration
artifacts/                   the HTML prototypes each widget started as
```

React 19 · Vite 8 · plain CSS per component · ESLint · deployed on Vercel
