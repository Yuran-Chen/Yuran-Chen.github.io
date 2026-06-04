# Rainy (Yuran) Chen - Academic Homepage

This repository contains the source code for my personal academic homepage, built as a lightweight static site and deployed with GitHub Pages.

The website presents my background, research interests, selected publications, competitions, honors, and contact information in a clean academic portfolio style.

## Live Site

[https://yuran-chen.github.io](https://yuran-chen.github.io)

## Overview

I am a FinTech undergraduate at Dongbei University of Finance and Economics (DUFE), working on:

- Trustworthy LLMs and NLP
- Explainable AI and uncertainty-aware modeling
- AI for finance, security, and decision systems
- Robust forecasting and cross-domain modeling

Selected work currently highlighted on the homepage includes:

- ACL Jul 2026: `PRISM`
- KDD Aug 2025: `PolluVCCT`
- Annals of Operations Research
- Mathematical Contest in Modeling (MCM/ICM): Meritorious Winner
- Kaggle Silver Medal

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub Pages for hosting

No framework or build system is required. The site is intentionally simple to maintain and easy to update.

## Project Structure

```text
.
|- index.html
|- style.css
|- main.js
|- 头像.jpg
|- 科研配图/
|  |- anor.png
|  |- kdd.png
|  |- esg.png
|  |- e.png
|  |- mathor.png
|- 新增/
|  |- ACL.pdf
|  |- ACL.png
|  |- MCM.png
|- MAINTENANCE.md
|- PRE_PUBLISH_CHECKLIST.md
```

## Main Files

- `index.html`: all page content and structure
- `style.css`: layout, typography, spacing, card styles, and responsive behavior
- `main.js`: top navigation behavior and smooth scrolling
- `头像.jpg`: profile photo
- `科研配图/`: research and competition figures already used by the site
- `新增/`: newly added publication and competition assets

## Local Preview

Because this is a static site, you can preview it locally by simply opening `index.html` in a browser.

If you prefer a local server, you can use:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## How to Update

### Update text

Edit `index.html` and update the relevant section:

- About
- Research
- News
- Publications
- Honors
- Competitions
- Education
- Contact

### Add a new publication

1. Copy an existing publication block in `index.html`
2. Update title, authors, venue, and summary
3. Add a `PDF` button only if you have a valid PDF
4. Add an `Image` button only if you have a figure
5. Put the corresponding figure in `科研配图/` or `新增/`

### Add a new competition

1. Copy an existing competition block in `index.html`
2. Update title, date, and description
3. Add an image block only if you have a figure

For more detailed maintenance instructions, see:

- `MAINTENANCE.md`
- `PRE_PUBLISH_CHECKLIST.md`

## Deployment

This repository is intended for GitHub Pages deployment via:

```bash
git add .
git commit -m "Update homepage"
git push origin main
```

After pushing to the `main` branch of `Yuran-Chen/Yuran-Chen.github.io`, the site will be served at:

[https://yuran-chen.github.io](https://yuran-chen.github.io)

## Notes

- Google Scholar, GitHub profile, and CV links can be added later when public links are ready.
- Some older items still use year-only dates because exact months have not been finalized yet.
- The site is optimized to remain readable, professional, and easy to maintain without extra tooling.

## Contact

- Email: [yuranchen06@gmail.com](mailto:yuranchen06@gmail.com)
