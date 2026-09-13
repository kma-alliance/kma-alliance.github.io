#!/usr/bin/env python3
"""Bundle content/*.md + content/site.json into site/content/guides.js.

Usage:  python3 build.py
Guide files need a front-matter block:
---
id: getting-started
title: Getting Started
category: start
summary: One sentence shown on cards.
tags: beginner, day 1
updated: 2026-09-12
---
Markdown body follows. Files are ordered by filename, so prefix with numbers.
"""
import json, os, re, sys, glob, datetime, hashlib

ROOT = os.path.dirname(os.path.abspath(__file__))
CONTENT = os.path.join(ROOT, "content")
SITE = os.path.join(ROOT, "site")
OUT = os.path.join(SITE, "content", "guides.js")

def parse(path):
    text = open(path, encoding="utf-8").read()
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", text, re.S)
    if not m:
        sys.exit(f"{path}: missing front matter")
    meta, body = {}, m.group(2).strip() + "\n"
    for line in m.group(1).splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            meta[k.strip()] = v.strip()
    for k in ("id", "title", "category", "updated"):
        if k not in meta:
            sys.exit(f"{path}: front matter needs '{k}'")
    g = {
        "id": meta["id"], "title": meta["title"], "category": meta["category"],
        "summary": meta.get("summary", ""), "updated": meta["updated"],
        "tags": [t.strip() for t in meta.get("tags", "").split(",") if t.strip()],
        "body": body,
    }
    if meta.get("copyCodes", "").lower() in ("1", "true", "yes"):
        g["copyCodes"] = True
    return g



BLOCK_RE = re.compile(r"^```kma-([a-z]+)[ \t]*\n(.*?)\n```[ \t]*$", re.S | re.M)


def hero_slugs():
    src = open(os.path.join(SITE, "data.js"), encoding="utf-8").read()
    block = re.search(r"var heroes = \[(.*?)\];", src, re.S)
    return set(re.findall(r'\["([a-z0-9-]+)",\s*"', block.group(1))) if block else set()


def check_blocks(g, heroes):
    """Validate every ```kma-*``` block so a typo fails the build, not the page."""
    errs, where = [], g["id"]
    have_img = os.path.isdir(os.path.join(SITE, "img"))
    for n, (kind, raw) in enumerate(BLOCK_RE.findall(g["body"]), 1):
        tag = f"{where}: kma-{kind} block {n}"
        try:
            d = json.loads(raw)
        except json.JSONDecodeError as e:
            errs.append(f"{tag}: invalid JSON ({e.msg} at line {e.lineno} col {e.colno})"); continue
        def need(cond, msg):
            if not cond: errs.append(f"{tag}: {msg}")
        if kind == "event":
            need(isinstance(d.get("facts", []), list) and all(isinstance(f, list) and len(f) == 2 for f in d.get("facts", [])), "facts must be [label, value] pairs")
            need(all(isinstance(r, str) for r in d.get("rewards", [])), "rewards must be strings")
            art = d.get("art")
            if art:
                need(art.startswith("img/"), "art must be a path under img/")
                if have_img: need(os.path.exists(os.path.join(SITE, art)), f"art file {art} not found")
        elif kind == "steps":
            need(isinstance(d.get("steps"), list) and d["steps"] and all("label" in x for x in d["steps"]), "steps must be a non-empty list, each with a label")
        elif kind == "bars":
            rows = d.get("rows")
            need(isinstance(rows, list) and rows and all(isinstance(r, list) and len(r) >= 2 and isinstance(r[1], (int, float)) for r in rows), "rows must be [label, number, optional note]")
            if d.get("highlight") and isinstance(rows, list):
                need(any(r[0] == d["highlight"] for r in rows if isinstance(r, list) and r), "highlight must match a row label")
        elif kind == "lineup":
            hs = d.get("heroes")
            need(isinstance(hs, list) and hs, "heroes must be a non-empty list")
            for h in (hs or []) + [a for a in d.get("alts", [])]:
                need(isinstance(h, list) and h and h[0] in heroes, f"unknown hero slug {h[0] if isinstance(h, list) and h else h!r}")
        elif kind == "dodont":
            need(isinstance(d.get("do"), list) and isinstance(d.get("dont"), list), "needs do and dont lists")
        elif kind == "tiles":
            need(isinstance(d.get("tiles"), list) and all(isinstance(t, list) and len(t) >= 2 for t in d.get("tiles", [])), "tiles must be [big, label, optional sub]")
        elif kind == "map":
            nodes = d.get("nodes") or []
            ids = {x.get("id") for x in nodes if isinstance(x, dict)}
            need(nodes and all(isinstance(x, dict) and "id" in x and isinstance(x.get("x"), (int, float)) and isinstance(x.get("y"), (int, float)) for x in nodes), "nodes need id, x and y")
            for l in d.get("links", []):
                need(isinstance(l, list) and len(l) >= 2 and l[0] in ids and l[1] in ids, f"link {l!r} points at a missing node")
        else:
            errs.append(f"{tag}: unknown block type kma-{kind}")
    return errs


