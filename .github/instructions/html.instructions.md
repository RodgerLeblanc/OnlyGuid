---
description: "Rules for editing index.html"
applyTo: "**/*.html"
---
- Keep the single `<h1 id="guid">` element; `scripts.js` writes to it by id.
- Keep `onload="loadGuid()"` on `<body>`.
- Keep the references to `scripts.js`, `styles.css`, and `fingerprint.png`.
- No external resources or tracking scripts.
