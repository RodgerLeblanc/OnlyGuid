---
name: verify-guid
description: Verify that the OnlyGuid page and generateGuid() produce valid v4 GUIDs. Use after changing scripts.js, index.html, or anything that affects GUID generation.
---
# Verify GUID

## Steps
1. Open `index.html` in a browser. No server is needed.
2. Refresh three times. Each load must show a different GUID in `#guid`.
3. In the DevTools console, run:
   ```js
   Array.from({length: 1000}, generateGuid).every(g => /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(g))
   ```
4. Expect `true`. If `false`, check the bitwise expression in `generateGuid()` and its operator precedence first.

## Report
State pass or fail. On failure, include the first GUID that did not match.
