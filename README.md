# Charishma & Vinay Kumar — Wedding Website (React)

A React + Vite wedding invitation site built around your Telugu wedding card
(Samuhartham, 28 August 2026, Tirupati) and the reference designs you shared.

## What's inside

```
wedding-react/
├── index.html
├── package.json
├── vite.config.js
├── vite.standalone.config.js   → config for the double-click-friendly build
├── dist/                    → prebuilt hosting-ready version (needs a static server)
├── dist-standalone/         → prebuilt SINGLE FILE — just double-click index.html
└── src/
    ├── main.jsx               entry point
    ├── App.jsx                 wires the intro splash, lightbox & all sections
    ├── index.css                 the entire design system (colors, type, layout, animation)
    ├── data/weddingData.js         ← edit names/dates/venue/contacts here, once
    ├── utils/ics.js               "add to calendar" (.ics) file generator
    ├── assets/                    all site images
    └── components/
        ├── IntroSplash.jsx        the "tap to open" door screen shown on load
        ├── PetalField.jsx         falling petal background effect
        ├── Nav.jsx                 sticky nav + scroll progress thread
        ├── Hero.jsx                 full-bleed photo home section
        ├── InviteCard.jsx           "You Are Warmly Invited" summary card
        ├── Festivities.jsx           Reception & Wedding cards with lightbox photos
        ├── Lightbox.jsx              full-screen image viewer
        ├── Families.jsx              bride & groom family details
        ├── Venue.jsx                  address + embedded map
        ├── Countdown.jsx              live countdown, placed after the venue
        ├── RSVP.jsx                   RSVP form
        ├── PlannerInfo.jsx            wedding planner blurb + directions (before footer)
        └── Footer.jsx
```

## How the images were made

- **Hero background** (`assets/hero-bg.jpg`) — your uploaded arch photo, used
  full-bleed as the entire home section background. The couple already sits
  on the left side of that photo, so the site text sits in the blank arch
  space instead of covering them.
- **Reception card** (`assets/reception.jpg`) — your reception template with
  the placeholder "DATE • TIME / ADDRESS LINE 1/2" text replaced with the
  real names, date, and venue, blended back into the original artwork.
- **Wedding card** (`assets/wedding-invite.jpg`) — the joined-hands
  illustration you uploaded, composed onto a new card with the muhurtham
  details baked in underneath.
- **Splash screen** (`assets/door-left.jpg` / `door-right.jpg`) — your "Tap
  to Open" doors image, split down the middle so each half can slide open
  like real doors when tapped.

Clicking either festivities photo opens it full-screen in a lightbox.

## Running it

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
cd wedding-react
npm ci
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

Use `npm ci` rather than `npm install` here — it installs the exact versions
recorded in `package-lock.json` instead of re-resolving newer ones from the
registry. This project pins exact dependency versions (Vite 5.4.21,
`@vitejs/plugin-react` 4.7.0) on purpose: `vite-plugin-singlefile` (used by
the standalone build) only supports Vite up to the 8.x line depending on
version, and letting npm silently pick up a newer major Vite release can
break the build (missing options, plugin incompatibilities, etc.). If you
ever see Vite errors mentioning `oxc`, `rolldown`, or "environments", it
means something installed a newer major Vite than this project was built
for — run `rm -rf node_modules package-lock.json && npm install` from a
clean state to fix it, or just use `npm ci` from the start.

## Building for deployment

```bash
npm run build
```

This regenerates the `dist/` folder — a plain HTML/CSS/JS bundle you can
upload to any static host (Netlify, Vercel, GitHub Pages, etc.).

A `dist/` folder is already included in this zip so you don't have to build
it yourself. To preview it locally, browsers block ES module scripts from
running directly off `file://`, so serve it instead of double-clicking it:

```bash
cd wedding-react
npx serve dist
# or: python3 -m http.server --directory dist 8080
```

### Just want to double-click and preview it? Use `dist-standalone/`

`dist-standalone/index.html` is a single self-contained file (CSS, JS, and
every image inlined) — open it straight from your file browser, no server
needed. It's larger (~1.6 MB) because everything is embedded, so use `dist/`
for actual hosting and `dist-standalone/` only for quick local previews or
sharing a single file over email/WhatsApp.

To rebuild it after making changes:

```bash
npm run build:standalone
```

## Customizing

- **All text/dates/venue/contacts**: edit `src/data/weddingData.js` — every
  component reads from this one file.
- **Wedding planner details**: the `planner` object in `weddingData.js`
  currently reuses the couple's family address as the planner's contact
  address (the source invitation didn't list a separate office address) —
  update `planner.address` and `planner.mapsQuery` if the planner has a
  different office location.
- **Colors/fonts/spacing**: edit the `:root` variables and rules in `src/index.css`.
- **Countdown target**: `muhurthamTarget` in `weddingData.js`.
- **Images**: replace the files in `src/assets/` (keep the same filenames,
  or update the `import` lines at the top of the relevant component).

## Collecting real RSVPs

The RSVP form currently shows an on-screen thank-you but doesn't send data
anywhere. To collect real responses, point the form at a backend such as
[Formspree](https://formspree.io) or [Getform](https://getform.io), or pipe
submissions into a Google Sheet with a small Apps Script web app.
