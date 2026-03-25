# Audio Sources — What to Source

All audio files go in `/public/audio/`. The app handles missing files gracefully (Howler catches errors), so the site works without audio — sounds are progressive enhancement.

## Files Needed

| Filename | Used When | Suggested Search Term |
|---|---|---|
| `ocean-ambient.mp3` | Ambient loop — plays as the map is revealed and throughout | "ocean waves ambient loop" |
| `page-turn.mp3` | Storybook page flip | "old book page turn" |
| `quill-writing.mp3` | While pages flip | "quill writing on parchment" |
| `chest-creak.mp3` | Treasure chest opens in Treasury panel | "wooden chest creak" or "treasure chest open" |
| `cork-pop.mp3` | Bottle uncorks in Harbor panel | "wine cork pop" or "bottle cork" |
| `ship-horn.mp3` | On successful contact form send | "ship foghorn" or "nautical horn" |
| `stone-scrape.mp3` | Ancient Ruins panel opens | "stone scrape" or "stone tablet reveal" |
| `lighthouse-bell.mp3` | Lighthouse panel opens | "ship bell" or "buoy bell" |
| `mugs-rattle.mp3` | Ambient loop in Tavern panel (stops when closed) | "tavern ambient" or "mugs clinking" |

## Free Sources

- **freesound.org** — best library, requires free account, Creative Commons licensed
- **pixabay.com/sound-effects/** — no account required, royalty-free
- **mixkit.co/free-sound-effects/** — no account, categorized
- **soundbible.com** — older but has nautical/wood sounds

## Notes

- All files should be `.mp3` format for broadest browser compatibility
- Keep files short: ambient loops 30–90s, one-shots under 3s
- If a file is missing, the game still works — just no sound for that cue
- After adding files, set `VITE_FORMSPREE_ID` in `.env.local` (see `.env.example`) to activate the contact form

## Portrait Placeholder

To add your photo to the About Me (Fortress) panel:
1. Add your photo as `/public/images/taqee-portrait.jpg` (or `.png`)
2. Edit [FortressPanel.jsx](src/components/panels/Fortress/FortressPanel.jsx) — replace the `avatarPlaceholder` div with:
   ```jsx
   <img src="/images/taqee-portrait.jpg" alt="Taqee Moore" className={styles.avatar} />
   ```

## LinkedIn URL

Update your LinkedIn URL in:
- [FortressPanel.jsx](src/components/panels/Fortress/FortressPanel.jsx) — `https://linkedin.com/in/taqee-moore`
- [LighthousePanel.jsx](src/components/panels/Lighthouse/LighthousePanel.jsx) — same URL

Confirm the slug is correct on your LinkedIn profile.

## Resume PDF

Add your resume as `/public/resume/Taqee_Moore_Resume.pdf` — the download link in the Fortress panel will work automatically.
