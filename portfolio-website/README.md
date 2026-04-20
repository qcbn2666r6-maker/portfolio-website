# Christine Wilhelmy — Portfolio

Product Manager portfolio site built as a single-page HTML file with vanilla CSS and JavaScript.

**Live site:** https://qcbn2666r6-maker.github.io/christine-portfolio/

---

## Repos

| Repo | Purpose |
|------|---------|
| `qcbn2666r6-maker/portfolio-website` | Source — edit `portfolio.html` here |
| `qcbn2666r6-maker/christine-portfolio` | Deploy — serves the live GitHub Pages site |

The `portfolio-deploy/` directory at the root is a local clone of the deploy repo.

---

## Making changes

Edit `/portfolio.html` in this repo, then follow the deploy workflow below.

---

## Deploy workflow

```bash
# 1. Copy the updated file to the deploy repo
cp portfolio.html portfolio-deploy/index.html

# 2. Commit and push the deploy repo
git -C portfolio-deploy add index.html
git -C portfolio-deploy commit -m "your message"
git -C portfolio-deploy push

# 3. Commit and push source changes to this repo
git add portfolio.html
git commit -m "your message"
git push
```

GitHub Pages rebuilds automatically after the push — live in ~30 seconds.

---

## Assets

Project images and the profile photo live in `portfolio-deploy/assets/`. Image paths in `portfolio.html` should use `assets/filename.ext` (not `portfolio-website/src/assets/`).

---

## Local preview

Open `portfolio.html` directly in a browser — no build step required.
