#!/usr/bin/env python3
"""Gift-code scanner for Last Asylum: Plague.

Fetches public code-tracker pages, extracts code-shaped tokens, notes which
sources list each code as active vs expired, and merges the result into
site/content/codes.json (keeping first-seen dates across runs).

Runs in GitHub Actions on a schedule (see .github/workflows/pages.yml) and can
be run locally:  python3 scripts/scan_codes.py
Stdlib only, no dependencies.
"""
import json, os, re, sys, time, html, datetime, urllib.request, urllib.error

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "site", "content", "codes.json")

SOURCES = [
    ("PocketGamer",        "https://www.pocketgamer.com/last-asylum-plague/codes/"),
    ("lastasylumplague",   "https://lastasylumplague.com/guides/active-gift-codes-and-how-to-redeem-ios-android/"),
    ("lastasylumguide",    "https://lastasylumguide.com/gift-codes"),
    ("LDShop",             "https://www.ldshop.gg/blog/last-asylum-plague/last-asylum-latest-codes.html"),
    ("LDPlayer",           "https://www.ldplayer.net/blog/last-asylum-plague-codes.html"),
    ("Lootbar",            "https://www.lootbar.com/blog/en/last-asylum-plague-redemption-codes-lb.html"),
    ("UCNGame",            "https://ucngame.com/codes/last-asylum-codes/"),
    ("wiki-last-asylum",   "https://wiki-last-asylum.com/en/wiki/gift-codes"),
]
UA = "Mozilla/5.0 (X11; Linux x86_64) KMA-handbook-code-scanner/1.0 (+https://github.com/mortalsinn/kma)"

# Code shapes seen so far: LA + alnum (LA30W7F2M, LAVD26, LAiOSLA), NN + letters (26CHOCO), twlap### (regional).
CODE_RE = re.compile(r"\b(LA[A-Za-z0-9]{3,12}|\d{2}[A-Z]{3,8}|twlap\d{3})\b")
# Words that match the shape but are not codes.
STOP = {"LAST", "LASTASYLUM", "LAUNCH", "LAUNCHED", "LADIES", "LANGUAGE", "LATEST", "LAYOUT", "LABEL", "LADDER",
        "LARGE", "LATER", "LATELY", "LAPTOP", "LAND", "LANDS", "LAVA", "LACK", "LAKE", "LAMP", "LANE", "LASER"}
EXPIRED_HEAD = re.compile(r"<h[1-6][^>]*>[^<]*(expired|inactive|not working|no longer|dead codes)[^<]*</h[1-6]>", re.I)
STRIP_TAGS = re.compile(r"<(script|style|nav|footer|header)[^>]*>.*?</\1>", re.S | re.I)

