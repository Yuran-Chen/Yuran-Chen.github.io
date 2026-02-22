# Content Checklist — Academic Homepage

Replace the placeholders in `index.html` according to this list. Search for the quoted text or section to find each item.

---

## 1. Page head

| Item | Placeholder / Location | Example |
|------|------------------------|---------|
| Page title | `<title>Your Name — Academic Homepage</title>` | `John Doe — Academic Homepage` |
| Meta description | `content="Your Name, Your Role..."` | Short sentence for search engines |

---

## 2. Sidebar (left column)

| Item | Placeholder / Location | Example |
|------|------------------------|---------|
| Profile image | `src="头像.jpg"` — keep as is or replace the file; update `alt="Your Name"` | Same file or your photo filename |
| Your name | `class="sidebar-name"` | John Doe |
| Role / position | `class="sidebar-role"` | Ph.D. Student / Postdoc / Assistant Professor |
| Affiliation | `class="sidebar-affiliation"` | MIT / Stanford University |
| Research interests | The three `<li>` under “Research Interests” | e.g. NLP, ML, HCI |
| Nav links | Sidebar `<nav>` — links already point to `#home`, `#about`, etc. | No change unless you add/remove sections |

---

## 3. Main content (right column)

### About Me (`#home`)

| Item | What to edit | Example |
|------|----------------|--------|
| Biography | The two `<p>` in `.prose` | Your background, degree, advisor, current focus |
| Contact sentence | The sentence with “your.email@example.com” | Your real email and “seeking collaborators” if desired |

### Research Thrust (`#research`)

| Item | What to edit | Example |
|------|----------------|--------|
| Vision quote | `<blockquote class="research-vision">` | One sentence on your high-level goal |
| Methodology | `.research-method` paragraph | How you work (methods, framework) |
| Direction A/B | `.research-direction` blocks (titles + paragraphs) | Your actual directions and short descriptions |

### News (`#news`)

| Item | What to edit | Example |
|------|----------------|--------|
| News items | Each `.news-item`: `.news-date` and `.news-content` | Add/remove items; format: e.g. “Mar 2026”, “Paper accepted to NeurIPS 2026.” |

### Publications (`#publications`)

| Item | What to edit | Example |
|------|----------------|--------|
| Note | “* means equal contribution” — edit or remove if not needed | Optional |
| Year groups | Copy or remove `.pub-year-group` blocks | One group per year |
| Each paper | Inside each `.pub-item`: venue tag, title, PDF/Code links, authors, venue line | [Venue'26], Title, PDF/Code href, authors, full venue name |

### Honors & Awards (`#honors`)

| Item | What to edit | Example |
|------|----------------|--------|
| Each award | `.honor-item`: `.honor-year`, `h3`, and `p` | Year, award name, organization |

### Academic Service (`#service`)

| Item | What to edit | Example |
|------|----------------|--------|
| Service items | `.service-item`: `h3` and `p` | e.g. Reviewer (CVPR, NeurIPS), TA (Course name) |

### Education (`#education`)

| Item | What to edit | Example |
|------|----------------|--------|
| Each degree | `.edu-item`: `h3`, `.edu-org`, `.edu-meta` | Degree, university, dates, thesis if any |

### Contact (`#contact`)

| Item | What to edit | Example |
|------|----------------|--------|
| Email | “your.email@example.com” | your.real@email.com |
| Office | “Your Office, Building…” | Real address or remove line |
| Links | `.contact-links` `<a href="#">` | Google Scholar, GitHub, CV URLs |

### Footer

| Item | What to edit | Example |
|------|----------------|--------|
| Copyright | “2026 Your Name” | 2026 John Doe |

---

## 4. After editing

1. Save `index.html` (and replace `头像.jpg` with your photo if needed).
2. Open `index.html` in a browser to preview.
3. Push to your repo: `https://github.com/Yuran-Chen/Yuran-Chen.github.io`
4. View the site at: **https://yuran-chen.github.io**

To add more publications or news, duplicate an existing `.pub-item`, `.news-item`, or `.honor-item` and change the text and links.
