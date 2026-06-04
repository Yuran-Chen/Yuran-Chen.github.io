# Pre-Publish Checklist

This checklist summarizes the current release status of the homepage and what is still optional to refine before pushing to GitHub Pages.

## Ready Now

- `index.html`, `style.css`, and `main.js` are present and internally consistent.
- All referenced local assets currently used by the homepage exist:
  - `头像.jpg`
  - `新增/ACL.pdf`
  - `新增/ACL.png`
  - `新增/MCM.png`
  - `科研配图/anor.png`
  - `科研配图/kdd.png`
  - `科研配图/esg.png`
  - `科研配图/e.png`
  - `科研配图/mathor.png`
- Contact section uses a real email address.
- Empty public links for Google Scholar / GitHub / CV have been removed and replaced with a placeholder note.
- IELTS score has been updated to `6.5`.
- Confirmed dates have been normalized to `Month Year` where exact month information is available:
  - ACL: `Jul 2026`
  - MCM: `May 2026`
  - ReXNet news: `Feb 2026`
  - Kaggle: `Jan 2026`
  - KDD: `Aug 2025`
  - ESG symposium: `Sep 2025`
- ACL 2026 publication entry includes both `PDF` and `Image`.
- Publication / competition figures display inline with consistent layout.
- No `href="#"` placeholder links remain in the live page.
- No linter issues were reported for the edited files.

## Optional Before Publishing

These are not blockers. The site can be pushed now, but these items would make it more complete.

- Add exact month information for entries that still show year-only dates:
  - Some `Honors & Awards` items
  - `MathorCup National First Prize`
  - Some publication venue lines from 2024–2025
- Add public links once ready:
  - Google Scholar
  - GitHub profile
  - CV / Resume
- Add the exact MCM project title if you want the competition entry to be fully specific.
- If available later, add an arXiv or project page for `PRISM`.

## Push Checklist

Before pushing, confirm the following:

- Open `index.html` locally in a browser and verify:
  - top navigation scrolls correctly
  - publication images open correctly
  - ACL PDF opens correctly
  - competition images display correctly
  - mobile layout looks acceptable when the browser width is reduced
- Confirm the `新增` and `科研配图` folders are included in the repository.
- Run:

```bash
git add .
git status
git commit -m "Finalize homepage before publish"
git push origin main
```

## Release Verdict

The homepage is ready to push to GitHub now.
