# CPSC 319 Project Showcase Website

Single-page showcase site for the UBC CPSC 319 Software Engineering Project event.

## What this includes

- Immersive hero with animated Three.js ambient background
- Glassmorphism UI system and responsive layout
- Client cards + filterable 14-project showcase
- Project detail modal
- Event details, schedule, map embed, and countdown
- RSVP form with local-storage fallback
- Dark mode toggle + reduced-motion support

## Tech

- Plain HTML/CSS/JavaScript
- Three.js (CDN)
- Google Fonts (CDN)

## Run locally

No build step required.

1. Open [index.html](./index.html) directly, or
2. Serve the folder with any static server for best behavior.

## Project structure

- [index.html](./index.html): page structure and content
- [styles.css](./styles.css): design system, layout, motion, responsive rules
- [main.js](./main.js): data, rendering, interactions, Three.js, RSVP handling

## Content/data editing

- Update clients and projects in [main.js](./main.js) (`clients` and `projects` arrays).
- Update event copy/date in [index.html](./index.html).
- Replace placeholder instructor/team info in [index.html](./index.html).

## RSVP backend note

Current RSVP submission stores records in `localStorage` (for demo/dev).
For production, wire the form to Formspree, Apps Script, Netlify Forms, or a serverless endpoint.

## Accessibility notes

- Keyboard navigable links/buttons/cards
- Focus-visible styles
- `prefers-reduced-motion` handling
- Semantic labels/roles for key UI parts
