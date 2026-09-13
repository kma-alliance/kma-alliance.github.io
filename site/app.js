/* [KMA] Alliance Handbook — app shell
   Content lives in content/guides.js (window.KMA). This file only renders it. */
(function () {
  "use strict";
  var K = window.KMA || { site: {}, categories: [], guides: [], notices: [], week: [] };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // ---------- markdown ----------
  if (window.marked) {
    marked.setOptions({ gfm: true, breaks: false, headerIds: false, mangle: false });
  }
  function md(src) {
    if (!window.marked) return "<pre>" + esc(src) + "</pre>";
    return marked.parse(src);
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function slug(s) { return String(s).toLowerCase().replace(/<[^>]+>/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
  function stripMd(s) { return String(s).replace(/```[\s\S]*?```/g, " ").replace(/[#>*_`|\[\]()-]+/g, " ").replace(/\s+/g, " ").trim(); }

  // ---------- data helpers ----------
  var guideById = {};
  K.guides.forEach(function (g) { guideById[g.id] = g; });
  var ordered = [];
  K.categories.forEach(function (c) {
    K.guides.filter(function (g) { return g.category === c.id; }).forEach(function (g) { ordered.push(g); });
  });
  function catOf(g) { return K.categories.filter(function (c) { return c.id === g.category; })[0] || { title: "" }; }
  function daysSince(d) { var t = Date.parse(d); if (isNaN(t)) return 0; return Math.floor((Date.now() - t) / 864e5); }
  function fmtDate(d) {
    var t = new Date(d + "T00:00:00"); if (isNaN(t)) return d;
    return t.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  // ---------- icons ----------
  var MAKER_LIPS = '<svg class="maker-lips" viewBox="0 0 32 20" aria-hidden="true" focusable="false"><path fill="currentColor" d="M1 10C5 4 10 1 13 3c1.5 1 2.2 1.4 3 1.4S17.5 4 19 3c3-2 8 1 12 7-6 .6-11 1-15 1S7 10.6 1 10Z"/><path fill="currentColor" d="M1.4 10.6C7 11.3 12 11.7 16 11.7s9-.4 14.6-1.1C27 16 22 19 16 19S5 16 1.4 10.6Z"/><path fill="none" stroke="var(--bg-deep)" stroke-width="1.1" stroke-linecap="round" d="M3 10.4c5 .8 9 1.1 13 1.1s8-.3 13-1.1"/></svg>';
  var MAKER_TIP = "Handcrafted by Erdrickk. Every guide fact-checked, every number tested, and the whole thing sealed with a kiss.";
  function makerInline(cls) {
    return '<div class="maker-inline ' + (cls || '') + '" title="' + MAKER_TIP + '">' + MAKER_LIPS +
      '<span>Created by <b>Erdrickk</b>, <i>God of a 1000 Lips</i></span></div>';
  }
  var ICO = {
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>',
    // guide category glyphs
    start: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 7v6c0 4.4 3.4 7.6 8 8 4.6-.4 8-3.6 8-8V7l-8-4Z"/><path d="m9 12 2 2 4-4"/></svg>',
    hero: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>',
    city: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V9l4-2v14M9 21V5l6 3v13M15 21V11l4 2v8"/></svg>',
    event: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    combat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 20 6-6M14 4l6 6-9 9-6-6 9-9ZM5 14l-1 6 6-1"/></svg>',
    alliance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 21V4h12v17M6 11h12M10 21v-5h4v5"/></svg>',
    codes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M12 8c-2-3-6-3-6-1s3 2 6 1Zm0 0c2-3 6-3 6-1s-3 2-6 1Z"/></svg>',
    tools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-2-2 8-8 1.7-1.7ZM9 3 3 9l4 4 6-6Z"/></svg>',
    crown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18h18M4 17 2 7l5 4 5-7 5 7 5-4-2 10Z"/></svg>',
    solo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    ref: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4ZM20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7V4Z"/></svg>'
  };

  // ---------- theme ----------
  var root = document.documentElement;
  function currentTheme() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function applyThemeBtn() { var b = $("#themeBtn"); if (b) b.innerHTML = currentTheme() === "dark" ? ICO.sun : ICO.moon; }
  function toggleTheme() {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("kma-theme", next); } catch (e) {}
    applyThemeBtn();
  }
  try { var saved = localStorage.getItem("kma-theme"); if (saved && !root.getAttribute("data-theme")) root.setAttribute("data-theme", saved); } catch (e) {}

  // ---------- build chrome ----------
  // The sidebar used to list all 62 guides under 11 headings at once. It now shows a short pinned
  // block of the pages people open daily, then 7 collapsible sections. The section holding the
  // current page opens itself; anything a reader opens or closes is remembered on their device.
  var PINNED = [
    ["/", "Home", "start"], ["/my-account", "Your account", "tools"], ["/daily-checklist", "Daily checklist", "solo"],
    ["/alliance-duel", "Alliance Duel", "event"], ["/events-calendar", "Every event at a glance", "event"],
    ["/gift-codes", "Gift codes", "codes"], ["/tools", "All tools", "tools"]
  ];
  var SECTIONS = [
    { id: "start", title: "Start here", icon: "start", cats: ["start"] },
    { id: "tools", title: "Tools & planners", icon: "tools", cats: ["tools"] },
    { id: "build", title: "Heroes & Sanctuary", icon: "hero", cats: ["heroes", "city"] },
    { id: "events", title: "Alliance & kingdom", icon: "event", cats: ["events", "kingdom"] },
    { id: "solo", title: "Solo events & modes", icon: "solo", cats: ["solo"] },
    { id: "combat", title: "Combat & alliance", icon: "combat", cats: ["combat", "alliance"] },
    { id: "ref", title: "Codes & reference", icon: "ref", cats: ["codes", "ref"] }
  ];
  var SIDE_KEY = "kma-side-open";
  var sideOpen = {};
  try { sideOpen = JSON.parse(localStorage.getItem(SIDE_KEY) || "{}") || {}; } catch (e) {}
  function saveSide() { try { localStorage.setItem(SIDE_KEY, JSON.stringify(sideOpen)); } catch (e) {} }
  var CHEV = '<svg class="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M4 2.5 7.5 6 4 9.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function buildSidebar() {
    var sb = $("#sidebar");
    var hasProfile = false;
    try { hasProfile = !!localStorage.getItem("kma-profile"); } catch (e) {}
    var active = "/" + (location.hash.replace(/^#\/?/, "").split("/")[0] || "");
    var html = '<div class="side-pins">';
    PINNED.forEach(function (p) {
      html += '<a href="#' + p[0] + '" data-route="' + p[0] + '"' + (p[0] === "/my-account" ? ' class="side-acct"' : "") + ">" +
        (ICO[p[2]] || ICO.ref).replace("<svg", '<svg class="g-ico"') + esc(p[1]) +
        (p[0] === "/my-account" && !hasProfile ? '<span class="side-dot" title="not set up yet"></span>' : "") + "</a>";
    });
    html += "</div>";
    html += '<div class="side-browse"><span>All ' + K.guides.length + ' guides</span><button type="button" class="side-all">Expand all</button></div>';
    SECTIONS.forEach(function (sec) {
      var cats = K.categories.filter(function (c) { return sec.cats.indexOf(c.id) >= 0; });
      var total = 0, inner = "", holdsActive = false;
      cats.forEach(function (c) {
        var gs = K.guides.filter(function (g) { return g.category === c.id && g.id !== "my-account"; });
        if (!gs.length) return;
        total += gs.length;
        if (cats.length > 1) inner += '<div class="side-sub">' + esc(c.title) + "</div>";
        gs.forEach(function (g) {
          if ("/" + g.id === active) holdsActive = true;
          inner += '<a href="#/' + esc(g.id) + '" data-route="/' + esc(g.id) + '">' + esc(g.title) + "</a>";
        });
      });
      if (!total) return;
      var open = sideOpen[sec.id] === true || (sideOpen[sec.id] !== false && holdsActive);
      html += '<details class="side-sec" data-sec="' + sec.id + '"' + (open ? " open" : "") + ">" +
        "<summary>" + CHEV + (ICO[sec.icon] || ICO.ref).replace("<svg", '<svg class="g-ico"') +
        '<span class="sec-title">' + esc(sec.title) + '</span><span class="sec-count">' + total + "</span></summary>" +
        '<div class="sec-body">' + inner + "</div></details>";
    });
    html += '<div class="side-foot">' + makerInline() + esc(K.site.tagline || "") + "<br>Site updated " + esc(fmtDate(K.site.updated || "")) + "</div>";
    sb.innerHTML = html;

    $$(".side-sec", sb).forEach(function (d) {
      // "toggle" fires asynchronously, so a programmatic open is tagged on the element
      // itself rather than with a timing flag that would already be cleared by then.
      d.addEventListener("toggle", function () {
        if (d.hasAttribute("data-auto")) { d.removeAttribute("data-auto"); syncAllBtn(); return; }
        sideOpen[d.getAttribute("data-sec")] = d.open; saveSide(); syncAllBtn();
      });
    });
    var allBtn = $(".side-all", sb);
    function syncAllBtn() {
      var secs = $$(".side-sec", sb);
      allBtn.textContent = secs.every(function (d) { return d.open; }) ? "Collapse all" : "Expand all";
    }
    allBtn.addEventListener("click", function () {
      var secs = $$(".side-sec", sb), openAll = !secs.every(function (d) { return d.open; });
      secs.forEach(function (d) { if (d.open !== openAll) d.setAttribute("data-auto", ""); d.open = openAll; sideOpen[d.getAttribute("data-sec")] = openAll; });
      saveSide(); syncAllBtn();
    });
    syncAllBtn();
  }
  function setActive(route) {
    var hit = null;
    $$("#sidebar a").forEach(function (a) {
      var on = a.getAttribute("data-route") === route;
      a.classList.toggle("active", on);
      if (on && a.closest(".sec-body")) hit = a;
    });
    // open the section holding this page, without recording it as the reader's choice
    if (hit) {
      var d = hit.closest(".side-sec");
      if (d && !d.open) { d.setAttribute("data-auto", ""); d.open = true; }
      var sb = $("#sidebar"), r = hit.getBoundingClientRect(), br = sb.getBoundingClientRect();
      if (r.top < br.top + 40 || r.bottom > br.bottom - 20) hit.scrollIntoView({ block: "center" });
    }
  }


  // ---------- live gift codes (from scripts/scan_codes.py via GitHub Actions) ----------
  var CODES = K.codes && K.codes.codes ? K.codes : null;
  function codeStatusLabel(c) {
    return { active: "Working", disputed: "Disputed", unconfirmed: "Unconfirmed", expired: "Expired" }[c.status] || c.status;
  }
  function isNewCode(c) { return c.status === "active" && daysSince(c.first_seen) <= 7; }
  function copyBtn(text) {
    return '<button class="copy-btn" data-copy="' + esc(text) + '">copy</button>';
  }
  function renderCodesPanel(full) {
    if (!CODES) return '<div class="codes-panel"><p class="section-sub">The code scanner has not run yet. It runs automatically every 6 hours on GitHub.</p></div>';
    var list = CODES.codes.filter(function (c) { return full ? c.status !== "expired" : c.status === "active"; });
    var h = '<div class="codes-panel">';
    h += '<div class="codes-meta">Last change <b>' + esc(CODES.scanned) + '</b>, from ' + CODES.sources_checked.length + ' of ' + CODES.sources_total + ' trackers. Rechecked every 6 hours. Codes are auto-collected; tap copy, redeem in-game, and tell an officer if one fails.</div>';
    if (CODES.confident === false) {
      h += '<div class="codes-warn">Most trackers were unreachable on the last scan, so these statuses are carried over from the previous run rather than freshly confirmed.</div>';
    }
    if (!list.length) { h += '<p class="section-sub">No working codes reported right now.</p></div>'; return h; }
    h += '<div class="table-wrap"><table class="codes-table"><thead><tr><th>Code</th><th>Status</th><th>Trackers</th>' + (full ? '<th>First seen</th><th>Last active</th>' : '') + '</tr></thead><tbody>';
    list.forEach(function (c) {
      h += '<tr><td><code>' + esc(c.code) + '</code> ' + copyBtn(c.code) + (isNewCode(c) ? ' <span class="chip chip-new">new</span>' : '') + '</td>';
      h += '<td><span class="chip chip-' + esc(c.status) + '">' + codeStatusLabel(c) + '</span></td>';
      h += '<td title="' + esc(c.active_sources.join(", ")) + (c.expired_sources.length ? " | expired per: " + esc(c.expired_sources.join(", ")) : "") + '">' + c.active_sources.length + (c.expired_sources.length ? ' <span class="muted">(' + c.expired_sources.length + ' say expired)</span>' : '') + '</td>';
      if (full) h += '<td>' + esc(fmtDate(c.first_seen)) + '</td><td>' + esc(fmtDate(c.last_active)) + '</td>';
      h += '</tr>';
    });
    h += '</tbody></table></div>';
    if (full) {
      var dead = CODES.codes.filter(function (c) { return c.status === "expired"; });
      if (dead.length) h += '<p class="section-sub">Expired: ' + dead.map(function (c) { return '<code>' + esc(c.code) + '</code>'; }).join(", ") + '</p>';
    }
    h += '</div>';
    return h;
  }
  function autoNotices() {
    if (!CODES) return [];
    return CODES.codes.filter(isNewCode).slice(0, 5).map(function (c) {
      return { date: c.first_seen, text: 'Scanner found a new gift code: **' + c.code + '** (reported working by ' + c.active_sources.length + ' tracker' + (c.active_sources.length === 1 ? '' : 's') + '). [Redeem it](#/gift-codes) before it expires.', auto: true };
    });
  }

  // ---------- time helpers ----------
  var DT = window.KMA_DATA;
  var DUEL_DAYS = DT.DUEL_DAYS;
  function serverOffset() { return DT.serverOffset(); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function hm(d) { return pad(d.getHours()) + ":" + pad(d.getMinutes()); }
  function shifted(date, offsetHours) { // a Date whose local fields show the wall clock at UTC+offset
    return new Date(date.getTime() + (offsetHours * 60 + date.getTimezoneOffset()) * 60000);
  }
  function resetAtLocal() {  // "20:00" - the wall-clock time daily reset lands on this device
    return hm(DT.nextReset(new Date()));
  }
  function renderCountdown() {
    var now = new Date();
    var idx = DT.duelIdx(now);
    var label = idx < 6 ? "Duel day " + (idx + 1) + ": " + DUEL_DAYS[idx] : DUEL_DAYS[6];
    var nextLabel = idx < 5 ? "Day " + (idx + 2) + ": " + DUEL_DAYS[idx + 1] : (idx === 5 ? DUEL_DAYS[6] : "Day 1: Raven");
    return '<div class="countdown"><div><div class="cd-label">Right now (server)</div><div class="cd-big">' + esc(label) + '</div></div>' +
      '<div><div class="cd-label">Resets in</div><div class="cd-big mono" id="cdTimer">' + DT.hms(DT.msToReset(now)) + '</div></div>' +
      '<div><div class="cd-label">Then</div><div class="cd-big">' + esc(nextLabel) + '</div></div>' +
      '<div><div class="cd-label">Your local time</div><div class="cd-big mono" id="cdLocal">' + hm(now) + '</div>' +
      '<div class="cd-note">reset lands at <b class="mono">' + resetAtLocal() + '</b> for you</div></div></div>';
  }
  var startTick = DT.startTick, stopTicks = DT.stopTicks;

  // ---------- widgets embedded in guides via <div data-widget="..."> ----------
  var WIDGETS = {
    codes: function (el) { el.innerHTML = renderCodesPanel(true); },
    countdown: function (el) { el.innerHTML = renderCountdown(); startTick(function () { var t = $("#cdTimer"); if (!t) { return; } var now = new Date(); t.textContent = DT.hms(DT.msToReset(now)); var l = $("#cdLocal"); if (l) l.textContent = hm(now); }); },
    timezones: function (el) {
      var zones = [
        ["Los Angeles (Pacific)", "America/Los_Angeles"], ["Denver (Mountain)", "America/Denver"], ["Chicago (Central)", "America/Chicago"],
        ["New York (Eastern)", "America/New_York"], ["São Paulo", "America/Sao_Paulo"], ["London", "Europe/London"], ["Paris / Berlin", "Europe/Paris"],
        ["Istanbul", "Europe/Istanbul"], ["Dubai", "Asia/Dubai"], ["New Delhi", "Asia/Kolkata"], ["Jakarta", "Asia/Jakarta"], ["Manila / Singapore", "Asia/Manila"],
        ["Tokyo / Seoul", "Asia/Tokyo"], ["Sydney", "Australia/Sydney"]
      ];
      var localZone = (Intl.DateTimeFormat().resolvedOptions().timeZone) || "your device";
      var events = [
        ["Daily reset and Alliance Duel day roll", { server: 0 }],
        ["Elixir Scramble window 1", { server: 9 }],
        ["Elixir Scramble window 2", { server: 18 }],
        ["Elixir Scramble window 3", { server: 23 }],
        ["Cheese Trap difficulty lock (final day)", { server: 22 }]
      ];
      function draw() {
        var now = new Date();
        var off = serverOffset();
        var utc = shifted(now, 0), srv = shifted(now, off);
        var fmt = function (tz, d) { try { return new Intl.DateTimeFormat(undefined, { timeZone: tz, hour: "2-digit", minute: "2-digit", weekday: "short" }).format(d); } catch (e) { return "?"; } };
        var h = '<div class="tz-clocks">';
        h += '<div class="tz-clock"><div class="cd-label">Your time (' + esc(localZone) + ')</div><div class="cd-big mono">' + hm(now) + '</div></div>';
        h += '<div class="tz-clock"><div class="cd-label">UTC</div><div class="cd-big mono">' + hm(utc) + '</div></div>';
        h += '<div class="tz-clock tz-primary"><div class="cd-label">Server time (UTC' + (off >= 0 ? "+" : "") + off + ') - the reset clock</div><div class="cd-big mono">' + hm(srv) + '</div><div class="cd-note">resets in <b class="mono" id="tzTimer">' + DT.hms(DT.msToReset(now)) + '</b></div></div>';
        h += '</div>';
        h += '<p class="section-sub">Server offset: <select id="tzOffset">';
        for (var o = -12; o <= 14; o++) h += '<option value="' + o + '"' + (o === off ? ' selected' : '') + '>UTC' + (o >= 0 ? "+" : "") + o + '</option>';
        h += '</select> Compare the server clock above with the one shown in-game and pick the offset that matches. Every countdown on this site follows it. Saved on this device.</p>';
        h += '<h3>Fixed event times in your local time</h3><div class="table-wrap"><table><thead><tr><th>Event</th><th>Game clock</th><th>Your local time</th></tr></thead><tbody>';
        events.forEach(function (ev) {
          var spec = ev[1], base = new Date(now), label, local;
          if (spec.utc !== undefined) { base.setUTCHours(spec.utc, 0, 0, 0); label = pad(spec.utc) + ":00 UTC"; }
          else { base = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), spec.server - off, 0, 0)); label = pad(spec.server) + ":00 server"; }
          local = hm(base);
          h += '<tr><td>' + esc(ev[0]) + '</td><td class="mono">' + label + '</td><td class="mono"><b>' + local + '</b></td></tr>';
        });
        h += '</tbody></table></div>';
        h += '<h3>Converter</h3><p class="section-sub">Type a time from alliance mail and see it in your zone.</p>';
        h += '<div class="tz-conv"><input id="tzIn" type="time" value="20:00"> <select id="tzKind"><option value="server">server time</option><option value="utc">UTC</option></select> <span class="cd-label">is</span> <b class="mono" id="tzOut">–</b> <span class="cd-label">for you</span></div>';
        h += '<h3>What the daily reset looks like around the world</h3><p class="section-sub">Reset is 00:00 server time, which is ' + pad(((24 - off) % 24)) + ':00 UTC.</p><div class="table-wrap"><table><thead><tr><th>City</th><th>Local time at reset</th><th>Right now there</th></tr></thead><tbody>';
        var resetUtc = DT.nextReset(now);
        zones.forEach(function (z) {
          h += '<tr><td>' + esc(z[0]) + '</td><td class="mono">' + esc(fmt(z[1], resetUtc)) + '</td><td class="mono">' + esc(fmt(z[1], now)) + '</td></tr>';
        });
        h += '</tbody></table></div>';
        el.innerHTML = h;
        var conv = function () {
          var v = ($("#tzIn") || {}).value; if (!v) return;
          var parts = v.split(":"), hr = parseInt(parts[0], 10), mn = parseInt(parts[1], 10);
          var kind = $("#tzKind").value, o = kind === "server" ? serverOffset() : 0;
          var d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), hr - o, mn, 0));
          $("#tzOut").textContent = hm(d) + (d.getDate() !== now.getDate() ? (d > now ? " (next day)" : " (previous day)") : "");
        };
        $("#tzIn").addEventListener("input", conv); $("#tzKind").addEventListener("change", conv); conv();
        $("#tzOffset").addEventListener("change", function () { DT.setServerOffset(this.value); draw(); });
        startTick(function () { var t = $("#tzTimer"); if (t) t.textContent = DT.hms(DT.msToReset(new Date())); });
      }
      draw();
      startTick(function () { var c = $$(".tz-clock .cd-big", el); if (c.length !== 3) return; var now = new Date(); c[0].textContent = hm(now); c[1].textContent = hm(shifted(now, 0)); c[2].textContent = hm(shifted(now, serverOffset())); });
    }
  };
  function hydrateWidgets(container) {
    var vis = window.KMA_VISUALS || {}, tools = window.KMA_TOOLS || {};
    $$("[data-widget]", container).forEach(function (el) { var n = el.getAttribute("data-widget"); var fn = WIDGETS[n] || vis[n] || tools[n]; if (fn) fn(el); });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".copy-btn[data-copy]"); if (!b) return;
    DT.track("code-copied", "Gift code copied", true);
    var txt = b.getAttribute("data-copy");
    var done = function () { b.textContent = "copied"; setTimeout(function () { b.textContent = "copy"; }, 1200); };
    if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, done); else done();
  });

  // ---------- rendering ----------
  function renderHome() {
    var s = K.site;
    var h = '<div class="article">';
    h += '<section class="hero has-banner"><img class="banner" src="img/shots/hero-official-bg.jpg" alt="" onerror="this.parentNode.classList.remove(\'has-banner\');this.remove()"><div class="hero-inner"><div class="kicker">' + esc(s.game || "") + "</div>" + makerInline("maker-mobile");
    h += "<h1>" + esc(s.heroTitle || s.name) + "</h1>";
    h += "<p>" + esc(s.heroText || "") + "</p>";
    h += '<div class="hero-actions">' + (s.heroActions || []).map(function (a, i) {
      return '<a class="btn' + (i === 0 ? " primary" : "") + '" href="' + esc(a.href) + '">' + esc(a.label) + "</a>";
    }).join("") + "</div></div></section>";

    h += '<div data-widget="dashboard"></div>';

    var stale = K.guides.filter(function (g) { return daysSince(g.updated) > 45; }).length;
    h += '<div class="stat-row"><span><b>' + K.guides.length + "</b> guides</span><span><b>" + K.categories.length + "</b> sections</span>";
    h += "<span>Newest update <b>" + esc(fmtDate(K.site.updated || "")) + "</b></span>" + (stale ? "<span><b>" + stale + "</b> guides older than 45 days</span>" : "") + "</div>";

    var notices = autoNotices().concat(K.notices || []);
    if (notices.length) {
      h += '<h2 class="section-title">Alliance notices</h2><p class="section-sub">What leadership needs everyone to know right now. Items marked auto come from the code scanner.</p><ul class="notice-list">';
      notices.forEach(function (n) { h += '<li' + (n.auto ? ' class="auto"' : '') + '><span class="n-date">' + esc(n.date) + "</span>" + (n.auto ? '<span class="chip chip-new">auto</span> ' : '') + md(n.text).replace(/^<p>|<\/p>\s*$/g, "") + "</li>"; });
      h += "</ul>";
    }

    h += '<h2 class="section-title">Working gift codes</h2><p class="section-sub">Auto-scanned from public trackers. <a href="#/gift-codes">Full list and how to redeem</a>.</p>' + renderCodesPanel(false);

    if (K.week && K.week.length) {
      var todayIdx = DT.duelIdx(new Date()); // Monday=0 on the server calendar
      h += '<h2 class="section-title">Weekly rhythm</h2><p class="section-sub">Days roll at 00:00 server time, which is ' + resetAtLocal() + ' on your clock. Today is highlighted.</p><div class="week">';
      K.week.forEach(function (d, i) {
        h += '<div class="day' + (i === todayIdx ? " today" : "") + '"><div class="d-name">' + esc(d.day) + '</div><div class="d-ev">' + esc(d.event) + '</div><div class="d-do">' + esc(d.todo) + "</div></div>";
      });
      h += "</div>";
    }

    h += '<h2 class="section-title">Guides</h2><p class="section-sub">Every guide shows when it was last checked. Amber dot means it is due for a review.</p>';
    K.categories.forEach(function (c) {
      var gs = K.guides.filter(function (g) { return g.category === c.id; });
      if (!gs.length) return;
      h += '<h3 style="margin:22px 0 2px;font-size:13px;text-transform:uppercase;letter-spacing:.14em;color:var(--muted)">' + esc(c.title) + "</h3>";
      if (c.blurb) h += '<p class="section-sub">' + esc(c.blurb) + "</p>";
      h += '<div class="grid">';
      gs.forEach(function (g) {
        h += '<a class="card" href="#/' + esc(g.id) + '">' + (ICO[c.icon] || ICO.ref).replace("<svg", '<svg class="c-ico"') + "<h3>" + esc(g.title) + "</h3><p>" + esc(g.summary || "") + '</p><span class="c-count updated' + (daysSince(g.updated) > 45 ? " stale" : "") + '">Checked ' + esc(fmtDate(g.updated)) + "</span></a>";
      });
      h += "</div>";
    });
    h += renderFoot();
    h += "</div>";
    return h;
  }

  function renderGuide(g) {
    var c = catOf(g);
    var idx = ordered.indexOf(g);
    var prev = ordered[idx - 1], next = ordered[idx + 1];
    var h = '<div class="article">';
    h += '<div class="eyebrow"><a href="#/">Home</a><span class="dot"></span><span>' + esc(c.title) + "</span></div>";
    h += "<h1>" + esc(g.title) + "</h1>";
    if (g.summary) h += '<p class="lede">' + esc(g.summary) + "</p>";
    h += '<div class="meta-row"><span class="updated' + (daysSince(g.updated) > 45 ? " stale" : "") + '">Last checked ' + esc(fmtDate(g.updated)) + "</span>";
    (g.tags || []).forEach(function (t) { h += '<span class="tag">' + esc(t) + "</span>"; });
    h += "</div>";
    h += '<details class="toc-inline" id="tocInline"><summary>On this page</summary><ol></ol></details>';
    h += '<div class="body">' + md(g.body) + "</div>";
    h += '<div class="pager">';
    h += prev ? '<a href="#/' + esc(prev.id) + '"><span>Previous</span>' + esc(prev.title) + "</a>" : "<span></span>";
    h += next ? '<a class="next" href="#/' + esc(next.id) + '"><span>Next</span>' + esc(next.title) + "</a>" : "<span></span>";
    h += "</div>";
    h += renderFoot();
    h += "</div>";
    return h;
  }

  function renderFoot() {
    return '<div class="foot">' + (K.site.footer ? md(K.site.footer) : "") + "</div>";
  }

  function render404() {
    return '<div class="article"><h1>Not found</h1><p>That guide does not exist. <a href="#/">Back to the handbook.</a></p></div>';
  }

  // Post-process rendered markdown: heading ids, TOC, callouts, tables, tier badges, checklists.
  function decorate(container, g) {
    var body = $(".body", container);
    if (!body) return;
    if (window.KMA_BLOCKS) window.KMA_BLOCKS.hydrate(body);
    var used = {};
    var heads = $$("h2, h3", body);
    heads.forEach(function (el) {
      var id = slug(el.textContent); var n = 1; var base = id;
      while (used[id]) { id = base + "-" + (++n); }
      used[id] = true; el.id = id;
    });
    // TOC (rail + inline)
    var items = heads.map(function (el) {
      return '<li class="' + el.tagName.toLowerCase() + '"><a href="#/' + esc(g.id) + "/" + el.id + '" data-anchor="' + el.id + '">' + esc(el.textContent) + "</a></li>";
    }).join("");
    var rail = $("#tocRail");
    rail.innerHTML = items ? "<h4>On this page</h4><ol>" + items + "</ol>" : "";
    var inl = $("#tocInline ol", container);
    if (inl) { inl.innerHTML = items; if (!items) $("#tocInline", container).hidden = true; }
    // callouts
    $$("blockquote", body).forEach(function (bq) {
      var s = bq.querySelector("p > strong:first-child");
      if (!s) return;
      var t = s.textContent.replace(/:$/, "").trim().toLowerCase();
      if (/^(warning|avoid|danger|don't|dont|do not)/.test(t)) bq.classList.add("warn");
      else if (/^(tip|do this|best|pro tip)/.test(t)) bq.classList.add("good");
      else if (/^(note|info|how it works|why)/.test(t)) bq.classList.add("info");
      else if (/^kma/.test(t)) bq.classList.add("kma");
      else if (/^(unverified|single source|check in.?game)/.test(t)) bq.classList.add("unver");
    });
    // tables
    $$("table", body).forEach(function (t) {
      var w = document.createElement("div"); w.className = "table-wrap";
      t.parentNode.insertBefore(w, t); w.appendChild(t);
      var cols = t.querySelectorAll("thead th").length;
      if (cols >= 5) {
        t.classList.add("wide");
        $$("tbody tr", t).forEach(function (tr) {
          $$("td", tr).forEach(function (td) { if (td.textContent.length > 60) td.classList.add("long"); });
        });
      }
    });
    // tier + rarity badges inside tables: cells that are exactly S/A/B/C/D or UR/SSR/SR/R
    $$("td", body).forEach(function (td) {
      var v = td.textContent.trim();
      if (/^(S\+|S|A\+|A|B|C|D)$/.test(v)) { td.innerHTML = '<span class="tier tier-' + v.charAt(0) + '">' + esc(v) + "</span>"; }
      else if (/^(UR|SSR|SR|R)$/.test(v)) { td.innerHTML = '<span class="rar rar-' + v + '">' + esc(v) + "</span>"; }
    });
    // checklists: "- [ ] text" — persist per guide in localStorage
    var key = "kma-check-" + g.id, state = {};
    try { state = JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) {}
    $$("li", body).forEach(function (li, liIdx) {
      var cb = li.querySelector('input[type="checkbox"]');
      if (!cb || cb.parentNode !== li) return;
      li.classList.add("task"); cb.disabled = false;
      var id = liIdx + "-" + slug(li.textContent).slice(0, 60);
      if (state[id]) cb.checked = true;
      cb.addEventListener("change", function () {
        state[id] = cb.checked; try { localStorage.setItem(key, JSON.stringify(state)); } catch (e) {}
      });
    });
    // copy buttons on inline code inside the codes table
    if (g.copyCodes) {
      $$("td code", body).forEach(function (c) {
        var b = document.createElement("button"); b.className = "copy-btn"; b.textContent = "copy"; b.style.marginLeft = "8px";
        b.addEventListener("click", function () {
          var txt = c.textContent;
          if (navigator.clipboard) navigator.clipboard.writeText(txt).then(function () { b.textContent = "copied"; setTimeout(function () { b.textContent = "copy"; }, 1200); });
        });
        c.parentNode.insertBefore(b, c.nextSibling);
      });
    }
    // standalone images become captioned figures
    $$("p > img:only-child", body).forEach(function (im) {
      var p = im.parentNode, f = document.createElement("figure"); f.className = "shot";
      im.loading = "lazy"; im.onerror = function () { f.style.display = "none"; };
      p.parentNode.insertBefore(f, p); f.appendChild(im);
      if (im.alt) { var c = document.createElement("figcaption"); c.textContent = im.alt; f.appendChild(c); }
      p.remove();
    });
    // external links open in a new tab
    $$("a[href^='http']", body).forEach(function (a) { a.target = "_blank"; a.rel = "noopener"; });
  }

  // TOC scroll-spy
  var spy = null;
  function setupSpy() {
    if (spy) { spy.disconnect(); spy = null; }
    var links = $$("#tocRail a[data-anchor]"); if (!links.length || !("IntersectionObserver" in window)) return;
    var heads = links.map(function (a) { return document.getElementById(a.getAttribute("data-anchor")); }).filter(Boolean);
    spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("data-anchor") === en.target.id); });
        }
      });
    }, { rootMargin: "-70px 0px -70% 0px", threshold: 0 });
    heads.forEach(function (h) { spy.observe(h); });
  }

  // ---------- routing ----------
  var lastTracked = null;
  function route() {
    var hash = location.hash.replace(/^#/, "") || "/";
    var parts = hash.split("/").filter(Boolean);
    var content = $("#content");
    stopTicks();
    document.body.classList.remove("nav-open");
    closeSearch();
    if (!parts.length) {
      content.innerHTML = renderHome();
      hydrateWidgets(content);
      $("#tocRail").innerHTML = "";
      setActive("/");
      document.title = K.site.name + " — " + (K.site.game || "");
      DT.track("/", "Home");
      window.scrollTo(0, 0);
      return;
    }
    // Guides renamed after fact-checks keep working at their old addresses.
    var MOVED = { "alliance-boss-digs": "alliance-boss-excavation", "treasure-maps": "mystic-treasure",
      "blight-event": "hunt-battle", "temple-battle": "court-posts" };
    if (!guideById[parts[0]] && MOVED[parts[0]]) { location.replace("#/" + MOVED[parts[0]] + (parts[1] ? "/" + parts[1] : "")); return; }
    var g = guideById[parts[0]];
    if (!g) { content.innerHTML = render404(); $("#tocRail").innerHTML = ""; setActive(null); document.title = "Not found — " + K.site.name; return; }
    content.innerHTML = renderGuide(g);
    decorate(content, g);
    hydrateWidgets(content);
    setupSpy();
    setActive("/" + g.id);
    document.title = g.title + " — " + K.site.name;
    if (lastTracked !== g.id) { lastTracked = g.id; DT.track("/" + g.id, g.title); }
    if (parts[1]) {
      var el = document.getElementById(parts[1]);
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }

  // ---------- search ----------
  var index = K.guides.map(function (g) {
    return { g: g, text: (g.title + " " + (g.tags || []).join(" ") + " " + stripMd(g.summary || "") + " " + stripMd(g.body)).toLowerCase() };
  });
  var searchBox, results, activeIdx = -1;
  function closeSearch() { if (results) { results.classList.remove("open"); activeIdx = -1; } }
  function doSearch(q) {
    q = q.trim().toLowerCase();
    if (q.length < 2) { closeSearch(); return; }
    var terms = q.split(/\s+/);
    var hits = [];
    index.forEach(function (it) {
      var score = 0;
      terms.forEach(function (t) {
        if (it.g.title.toLowerCase().indexOf(t) >= 0) score += 10;
        if ((it.g.tags || []).join(" ").toLowerCase().indexOf(t) >= 0) score += 5;
        var n = it.text.split(t).length - 1; score += Math.min(n, 8);
      });
      if (score > 0) hits.push({ it: it, score: score });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    hits = hits.slice(0, 8);
    if (!hits.length) { results.innerHTML = '<div class="r-empty">No guide mentions “' + esc(q) + '”.</div>'; results.classList.add("open"); return; }
    results.innerHTML = hits.map(function (h) {
      var t = h.it.text, i = t.indexOf(terms[0]);
      var start = Math.max(0, i - 50), snip = t.slice(start, start + 130);
      snip = esc(snip).replace(new RegExp("(" + terms.map(function (x) { return x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("|") + ")", "gi"), "<mark>$1</mark>");
      return '<a href="#/' + esc(h.it.g.id) + '"><div class="r-cat">' + esc(catOf(h.it.g).title) + '</div><div class="r-title">' + esc(h.it.g.title) + '</div><div class="r-snip">…' + snip + "…</div></a>";
    }).join("");
    results.classList.add("open"); activeIdx = -1;
  }

  // ---------- init ----------
  function init() {
    buildSidebar();
    $("#menuBtn").innerHTML = ICO.menu;
    $("#searchIco").innerHTML = ICO.search;
    applyThemeBtn();
    $("#themeBtn").addEventListener("click", toggleTheme);
    $("#menuBtn").addEventListener("click", function () { document.body.classList.toggle("nav-open"); });
    $("#scrim").addEventListener("click", function () { document.body.classList.remove("nav-open"); });
    searchBox = $("#search"); results = $("#searchResults");
    searchBox.addEventListener("input", function () { doSearch(searchBox.value); });
    searchBox.addEventListener("focus", function () { if (searchBox.value.trim().length >= 2) doSearch(searchBox.value); });
    searchBox.addEventListener("keydown", function (e) {
      var links = $$("a", results);
      if (e.key === "Escape") { closeSearch(); searchBox.blur(); }
      else if (e.key === "ArrowDown" && links.length) { e.preventDefault(); activeIdx = Math.min(activeIdx + 1, links.length - 1); links.forEach(function (a, i) { a.classList.toggle("active", i === activeIdx); }); }
      else if (e.key === "ArrowUp" && links.length) { e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); links.forEach(function (a, i) { a.classList.toggle("active", i === activeIdx); }); }
      else if (e.key === "Enter" && links.length) { e.preventDefault(); (links[activeIdx] || links[0]).click(); searchBox.value = ""; }
    });
    document.addEventListener("click", function (e) { if (!e.target.closest(".search-wrap")) closeSearch(); });
    document.addEventListener("keydown", function (e) { if (e.key === "/" && document.activeElement !== searchBox && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); searchBox.focus(); } });
    window.addEventListener("hashchange", route);
    route();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
