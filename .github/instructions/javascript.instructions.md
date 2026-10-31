---
description: "Rules for editing scripts.js"
applyTo: "**/*.js"
---
- Keep `loadGuid` and `generateGuid` as global functions; `index.html` calls `loadGuid` inline.
- Do not change the signatures of `loadGuid` or `generateGuid`.
- Generate randomness only with `crypto.getRandomValues()`.
- No modules, npm packages, or build steps.
