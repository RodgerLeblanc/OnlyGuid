# OnlyGuid Agent Instructions

## Purpose
A simple static website that generates and displays a unique GUID on every page load using the Web Crypto API.

## File Map
- **index.html**: Single `<h1 id="guid">` element with `onload="loadGuid()"` handler.
- **scripts.js**: Two global functions—`loadGuid()` injects the GUID into `#guid`, `generateGuid()` produces a v4-style GUID via `crypto.getRandomValues()`.
- **styles.css**: The only stylesheet to modify for visual changes.
- **reset.css**: Standard CSS reset; do not read or edit.
- **fingerprint.png**: Favicon.
- **cgi-bin/**: Empty, unused directory.

## How It Works
1. Page loads → `body onload` fires `loadGuid()`.
2. `loadGuid()` calls `generateGuid()` and writes result to `#guid`.
3. `generateGuid()` creates a GUID via bitwise operations on random bytes from `crypto.getRandomValues()`.

## Conventions
- Plain HTML, CSS, and JavaScript only—no frameworks, bundlers, or npm.
- Keep `loadGuid` and `generateGuid` as global functions (HTML calls them inline).
- No network calls, tracking, or external dependencies.
- No build step; open `index.html` directly in a browser.

## Development
1. Edit files with your IDE.
2. Open `index.html` in a browser to test. Refresh to see a new GUID.
3. No tests, linters, or build commands.

## Don'ts
- Do not add dependencies, build tooling, or a package manager.
- Do not remove or modify the global function signature of `loadGuid` or `generateGuid`.
- Do not read, modify, or document `.git/` or binary files.
- Do not add extra markdown or documentation files beyond this one and `.github/copilot-instructions.md`.
