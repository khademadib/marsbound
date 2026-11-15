# MarsBound

**Junior Astronaut: Stranded on Mars**  
An educational, pixel-art browser game about the choices involved in keeping a small Mars outpost running.

**Play:** [marsbound.earth](https://marsbound.earth/)  
**Fallback deployment:** [marsbound-spaceapps-2026.vercel.app](https://marsbound-spaceapps-2026.vercel.app/)

MarsBound was built for the **2026 NASA Space Apps Challenge**, for the Junior Astronaut Mission Trainer challenge.

> **Educational project notice:** MarsBound is a student-created game concept. It is not a NASA product, official mission simulator, engineering design, or endorsement by NASA. Game values and consequences are simplified for learning and gameplay; they are not NASA mission specifications.

## The game

Players try to keep a Mars base operating for 10 sols (Martian days). They choose an energy strategy, explore a simplified Gale Crater environment, gather resources, repair systems, build equipment, and respond to mission events.

The current game includes:

- Three power strategies: solar, nuclear, and hybrid.
- Base resources and status indicators, including air, power, food, heat, health, and stability.
- Exploration of places inspired by real Gale Crater locations.
- Resource collection, repairs, base construction, and mission events.
- Goals, a map, a facts/collection feature, and a 10-sol survival objective.
- Keyboard controls and on-screen touch controls.
- Original pixel-style visuals and synthesized sound/music.

## How to play

### Keyboard

| Key | Action |
| --- | --- |
| Arrow keys or WASD | Move |
| Shift | Run |
| Space | Act, interact, or use an action |
| I | Open backpack |
| B | Open build menu |
| C | Open facts/collection book |
| G | Open goals |
| M | Open map |
| N | Toggle music |
| P | Pause |
| F | Toggle fullscreen |
| Esc | Back/menu or close the current overlay |

The title screen also offers **1 = Play** and **2 = How to Play**. The game displays on-screen controls on supported touch devices.

### Play locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. Start the game from the title screen.

There is no build step or package installation for the current single-file version. The game is written in HTML, CSS, and JavaScript. The Press Start 2P display font is loaded from Google Fonts; if that service is blocked or unavailable, the CSS fallback font is used.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | The game: markup, styling, rendering, gameplay, and audio code |
| `favicon.svg` | MarsBound browser-tab icon |
| `README.md` | Project overview and play instructions |
| `SOURCES.md` | NASA/scientific references used to support in-game facts |
| `THIRD_PARTY_NOTICES.md` | Third-party font and license information |
| `LICENSING.md` | Current license decision and contributor checklist |
| `REVIEW_NOTES.md` | Review notes for the current baseline and final handoff |

## Technology and data

- **HTML, CSS, and vanilla JavaScript** — no framework or package manager required.
- **HTML Canvas** — game world, pixel art, and visual effects.
- **Web Audio API** — generated sound effects and music; the current build does not load audio files.
- **localStorage** — stores local high-score and exploration/collection progress in the player's browser. It is not a shared account or cloud save.

The current game code does not call an external application API or send gameplay data to a project backend. The only external resource reference found in the reviewed HTML is the Google Fonts stylesheet for Press Start 2P.

## Science and sources

The game uses real Mars locations, mission examples, and planetary facts as educational context. The survival model, resource levels, construction costs, event timings, and outcomes are simplified gameplay systems—not engineering specifications.

See [SOURCES.md](SOURCES.md) for the research references and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for third-party material and its separate license.

## Contributors

This is a team project. The public project documentation uses role-based credits rather than publishing personal details. Contributions include game programming, gameplay/mechanics design, Mars research and fact-checking, testing, documentation, and deployment. The final role list should be checked with the team before submission.

## License

See [LICENSING.md](LICENSING.md). The team is aligning the repository license with the 2026 NASA Space Apps Participant Terms and confirming that all contributors have authority to license their original contributions. The separate Press Start 2P font license is described in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
