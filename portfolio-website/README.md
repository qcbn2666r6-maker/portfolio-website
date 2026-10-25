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

The live site serves `portfolio.html` (as `index.html`). The React app in `portfolio-website/` is no longer deployed.

---

## Deploy workflow

Run from the repo root:

```bash
# 1. Copy the updated page and images to the deploy repo
cp portfolio.html portfolio-deploy/index.html
cp assets/* portfolio-deploy/assets/

# 2. Commit and push the deploy repo
git -C portfolio-deploy add index.html assets
git -C portfolio-deploy commit -m "your message"
git -C portfolio-deploy push

# 3. Commit and push source changes to this repo
git add portfolio.html assets
git commit -m "your message"
git push
```

GitHub Pages rebuilds automatically after the push — live in ~30 seconds. Reload the live site to confirm the change.

---

## Assets

Project images and the profile photo live in `/assets/` next to `portfolio.html`, and are copied to `portfolio-deploy/assets/` on deploy. Add new images to `/assets/` and reference them as `assets/filename.ext` (not `portfolio-website/src/assets/`).

---

## Local preview

Open `portfolio.html` directly in a browser — no build step required. Keep the `assets/` folder beside it so images load.
