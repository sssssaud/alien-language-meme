# aline langugae meme

English ↔ alien-language translator page based on the "ALIEN LANGUAGE" meme (`images.jpeg`). For fun / sharing.
Stack: one static HTML file (vanilla JS, no dependencies) + Node for the test.

## Project goal
A single HTML page that turns any English text into alien and back. The meme's 14 phrases keep their exact meme words.

## Directory map
- `index.html` — the whole app: translator logic (`<script id="alien">`) + UI.
- `test.js` — Node self-check that reads the logic straight out of `index.html`.
- `images.jpeg` — the original meme the language comes from.
- `PROGRESS.md` — session save-file.

## Stack
HTML/CSS/JS, no libraries, works offline from `file://`. Node 22 only for `test.js`. No GPU/ML.

## Build / run commands
- Setup: none
- Run: open `index.html` in a browser
- Test: `node test.js`

## Current status
- Done: v1 translator page, both directions, tests pass. Public: https://github.com/sssssaud/alien-language-meme, live at https://sssssaud.github.io/alien-language-meme/
- Pending: options in PROGRESS.md → "Next", Saud picks.
- Blockers: none.
