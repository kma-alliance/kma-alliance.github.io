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

- `> **Tip:** ...` renders a green callout. `> **Warning:** ...` or `> **Avoid:** ...` is red. `> **Note:** ...` is blue. `> **KMA:** ...` is the alliance-policy callout. `> **Unverified:** ...` or `> **Unverified name:** ...` is the grey "one source only" callout, used where a fact has not been confirmed in-game.
- Table cells containing exactly `S`, `A`, `B`, `C`, `D` become tier badges; `UR`, `SSR`, `SR`, `R` become rarity labels.
- `- [ ] task` lines become checkboxes that members can tick (saved in their own browser).
- Link to another guide with `[text](#/guide-id)`.
- Add `copyCodes: true` to the header to put a copy button next to every inline code in tables (used on the gift codes page).

## Where the numbers come from

Every game number lives in one place, `site/data.js`. The Sanctuary table in the build-order
guide is generated from it, and so are the planners and the home dashboard, so they cannot drift
apart. If a cost is wrong, fix `site/data.js` and everything follows.

Two things to know before editing it:

- **Build times are base times**, before any construction-speed buff. Several guide sites publish
  buffed numbers; those are not what goes here.
- **Stars are a cumulative threshold you hold, never a cost you spend.** There are 326 in the whole
  game. Never add the per-level figures together.

Run the checks after any edit:

```
node scripts/test_data.js
```

58 checks covering the reset clock, cost and time monotonicity, hero shard and antitoxin maths,
troop tiers, and building unlock levels. It also runs in CI on every push.

## Sourcing rules

Sources for this game disagree, so the handbook follows an order:

1. **last-asylum.com** and the app store listing. First-party, and the source of truth for names.
2. **Player videos and posts.** The best evidence for what the client actually displays.
3. **wiki-last-asylum.com** for numbers only. Its building data is datamined from the game client,
   but its English names are invented, so never take terminology from it.
4. **Monetised guide blogs** count as one weak source between them. They copy each other.

Anything resting on a single source gets an `> **Unverified:**` callout rather than being stated
plainly. If you confirm or disprove one in-game, edit the page and drop the callout.

## Time and the reset clock

The daily reset and the Alliance Duel day roll happen at **00:00 server time**, and server time is
**UTC-2**, not UTC. Every countdown reads through `site/data.js`, and a player can correct the
offset on the Timezones page if their server differs. Never write a countdown against UTC midnight.

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

`build.py` refuses to build on three mistakes that are invisible in a browser:

- a `data-widget="..."` name that no front-end file registers, which would render nothing at all
- a `[link](#/guide-id)` pointing at a guide id that does not exist
- an `updated:` date that is not `YYYY-MM-DD`, which sorts wrong

So if the build fails, read the message: it is telling you about a real broken thing on the page.

## Layout

- `content/` — the guides (edit these)
- `site/` — the published site (`index.html`, `styles.css`, `app.js`, generated `content/guides.js`)
- `scripts/fetch_assets.py` + `scripts/assets.json` — game artwork downloaded at build time (not committed)
- `scripts/scan_codes.py` — gift-code scanner. It reads eight public trackers and will not
  demote a code unless at least half of them answered, so a bad day for one tracker cannot
  quietly expire working codes. It rewrites `codes.json` only when a code actually changes.
- `scripts/test_data.js` — the data-layer checks
- `build.py` — bundler
- `.github/workflows/pages.yml` — deploys `site/` to GitHub Pages on every push to `main`