def registered_widgets():
    """Every widget name the front end can hydrate, read straight out of the sources
    so the check cannot drift from the code it is checking."""
    names = set()
    for fn in ("visuals.js", "visuals-art.js", "tools.js"):
        path = os.path.join(SITE, fn)
        if not os.path.exists(path):
            continue
        src = open(path, encoding="utf-8").read()
        names |= set(re.findall(r'^\s*(?:V|T|W)\["([a-z0-9-]+)"\]\s*=', src, re.M))
    app = os.path.join(SITE, "app.js")
    if os.path.exists(app):
        block = re.search(r"var WIDGETS = \{(.*?)\n  \};", open(app, encoding="utf-8").read(), re.S)
        if block:
            names |= set(re.findall(r"^\s{4}([a-zA-Z0-9_-]+):", block.group(1), re.M))
    return names


def check(guides):
    """Fail the build on the mistakes that are invisible in the browser:
    a widget that renders nothing, a link to a guide that does not exist,
    and a date that will sort wrong."""
    ids = {g["id"] for g in guides}
    widgets = registered_widgets()
    errs = []
    heroes = hero_slugs()
    for g in guides:
        errs.extend(check_blocks(g, heroes))
        where = g["id"]
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", g["updated"]):
            errs.append(f"{where}: 'updated' must be YYYY-MM-DD, got {g['updated']!r}")
        for name in re.findall(r'data-widget="([^"]*)"', g["body"]):
            if name not in widgets:
                errs.append(f"{where}: no widget named '{name}' is registered, so it renders nothing")
        for target in re.findall(r"#/([a-z0-9-]+)", g["body"]):
            if target not in ids:
                errs.append(f"{where}: link to '#/{target}' but no guide has that id")
    if widgets and not any(w in ("dashboard",) for w in widgets):
        errs.append("could not read the widget registry; the widget check is not running")
    if errs:
        sys.exit("build failed:\n  " + "\n  ".join(errs))
    return len(widgets)


def main():
    site = json.load(open(os.path.join(CONTENT, "site.json"), encoding="utf-8"))
    guides = [parse(p) for p in sorted(glob.glob(os.path.join(CONTENT, "*.md")))]
    ids = [g["id"] for g in guides]
    dupes = {i for i in ids if ids.count(i) > 1}
    if dupes:
        sys.exit(f"duplicate guide ids: {dupes}")
    cats = {c["id"] for c in site["categories"]}
    for g in guides:
        if g["category"] not in cats:
            sys.exit(f"{g['id']}: unknown category '{g['category']}'")
    n_widgets = check(guides)
    newest = max(g["updated"] for g in guides) if guides else str(datetime.date.today())
    site.setdefault("site", {})["updated"] = max(newest, site["site"].get("updated", ""))
    codes = {}
    codes_path = os.path.join(SITE, "content", "codes.json")
    if os.path.exists(codes_path):
        try:
            codes = json.load(open(codes_path, encoding="utf-8"))
        except Exception as e:
            print(f"warning: could not read codes.json: {e}")
    data = {"site": site["site"], "categories": site["categories"],
            "notices": site.get("notices", []), "week": site.get("week", []), "codes": codes, "guides": guides}
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("/* Generated by build.py — edit content/*.md and content/site.json, then rebuild. */\n")
        f.write("window.KMA = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n")
    print(f"wrote {OUT}: {len(guides)} guides, site updated {data['site']['updated']}"
          f" ({n_widgets} widgets registered, links and dates checked)")

    # cache-bust local asset URLs with a short content hash so browsers and the
    # Pages CDN never serve a stale module after a deploy.
    index_path = os.path.join(SITE, "index.html")
    html = open(index_path, encoding="utf-8").read()
    def stamp(m):
        attr, url = m.group(1), m.group(2)
        base = url.split("?")[0]
        f = os.path.join(SITE, base)
        if not os.path.exists(f):
            return m.group(0)
        h = hashlib.sha1(open(f, "rb").read()).hexdigest()[:8]
        return f'{attr}="{base}?v={h}"'
    html = re.sub(r'(src|href)="((?!https?:|//)[^"]+\.(?:js|css))(?:\?[^"]*)?"', stamp, html)
    open(index_path, "w", encoding="utf-8").write(html)


if __name__ == "__main__":
    main()
