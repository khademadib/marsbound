# Review notes and final handoff checklist

**Review scope:** the teammate-provided `MarsBoundv16.html` from Google Drive, staged on the GitHub branch `review/marsbound-v16`. The production `main` branch was not replaced by this review.

## Version 16 overview

The new handoff is a substantial gameplay update. It adds or expands:

- Easy and Hard difficulty modes with different starting conditions and pressure.
- A 10-sol mission with day/night progression and decision events.
- A habitat interior with sheltering, beds for recovery, and a computer interaction.
- Dust-storm warnings, outside-health pressure, and instructions to return to the habitat.
- Timed orders, mission goals, supply runs, resource collection, build actions, and deposit/drop-off interactions.
- NASA/JPL image cards, source links, visible credit labels, and fallback illustrations/emoji.
- A map, facts/collection book, animated How to Play section, and touch controls.

## Static checks performed

- The updated HTML is a single-page file with inline CSS and JavaScript.
- The v16 source is about 150 KB and contains two inline script blocks.
- JavaScript syntax check with Node.js `node --check` passed after the updates.
- The static HTML scan found 62 element IDs and no duplicate IDs.
- Static references through the game's `$('id')` helper resolved against the page/dynamically injected markup in the scan.
- No external JavaScript library, `fetch()`, XMLHttpRequest, WebSocket, analytics, or gameplay backend was found in the reviewed source.
- Gameplay progress/high score/collection data uses browser `localStorage`; it is local to the browser/device.
- The only external font dependency is Google Fonts (Press Start 2P), with a CSS fallback.
- NASA/JPL images load from remote NASA/JPL image services when a card is opened. The code includes fallback visuals if an image cannot be loaded.
- The favicon reference, page description, theme color, social-sharing title/description, descriptive image alt text, lazy image loading, touch-control labels, and a reduced-motion stylesheet are present in the review branch.

**Not performed:** a full interactive browser test of every mode, event, screen, and phone layout. Static syntax checks cannot confirm the entire game loop behaves correctly in a real browser.

## Corrections included in the review branch

1. Clarified the Mars atmosphere statement as surface pressure compared with Earth's average sea-level pressure.
2. Changed the Earth–Mars communication fact to say one-way delay varies with planetary positions and can exceed 20 minutes.
3. Qualified the possible 20°C temperature as an equatorial midday condition rather than a general Mars temperature.
4. Reworded the hematite and Martian-soil/silicate explanations so raw soil is not presented as ready-made metal or solar-cell silicon.
5. Removed unsupported fixed percentage claims from the panel-dust and dust-storm educational tips; game effects are identified as simplified.
6. Replaced generic NASA search/legacy links with specific NASA pages for Phoenix ice, Veggie plants, and the Opportunity dust-darkening image.
7. Corrected NASA image source pages and displayed credits for Bradbury Landing, Yellowknife Bay, the Mount Sharp map, the impact crater, and the Spirit dust-devil image.
8. Kept supply-run resource targeting within the selected region, and added a fallback for a local resource node if all matching nodes have been collected before delivery.
9. Restored the favicon reference after the teammate's v16 file omitted it.

## Before treating v16 as final

- [ ] Open the Vercel preview from `review/marsbound-v16` and test the title screen and How to Play.
- [ ] Complete a full Easy run and a full Hard run.
- [ ] Test every power strategy: solar, nuclear, and hybrid.
- [ ] Test the day/night cycle, decision events, mission orders, minigames, and all mission endings.
- [ ] Complete a supply run: travel to the named area, collect the selected resource, return to the base drop-off, and verify the run completes.
- [ ] Enter and exit the habitat; test sheltering during a storm, bed recovery, and computer interaction.
- [ ] Test each build, item use, inventory, goals, map, and collection/facts book.
- [ ] Test sound/music toggles and browser autoplay behavior after the first user interaction.
- [ ] Test keyboard controls and touch controls on an actual phone/tablet, especially in landscape orientation. The game stage is designed around a 16:9 view; portrait screens may feel cramped.
- [ ] Test with Google Fonts blocked and with NASA image hosts unavailable; fallback font and fallback visuals should remain usable.
- [ ] Test the reduced-motion setting and confirm the storm warning remains obvious without flashing.
- [ ] Check browser console, image failures, clipped text, small-screen overlays, and keyboard focus.
- [ ] Check important Canvas content with a screen reader. The new canvas labels and control labels are helpful, but they do not make the complete Canvas experience fully screen-reader accessible.
- [ ] Recheck every new scientific statement and image caption against [SOURCES.md](SOURCES.md).
- [ ] Confirm the third-party rights/credits for all images and fonts in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
- [ ] Obtain contributor approval and authority for Apache 2.0 before adding the repository-wide `LICENSE` file.
- [ ] Keep the README, NASA submission, credits, and license information consistent.

## Deployment note

The Vercel project is linked to the GitHub repository. The `review/marsbound-v16` branch is intended for preview/testing. The live production site should only be updated after the team approves the handoff and the preview passes the final browser checks.
