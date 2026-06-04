# How to Maintain and Update Your Site

Your site is static HTML/CSS/JS. After you push to **Yuran-Chen/Yuran-Chen.github.io**, it will be live at **https://yuran-chen.github.io**.

---

## 1. Update text content (no code)

- **Edit `index.html`** in any text editor.
- Find the section you need (e.g. News, Publications, Education, Contact).
- Change the text between the tags; keep the HTML structure (e.g. `<p>...</p>`, `<li>...</li>`) intact.
- Save, then commit and push (see “Upload / update the site” below).

---

## 2. Add or change a publication

- Open `index.html`, go to the **Publications** section.
- Copy an existing `<li class="pub-item">...</li>` block (or `<li class="pub-item pub-item-with-fig">` if you want a figure).
- Paste it in the right year group (inside the `<ul class="pub-list">` under the right `-YYYY-` header).
- Edit:
  - `[Venue]` → e.g. `[KDD'26]`
  - Title, authors, venue line.
  - **PDF**: `<a href="你的PDF链接" ...>PDF</a>` — delete this whole `<a>` if you have no link.
  - **Image**: `<a href="科研配图/文件名.png" ...>Image</a>` — add only if you have a figure; put the image in the `科研配图` folder.
- If this entry has a figure beside it, use the block that includes `<figure class="pub-figure">` and set `src="科研配图/你的图.png"`.

---

## 3. Add or change news

- In `index.html`, find **News** and the `<div class="news-list">`.
- Copy a `<div class="news-item">` block, paste above the others (newest first).
- Edit `<span class="news-date">` (e.g. `Mar 2026`) and the `<div class="news-content">` text.

---

## 4. Add or change a competition

- In **Competitions**, copy a `<div class="competition-item">` or `competition-item-with-fig` block.
- Edit title, `.competition-meta` (date), and the `<p>` description.
- If there’s an image: use the `competition-item-with-fig` layout and set `<img src="科研配图/文件名.png" ...>`; put the image in the `科研配图` folder.

---

## 5. Change profile photo

- Replace the file **`头像.jpg`** in the project folder with your new photo (same name recommended).
- Or use a new filename and in `index.html` change `src="头像.jpg"` to `src="你的新文件名.jpg"`.

---

## 6. Add or replace research figures

- Put images in the **`科研配图`** folder (e.g. `anor.png`, `kdd.png`, `esg.png`, `e.png`, `mathor.png`).
- In `index.html`, publication Image links and `<img src="...">` use paths like `科研配图/文件名.png` — update the filename if you change it.

---

## 7. Upload / update the site (push to GitHub)

In a terminal (PowerShell or Git Bash), in your **个人主页** project folder:

```bash
# First time only: init and add remote
git init
git branch -M main
git remote add origin https://github.com/Yuran-Chen/Yuran-Chen.github.io.git

# Every time you change something:
git add .
git status
git commit -m "Update homepage: ..."
git push -u origin main
```

- If the repo already has content (e.g. README), you may need:
  - `git pull origin main --allow-unrelated-histories`
  - resolve conflicts if any, then `git push -u origin main`
- After push, wait 1–2 minutes and open **https://yuran-chen.github.io** to see changes.

---

## 8. If you use GitHub Desktop

1. **File → Add Local Repository** and choose your 个人主页 folder (or clone the repo and copy your files into it).
2. After editing files, write a summary in the bottom-left box and click **Commit to main**.
3. Click **Push origin** to upload.

---

## File overview

| File / folder      | Purpose |
|--------------------|--------|
| `index.html`       | All page content (about, news, publications, competitions, etc.). |
| `style.css`        | Layout and look. Change only if you want different colors/fonts/layout. |
| `main.js`          | Top nav and smooth scroll. Usually no need to edit. |
| `头像.jpg`         | Profile photo. |
| `科研配图/`        | All research/competition figures (e.g. anor.png, kdd.png, esg.png, e.png, mathor.png). |

If you add new images, put them in `科研配图/` and reference them in `index.html` as `科研配图/新文件名.png`.
