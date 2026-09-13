#!/usr/bin/env python3
"""Download game artwork listed in scripts/assets.json into site/img/.
Runs in CI before the build (see .github/workflows/pages.yml) and locally:
    python3 scripts/fetch_assets.py
Existing files are kept, so re-runs only fetch what is missing. Failures are
reported but never fail the build; the site falls back gracefully.
"""
import json, os, sys, time, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "site", "img")
UA = "Mozilla/5.0 (X11; Linux x86_64) KMA-handbook-assets/1.0 (+https://github.com/mortalsinn/kma)"

def get(url, dest):
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        return "kept"
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    for i in range(2):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=30) as r:
                data = r.read()
            if len(data) < 200:
                raise ValueError("too small")
            open(dest, "wb").write(data)
            return "ok"
        except Exception as e:
            err = e; time.sleep(1.5)
    print(f"  ! {url}: {err}", file=sys.stderr)
    return "fail"

def main():
    m = json.load(open(os.path.join(ROOT, "scripts", "assets.json"), encoding="utf-8"))
    jobs = []
    for s in m["shots"]:
        jobs.append((m["official"] + s, os.path.join(IMG, "shots", s)))
    jobs.append((m["official"] + "last-asylum-logo.png", os.path.join(IMG, "logo.png")))
    for a in m["art"]:
        jobs.append((m["official"] + "heroes/full/" + a + ".webp", os.path.join(IMG, "heroes", a + ".webp")))
    for slug, pic in m["cards"].items():
        jobs.append((m["wiki"] + pic + ".webp", os.path.join(IMG, "cards", slug + ".webp")))
    for slug, pic in m["buildings"].items():
        jobs.append((m["wiki"] + pic + ".webp", os.path.join(IMG, "buildings", slug + ".webp")))
    # 486x828 hero portraits, one per roster slug
    for slug, pic in m.get("portraits", {}).items():
        jobs.append((m["wiki"] + pic + ".webp", os.path.join(IMG, "portraits", slug + ".webp")))
    # 144x144 skill icons, kept under their wiki id so the per-hero lists can reference them
    sk = m.get("skills", {})
    for pic in sk.get("shared", []) + [p for lst in sk.get("by_hero", {}).values() for p in lst]:
        jobs.append((m["wiki"] + pic + ".webp", os.path.join(IMG, "skills", pic + ".webp")))
    # absolute URLs from other hosts; the key is the path under site/img/
    for rel, url in m.get("extra", {}).items():
        jobs.append((url, os.path.join(IMG, *rel.split("/"))))
    counts = {}
    for url, dest in jobs:
        r = get(url, dest); counts[r] = counts.get(r, 0) + 1
    print("assets:", counts, "->", IMG)

if __name__ == "__main__":
    main()
