# GDSA website — file guide

## Structure
```
index.html         Home (logo + shared Google Calendar)
about.html          About + social links + Meet the Officers
competition.html    Design Competition (current prompt + past carousel)
photos.html         Photo gallery
financials.html     Dues + payment buttons
styles.css          All styling / design tokens
script.js           Mobile nav, competition carousel, photo lightbox
assets/             Images and the font file (see below)
```

## Two files to drop into `assets/` before this is live
1. **`assets/NewakeFont-Demo.otf`** — the Newake title font. `styles.css`
   already points to this exact path via `@font-face`; the pages will fall
   back to a system sans-serif for headings until it's added.
2. **`assets/GDSA_Badge.png`** — the club logo. It's referenced in the nav
   on every page and large on the home page hero; a broken-image icon will
   show until it's added.

## Content still marked as placeholder
- **Officer emails** (`about.html`) — each officer has an empty
  `mailto:` link with `[email placeholder]` text.
- **Officer headshots** (`about.html`) — each officer currently shows
  initials on a colored square. Swap in a real photo by replacing the
  commented-out line above each `<span>`, e.g.:
  `<img src="assets/officers/cole-chen.jpg" alt="Headshot of Cole Chen">`
- **About page copy** (`about.html`) — one italic placeholder paragraph,
  meant to be replaced with your own club description.
- **Instagram / Linktree links** (`about.html`) — `REPLACE_WITH_HANDLE` in
  both `href`s.
- **Venmo / CashApp / PayPal links** (`financials.html`) —
  `REPLACE_WITH_HANDLE` in each `href`, plus the treasurer's email.
- **Google Form links** (`competition.html` and the carousel data in
  `script.js`) — `REPLACE_WITH_FORM_LINK` wherever it appears.
- **Photos** (`photos.html`) — six placeholder tiles. Replace the
  `<span class="photo-placeholder">` inside a button with an `<img>`, and
  set that button's `data-full` (path to the full-size image) and
  `data-caption` attributes so the lightbox works.

## Updating the Design Competition each month
Open `competition.html` and edit the `.current-prompt` block directly —
change the month, title, brief, deadline, and form link.

When a new month starts, move the outgoing prompt's details into the
`pastCompetitions` array at the top of the carousel section in
`script.js` (copy the commented-out template object in that array and
fill it in). It'll automatically show up in the arrow-navigable "Past
prompts" carousel — no HTML changes needed there.

## Accessibility notes
- Skip-to-content link, semantic landmarks, and visible focus states
  (readable on both light and dark colored blocks) are built in.
- The calendar iframe has a fallback link in case it doesn't load or a
  screen reader user prefers a direct page.
- The photo lightbox uses a native `<dialog>` element, which handles
  focus-trapping and Escape-to-close automatically.
- Motion (smooth scroll, button transitions) is disabled for users with
  `prefers-reduced-motion` set.
