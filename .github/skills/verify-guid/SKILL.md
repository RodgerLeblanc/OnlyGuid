---
name: verify-guid
description: Verify that the OnlyGuid page and generateGuid() produce valid v4 GUIDs. Use after changing scripts.js, index.html, or anything that affects GUID generation.
---
# Verify GUID

## Prerequisites
- Node.js and npm on PATH.
- Chromium for Playwright, installed once per machine (downloads to the user cache, not the repo):
  ```
  npx -y -p playwright@1.64.1 playwright install chromium
  ```

## Steps
1. From the repo root, run the Playwright check. It needs no server and adds no files to the repo:
   ```
   npx -y -p playwright@1.64.1 node -e "const p=require('path');const {chromium}=require(p.join(process.env.PATH.split(p.delimiter)[0],'..','playwright'));const {pathToFileURL}=require('url');const src='^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$';const re=new RegExp(src);(async()=>{let code=1;const browser=await chromium.launch();try{const page=await browser.newPage();const url=pathToFileURL(p.resolve('index.html')).href;const guids=[];for(let i=0;i<3;i++){await page.goto(url);guids.push((await page.textContent('#guid')).trim());}const badLoad=guids.find(g=>!re.test(g));const unique=new Set(guids).size===guids.length;const badBatch=await page.evaluate(s=>{const r=new RegExp(s);return Array.from({length:1000},generateGuid).find(g=>!r.test(g))??null;},src);const pass=badLoad===undefined&&unique&&badBatch===null;console.log('Loads: '+guids.join(', '));console.log('Distinct loads: '+unique);console.log('Console batch (1000): '+(badBatch===null?'all valid':'first invalid '+badBatch));console.log(pass?'PASS':'FAIL');code=pass?0:1;}catch(e){console.log('ERROR: '+e.message);}finally{await browser.close();}process.exitCode=code;})();"
   ```
2. The script loads `index.html` three times and checks that each `#guid` is a v4 GUID and that all three differ. It then calls `generateGuid()` 1000 times in the page and checks every result.
3. Expect `PASS` and exit code 0. On `FAIL`, check the bitwise expression in `generateGuid()` and its operator precedence first.
4. If Node or Playwright cannot run, fall back to the manual check: open `index.html` in a browser, refresh three times, and run in the DevTools console:
   ```js
   Array.from({length: 1000}, generateGuid).every(g => /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(g))
   ```

## Report
State pass or fail, and the method used (Playwright or manual). On failure, include the first GUID that did not match.