def fetch(url, tries=2):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/html,*/*"})
            with urllib.request.urlopen(req, timeout=25) as r:
                return r.read().decode("utf-8", "replace")
        except Exception as e:  # noqa
            err = e
            time.sleep(2)
    print(f"  ! {url}: {err}", file=sys.stderr)
    return None

def looks_like_code(tok):
    if tok.upper() in STOP: return False
    if tok.startswith("twlap"): return True
    has_digit = any(c.isdigit() for c in tok)
    mixed = tok != tok.upper() and tok != tok.lower()
    if tok.startswith("LA"):
        return has_digit or mixed
    return has_digit and len(tok) >= 6

def extract(page):
    """Return (active_codes, expired_codes) found on a page."""
    page = STRIP_TAGS.sub(" ", page)
    m = EXPIRED_HEAD.search(page)
    active_part, expired_part = (page, "") if not m else (page[:m.start()], page[m.start():])
    def codes_in(part):
        # Only look inside elements that trackers use to present codes.
        found = []
        for chunk in re.findall(r"<(?:code|strong|b|td|li|h[2-4]|span)[^>]*>(.*?)</(?:code|strong|b|td|li|h[2-4]|span)>", part, re.S | re.I):
            text = html.unescape(re.sub(r"<[^>]+>", " ", chunk))
            for tok in CODE_RE.findall(text):
                if looks_like_code(tok): found.append(tok)
        return found
    return set(codes_in(active_part)), set(codes_in(expired_part))

def main():
    today = datetime.date.today().isoformat()
    now = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    prev = {}
    if os.path.exists(OUT):
        try:
            prev = {c["code"]: c for c in json.load(open(OUT, encoding="utf-8")).get("codes", [])}
        except Exception:
            prev = {}
    active_by, expired_by, checked = {}, {}, []
    for name, url in SOURCES:
        print(f"- {name}")
        page = fetch(url)
        if not page: continue
        a, x = extract(page)
        checked.append(name)
        for c in a: active_by.setdefault(c, set()).add(name)
        for c in x - a: expired_by.setdefault(c, set()).add(name)
        print(f"  active {sorted(a)} expired {sorted(x - a)}")
    # A code is only demoted on the evidence of a healthy scan. With most trackers
    # unreachable, absence proves nothing, so hold every previous status instead.
    QUORUM = max(2, len(SOURCES) // 2)
    if not checked:
        print("no source reachable; leaving codes.json untouched"); return
    trustworthy = len(checked) >= QUORUM
    if not trustworthy:
        print(f"only {len(checked)}/{len(SOURCES)} sources answered (need {QUORUM});"
              " recording what was found but not demoting anything")
    # Normalise case variants (LAiOSLA vs LAIOSLA): keep the most common spelling.
    codes = {}
    for c in set(active_by) | set(expired_by) | set(prev):
        key = c.upper()
        codes.setdefault(key, []).append(c)
    out = []
    for key, variants in codes.items():
        variants.sort(key=lambda v: (-(len(active_by.get(v, ())) + len(expired_by.get(v, ()))), v))
        code = variants[0]
        act = set().union(*[active_by.get(v, set()) for v in variants])
        exp = set().union(*[expired_by.get(v, set()) for v in variants])
        old = next((prev[v] for v in variants if v in prev), {})
        first = old.get("first_seen", today)
        last_active = today if act else old.get("last_active", old.get("first_seen", today))
        if act and not exp: status = "active"
        elif act and exp: status = "disputed"
        elif not trustworthy and old.get("status"): status = old["status"]
        else:
            try:
                days = (datetime.date.fromisoformat(today) - datetime.date.fromisoformat(last_active)).days
            except ValueError:
                days = 0
            status = "expired" if (exp or days > 21) else "unconfirmed"
        out.append({"code": code, "status": status, "first_seen": first, "last_active": last_active,
                    "active_sources": sorted(act), "expired_sources": sorted(exp),
                    "rewards": old.get("rewards", "")})
    order = {"active": 0, "disputed": 1, "unconfirmed": 2, "expired": 3}
    def seen_key(c):
        try:
            return -int(c["first_seen"].replace("-", ""))
        except (ValueError, AttributeError):
            return 0
    out.sort(key=lambda c: (order[c["status"]], seen_key(c), c["code"]))

    # Codes accumulate forever otherwise. Keep long-dead ones out of the payload that
    # ships to every visitor, but never drop anything still active or contested.
    def stale(c):
        if c["status"] != "expired":
            return False
        try:
            return (datetime.date.fromisoformat(today)
                    - datetime.date.fromisoformat(c["last_active"])).days > 180
        except ValueError:
            return False
    dropped = [c["code"] for c in out if stale(c)]
    out = [c for c in out if not stale(c)]
    if dropped:
        print(f"  pruned {len(dropped)} codes dead over 180 days: {', '.join(sorted(dropped))}")
    data = {"scanned": now, "sources_checked": checked, "sources_total": len(SOURCES),
            "confident": trustworthy, "codes": out}
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    json.dump(data, open(OUT, "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    print(f"wrote {OUT}: {sum(c['status']=='active' for c in out)} active, {len(out)} total, {len(checked)}/{len(SOURCES)} sources")

if __name__ == "__main__":
    main()
