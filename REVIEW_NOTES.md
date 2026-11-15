# Review notes and final handoff checklist

**Review scope:** the current `main` branch baseline, inspected before the teammate's next HTML handoff. The teammate is still improving the game, so these notes are not a sign-off of the final release. Re-review the new HTML before replacing the live version.

## Baseline inspection

- The game is currently a single `index.html` file with inline CSS and JavaScript.
- The main game uses HTML Canvas; sound and music are synthesized with the Web Audio API.
- No external JavaScript libraries, image files, or audio files were found in the reviewed HTML.
- The only external URL in the HTML is the Google Fonts stylesheet for Press Start 2P. A fallback font is present in the CSS.
- The game uses browser `localStorage` for high-score and collection/exploration progress.
- The current page had a title and viewport declaration, but no meta description or social-sharing preview metadata.
- The repository now includes a project favicon and an explicit reference to it from the HTML.
- The inspected baseline had no duplicate HTML IDs.

## Science wording to revisit with the next HTML

1. **Earth–Mars message delay:** the baseline fact says radio signals take roughly 5–20 minutes. NASA sources describe a variable one-way delay; one NASA episode gives 13–22 minutes in its example, and NASA's Mars communications material discusses delays that can exceed 20 minutes. Use a sourced, clearly one-way description rather than presenting a fixed range as universal. See [NASA CHAPEA audio log](https://www.nasa.gov/podcasts/houston-we-have-a-podcast/chapea-2-audio-log-3/) and [NASA communications delay paper](https://www.nasa.gov/wp-content/uploads/2024/01/mars-communications-disruption-and-delay.pdf).

2. **Martian sand and solar cells:** the baseline wording says Mars sand is "full of silicon, the stuff in solar cells." This is too simplified and could imply raw sand is ready-made photovoltaic silicon. NASA describes Rocknest as a mixture of minerals and non-crystalline material, while silicon production from silica-containing resources requires industrial processing. Suggested direction: explain that Martian soil contains silicate minerals and could be a future feedstock only after substantial processing. See [NASA/JPL Rocknest analysis](https://www.jpl.nasa.gov/news/nasa-mars-rover-fully-analyzes-first-soil-samples/) and [NASA ISRU](https://www.nasa.gov/reference/jsc-in-situ-resource-utilization/).

3. **Hematite wording:** change phrases such as "glows with hematite" to a more precise description such as "contains hematite-rich rocks/minerals," and cite the relevant Curiosity mineral analysis.

4. **Temperature wording:** make clear that any warm daytime temperature is a local/seasonal possibility, not a typical Mars-wide daytime condition. Mars temperatures vary strongly by location, season, and time of day.

5. **Gameplay vs. engineering:** keep the note that resource values, build costs, survival outcomes, and event timings are simplified game mechanics, not NASA mission specifications.

## Before publishing the teammate's final HTML

- [ ] Confirm the final file is the approved team version and keep a backup of the current file.
- [ ] Preserve the project title, favicon reference, viewport, description, and social preview metadata.
- [ ] Test the title screen, How to Play, all three power choices, the full 10-sol run, every overlay/menu, win/loss endings, replay, and reset behavior.
- [ ] Test keyboard controls and touch controls on a phone/tablet-sized screen.
- [ ] Test with Google Fonts unavailable; fallback typography should remain readable.
- [ ] Test with sound enabled/disabled, music enabled/disabled, and browser autoplay restrictions.
- [ ] Check that the game works from the deployed site and from a local copy.
- [ ] Check browser console for errors, broken assets, and unexpected network requests.
- [ ] Check text for clipping/overlap at common screen sizes and browser zoom levels.
- [ ] Add a text alternative or accessible description for important Canvas content; ensure controls have clear labels and visible keyboard focus.
- [ ] Recheck every scientific statement and add missing references to `SOURCES.md`.
- [ ] Update `THIRD_PARTY_NOTICES.md` for any new fonts, images, audio, libraries, or datasets.
- [ ] Confirm all contributors' authority to license their original work before adding the final `LICENSE` file.
- [ ] Confirm the NASA submission and README use consistent project title, challenge details, sources, and license information.

## Deployment note

The Vercel project is linked to the GitHub repository. Commits to the production branch can trigger a new deployment automatically. Verify the new deployment is **READY** and test the preview before treating a handoff as final.
