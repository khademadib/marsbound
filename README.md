# MarsBound

**Junior Astronaut: Stranded on Mars**  
A student-created, pixel-art browser game about the decisions involved in keeping a small Mars outpost running.

**Play:** [Vercel deployment](https://marsbound-spaceapps-2026.vercel.app/)  
**Alternate domain:** [marsbound.earth](https://marsbound.earth/)

MarsBound was built for the **2026 NASA Space Apps Challenge**, for the **Junior Astronaut Mission Trainer** challenge.

> **Project notice:** MarsBound is an independent student project. It is not an official NASA product, mission simulator, engineering design, or NASA endorsement. Game values, resources, events, and outcomes are simplified for learning and gameplay; they are not NASA mission specifications.

## The game

Try to keep a Mars base operating for 10 sols (Martian days). Choose a power strategy, explore a simplified Gale Crater environment, gather and process resources, repair systems, build equipment, respond to changing conditions, and make mission decisions.

### Current features

- Easy and Hard difficulty modes, with different starting conditions and time pressure.
- Three power strategies: solar, nuclear, and hybrid.
- Day/night cycle and base systems for air, power, food, heat, health, and stability.
- Exploration of places inspired by real Gale Crater locations.
- Resource collection, repairs, construction, mission orders, and timed supply runs.
- Dust-storm warnings and a habitat interior where the astronaut can shelter and recover.
- Bed and computer interactions inside the habitat.
- Decision events, daily objectives, a mission map, and a collection/facts book.
- NASA/JPL photo cards with source links and visible image credits; fallback visuals appear if a remote image cannot load.
- Animated instructions, keyboard controls, and on-screen touch controls.
- Local high-score and collection progress saved in the browser.

## How to play

### Keyboard

| Key | Action |
| --- | --- |
| Arrow keys or WASD | Move |
| Shift | Run |
| Space or E | Act, interact, or continue |
| I | Open backpack |
| B | Open build menu |
| C | Open facts/collection book |
| G | Open goals |
| M | Open map |
| N | Toggle music |
| P | Pause |
| F | Toggle fullscreen |
| Esc | Back, close an overlay, or pause/menu depending on the current screen |

Use the on-screen directional and action controls on supported touch devices. Near the habitat, follow the on-screen prompt to enter; inside, interact with the beds and computer.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. Start the game from the title screen.

The current project is a single-page HTML/CSS/JavaScript game and has no build step or package installation.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Game markup, styles, rendering, gameplay, and generated audio |
| `favicon.svg` | MarsBound browser-tab icon |
| `README.md` | Project overview and play instructions |
| `SOURCES.md` | Scientific and NASA/JPL image references |
| `THIRD_PARTY_NOTICES.md` | Font and NASA/JPL media notices |
| `LICENSING.md` | License recommendation and contributor checks |
| `REVIEW_NOTES.md` | Review results and final QA checklist |

## Technology, network use, and saved data

- **HTML, CSS, and vanilla JavaScript** — no framework, build command, or third-party JavaScript library.
- **HTML Canvas** — game world, pixel art, visual effects, map, and tutorials.
- **Web Audio API** — generated sound effects and music; no separate audio files are loaded by the current game.
- **localStorage** — stores the high score and collection/exploration progress in the player's browser. Saves are local to that browser/device; there is no account or cloud save.
- **Google Fonts** — loads Press Start 2P from Google Fonts. A CSS fallback font is provided.
- **NASA/JPL Photojournal and NASA image services** — NASA images are loaded remotely when a relevant information card is opened. The image cards include credits and source links. If an image service is blocked or unavailable, the game uses a fallback visual or emoji.

The game code does not use analytics, a game account, or a project backend to upload gameplay progress. A network connection is required to load the hosted game and remote font/photo assets; local saves remain in the browser.

## Science and image sources

See [SOURCES.md](SOURCES.md) for the research references behind in-game facts and NASA/JPL image cards. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for image credits, NASA media guidance, and the separate font license.

The game deliberately simplifies survival values and trade-offs. A game mechanic is not evidence that a real Mars base could use the same system, amount, or procedure.

## Contributors

MarsBound is a team project. Confirm the final role list with the team before submission. Credits should accurately reflect who contributed to programming, gameplay design, Mars research, testing, documentation, and deployment. Do not list someone as an author or rights holder without their agreement.

## License

See [LICENSING.md](LICENSING.md). Apache License 2.0 is the current recommendation for the team's original project work, subject to contributor approval and the 2026 NASA Space Apps Participant Terms. The repository-wide `LICENSE` file should only be added after the contributors confirm they have authority to license their contributions. Third-party fonts and NASA/JPL media have their own notices and are not automatically relicensed with the game's original code.
