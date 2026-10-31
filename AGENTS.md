# OnlyGuid Agent Instructions

## Purpose
A simple static website that generates and displays a unique GUID on every page load using the Web Crypto API.

## File Map
- **index.html**: Single `<h1 id="guid">` element with `onload="loadGuid()"` handler.
- **scripts.js**: Two global functions—`loadGuid()` injects the GUID into `#guid`, `generateGuid()` produces a v4-style GUID via `crypto.getRandomValues()`.
- **styles.css**: The only stylesheet to modify for visual changes.
- **fingerprint.png**: Favicon.
- **cgi-bin/**: Empty, unused directory.

## How It Works
1. Page loads → `body onload` fires `loadGuid()`.
2. `loadGuid()` calls `generateGuid()` and writes result to `#guid`.
3. `generateGuid()` creates a GUID via bitwise operations on random bytes from `crypto.getRandomValues()`.

## Gotchas
- `generateGuid()` relies on operator precedence (`>>` binds tighter than `&`, which binds tighter than `^`); verify output with the `verify-guid` skill after any change.
- The `onload="loadGuid()"` attribute in `index.html` is the only trigger; renaming `loadGuid` breaks the page.

## Conventions
- Plain HTML, CSS, and JavaScript only—no frameworks, bundlers, or npm.
- Keep `loadGuid` and `generateGuid` as global functions (HTML calls them inline).
- No network calls, tracking, or external dependencies.
- No build step; open `index.html` directly in a browser.

## Development
1. Edit files with your IDE.
2. Open `index.html` in a browser to test. Refresh to see a new GUID.
3. No linters or build commands. To verify GUID output, follow the [verify-guid skill](.github/skills/verify-guid/SKILL.md), which runs a headless Playwright check via `npx` without adding files to the repo.

## Agent Resources
- [JavaScript rules](.github/instructions/javascript.instructions.md): applies to `**/*.js`.
- [CSS rules](.github/instructions/styling.instructions.md): applies to `**/*.css`.
- [HTML rules](.github/instructions/html.instructions.md): applies to `**/*.html`.
- [verify-guid skill](.github/skills/verify-guid/SKILL.md): checks GUID output after changes.

## Don'ts
- Do not add dependencies, build tooling, or a package manager.
- Do not remove or modify the global function signature of `loadGuid` or `generateGuid`.
- Do not read, modify, or document `.git/` or binary files.
- Do not add markdown files outside `.github/instructions/` and `.github/skills/` without asking.
