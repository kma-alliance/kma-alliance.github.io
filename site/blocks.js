/* [KMA] Alliance Handbook — content blocks.
   Guides embed rich graphics as fenced JSON blocks, for example:

     ```kma-steps
     { "title": "How a match runs", "steps": [ { "label": "Register", "when": "Mon", "text": "..." } ] }
     ```

   Markdown turns the fence into <pre><code class="language-kma-steps">, and hydrate() swaps
   it for the drawn component. build.py validates every block before the site is published,
   so a typo fails the build instead of showing raw JSON to members. */
(function () {
  "use strict";
  var D = window.KMA_DATA || { heroes: [] };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  // inline **bold** only, everything else escaped
  var rich = function (s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); };
  var num = function (n) { return typeof n === "number" ? n.toLocaleString() : esc(n); };

  var I = {
    lock: '<path d="M6 11V8a6 6 0 0 1 12 0v3"/><rect x="4" y="11" width="16" height="10" rx="2"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20c0-2.8-1.7-4.9-4.2-5.7"/>',
    coins: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
    gift: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M12 8c-2-3-6-3-6-1s3 2 6 1Zm0 0c2-3 6-3 6-1s-3 2-6 1Z"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    swords: '<path d="m4 20 6-6M14 4l6 6-9 9-6-6 9-9ZM5 14l-1 6 6-1"/>',
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z"/>',
    shield: '<path d="M12 3 4 7v6c0 4.4 3.4 7.6 8 8 4.6-.4 8-3.6 8-8V7l-8-4Z"/>',
    check: '<path d="m5 12 4.5 4.5L19 7"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    dot: '<circle cx="12" cy="12" r="3"/>',
    event: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    crown: '<path d="M3 18h18M4 17 2 7l5 4 5-7 5 7 5-4-2 10Z"/>',
    solo: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    combat: '<path d="m4 20 6-6M14 4l6 6-9 9-6-6 9-9ZM5 14l-1 6 6-1"/>',
    alliance: '<path d="M6 21V4h12v17M6 11h12M10 21v-5h4v5"/>'
  };
  function icon(name, cls) {
    return '<svg class="' + (cls || "bk-ico") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (I[name] || I.dot) + "</svg>";
  }
  function factIcon(label) {
    var l = String(label).toLowerCase();
    if (/open|unlock|require|need/.test(l)) return "lock";
    if (/when|day|schedule|start/.test(l)) return "calendar";
    if (/duration|length|time|window/.test(l)) return "clock";
    if (/who|player|member|team|size|squad/.test(l)) return "users";
    if (/cost|price|spend|energy|stamina/.test(l)) return "coins";
    if (/reward|pay|prize/.test(l)) return "gift";
    if (/format|mode|type|lane/.test(l)) return "flag";
    if (/where|map|location/.test(l)) return "pin";
    if (/fight|battle|attack/.test(l)) return "swords";
    if (/defen|shield|garrison/.test(l)) return "shield";
    return "dot";
  }
  var HERO = {};
  (D.heroes || []).forEach(function (h) { HERO[h[0]] = { slug: h[0], name: h[1], faction: h[2], rarity: h[3], role: h[4], tier: h[5] }; });
  var FCOL = { Warrior: "var(--accent)", Ranger: "var(--green)", Warlock: "var(--blue)" };

  var B = {};

  /* Event card: the at-a-glance header for an event guide */
  B.event = function (d) {
    var h = '<div class="bk-event' + (d.art ? " has-art" : "") + '">';
    if (d.art) h += '<img class="bk-event-art" src="' + esc(d.art) + '" alt="" loading="lazy" onerror="this.parentNode.classList.remove(\'has-art\');this.remove()">';
    h += '<div class="bk-event-in">';
    h += '<div class="bk-event-top">' + icon(d.icon || "event", "bk-event-ico") + '<span class="bk-kind">' + esc(d.kind || "Event") + "</span></div>";
    if (d.headline) h += '<p class="bk-headline">' + rich(d.headline) + "</p>";
    if (d.facts && d.facts.length) {
      h += '<dl class="bk-facts">';
      d.facts.forEach(function (f) {
        h += '<div class="bk-fact">' + icon(factIcon(f[0])) + "<dt>" + esc(f[0]) + "</dt><dd>" + rich(f[1]) + "</dd></div>";
      });
      h += "</dl>";
    }
    if (d.rewards && d.rewards.length) {
      h += '<div class="bk-rewards">' + icon("gift") + '<span class="bk-rw-label">Rewards</span>' +
        d.rewards.map(function (r) { return '<span class="bk-chip">' + esc(r) + "</span>"; }).join("") + "</div>";
    }
    return h + "</div></div>";
  };

  /* Numbered steps / phases, horizontal on wide screens and a vertical rail on phones */
  B.steps = function (d) {
    var h = '<figure class="bk bk-steps">';
    if (d.title) h += '<figcaption class="bk-title">' + esc(d.title) + "</figcaption>";
    h += '<ol class="bk-steps-list">';
    (d.steps || []).forEach(function (s, i) {
      h += '<li class="bk-step"><span class="bk-step-n">' + (i + 1) + '</span><div class="bk-step-body">' +
        (s.when ? '<span class="bk-when">' + esc(s.when) + "</span>" : "") +
        '<strong class="bk-step-label">' + esc(s.label) + "</strong>" +
        (s.text ? '<p>' + rich(s.text) + "</p>" : "") + "</div></li>";
    });
    return h + "</ol>" + (d.note ? '<p class="bk-note">' + rich(d.note) + "</p>" : "") + "</figure>";
  };

  /* Horizontal bar chart for thresholds, reward ladders and comparisons */
  B.bars = function (d) {
    var rows = d.rows || [], max = 0;
    rows.forEach(function (r) { if (typeof r[1] === "number" && r[1] > max) max = r[1]; });
    var h = '<figure class="bk bk-bars" role="img" aria-label="' + esc(d.title || "Chart") + '">';
    if (d.title) h += '<figcaption class="bk-title">' + esc(d.title) + (d.unit ? ' <span class="bk-unit">' + esc(d.unit) + "</span>" : "") + "</figcaption>";
    h += '<div class="bk-bars-grid">';
    rows.forEach(function (r) {
      var pct = max ? Math.max(2, Math.round((r[1] / max) * 100)) : 0, hi = d.highlight && d.highlight === r[0];
      h += '<div class="bk-bar-row' + (hi ? " hi" : "") + '"><span class="bk-bar-label">' + esc(r[0]) + "</span>" +
        '<span class="bk-bar-track"><span class="bk-bar-fill" style="width:' + pct + '%"></span></span>' +
        '<span class="bk-bar-val">' + num(r[1]) + "</span>" +
        (r[2] ? '<span class="bk-bar-sub">' + rich(r[2]) + "</span>" : "") + "</div>";
    });
    return h + "</div>" + (d.note ? '<p class="bk-note">' + rich(d.note) + "</p>" : "") + "</figure>";
  };

  /* Hero lineup with real portraits */
  B.lineup = function (d) {
    var h = '<figure class="bk bk-lineup">';
    if (d.title) h += '<figcaption class="bk-title">' + esc(d.title) + "</figcaption>";
    h += '<div class="bk-lineup-row">';
    (d.heroes || []).forEach(function (e) {
      var x = HERO[e[0]] || { slug: e[0], name: e[0], faction: "", rarity: "", tier: "–" };
      var col = FCOL[String(x.faction).replace("?", "")] || "var(--line-strong)";
      h += '<a class="bk-hero" href="#/hero-tier-list" style="--fc:' + col + '">' +
        '<span class="bk-hero-img"><img src="img/portraits/' + esc(x.slug) + '.webp" alt="" loading="lazy" onerror="this.src=\'img/cards/' + esc(x.slug) + '.webp\'">' +
        (x.rarity ? '<span class="rar rar-' + esc(x.rarity) + ' bk-hero-rar">' + esc(x.rarity) + "</span>" : "") + "</span>" +
        '<span class="bk-hero-name">' + esc(x.name) + "</span>" +
        (e[1] ? '<span class="bk-hero-role">' + esc(e[1]) + "</span>" : "") +
        (e[2] ? '<span class="bk-hero-why">' + rich(e[2]) + "</span>" : "") + "</a>";
    });
    h += "</div>";
    if (d.alts && d.alts.length) {
      h += '<div class="bk-alts"><span class="bk-alts-label">Swap-ins</span>' + d.alts.map(function (a) {
        var x = HERO[a[0]] || { slug: a[0], name: a[0] };
        return '<span class="bk-alt"><img src="img/cards/' + esc(x.slug) + '.webp" alt="" loading="lazy" onerror="this.remove()">' + esc(x.name) + (a[1] ? ' <em>' + esc(a[1]) + "</em>" : "") + "</span>";
      }).join("") + "</div>";
    }
    return h + (d.note ? '<p class="bk-note">' + rich(d.note) + "</p>" : "") + "</figure>";
  };

  /* Do / Don't pair */
  B.dodont = function (d) {
    var col = function (cls, title, ico, items) {
      return '<div class="bk-dd ' + cls + '"><div class="bk-dd-head">' + icon(ico) + esc(title) + '</div><ul>' +
        (items || []).map(function (t) { return "<li>" + rich(t) + "</li>"; }).join("") + "</ul></div>";
    };
    return '<figure class="bk bk-dodont">' + (d.title ? '<figcaption class="bk-title">' + esc(d.title) + "</figcaption>" : "") +
      '<div class="bk-dd-grid">' + col("do", d.doTitle || "Do", "check", d["do"]) + col("dont", d.dontTitle || "Don't", "x", d.dont) + "</div></figure>";
  };

  /* Big-number tiles */
  B.tiles = function (d) {
    return '<div class="bk bk-tiles">' + (d.tiles || []).map(function (t) {
      return '<div class="bk-tile"><span class="bk-tile-big">' + esc(t[0]) + '</span><span class="bk-tile-label">' + esc(t[1]) + "</span>" +
        (t[2] ? '<span class="bk-tile-sub">' + rich(t[2]) + "</span>" : "") + "</div>";
    }).join("") + "</div>";
  };

  /* Schematic map: nodes and labelled links on a grid */
  B.map = function (d) {
    var W = d.w || 640, H = d.h || 320, byId = {};
    (d.nodes || []).forEach(function (n) { byId[n.id] = n; });
    var KIND = {
      base: { fill: "var(--blue-soft)", stroke: "var(--blue)" }, ally: { fill: "var(--blue-soft)", stroke: "var(--blue)" },
      enemy: { fill: "var(--red-soft)", stroke: "var(--red)" }, spawn: { fill: "var(--red-soft)", stroke: "var(--red)" },
      objective: { fill: "var(--accent-soft)", stroke: "var(--accent)" }, tower: { fill: "var(--accent-soft)", stroke: "var(--accent)" },
      node: { fill: "var(--surface-2)", stroke: "var(--line-strong)" }, safe: { fill: "var(--green-soft)", stroke: "var(--green)" }
    };
    var s = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(d.title || "Map") + '" class="bk-map-svg">';
    s += '<defs><marker id="bkArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="var(--muted)"/></marker></defs>';
    (d.links || []).forEach(function (l) {
      var a = byId[l[0]], b = byId[l[1]]; if (!a || !b) return;
      var arrow = l[3] === "arrow";
      s += '<line x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y + '" stroke="var(--line-strong)" stroke-width="2.5"' +
        (l[3] === "dashed" ? ' stroke-dasharray="6 6"' : "") + (arrow ? ' marker-end="url(#bkArrow)"' : "") + "/>";
      if (l[2]) {
        var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        s += '<text x="' + mx + '" y="' + (my - 7) + '" text-anchor="middle" class="bk-map-link">' + esc(l[2]) + "</text>";
      }
    });
    (d.nodes || []).forEach(function (n) {
      var k = KIND[n.kind] || KIND.node, r = n.r || 22, shape;
      if (n.kind === "objective") shape = '<rect x="' + (n.x - r * 0.8) + '" y="' + (n.y - r * 0.8) + '" width="' + (r * 1.6) + '" height="' + (r * 1.6) + '" rx="4" transform="rotate(45 ' + n.x + " " + n.y + ')"';
      else if (n.kind === "base" || n.kind === "enemy" || n.kind === "ally") shape = '<rect x="' + (n.x - r) + '" y="' + (n.y - r) + '" width="' + (2 * r) + '" height="' + (2 * r) + '" rx="8"';
      else if (n.kind === "tower") shape = '<path d="M' + n.x + " " + (n.y - r) + " L" + (n.x + r) + " " + (n.y + r * 0.8) + " L" + (n.x - r) + " " + (n.y + r * 0.8) + ' Z"';
      else shape = '<circle cx="' + n.x + '" cy="' + n.y + '" r="' + r + '"';
      s += shape + ' fill="' + k.fill + '" stroke="' + k.stroke + '" stroke-width="2.2"/>';
      if (n.short) s += '<text x="' + n.x + '" y="' + (n.y + 4) + '" text-anchor="middle" class="bk-map-short" fill="' + k.stroke + '">' + esc(n.short) + "</text>";
      if (n.label) s += '<text x="' + n.x + '" y="' + (n.y + r + 17) + '" text-anchor="middle" class="bk-map-label">' + esc(n.label) + "</text>";
      if (n.sub) s += '<text x="' + n.x + '" y="' + (n.y + r + 34) + '" text-anchor="middle" class="bk-map-sub">' + esc(n.sub) + "</text>";
    });
    s += "</svg>";
    var legend = "";
    if (d.legend && d.legend.length) {
      legend = '<div class="bk-legend">' + d.legend.map(function (L) {
        var k = KIND[L[0]] || KIND.node;
        return '<span><i style="background:' + k.fill + ";border-color:" + k.stroke + '"></i>' + esc(L[1]) + "</span>";
      }).join("") + "</div>";
    }
    return '<figure class="bk bk-map">' + (d.title ? '<figcaption class="bk-title">' + esc(d.title) + "</figcaption>" : "") +
      '<div class="bk-map-wrap">' + s + "</div>" + legend + (d.caption ? '<p class="bk-note">' + rich(d.caption) + "</p>" : "") + "</figure>";
  };

  function hydrate(root) {
    var codes = (root || document).querySelectorAll('pre > code[class*="language-kma-"]');
    Array.prototype.forEach.call(codes, function (code) {
      var type = (code.className.match(/language-kma-([a-z]+)/) || [])[1], pre = code.parentNode, out;
      try {
        var data = JSON.parse(code.textContent);
        out = B[type] ? B[type](data) : null;
      } catch (e) { out = null; }
      if (!out) { pre.classList.add("bk-broken"); return; }
      var wrap = document.createElement("div");
      wrap.className = "bk-host bk-host-" + type;
      wrap.innerHTML = out;
      pre.parentNode.replaceChild(wrap, pre);
    });
  }

  window.KMA_BLOCKS = { hydrate: hydrate, types: Object.keys(B) };
})();
