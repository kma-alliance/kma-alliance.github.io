# [KMA] Alliance Handbook

Guide site for the **[KMA] KissMyAzz** alliance in *Last Asylum: Plague*. Static HTML, no backend, hosted free on GitHub Pages.

## Editing a guide

1. Open the guide in `content/` (for example `content/30-alliance-duel.md`). It is plain Markdown with a small header block:

   ```
   ---
   id: alliance-duel
   title: Alliance Duel
   category: events
   summary: One sentence shown on the card.
   tags: alliance duel, events
   updated: 2026-09-12
   ---
   ```

2. Edit the text. Update the `updated:` date so members can see it was checked.
3. Commit and push to `main`. GitHub Actions rebuilds and publishes the site in about a minute.

You can do all of this in the browser on github.com: open the file, click the pencil, edit, commit.

### Markdown extras

- `> **Tip:** ...` renders a green callout. `> **Warning:** ...` or `> **Avoid:** ...` is red. `> **Note:** ...` is blue. `> **KMA:** ...` is the alliance-policy callout.
- Table cells containing exactly `S`, `A`, `B`, `C`, `D` become tier badges; `UR`, `SSR`, `SR`, `R` become rarity labels.
- `- [ ] task` lines become checkboxes that members can tick (saved in their own browser).
- Link to another guide with `[text](#/guide-id)`.
- Add `copyCodes: true` to the header to put a copy button next to every inline code in tables (used on the gift codes page).

## Alliance notices and the weekly rhythm

Edit `content/site.json`:

- `notices` is the list on the home page. Newest first.
- `week` is the seven-day rhythm strip. Change the `todo` text freely.
- `categories` controls the sidebar groups. A guide's `category:` must match one of the ids here.

## Adding a guide

Copy any `.md` file, give it a new `id:` and filename. Files are ordered by filename, so the number prefix controls sidebar order.

## Building locally

```
python3 scripts/fetch_assets.py   # downloads hero, building and screenshot artwork into site/img/
python3 build.py
python3 -m http.server 8765 --directory site
```

Then open http://localhost:8765. `build.py` bundles `content/` into `site/content/guides.js` (generated, not committed) and writes `artifact/index.html` (a copy for claude.ai Artifacts).

## Layout

- `content/` — the guides (edit these)
- `site/` — the published site (`index.html`, `styles.css`, `app.js`, generated `content/guides.js`)
- `scripts/fetch_assets.py` + `scripts/assets.json` — game artwork downloaded at build time (not committed)
- `scripts/scan_codes.py` — gift-code scanner
- `build.py` — bundler
- `.github/workflows/pages.yml` — deploys `site/` to GitHub Pages on every push to `main`
