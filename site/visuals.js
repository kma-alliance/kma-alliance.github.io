/* [KMA] Alliance Handbook — visuals
   Diagrams and charts generated as inline SVG/HTML. Registered on window.KMA_VISUALS
   and embedded in guides with <div data-widget="name"></div>. Colors use CSS variables
   so every figure follows the light/dark theme. */
(function () {
  "use strict";
  var V = {};
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var F = 'font-family="var(--font-body)"';
  var M = 'font-family="var(--font-mono)"';
  var fig = function (svg, caption, label) {
    return '<figure class="fig">' + svg.replace("<svg", '<svg role="img" aria-label="' + esc(label || caption) + '"') + '<figcaption>' + caption + '</figcaption></figure>';
  };
  var svgOpen = function (w, h) { return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + ' ' + h + '" ' + F + '>'; };
  var arrowDefs = '<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker>' +
    '<marker id="arA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--accent)"/></marker></defs>';
  var text = function (x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" font-size="' + (o.size || 13) + '" fill="' + (o.fill || "var(--text)") + '" text-anchor="' + (o.anchor || "start") + '"' + (o.weight ? ' font-weight="' + o.weight + '"' : "") + (o.mono ? " " + M : "") + (o.extra || "") + '>' + esc(s) + "</text>";
  };
  var fmt = function (n) { return n >= 1e6 ? (n / 1e6).toFixed(n >= 1e7 ? 0 : 1) + "M" : n >= 1e3 ? (n / 1e3).toFixed(n >= 1e4 ? 0 : 1) + "k" : String(n); };

  /* ---------- 1. Faction counter triangle ---------- */
  V["faction-triangle"] = function (el) {
    var W = 560, H = 430;
    var P = { Warrior: [280, 70], Warlock: [110, 360], Ranger: [450, 360] };
    var C = { Warrior: "var(--accent)", Warlock: "var(--blue)", Ranger: "var(--green)" };
    var s = svgOpen(W, H) + arrowDefs;
    var arc = function (a, b, label) {
      var ax = P[a][0], ay = P[a][1], bx = P[b][0], by = P[b][1];
      var mx = (ax + bx) / 2, my = (ay + by) / 2, dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy);
      var nx = -dy / len, ny = dx / len; // normal, bulge outward from centre
      var cx = 280, cy = 263; if ((mx - cx) * nx + (my - cy) * ny < 0) { nx = -nx; ny = -ny; }
      var qx = mx + nx * 60, qy = my + ny * 60;
      var ux = dx / len, uy = dy / len;
      var sx = ax + ux * 48, sy = ay + uy * 48, ex = bx - ux * 52, ey = by - uy * 52;
      var lx = mx + nx * 46, ly = my + ny * 46;
      return '<path d="M' + sx + ' ' + sy + ' Q' + qx + ' ' + qy + ' ' + ex + ' ' + ey + '" fill="none" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#arA)"/>' +
        text(lx, ly + 4, label, { anchor: "middle", size: 12, weight: 700, fill: "var(--accent)" });
    };
    s += arc("Warrior", "Warlock", "beats") + arc("Warlock", "Ranger", "beats") + arc("Ranger", "Warrior", "beats");
    Object.keys(P).forEach(function (k) {
      s += '<circle cx="' + P[k][0] + '" cy="' + P[k][1] + '" r="40" fill="' + C[k] + '" opacity="0.18"/><circle cx="' + P[k][0] + '" cy="' + P[k][1] + '" r="40" fill="none" stroke="' + C[k] + '" stroke-width="3"/>';
      s += text(P[k][0], P[k][1] + 5, k, { anchor: "middle", size: 15, weight: 700 });
    });
    s += text(280, 250, "20% less damage", { anchor: "middle", size: 13, fill: "var(--muted)" });
    s += text(280, 268, "taken from the faction you beat", { anchor: "middle", size: 13, fill: "var(--muted)" });
    s += "</svg>";
    el.innerHTML = fig(s.replace('viewBox="0 0 560 430"', 'viewBox="0 0 560 410"'), "The counter triangle. Bring the faction that beats the defender's dominant faction and your squad takes 20% less damage from them. Faction bonus: 5 of one faction +20% HP, ATK and DEF; 4 gives +15%; 3 plus 2 gives +10%; 3 gives +5%.", "Faction counter triangle: Warrior beats Warlock, Warlock beats Ranger, Ranger beats Warrior");
  };

  /* ---------- 2. Alliance Duel week poster (HTML) ---------- */
  V["duel-week"] = function (el) {
    var days = [
      { n: 1, d: "Mon", t: "Raven", spend: ["Raven Essence", "Raven Fruit", "Stamina", "Claim Falcon Quests"], big: "2,500 per Essence" },
      { n: 2, d: "Tue", t: "Construction", spend: ["UR Caravan ticket", "UR Covert Op", "Construction speedups", "Tap finished builds"], big: "100k per UR caravan" },
      { n: 3, d: "Wed", t: "Tech", spend: ["Raven Gear Chests", "Study Scrolls", "Research speedups", "Claim Falcon Quests"], big: "810k per Lv7 chest" },
      { n: 4, d: "Thu", t: "Heroes", spend: ["Hero shards", "Recruit tickets", "Antitoxin", "Skill badges"], big: "10k per UR shard" },
      { n: 5, d: "Fri", t: "Preparation", spend: ["Training boosts", "Promote one tier at a time", "Any speedup", "Claim Falcon Quests"], big: "110 per T10 trained" },
      { n: 6, d: "Sat", t: "Raid", spend: ["Hit assigned targets", "Healing speedups", "Leftover speedups", "Shield if not fighting"], big: "5x kills vs matched alliance" }
    ];
    var h = '<div class="poster"><div class="poster-head"><div class="poster-title">Alliance Duel week</div><div class="poster-sub">Save all week. Spend on the day. Reset 00:00 UTC.</div></div><div class="poster-grid">';
    days.forEach(function (d) {
      h += '<div class="pd"><div class="pd-top"><span class="pd-num">' + d.n + '</span><span class="pd-day">' + d.d + '</span></div><div class="pd-theme">' + esc(d.t) + '</div><ul>' + d.spend.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul><div class="pd-big">' + esc(d.big) + '</div></div>';
    });
    h += '<div class="pd pd-rest"><div class="pd-top"><span class="pd-num">7</span><span class="pd-day">Sun</span></div><div class="pd-theme">Bank</div><ul><li>Finish Falcon Quests, do not claim</li><li>Send gathering squads</li><li>Queue long builds and research</li><li>Read the save plan in mail</li></ul><div class="pd-big">Nothing scores today</div></div>';
    h += '</div><div class="poster-foot">Points register when you tap the hammer, not when the timer ends. A Falcon Quest with a red dot never expires.</div></div>';
    el.innerHTML = h;
  };

  /* ---------- 3. Sanctuary roadmap ---------- */
  V["sanctuary-roadmap"] = function (el) {
    var W = 960, H = 330, x0 = 40, x1 = 920, y = 170;
    var lv = [4, 6, 7, 8, 9, 10, 15, 20, 25, 30];
    var notes = {
      4: ["Alliance, Campaign", "Walls, Squad 1"], 6: ["World map, Training", "Grounds, Alliance Hall"], 7: ["Research Lab", "Raven, Arena, Shield"],
      8: ["Squad 2", "Watchtower"], 9: ["2nd research queue", "Covert Ops"], 10: ["Alliance Duel", "Caravans"],
      15: ["Elixir, Royal City,", "Undead Siege"], 20: ["Squad 3", "T7 troops"], 25: ["14-day build", "Lab 24 needed"], 30: ["T10 troops", "Hero level 150"]
    };
    var stars = { 4: 19, 6: 47, 7: 61, 8: 80, 9: 96, 10: 112, 15: 201, 20: 247, 25: 292, 30: 326 };
    var cap = { 4: 15, 6: 30, 7: 35, 8: 40, 9: 45, 10: 50, 15: 75, 20: 100, 25: 125, 30: 150 };
    var X = function (l) { return x0 + (l - 4) / 26 * (x1 - x0); };
    var s = svgOpen(W, H);
    s += '<line x1="' + x0 + '" y1="' + y + '" x2="' + x1 + '" y2="' + y + '" stroke="var(--line-strong)" stroke-width="3"/>';
    lv.forEach(function (l, i) {
      var x = X(l), up = i % 2 === 0;
      s += '<circle cx="' + x + '" cy="' + y + '" r="9" fill="var(--accent)"/>';
      s += text(x, y + 4, String(l), { anchor: "middle", size: 10, weight: 800, fill: "var(--accent-ink)", mono: true });
      var ty = up ? y - 62 : y + 44;
      s += '<line x1="' + x + '" y1="' + (up ? y - 14 : y + 14) + '" x2="' + x + '" y2="' + (up ? y - 40 : y + 30) + '" stroke="var(--line-strong)"/>';
      s += text(x, ty, notes[l][0], { anchor: "middle", size: 12, weight: 700 });
      s += text(x, ty + 15, notes[l][1], { anchor: "middle", size: 12, fill: "var(--text-soft)" });
    });
    s += text(x0, 268, "Stars needed", { size: 11, fill: "var(--muted)", weight: 700 });
    s += text(x0, 300, "Hero level cap", { size: 11, fill: "var(--muted)", weight: 700 });
    lv.forEach(function (l) {
      s += text(X(l), 268, String(stars[l]), { anchor: "middle", size: 12, mono: true, fill: "var(--text-soft)" });
      s += text(X(l), 300, String(cap[l]), { anchor: "middle", size: 12, mono: true, fill: "var(--text-soft)" });
    });
    s += text(480, 30, "Sanctuary level", { anchor: "middle", size: 12, fill: "var(--muted)", weight: 700, extra: ' letter-spacing="2"' });
    s += "</svg>";
    el.innerHTML = fig(s, "What each Sanctuary level unlocks, the Stars it needs (Stars cannot be sped up) and the hero level cap it grants.", "Sanctuary progression roadmap from level 4 to 30");
  };

  /* ---------- helpers for bar charts ---------- */
  function barChart(o) {
    // o: {w,h, data:[{label, value, sub}], yLabel, fmtV, highlight(i)->bool, note, log}
    var W = o.w || 640, H = o.h || 300, padL = 50, padR = 16, padT = 24, padB = 46;
    var max = Math.max.apply(null, o.data.map(function (d) { return d.value; }));
    var scale = function (v) { return o.log ? Math.log10(v) / Math.log10(max) : v / max; };
    var n = o.data.length, gap = 10, bw = (W - padL - padR - gap * (n - 1)) / n;
    var s = svgOpen(W, H);
    var base = H - padB;
    // grid
    for (var g = 0; g <= 4; g++) {
      var gy = padT + (base - padT) * g / 4;
      s += '<line x1="' + padL + '" y1="' + gy + '" x2="' + (W - padR) + '" y2="' + gy + '" stroke="var(--line)" stroke-dasharray="2 4"/>';
      if (!o.log) s += text(padL - 8, gy + 4, fmt(Math.round(max * (4 - g) / 4)), { anchor: "end", size: 11, mono: true, fill: "var(--muted)" });
    }
    s += '<line x1="' + padL + '" y1="' + base + '" x2="' + (W - padR) + '" y2="' + base + '" stroke="var(--line-strong)"/>';
    o.data.forEach(function (d, i) {
      var x = padL + i * (bw + gap), h = Math.max(2, (base - padT) * scale(d.value)), y = base - h;
      var hl = o.highlight && o.highlight(i, d);
      s += '<rect x="' + x + '" y="' + y + '" width="' + bw + '" height="' + h + '" rx="4" fill="' + (hl ? "var(--accent)" : "var(--blue)") + '" opacity="' + (hl ? 1 : 0.85) + '"><title>' + esc(d.label + ": " + (o.fmtV ? o.fmtV(d.value) : d.value)) + '</title></rect>';
      s += text(x + bw / 2, y - 6, o.fmtV ? o.fmtV(d.value) : fmt(d.value), { anchor: "middle", size: 11, mono: true, fill: "var(--text-soft)" });
      s += text(x + bw / 2, base + 16, d.label, { anchor: "middle", size: 11.5, weight: 700 });
      if (d.sub) s += text(x + bw / 2, base + 30, d.sub, { anchor: "middle", size: 10.5, fill: "var(--muted)" });
    });
    if (o.yLabel) s += text(padL, 14, o.yLabel, { size: 11, fill: "var(--muted)", weight: 700 });
    if (o.note) s += text(W - padR, 14, o.note, { anchor: "end", size: 11, fill: "var(--muted)" });
    return s + "</svg>";
  }

  /* ---------- 4. Shards per star ---------- */
  V["shard-curve"] = function (el) {
    var per = [10, 15, 20, 30, 40, 60, 125, 175, 200, 300], cum = 0;
    var data = per.map(function (v, i) { cum += v; return { label: (i + 1) + "★", value: v, sub: "total " + cum }; });
    el.innerHTML = fig(barChart({ data: data, yLabel: "Shards for that star", highlight: function (i) { return i >= 7; } }),
      "Shards per star. Stars 8 to 10 (amber) cost more than stars 1 to 7 combined. 475 shards reaches 8 stars and unlocks the bench skill; 975 reaches 10.", "Bar chart of hero shard cost per star");
  };

  /* ---------- 5. Antitoxin per level (log) ---------- */
  V["antitoxin-curve"] = function (el) {
    var data = [{ label: "Lv 10", value: 1500 }, { label: "Lv 30", value: 19900, sub: "bench skill" }, { label: "Lv 45", value: 137900, sub: "first spike" }, { label: "Lv 60", value: 1550000 }, { label: "Lv 90", value: 20800000 }, { label: "Lv 150", value: 176000000, sub: "cap" }];
    el.innerHTML = fig(barChart({ data: data, log: true, yLabel: "Antitoxin for that single level (log scale)", note: "each step up is roughly 10x", fmtV: fmt }),
      "Antitoxin cost of one level at milestones. The scale is logarithmic: level 150 costs about 100,000 times level 10. Covert Operations and Level Supplies are the only sources that keep pace.", "Log-scale bar chart of antitoxin per hero level");
  };

  /* ---------- 6. Squad shape ---------- */
  V["squad-shape"] = function (el) {
    var W = 640, H = 300, s = svgOpen(W, H) + arrowDefs;
    var slot = function (x, y, role, col, who) {
      s += '<rect x="' + (x - 48) + '" y="' + (y - 34) + '" width="96" height="68" rx="8" fill="' + col + '" opacity="0.16"/><rect x="' + (x - 48) + '" y="' + (y - 34) + '" width="96" height="68" rx="8" fill="none" stroke="' + col + '" stroke-width="2"/>';
      s += text(x, y - 6, role, { anchor: "middle", size: 13, weight: 700 }); s += text(x, y + 14, who, { anchor: "middle", size: 11, fill: "var(--text-soft)" });
    };
    s += '<line x1="30" y1="150" x2="120" y2="150" stroke="var(--red)" stroke-width="2.5" marker-end="url(#ar)" style="color:var(--red)"/>';
    s += text(30, 135, "Enemy", { size: 12, weight: 700, fill: "var(--red)" });
    s += text(210, 40, "FRONT ROW (2)", { anchor: "middle", size: 11, weight: 700, fill: "var(--muted)", extra: ' letter-spacing="2"' });
    s += text(400, 40, "BACK ROW (3)", { anchor: "middle", size: 11, weight: 700, fill: "var(--muted)", extra: ' letter-spacing="2"' });
    slot(210, 105, "Tank", "var(--accent)", "Arthur"); slot(210, 195, "Tank", "var(--accent)", "Bella / Daskal");
    slot(400, 70, "Damage", "var(--red)", "Marlena"); slot(400, 150, "Support or Tank", "var(--green)", "Stellar / Harper"); slot(400, 230, "Damage", "var(--red)", "Grenwald / Zoya");
    s += '<rect x="500" y="60" width="120" height="180" rx="8" fill="none" stroke="var(--line-strong)" stroke-dasharray="5 4"/>';
    s += text(560, 85, "BENCH", { anchor: "middle", size: 11, weight: 700, fill: "var(--muted)", extra: ' letter-spacing="2"' });
    s += text(560, 120, "Spare URs at", { anchor: "middle", size: 12 }); s += text(560, 137, "Lv30 + 8★", { anchor: "middle", size: 12, weight: 700 });
    s += text(560, 170, "+20% ATK/HP/DEF", { anchor: "middle", size: 12, fill: "var(--accent)", weight: 700 }); s += text(560, 187, "+10% cooldown", { anchor: "middle", size: 12, fill: "var(--accent)", weight: 700 });
    s += text(560, 215, "even while sitting out", { anchor: "middle", size: 11, fill: "var(--muted)" });
    s += "</svg>";
    el.innerHTML = fig(s.replace('viewBox="0 0 640 300"', 'viewBox="0 0 640 270"'), "Squad layout: two tanks up front absorb the hit, damage and support sit behind, and every spare 8-star UR on the bench still buffs the five who fight. Simulations favour a third tank in the support slot once you own one at similar investment.", "Diagram of a five-hero squad with front and back rows and the bench bonus");
  };

  /* ---------- 7. Rat Swarm choke layout ---------- */
  V["rat-swarm-layout"] = function (el) {
    var W = 700, H = 380, s = svgOpen(W, H) + arrowDefs;
    var path = function (d) { s += '<path d="' + d + '" fill="none" stroke="var(--line-strong)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>'; };
    path("M40 60 L200 60 L300 170"); path("M40 190 L180 190 L300 170"); path("M40 320 L200 320 L300 170"); path("M300 170 L470 170");
    [60, 190, 320].forEach(function (y) { s += '<path d="M60 ' + y + ' L120 ' + y + '" stroke="var(--red)" stroke-width="2.5" marker-end="url(#ar)" style="color:var(--red)"/>'; s += text(40, y - 14, "rats", { size: 11, fill: "var(--red)", weight: 700 }); });
    s += '<rect x="470" y="110" width="180" height="120" rx="10" fill="var(--accent)" opacity="0.15"/><rect x="470" y="110" width="180" height="120" rx="10" fill="none" stroke="var(--accent)" stroke-width="2"/>';
    s += text(560, 165, "Sanctuary", { anchor: "middle", size: 16, weight: 700 }); s += text(560, 186, "heroes: tanks front, DPS back", { anchor: "middle", size: 11, fill: "var(--text-soft)" });
    s += '<ellipse cx="300" cy="170" rx="34" ry="30" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/>';
    s += text(300, 128, "choke point", { anchor: "middle", size: 12, weight: 700, fill: "var(--accent)" });
    var tower = function (x, y, k, col, lab) { s += '<circle cx="' + x + '" cy="' + y + '" r="14" fill="' + col + '"/>' + text(x, y + 5, k, { anchor: "middle", size: 12, weight: 800, fill: "var(--accent-ink)", mono: true }) + text(x, y + 30, lab, { anchor: "middle", size: 11, fill: "var(--text-soft)" }); };
    tower(262, 218, "S", "var(--blue)", "1. slow"); tower(340, 218, "A", "var(--green)", "2. AoE"); tower(300, 250, "A", "var(--green)", "");
    tower(420, 128, "T", "var(--accent)", "3. single-target"); tower(420, 215, "T", "var(--accent)", "for the Rat King");
    s += "</svg>";
    el.innerHTML = fig(s.replace('viewBox="0 0 700 380"', 'viewBox="0 0 700 330"'), "A Rat Swarm layout: three rat paths converge on one choke where slow (S) and area (A) towers stack; single-target (T) towers sit closest to the Sanctuary for the Rat King. One stacked choke beats five weak towers spread out.", "Rat Swarm tower placement diagram");
  };

  /* ---------- 8. Elixir Scramble timeline ---------- */
  V["elixir-timeline"] = function (el) {
    var W = 960, H = 250, x0 = 50, x1 = 920, y = 130;
    var X = function (m) { return x0 + m / 30 * (x1 - x0); };
    var s = svgOpen(W, H);
    var band = function (a, b, col, label) { s += '<rect x="' + X(a) + '" y="' + (y - 22) + '" width="' + (X(b) - X(a)) + '" height="44" fill="' + col + '" opacity="0.18"/>' + text((X(a) + X(b)) / 2, y + 5, label, { anchor: "middle", size: 12, weight: 700 }); };
    band(0, 10, "var(--blue)", "Take Platform + own Workshop, contest theirs"); band(10, 13, "var(--accent)", "Castle!"); band(13, 30, "var(--green)", "Hold the Castle, rotate wounded, camps for low Power");
    s += '<line x1="' + x0 + '" y1="' + y + '" x2="' + x1 + '" y2="' + y + '" stroke="var(--line-strong)" stroke-width="2"/>';
    for (var m = 0; m <= 30; m += 5) { s += '<line x1="' + X(m) + '" y1="' + (y + 22) + '" x2="' + X(m) + '" y2="' + (y + 30) + '" stroke="var(--line-strong)"/>' + text(X(m), y + 46, m + " min", { anchor: "middle", size: 11, mono: true, fill: "var(--muted)" }); }
    var mark = function (m, lab, sub, up) { var ty = up ? y - 62 : y + 82; s += '<line x1="' + X(m) + '" y1="' + (up ? y - 24 : y + 24) + '" x2="' + X(m) + '" y2="' + (up ? y - 44 : y + 64) + '" stroke="var(--accent)" stroke-width="2"/><circle cx="' + X(m) + '" cy="' + (up ? y - 44 : y + 64) + '" r="4" fill="var(--accent)"/>'; s += text(X(m), ty - (up ? 6 : -4), lab, { anchor: "middle", size: 12, weight: 700 }); s += text(X(m), ty + (up ? 9 : 19), sub, { anchor: "middle", size: 11, fill: "var(--text-soft)" }); };
    mark(1, "Workshops open", "50/s each, Platform +10%", true); mark(10, "Elixir Castle opens", "80/s, Relics +15%, Altar -15%", true); mark(13, "Herb camps", "5/s, spare squads", false); mark(24, "Medkits spawn", "bonus points late", false); mark(0, "Spawn", "5 min early", false);
    s += "</svg>";
    el.innerHTML = fig(s, "The 30-minute Elixir Scramble: an early lead from the Workshops and Observation Platform, everything onto the Castle at minute 10, then hold.", "Elixir Scramble timeline");
  };

  /* ---------- 9. Promotion trick ---------- */
  V["promotion-trick"] = function (el) {
    var W = 720, H = 300, s = svgOpen(W, H) + arrowDefs;
    var box = function (x, y, w, h, title, sub, col) { s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="8" fill="' + col + '" opacity="0.15"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="8" fill="none" stroke="' + col + '" stroke-width="2"/>' + text(x + w / 2, y + 26, title, { anchor: "middle", size: 13, weight: 700 }) + text(x + w / 2, y + 45, sub, { anchor: "middle", size: 11, fill: "var(--text-soft)" }); };
    [40, 120, 200].forEach(function (y, i) { box(30, y, 170, 62, "Training Ground " + (i + 2), "kept at Lv10", "var(--blue)"); s += '<path d="M200 ' + (y + 31) + ' C 260 ' + (y + 31) + ', 260 150, 330 150" fill="none" stroke="var(--blue)" stroke-width="2" marker-end="url(#ar)" style="color:var(--blue)"/>'; });
    s += text(265, 22, "~455 T4 each per 10.5 h", { anchor: "middle", size: 11, fill: "var(--muted)", weight: 700 });
    box(330, 110, 190, 80, "Training Ground 1", "maxed to Sanctuary cap", "var(--accent)");
    s += '<path d="M520 150 L600 150" fill="none" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#arA)"/>';
    s += text(660, 140, "Promote", { anchor: "middle", size: 13, weight: 700 }); s += text(660, 158, "T4 → T9", { anchor: "middle", size: 13, weight: 700, mono: true });
    s += text(660, 178, "712 in 16.5 h", { anchor: "middle", size: 11, fill: "var(--green)", weight: 700 });
    s += text(660, 196, "vs 33 h from scratch", { anchor: "middle", size: 11, fill: "var(--red)" });
    s += "</svg>";
    el.innerHTML = fig(s.replace('viewBox="0 0 720 300"', 'viewBox="0 0 720 275"'), "The four-ground promotion trick: feed cheap T4 from three level-10 grounds into one maxed ground and promote. It saves 6 to 7 hours per cycle, and every promotion step scores on Duel day 5.", "Diagram of three level-10 training grounds feeding T4 troops into one maxed ground for promotion");
  };

  /* ---------- 10. Alliance structure ---------- */
  V["alliance-org"] = function (el) {
    var W = 720, H = 360, s = svgOpen(W, H);
    var row = function (y, w, label, sub, col, right) {
      var x = (W - w) / 2;
      s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="52" rx="8" fill="' + col + '" opacity="0.16"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="52" rx="8" fill="none" stroke="' + col + '" stroke-width="2"/>';
      s += text(W / 2, y + 22, label, { anchor: "middle", size: 14, weight: 700 }); s += text(W / 2, y + 40, sub, { anchor: "middle", size: 11, fill: "var(--text-soft)" });
      if (right) s += text(x + w + 12, y + 30, right, { size: 11, fill: "var(--muted)" });
    };
    row(10, 220, "R5  viciouslywild", "titles, war, banner, disband", "var(--accent)", "+5% rally damage");
    var titles = ["God of War", "Diplomat", "Recruiter", "Inspector"];
    titles.forEach(function (t, i) { var x = 120 + i * 125; s += '<rect x="' + x + '" y="76" width="110" height="34" rx="6" fill="var(--surface-2)" stroke="var(--line-strong)"/>' + text(x + 55, 97, t, { anchor: "middle", size: 11.5, weight: 700 }); });
    s += text(W / 2, 128, "four honorary posts held by R4s, +5% rally damage", { anchor: "middle", size: 11, fill: "var(--muted)" });
    row(140, 380, "R4  Officers (6 seats)", "launch events, lead rallies, accept and kick, alliance mail", "var(--blue)", "+2.5% rally");
    row(206, 480, "R3  Veterans", "auto-promoted at 1,000,000 Power", "var(--green)", "kick after 96 h offline");
    row(272, 560, "R2  Members", "auto-promoted at 500,000 Power", "var(--green)", "kick after 48 h");
    row(338, 640, "R1  Recruits", "", "var(--muted)", "kick after 24 h");
    s = s.replace('<svg', '<svg'); // no-op keeps structure
    el.innerHTML = fig(s.replace('viewBox="0 0 720 360"', 'viewBox="0 0 720 400"') + "</svg>", "How KMA is organised: one leader, four titled officers among the six R4s, then members promoted by Power and removed by inactivity.", "Alliance rank pyramid");
  };

  /* ---------- 11. Shield cost per hour ---------- */
  V["shield-costs"] = function (el) {
    var a = barChart({ w: 320, h: 260, data: [{ label: "8 h", value: 938, sub: "7,500" }, { label: "12 h", value: 825, sub: "9,900" }, { label: "24 h", value: 825, sub: "19,800" }], yLabel: "Alliance Coins per hour", highlight: function (i) { return i === 2; } });
    var b = barChart({ w: 320, h: 260, data: [{ label: "8 h", value: 188, sub: "1,500" }, { label: "12 h", value: 208, sub: "2,500" }, { label: "24 h", value: 208, sub: "5,000" }, { label: "3 d", value: 167, sub: "12,000" }], yLabel: "Diamonds per hour", highlight: function (i) { return i === 3; } });
    el.innerHTML = '<figure class="fig fig-pair">' + a + b + '<figcaption>Shield price per hour of protection. Buy the 24-hour coin shield (amber) whenever you can; diamonds are the emergency option only.</figcaption></figure>';
  };

  /* ---------- 12. Troop tier ladder ---------- */
  V["troop-ladder"] = function (el) {
    var W = 720, H = 300, s = svgOpen(W, H);
    var steps = [[1, "T1"], [3, "T2"], [6, "T3"], [10, "T4"], [14, "T5"], [17, "T6"], [20, "T7"], [24, "T8"], [27, "T9"], [30, "T10"]];
    steps.forEach(function (st, i) {
      var x = 30 + i * 66, y = 230 - i * 18, hl = i >= 6;
      s += '<rect x="' + x + '" y="' + y + '" width="60" height="' + (260 - y) + '" rx="4" fill="' + (hl ? "var(--accent)" : "var(--blue)") + '" opacity="' + (hl ? 0.9 : 0.7) + '"/>';
      s += text(x + 30, y - 8, st[1], { anchor: "middle", size: 14, weight: 800, mono: true });
      s += text(x + 30, 278, "TG " + st[0], { anchor: "middle", size: 11, fill: "var(--muted)", mono: true });
    });
    s += text(30, 30, "Troop tier unlocked by Training Grounds level", { size: 12, weight: 700, fill: "var(--muted)" });
    s += text(690, 48, "T10 also needs Sanctuary 30", { anchor: "end", size: 11, fill: "var(--text-soft)" }); s += text(690, 64, "and one Elite Troop node (Study Scrolls)", { anchor: "end", size: 11, fill: "var(--text-soft)" });
    s += "</svg>";
    el.innerHTML = fig(s, "Troop tiers by Training Grounds level. T7 at level 20 is the first real mid-game bar; T10 needs level 30 plus the Elite Troop node.", "Stair chart of troop tiers by training grounds level");
  };

  /* ---------- 13. Hero build path (HTML) ---------- */
  V["hero-path"] = function (el) {
    var steps = [
      ["1", "Level", "Antitoxin. Cap = 5 x Sanctuary level. Fastest power, drives troop count."],
      ["2", "Stars", "Shards. 475 to 8★, 975 to 10★. Unlocks skill effects at each milestone."],
      ["3", "Skills", "Badges. Main damage or team-DR skill first, passive second, utility last."],
      ["4", "Gear", "Gearstone. DPS: sword, gloves. Tanks: armor, boots. Push Smelting to 25."]
    ];
    var h = '<div class="flow">' + steps.map(function (s) { return '<div class="flow-step"><div class="flow-n">' + s[0] + '</div><div class="flow-t">' + s[1] + '</div><div class="flow-d">' + esc(s[2]) + '</div></div>'; }).join('<div class="flow-arrow">→</div>') + '</div>';
    h += '<div class="flow-note"><b>Milestone:</b> level 30 + 8 stars unlocks the fifth skill, which works from the bench (+20% ATK/HP/DEF to the squad).</div>';
    el.innerHTML = h;
  };

  /* ---------- 14. Stars gate ---------- */
  V["stars-gate"] = function (el) {
    var pts = [[3, 17], [6, 47], [10, 112], [15, 201], [20, 247], [25, 292], [30, 326]];
    var W = 640, H = 260, padL = 50, padR = 20, padT = 24, padB = 40, base = H - padB;
    var X = function (l) { return padL + (l - 3) / 27 * (W - padL - padR); }, Y = function (v) { return base - v / 350 * (base - padT); };
    var s = svgOpen(W, H);
    for (var g = 0; g <= 350; g += 100) s += '<line x1="' + padL + '" y1="' + Y(g) + '" x2="' + (W - padR) + '" y2="' + Y(g) + '" stroke="var(--line)" stroke-dasharray="2 4"/>' + text(padL - 8, Y(g) + 4, String(g), { anchor: "end", size: 11, mono: true, fill: "var(--muted)" });
    var d = pts.map(function (p, i) { return (i ? "L" : "M") + X(p[0]) + " " + Y(p[1]); }).join(" ");
    s += '<path d="' + d + ' L' + X(30) + ' ' + base + ' L' + X(3) + ' ' + base + 'Z" fill="var(--accent)" opacity="0.12"/><path d="' + d + '" fill="none" stroke="var(--accent)" stroke-width="2.5"/>';
    pts.forEach(function (p) { s += '<circle cx="' + X(p[0]) + '" cy="' + Y(p[1]) + '" r="5" fill="var(--accent)" stroke="var(--bg)" stroke-width="2"><title>Sanctuary ' + p[0] + ': ' + p[1] + ' Stars</title></circle>' + text(X(p[0]), Y(p[1]) - 10, String(p[1]), { anchor: "middle", size: 11, mono: true, fill: "var(--text-soft)" }) + text(X(p[0]), base + 18, "S" + p[0], { anchor: "middle", size: 11, mono: true, fill: "var(--muted)" }); });
    s += text(padL, 14, "Stars required per Sanctuary level (a running total, never spent)", { size: 11, weight: 700, fill: "var(--muted)" });
    s += "</svg>";
    el.innerHTML = fig(s, "Stars needed to upgrade the Sanctuary. The curve is steepest early, which is why the wards and forest have to start on day one.", "Line chart of Stars required by Sanctuary level");
  };

  /* ---------- 15. KvK week (HTML) ---------- */
  V["kvk-week"] = function (el) {
    var days = [["Sun", "Points week starts", "Post plan, bank Falcon Quests"], ["Mon", "Duel: Raven", "Essence, Fruit, stamina"], ["Tue", "Duel: Construction", "Caravans, covert ops, builds"], ["Wed", "Duel: Tech + Demon King", "Chests, scrolls, 3+ DK attacks"], ["Thu", "Duel: Heroes", "Shards, tickets, antitoxin"], ["Fri", "Duel: Preparation", "Train and promote"], ["Sat", "WAR DAY", "4-hour Royal City fight. No shields."]];
    var h = '<div class="poster"><div class="poster-head"><div class="poster-title">Kingdom War week</div><div class="poster-sub">Points Sunday to Friday, war on Saturday. Duel win 30,000 pts, Elixir win 50,000, Demon King kingdom win 250,000.</div></div><div class="strip">';
    days.forEach(function (d, i) { h += '<div class="strip-day' + (i === 6 ? ' strip-war' : '') + '"><div class="pd-day">' + d[0] + '</div><div class="strip-t">' + esc(d[1]) + '</div><div class="strip-d">' + esc(d[2]) + '</div></div>'; });
    h += '</div></div>';
    el.innerHTML = h;
  };

  /* ---------- 16. Research order (HTML flow) ---------- */
  V["research-order"] = function (el) {
    var steps = [["Development", "cheapest Power, build + research speed"], ["Duel tree", "Super 100 → Best 450 → Arena Expert 3,800 scrolls"], ["Economy", "gathering branch first"], ["Hero", "your Squad 1 faction"], ["Soldiers", "Load Training first"], ["Squad 1", "same buffs as Squad 2/3, far cheaper"], ["Elite Troop", "only the node for the next tier"], ["Later", "Squads 2 and 3, Tactics, Caravan"]];
    el.innerHTML = '<div class="flow flow-wrap">' + steps.map(function (s, i) { return '<div class="flow-step' + (i === 1 ? ' flow-hl' : '') + '"><div class="flow-n">' + (i + 1) + '</div><div class="flow-t">' + esc(s[0]) + '</div><div class="flow-d">' + esc(s[1]) + '</div></div>'; }).join('<div class="flow-arrow">→</div>') + '</div>';
  };

  window.KMA_VISUALS = V;
})();
