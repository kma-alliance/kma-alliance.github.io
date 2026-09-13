/* [KMA] Alliance Handbook — interactive tools.
   Registered on window.KMA_TOOLS, embedded with <div data-widget="name"></div>.
   Everything runs in the browser; the profile lives in localStorage only. */
(function () {
  "use strict";
  var D = window.KMA_DATA, T = {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  function num(n) { return (n || 0).toLocaleString(); }
  function big(n) {
    n = n || 0;
    if (n >= 1e9) return (n / 1e9).toFixed(2) + "B";
    if (n >= 1e6) return (n / 1e6).toFixed(n >= 1e7 ? 1 : 2) + "M";
    if (n >= 1e3) return (n / 1e3).toFixed(n >= 1e4 ? 0 : 1) + "k";
    return String(Math.round(n));
  }
  function dur(sec) {
    sec = Math.max(0, Math.round(sec));
    var d = Math.floor(sec / 86400), h = Math.floor(sec % 86400 / 3600), m = Math.floor(sec % 3600 / 60);
    if (d) return d + "d " + h + "h";
    if (h) return h + "h " + m + "m";
    return m + "m";
  }

  /* ================= profile ================= */
  var PKEY = "kma-profile";
  var DEF = { server: "", start: "", sanctuary: 10, tg: 10, lab: 7, might: 1000000, vip: 1, faction: "Warrior" };
  function getProfile() {
    var p = {};
    try { p = JSON.parse(localStorage.getItem(PKEY) || "{}"); } catch (e) {}
    var out = {}; Object.keys(DEF).forEach(function (k) { out[k] = p[k] === undefined || p[k] === "" ? DEF[k] : p[k]; });
    out._set = !!(p && Object.keys(p).length);
    return out;
  }
  function setProfile(p) {
    try { localStorage.setItem(PKEY, JSON.stringify(p)); } catch (e) {}
    document.dispatchEvent(new CustomEvent("kma:profile"));
  }
  function serverDay(p) {
    if (!p.start) return null;
    var t = Date.parse(p.start + "T00:00:00Z"); if (isNaN(t)) return null;
    return Math.max(1, Math.floor((Date.now() - t) / 864e5) + 1);
  }
  function onProfile(el, fn) {
    var h = function () { if (document.body.contains(el)) fn(); else document.removeEventListener("kma:profile", h); };
    document.addEventListener("kma:profile", h);
  }

  T["profile"] = function (el) {
    function draw() {
      var p = getProfile(), day = serverDay(p);
      var h = '<div class="tool">';
      h += '<div class="tool-head"><div class="tool-title">Your account</div><div class="tool-sub">Saved in this browser only. Nothing is uploaded, and officers cannot see it. Every tool and several guides use these numbers.</div></div>';
      h += '<div class="fields">';
      h += fld("Server number", '<input id="pf-server" type="text" inputmode="numeric" placeholder="e.g. 218" value="' + esc(p.server) + '">');
      h += fld("Server start date", '<input id="pf-start" type="date" value="' + esc(p.start) + '">' + (day ? '<span class="hint">day ' + day + '</span>' : '<span class="hint">unlocks a server timeline</span>'));
      h += fld("Sanctuary level", '<input id="pf-sanctuary" type="number" min="1" max="30" value="' + p.sanctuary + '">');
      h += fld("Training Grounds", '<input id="pf-tg" type="number" min="1" max="30" value="' + p.tg + '"><span class="hint">troops: ' + D.tierFor(p.tg) + '</span>');
      h += fld("Research Lab", '<input id="pf-lab" type="number" min="0" max="30" value="' + p.lab + '">');
      h += fld("Squad 1 Might", '<input id="pf-might" type="number" min="0" step="10000" value="' + p.might + '">');
      h += fld("VIP level", '<input id="pf-vip" type="number" min="1" max="20" value="' + p.vip + '">');
      h += fld("Main faction", sel("pf-faction", ["Warrior", "Ranger", "Warlock"], p.faction));
      h += '</div>';
      h += '<div class="tool-actions"><button class="btn primary" id="pf-save">Save</button><button class="btn" id="pf-clear">Clear</button><span class="hint" id="pf-msg"></span></div>';
      h += '</div>';
      h += derived(p, day);
      el.innerHTML = h;
      $("#pf-save", el).addEventListener("click", function () {
        setProfile({
          server: $("#pf-server", el).value.trim(), start: $("#pf-start", el).value,
          sanctuary: +$("#pf-sanctuary", el).value || 1, tg: +$("#pf-tg", el).value || 1, lab: +$("#pf-lab", el).value || 0,
          might: +$("#pf-might", el).value || 0, vip: +$("#pf-vip", el).value || 1, faction: $("#pf-faction", el).value
        });
        draw(); var m = $("#pf-msg", el); if (m) { m.textContent = "Saved."; setTimeout(function () { m.textContent = ""; }, 1500); }
      });
      $("#pf-clear", el).addEventListener("click", function () { try { localStorage.removeItem(PKEY); } catch (e) {} setProfile({}); draw(); });
    }
    function derived(p, day) {
      var s = D.sanctuary(p.sanctuary), nxt = D.sanctuary(Math.min(30, p.sanctuary + 1));
      var blockers = nxt.prereq.filter(function (r) {
        if (r[0] === "Research Lab") return p.lab < r[1];
        if (r[0] === "Training Grounds") return p.tg < r[1];
        return false;
      });
      var siege = 0; D.undeadSiege.forEach(function (r) { if (p.might >= r[3] && p.sanctuary >= r[1]) siege = r[0]; });
      var road = 0; D.heroRoad.forEach(function (m, i) { if (p.might >= m) road = i + 1; });
      var h = '<div class="cards3">';
      h += card("Hero level cap", s.heroCap, "5 × Sanctuary " + p.sanctuary);
      h += card("Troop tier", D.tierFor(p.tg), "Training Grounds " + p.tg + (p.tg < 20 ? " · T7 at 20" : p.tg < 30 ? " · T10 at 30" : " · maxed"));
      h += card("Undead Siege", siege ? "Stage " + siege : "not yet", siege ? "your Might clears stage " + siege : "stage 1 needs 2.4M Might and Sanctuary 13");
      h += card("Hero Road", road ? "Difficulty " + road : "not yet", road < 11 ? "next gate " + big(D.heroRoad[road]) + " Might" : "all gates cleared");
      h += card("Expedition", p.sanctuary >= 16 ? bestExped(p) : "Sanctuary 16", p.sanctuary >= 16 ? "highest " + p.faction + " difficulty your Might clears" : "unlocks the three faction arenas");
      h += card("Server day", day || "set a date", day ? "era day " + (((day - 1) % 56) + 1) + " of 56" : "used by the timeline tool");
      h += '</div>';
      if (blockers.length) {
        h += '<blockquote class="warn"><strong>Blocked:</strong> Sanctuary ' + nxt.level + ' needs ' + blockers.map(function (b) { return b[0] + " " + b[1]; }).join(" and ") + '. Fix that before you start the upgrade.</blockquote>';
      }
      return h;
    }
    function bestExped(p) {
      var best = 0;
      for (var d = 1; d <= 60; d++) if (p.might >= D.expeditionAt(p.faction, d).might) best = d;
      return best ? "Difficulty " + best : "below difficulty 1";
    }
    draw();
  };

  function fld(label, input) { return '<label class="fld"><span>' + esc(label) + '</span><span class="fin">' + input + '</span></label>'; }
  function sel(id, opts, cur) {
    return '<select id="' + id + '">' + opts.map(function (o) {
      var v = o instanceof Array ? o[0] : o, t = o instanceof Array ? o[1] : o;
      return '<option value="' + esc(v) + '"' + (String(v) === String(cur) ? " selected" : "") + ">" + esc(t) + "</option>";
    }).join("") + "</select>";
  }
  function card(label, value, sub) {
    return '<div class="mcard"><div class="cd-label">' + esc(label) + '</div><div class="mval">' + esc(String(value)) + '</div><div class="msub">' + esc(sub || "") + "</div></div>";
  }

  /* home strip */
  T["profile-strip"] = function (el) {
    function draw() {
      var p = getProfile();
      if (!p._set) {
        el.innerHTML = '<div class="strip-cta"><div><div class="cd-label">Personalise this handbook</div><div class="cta-t">Tell it your Sanctuary level once</div><div class="cta-d">Every calculator, gate check and timeline then works from your own numbers. Saved on your device only.</div></div><a class="btn primary" href="#/my-account">Set up your account</a></div>';
        return;
      }
      var day = serverDay(p), nxt = D.sanctuary(Math.min(30, p.sanctuary + 1));
      var blockers = nxt.prereq.filter(function (r) { return (r[0] === "Research Lab" && p.lab < r[1]) || (r[0] === "Training Grounds" && p.tg < r[1]); });
      var h = '<div class="strip-you"><div class="cd-label">Your account' + (p.server ? " · server " + esc(p.server) : "") + (day ? " · day " + day : "") + '</div><div class="you-row">';
      h += '<span><b>S' + p.sanctuary + '</b> Sanctuary</span><span><b>' + D.tierFor(p.tg) + '</b> troops</span><span><b>' + big(p.might) + '</b> Might</span><span><b>VIP ' + p.vip + '</b></span>';
      h += '<a href="#/my-account">edit</a></div>';
      h += '<div class="you-next">' + (blockers.length
        ? '<span class="chip chip-expired">blocked</span> Sanctuary ' + nxt.level + " needs " + blockers.map(function (b) { return b[0] + " " + b[1]; }).join(" and ")
        : '<span class="chip chip-active">clear</span> Sanctuary ' + nxt.level + " costs " + big(nxt.resource) + " grain and timber each, " + num(nxt.stars) + " Stars total") + '</div></div>';
      el.innerHTML = h;
    }
    draw(); onProfile(el, draw);
  };

  /* ================= squad builder ================= */
  var SKEY = "kma-squad";
  T["squad-builder"] = function (el) {
    var state = { squad: [], bench: [] };
    try { var s = JSON.parse(localStorage.getItem(SKEY) || "null"); if (s && s.squad) state = s; } catch (e) {}
    var byId = {}; D.heroes.forEach(function (x) { byId[x[0]] = x; });

    function save() { try { localStorage.setItem(SKEY, JSON.stringify(state)); } catch (e) {} }
    function score() {
      var surv = 0, dmg = 0, counts = {}, roles = { tank: 0, dmg: 0, sup: 0 };
      state.squad.forEach(function (id) {
        var hro = byId[id]; if (!hro) return;
        var w = D.roleWeight[hro[4]] || { surv: 0.5, dmg: 0.5 };
        surv += w.surv; dmg += w.dmg;
        var f = hro[2].replace("?", ""); counts[f] = (counts[f] || 0) + 1;
        if (/tank/i.test(hro[4])) roles.tank++; else if (/damage/i.test(hro[4])) roles.dmg++; else roles.sup++;
      });
      var fb = state.squad.length === 5 ? D.factionBonus(counts) : 0;
      var benchOn = state.bench.length > 0;
      var mult = (1 + fb / 100) * (benchOn ? 1.2 : 1);
      surv *= mult; dmg *= mult;
      // reference: 3 tanks + 2 damage at +15% faction, no bench
      var refS = 3.6 * 1.15, refD = 2.75 * 1.15;
      var eff = state.squad.length ? Math.round(100 * Math.pow(surv / refS, 0.6) * Math.pow(dmg / refD, 0.4)) : 0;
      return { surv: surv, dmg: dmg, fb: fb, counts: counts, roles: roles, eff: eff, benchOn: benchOn };
    }
    function draw() {
      var r = score();
      var h = '<div class="tool"><div class="tool-head"><div class="tool-title">Squad builder</div><div class="tool-sub">Tap heroes to fill five slots and up to three bench seats. Faction bonus, role balance and the bench skill update live. Saved on your device.</div></div>';
      h += '<div class="slotrow"><div class="slot-group"><div class="sg-label">Squad — five fight</div><div class="slots">';
      for (var i = 0; i < 5; i++) h += slotHtml(state.squad[i], i, false);
      h += '</div></div><div class="slot-group bench-group"><div class="sg-label">Bench — buffs from the sidelines</div><div class="slots">';
      for (var j = 0; j < 3; j++) h += slotHtml(state.bench[j], j, true);
      h += '</div></div></div>';

      h += '<div class="meters">';
      h += meter("Survivability", r.surv, 6.5, "var(--blue)");
      h += meter("Damage", r.dmg, 6.5, "var(--red)");
      h += '<div class="mcard"><div class="cd-label">Faction bonus</div><div class="mval">+' + r.fb + '%</div><div class="msub">' + factionText(r) + '</div></div>';
      h += '<div class="mcard"><div class="cd-label">KMA score</div><div class="mval">' + r.eff + '</div><div class="msub">100 = three tanks and two damage at +15% faction, empty bench</div></div>';
      h += '</div>';

      var notes = [];
      if (state.squad.length < 5) notes.push(["info", (5 - state.squad.length) + " slot" + (state.squad.length === 4 ? "" : "s") + " still empty. The faction bonus only counts a full squad of five."]);
      if (state.squad.length === 5) {
        if (r.roles.tank === 0) notes.push(["warn", "No tank. Your back row takes the first hit and the squad folds in seconds."]);
        else if (r.roles.tank === 1) notes.push(["warn", "One tank. Two is the minimum for the front row; simulations favour three once you own them."]);
        else if (r.roles.tank >= 3) notes.push(["good", r.roles.tank + " tanks. This is the shape the 170,000-combination simulation ranked highest, because damage reduction multiplies the whole squad's effective HP."]);
        if (r.roles.dmg === 0) notes.push(["warn", "No damage dealer. You will survive a long time and kill nothing."]);
        if (r.fb === 0) notes.push(["warn", "No faction bonus. Three heroes of one faction already pays +5% HP, ATK and DEF."]);
        else if (r.fb < 20) {
          var top = Object.keys(r.counts).sort(function (a, b) { return r.counts[b] - r.counts[a]; })[0];
          notes.push(["info", "Swapping to five " + top + " heroes would take the bonus from +" + r.fb + "% to +20%."]);
        } else notes.push(["good", "Maximum faction bonus: +20% HP, ATK and DEF across the squad."]);
        if (!state.squad.some(function (id) { return id === "arthur"; })) notes.push(["info", "No Arthur. Every top-ranked squad in the published simulation includes him; effectiveness drops from 100 to 64 without him."]);
      }
      if (!r.benchOn) notes.push(["info", "Bench is empty. A spare UR at level 30 and 8 stars gives the whole squad +20% ATK, HP and DEF plus +10% cooldown speed while sitting out."]);
      else notes.push(["good", "Bench skill counted: +20% ATK, HP and DEF and +10% cooldown speed. Stacking across several bench heroes is not confirmed, so only one is applied here."]);
      h += '<div class="notes">' + notes.map(function (n) { return '<div class="note note-' + n[0] + '">' + esc(n[1]) + '</div>'; }).join("") + '</div>';

      h += '<div class="tool-actions"><button class="btn" id="sq-clear">Clear squad</button>';
      h += '<button class="btn" id="sq-preset1">Load: all-Warrior two UR</button><button class="btn" id="sq-preset2">Load: Rat Swarm</button><button class="btn" id="sq-preset3">Load: best in slot</button></div>';

      h += '<div class="picker"><div class="cd-label">Pick heroes</div><div class="pick-filter">' +
        ["All", "Warrior", "Ranger", "Warlock", "Tank", "Damage", "Support"].map(function (f, i) { return '<button class="pf' + (i === 0 ? " on" : "") + '" data-f="' + f + '">' + f + "</button>"; }).join("") + '</div><div class="gallery pickgrid">';
      D.heroes.forEach(function (x) {
        var used = state.squad.indexOf(x[0]) >= 0 || state.bench.indexOf(x[0]) >= 0;
        var fac = x[2].replace("?", ""), col = { Warrior: "var(--accent)", Ranger: "var(--green)", Warlock: "var(--blue)" }[fac] || "var(--line-strong)";
        h += '<button class="gcard pick' + (used ? " used" : "") + '" data-id="' + x[0] + '" data-fac="' + fac + '" data-role="' + (/tank/i.test(x[4]) ? "Tank" : /damage/i.test(x[4]) ? "Damage" : "Support") + '" style="--fc:' + col + '">' +
          '<img src="img/cards/' + x[0] + '.webp" alt="" loading="lazy" onerror="this.style.visibility=\'hidden\'">' +
          '<div class="gname">' + esc(x[1]) + '</div><div class="gmeta">' + esc(x[2]) + " · " + esc(x[4]) + '</div>' +
          (x[5] !== "–" ? '<span class="tier tier-' + x[5] + ' gtier">' + x[5] + "</span>" : "") + "</button>";
      });
      h += '</div></div></div>';
      el.innerHTML = h;

      $$(".pick", el).forEach(function (b) {
        b.addEventListener("click", function () {
          var id = b.getAttribute("data-id");
          if (state.squad.indexOf(id) >= 0 || state.bench.indexOf(id) >= 0) return;
          if (state.squad.length < 5) state.squad.push(id); else if (state.bench.length < 3) state.bench.push(id); else return;
          save(); draw();
        });
      });
      $$("[data-drop]", el).forEach(function (b) {
        b.addEventListener("click", function () {
          var i = +b.getAttribute("data-drop"), bench = b.getAttribute("data-bench") === "1";
          (bench ? state.bench : state.squad).splice(i, 1); save(); draw();
        });
      });
      $$(".pf", el).forEach(function (b) {
        b.addEventListener("click", function () {
          $$(".pf", el).forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on");
          var f = b.getAttribute("data-f");
          $$(".pick", el).forEach(function (c) {
            var ok = f === "All" || c.getAttribute("data-fac") === f || c.getAttribute("data-role") === f;
            c.style.display = ok ? "" : "none";
          });
        });
      });
      $("#sq-clear", el).addEventListener("click", function () { state = { squad: [], bench: [] }; save(); draw(); });
      $("#sq-preset1", el).addEventListener("click", function () { state = { squad: ["arthur", "lucius", "sivir", "bella", "marlena"], bench: [] }; save(); draw(); });
      $("#sq-preset2", el).addEventListener("click", function () { state = { squad: ["arthur", "bella", "stellar", "marlena", "grenwald"], bench: [] }; save(); draw(); });
      $("#sq-preset3", el).addEventListener("click", function () { state = { squad: ["arthur", "billy", "ulfrid", "annie", "joker"], bench: ["marlena"] }; save(); draw(); });
    }
    function slotHtml(id, i, bench) {
      var hro = id && byId[id];
      if (!hro) return '<div class="slot empty"><span>' + (bench ? "bench" : "slot " + (i + 1)) + "</span></div>";
      var fac = hro[2].replace("?", ""), col = { Warrior: "var(--accent)", Ranger: "var(--green)", Warlock: "var(--blue)" }[fac] || "var(--line-strong)";
      return '<button class="slot filled" data-drop="' + i + '" data-bench="' + (bench ? 1 : 0) + '" style="--fc:' + col + '" title="Remove">' +
        '<img src="img/cards/' + hro[0] + '.webp" alt="" onerror="this.style.visibility=\'hidden\'">' +
        '<div class="sname">' + esc(hro[1]) + '</div><div class="srole">' + esc(hro[4]) + "</div></button>";
    }
    function meter(label, v, max, col) {
      var pct = Math.min(100, Math.round(v / max * 100));
      return '<div class="mcard"><div class="cd-label">' + label + '</div><div class="mval">' + v.toFixed(2) + '</div>' +
        '<div class="bar"><span style="width:' + pct + '%;background:' + col + '"></span></div></div>';
    }
    function factionText(r) {
      var parts = Object.keys(r.counts).map(function (k) { return r.counts[k] + " " + k; });
      return parts.length ? parts.join(", ") : "pick five heroes";
    }
    draw();
  };

  /* ================= hero planner ================= */
  T["hero-planner"] = function (el) {
    var st = { hero: "arthur", s0: 2, s1: 8, l0: 30, l1: 80, shardsWeek: 20, antiDay: 3000000 };
    function draw() {
      var shards = D.shardsBetween(st.s0, st.s1);
      var anti = D.antitoxinBetween(st.l0, st.l1);
      var weeks = st.shardsWeek > 0 ? shards / st.shardsWeek : 0;
      var days = st.antiDay > 0 ? anti / st.antiDay : 0;
      var h = '<div class="tool"><div class="tool-head"><div class="tool-title">Hero investment planner</div><div class="tool-sub">What it costs to get one hero from where they are to where you want them, and roughly how long that takes at your income.</div></div>';
      h += '<div class="fields">';
      h += fld("Hero", sel("hp-hero", D.heroes.map(function (x) { return [x[0], x[1]]; }), st.hero));
      h += fld("Stars now", starSel("hp-s0", st.s0));
      h += fld("Target stars", starSel("hp-s1", st.s1));
      h += fld("Level now", '<input id="hp-l0" type="number" min="1" max="150" value="' + st.l0 + '">');
      h += fld("Target level", '<input id="hp-l1" type="number" min="1" max="150" value="' + st.l1 + '">');
      h += fld("Shards you get a week", '<input id="hp-sw" type="number" min="0" value="' + st.shardsWeek + '"><span class="hint">Alliance Shop, pools, events</span>');
      h += fld("Antitoxin a day", '<input id="hp-ad" type="number" min="0" step="100000" value="' + st.antiDay + '"><span class="hint">workshops + covert ops + arena</span>');
      h += '</div>';
      h += '<div class="cards3">';
      h += card("Shards needed", num(shards), st.s0 + "★ to " + st.s1 + "★");
      h += card("At your rate", weeks ? (weeks < 1 ? "under a week" : Math.ceil(weeks) + " weeks") : "set a rate", weeks ? "about " + Math.ceil(weeks * 7) + " days" : "");
      h += card("Antitoxin needed", big(anti), "level " + st.l0 + " to " + st.l1);
      h += card("At your rate", days ? (days < 1 ? "under a day" : Math.ceil(days) + " days") : "set a rate", "");
      h += '</div>';
      var milestones = [];
      if (st.s0 < 8 && st.s1 >= 8) milestones.push("8 stars unlocks the support skill, which works from the bench: +20% ATK, HP and DEF for the whole squad.");
      if (st.l0 < 30 && st.l1 >= 30) milestones.push("Level 30 is the other half of the bench requirement.");
      if (st.s1 >= 10) milestones.push("10 stars is the entry ticket to Hero Awakening in the Era of Revival.");
      var capNeeded = Math.ceil(st.l1 / 5);
      milestones.push("Level " + st.l1 + " needs Sanctuary " + capNeeded + " (the cap is 5 × Sanctuary level).");
      var p = getProfile();
      if (p._set && p.sanctuary < capNeeded) milestones.push("Your Sanctuary is " + p.sanctuary + ", so you are capped at hero level " + (p.sanctuary * 5) + " until you upgrade.");
      h += '<div class="notes">' + milestones.map(function (m) { return '<div class="note note-info">' + esc(m) + "</div>"; }).join("") + '</div>';
      h += '<div class="tool-sub">Shard costs are the published per-star table and are exact. Antitoxin is interpolated between the published level anchors, so treat totals as close estimates.</div></div>';
      el.innerHTML = h;
      bind(el, { "hp-hero": "hero", "hp-s0": "s0", "hp-s1": "s1", "hp-l0": "l0", "hp-l1": "l1", "hp-sw": "shardsWeek", "hp-ad": "antiDay" }, st, draw);
    }
    function starSel(id, cur) {
      var opts = []; for (var s = 0; s <= 10; s += 0.2) opts.push([s.toFixed(1), s.toFixed(1) + "★"]);
      return sel(id, opts, (+cur).toFixed(1));
    }
    draw();
  };

  function bind(el, map, st, draw) {
    Object.keys(map).forEach(function (id) {
      var n = $("#" + id, el); if (!n) return;
      n.addEventListener("change", function () {
        var v = n.value; st[map[id]] = /^[-0-9.]+$/.test(v) ? parseFloat(v) : v; draw();
      });
    });
  }

  /* ================= sanctuary planner ================= */
  T["sanctuary-planner"] = function (el) {
    function draw() {
      var p = getProfile();
      var st = { from: p.sanctuary, to: Math.min(30, p.sanctuary + 5), speed: 0, queues: 1 };
      try { var s = JSON.parse(localStorage.getItem("kma-sanc") || "null"); if (s) { st.to = s.to || st.to; st.speed = s.speed || 0; st.queues = s.queues || 1; } } catch (e) {}
      render(st);
      function render(st) {
        if (st.to < st.from) st.to = st.from;
        var rows = [], tRes = 0, tHerb = 0, tSec = 0, anyEst = false;
        for (var lv = st.from + 1; lv <= st.to; lv++) {
          var s = D.sanctuary(lv); rows.push(s); tRes += s.resource; tHerb += s.herbs; tSec += s.seconds; anyEst = anyEst || s.est;
        }
        var speedMult = 1 / (1 + st.speed / 100);
        var wall = tSec * speedMult / Math.max(1, st.queues);
        var target = D.sanctuary(st.to);
        var h = '<div class="tool"><div class="tool-head"><div class="tool-title">Sanctuary planner</div><div class="tool-sub">The bill for getting from one Sanctuary level to another: resources, Stars, build time and the prerequisites that will block you.</div></div>';
        h += '<div class="fields">';
        h += fld("From level", '<input id="sp-from" type="number" min="1" max="29" value="' + st.from + '"><span class="hint">from your account</span>');
        h += fld("To level", '<input id="sp-to" type="number" min="2" max="30" value="' + st.to + '">');
        h += fld("Build speed bonus", '<input id="sp-speed" type="number" min="0" max="200" value="' + st.speed + '"><span class="hint">% from VIP, city buffs, research</span>');
        h += fld("Build queues", '<input id="sp-queues" type="number" min="1" max="4" value="' + st.queues + '">');
        h += '</div>';
        h += '<div class="cards3">';
        h += card("Grain needed", big(tRes), "and the same again in timber");
        h += card("Herbs needed", big(tHerb), tHerb ? "herbs enter the cost at level 9" : "none below level 9");
        h += card("Stars at the end", num(target.stars), "cumulative, and they cannot be sped up");
        h += card("Raw build time", dur(tSec), "before any bonus");
        h += card("With your bonus", dur(wall), st.queues > 1 ? "across " + st.queues + " queues" : "single queue");
        h += card("Hero level cap", target.heroCap, "at Sanctuary " + st.to);
        h += '</div>';
        h += '<div class="table-wrap"><table><thead><tr><th>Level</th><th>Grain / timber each</th><th>Herbs</th><th>Stars</th><th>Time</th><th>Prerequisites</th><th>Unlocks</th></tr></thead><tbody>';
        rows.forEach(function (r) {
          var pre = r.prereq.map(function (x) { return x[0] + " " + x[1]; }).join(", ");
          var blocked = r.prereq.some(function (x) { return (x[0] === "Research Lab" && p.lab < x[1]) || (x[0] === "Training Grounds" && p.tg < x[1]); });
          h += "<tr" + (blocked ? ' class="row-warn"' : "") + "><td>" + r.level + (r.est ? ' <span class="est">est</span>' : "") + "</td><td>" + big(r.resource) + "</td><td>" + (r.herbs ? big(r.herbs) : "–") +
            "</td><td>" + num(r.stars) + "</td><td>" + dur(r.seconds) + "</td><td>" + esc(pre || "–") + (r.prereqEst ? ' <span class="est">est</span>' : "") + "</td><td>" + esc(r.unlocks || "") + "</td></tr>";
        });
        h += "</tbody></table></div>";
        var blockers = [];
        rows.forEach(function (r) {
          r.prereq.forEach(function (x) {
            if (x[0] === "Research Lab" && p.lab < x[1]) blockers.push("Research Lab " + x[1] + " for Sanctuary " + r.level);
            if (x[0] === "Training Grounds" && p.tg < x[1]) blockers.push("Training Grounds " + x[1] + " for Sanctuary " + r.level);
          });
        });
        if (blockers.length) h += '<div class="note note-warn">Your account is short of: ' + esc(blockers.slice(0, 4).join("; ")) + (blockers.length > 4 ? " and more" : "") + ". Raise those first or the upgrade button stays grey.</div>";
        if (anyEst) h += '<div class="note note-info">Rows marked <span class="est">est</span> are interpolated between the published anchors at levels 3 to 10, 15, 20, 25 and 30. Treat them as close, not exact.</div>';
        h += "</div>";
        el.innerHTML = h;
        ["from", "to", "speed", "queues"].forEach(function (k) {
          var n = $("#sp-" + k, el);
          n.addEventListener("change", function () {
            st[k] = +n.value || 0;
            try { localStorage.setItem("kma-sanc", JSON.stringify({ to: st.to, speed: st.speed, queues: st.queues })); } catch (e) {}
            render(st);
          });
        });
      }
    }
    draw(); onProfile(el, draw);
  };

  /* ================= duel planner ================= */
  T["duel-planner"] = function (el) {
    var inv = {};
    try { inv = JSON.parse(localStorage.getItem("kma-duel") || "{}"); } catch (e) {}
    var defaults = { quests: 6, essence: 10, stamina: 120, fruit: 5000, caravans: 1, ops: 1, survivors: 3, build: 600, chest5: 0, chest3: 2, scrolls: 40, research: 600, urshard: 10, ssrshard: 20, pulls: 5, badges: 5000, t10: 0, t9: 400, anyspeed: 900, kills: 0 };
    Object.keys(defaults).forEach(function (k) { if (inv[k] === undefined) inv[k] = defaults[k]; });
    function draw() {
      var totals = D.duel.map(function (d) {
        var pts = 0;
        d.items.forEach(function (it) { pts += (inv[it[2]] || 0) * it[1]; });
        return { day: d, pts: pts };
      });
      var max = Math.max.apply(null, totals.map(function (t) { return t.pts; })) || 1;
      var grand = totals.reduce(function (a, b) { return a + b.pts; }, 0);
      var h = '<div class="tool"><div class="tool-head"><div class="tool-title">Alliance Duel points planner</div><div class="tool-sub">Enter what you have banked. It shows what each day is worth, so you know which day to hold for and whether you will clear the milestone chests.</div></div>';
      h += '<div class="duel-days">';
      totals.forEach(function (t) {
        var pct = Math.round(t.pts / max * 100);
        h += '<div class="dd"><div class="dd-head"><span class="dd-n">' + t.day.day + '</span><span class="dd-name">' + esc(t.day.name) + '</span><span class="dd-pts mono">' + num(t.pts) + '</span></div>';
        h += '<div class="bar"><span style="width:' + pct + '%;background:var(--accent)"></span></div>';
        h += '<div class="dd-items">' + t.day.items.map(function (it) {
          return '<label class="di"><span>' + esc(it[0]) + '</span><input type="number" min="0" data-k="' + it[2] + '" value="' + (inv[it[2]] || 0) + '"><em>×' + num(it[1]) + '</em></label>';
        }).join("") + "</div>";
        h += t.pts >= 180000 ? '<div class="dd-flag good">clears the 180,000 daily score reward</div>' : '<div class="dd-flag">' + num(180000 - t.pts) + " short of the 180,000 daily reward</div>";
        h += "</div>";
      });
      h += "</div>";
      h += '<div class="cards3">';
      h += card("Week total", num(grand), grand >= 550000 ? "clears the 550,000 weekly reward" : num(550000 - grand) + " short of the weekly reward");
      var best = totals.slice().sort(function (a, b) { return b.pts - a.pts; })[0];
      h += card("Your biggest day", "Day " + best.day.day + " " + best.day.name, num(best.pts) + " points");
      h += card("With Arena Expert", num(grand * 2), "the 3,800-scroll research node doubles every point source");
      h += '</div>';
      h += '<div class="note note-info">Values are the published base rates. Your in-game numbers scale with your Alliance Duel research, so a researched account sees roughly double. Falcon Quests, caravans and covert ops are the big levers; speedups are the filler.</div>';
      h += '<div class="tool-actions"><button class="btn" id="dp-reset">Reset to a typical week</button></div></div>';
      el.innerHTML = h;
      $$("input[data-k]", el).forEach(function (n) {
        n.addEventListener("input", function () {
          inv[n.getAttribute("data-k")] = +n.value || 0;
          try { localStorage.setItem("kma-duel", JSON.stringify(inv)); } catch (e) {}
          // update only the numbers, keep focus
          var t2 = D.duel.map(function (d) { var pts = 0; d.items.forEach(function (it) { pts += (inv[it[2]] || 0) * it[1]; }); return pts; });
          var mx = Math.max.apply(null, t2) || 1;
          $$(".dd", el).forEach(function (dd, i) {
            $(".dd-pts", dd).textContent = num(t2[i]);
            $(".bar span", dd).style.width = Math.round(t2[i] / mx * 100) + "%";
            var f = $(".dd-flag", dd);
            if (t2[i] >= 180000) { f.className = "dd-flag good"; f.textContent = "clears the 180,000 daily score reward"; }
            else { f.className = "dd-flag"; f.textContent = num(180000 - t2[i]) + " short of the 180,000 daily reward"; }
          });
        });
      });
      $("#dp-reset", el).addEventListener("click", function () { inv = JSON.parse(JSON.stringify(defaults)); try { localStorage.setItem("kma-duel", JSON.stringify(inv)); } catch (e) {} draw(); });
    }
    draw();
  };

  /* ================= server timeline ================= */
  T["server-timeline"] = function (el) {
    function draw() {
      var p = getProfile(), day = serverDay(p);
      var h = '<div class="tool"><div class="tool-head"><div class="tool-title">Server timeline</div><div class="tool-sub">' +
        (day ? "Server " + (p.server ? esc(p.server) : "") + " is on day " + day + "." : "Set your server start date on the account page and this fills in with real dates.") + '</div></div>';
      if (!day) h += '<div class="fields">' + fld("Server start date", '<input id="tl-start" type="date" value=""><span class="hint">saved to your account</span>') + "</div>";
      var era = day ? Math.floor((day - 1) / 56) + 1 : null, eraDay = day ? ((day - 1) % 56) + 1 : null;
      if (day) {
        h += '<div class="cards3">';
        h += card("Server day", day, "");
        h += card("Era", "Era " + era + ", day " + eraDay, (56 - eraDay) + " days to the next era");
        var toRevival = 130 - day;
        h += card("Era of Revival", toRevival > 0 ? "in " + toRevival + " days" : "window open", toRevival > 0 ? "servers enter at roughly day 130" : "server is closed to new characters");
        h += "</div>";
      }
      h += '<div class="timeline">';
      D.serverDays.forEach(function (r) {
        var past = day && day >= r[0];
        h += '<div class="tl' + (past ? " past" : "") + '"><div class="tl-day">Day ' + r[0] + (day ? '<span class="tl-when">' + (past ? (day - r[0]) + "d ago" : "in " + (r[0] - day) + "d") + "</span>" : "") + '</div><div class="tl-what">' + esc(r[1]) + "</div></div>";
      });
      h += "</div></div>";
      el.innerHTML = h;
      var s = $("#tl-start", el);
      if (s) s.addEventListener("change", function () { var p2 = getProfile(); p2.start = s.value; delete p2._set; setProfile(p2); draw(); });
    }
    draw(); onProfile(el, draw);
  };

  /* ================= quick calculators ================= */
  T["calc-dig"] = function (el) {
    var n = 10;
    function draw() {
      var secs = 7200 / (n * n);
      el.innerHTML = '<div class="tool mini"><div class="tool-title">Alliance dig</div>' +
        '<div class="fields">' + fld("Diggers", '<input id="cd-n" type="number" min="1" max="100" value="' + n + '">') + '</div>' +
        '<div class="cards3">' + card("Finish time", secs < 1 ? "about 1 second" : (secs < 60 ? Math.round(secs) + " seconds" : dur(secs)), "alone it is 2 hours") +
        card("Versus one digger", (7200 / secs).toFixed(0) + "× faster", "speed scales with the square of the diggers") + "</div></div>";
      $("#cd-n", el).addEventListener("change", function () { n = Math.max(1, Math.min(100, +this.value || 1)); draw(); });
    }
    draw();
  };
  T["calc-promotion"] = function (el) {
    var st = { grounds: 3, tier: "T9" };
    function draw() {
      var perGround = 455, cycle = 10.5;
      var t4 = st.grounds * perGround;
      var promoHours = t4 / 712 * 16.5, directHours = t4 / 712 * 33;
      el.innerHTML = '<div class="tool mini"><div class="tool-title">Troop promotion</div>' +
        '<div class="fields">' + fld("Feeder grounds at Lv10", '<input id="cp-g" type="number" min="1" max="3" value="' + st.grounds + '">') + '</div>' +
        '<div class="cards3">' + card("T4 per cycle", num(t4), "about " + cycle + " hours of feeding") +
        card("Promote to " + st.tier, promoHours.toFixed(1) + " h", "one tier at a time on the maxed ground") +
        card("Train directly", directHours.toFixed(1) + " h", "saves " + (directHours - promoHours).toFixed(1) + " hours") + "</div>" +
        '<div class="note note-info">Every promotion step also scores as training that tier on Alliance Duel day 5.</div></div>';
      $("#cp-g", el).addEventListener("change", function () { st.grounds = Math.max(1, Math.min(3, +this.value || 1)); draw(); });
    }
    draw();
  };
  T["calc-shield"] = function (el) {
    var h = '<div class="tool mini"><div class="tool-title">Shield value</div><div class="table-wrap"><table><thead><tr><th>Shield</th><th>Alliance Coins</th><th>Coins per hour</th><th>Diamonds</th><th>Diamonds per hour</th></tr></thead><tbody>';
    D.shields.forEach(function (s) {
      h += "<tr><td>" + (s[0] >= 24 ? (s[0] / 24) + " day" + (s[0] > 24 ? "s" : "") : s[0] + " h") + "</td><td>" + (s[1] ? num(s[1]) : "–") + "</td><td>" + (s[1] ? Math.round(s[1] / s[0]) : "–") +
        "</td><td>" + num(s[2]) + "</td><td>" + Math.round(s[2] / s[0]) + "</td></tr>";
    });
    h += '</tbody></table></div><div class="note note-good">The 24-hour Alliance Coin shield is the best value you can buy on a normal week. Diamonds are for emergencies only.</div></div>';
    el.innerHTML = h;
  };
  T["calc-lure"] = function (el) {
    var h = '<div class="tool mini"><div class="tool-title">Cheese Trap lure buff</div><div class="table-wrap"><table><thead><tr><th>Mouse Lures donated</th><th>Rally damage</th></tr></thead><tbody>';
    D.lure.forEach(function (l) { h += "<tr><td>" + l[0] + "</td><td>+" + l[1] + "%</td></tr>"; });
    h += '</tbody></table></div><div class="note note-info">Stacks with the rally leader bonus: +5% when the R5 or a title holder leads, +2.5% for an R4.</div></div>';
    el.innerHTML = h;
  };
  T["gate-check"] = function (el) {
    function draw() {
      var p = getProfile();
      if (!p._set) { el.innerHTML = '<div class="note note-info">Set your Might on the <a href="#/my-account">account page</a> and this becomes a personal check.</div>'; return; }
      var kind = el.getAttribute("data-gate");
      var h = "";
      if (kind === "siege") {
        var stage = 0; D.undeadSiege.forEach(function (r) { if (p.might >= r[3] && p.sanctuary >= r[1]) stage = r[0]; });
        var nxt = D.undeadSiege[stage] || null;
        h = stage ? "Your " + big(p.might) + " Might and Sanctuary " + p.sanctuary + " clear **stage " + stage + "**." : "You do not meet stage 1 yet (2.4M Might, Sanctuary 13).";
        if (nxt) h += " Stage " + nxt[0] + " needs " + big(nxt[3]) + " Might and Sanctuary " + nxt[1] + ".";
      } else if (kind === "heroroad") {
        var d = 0; D.heroRoad.forEach(function (m, i) { if (p.might >= m) d = i + 1; });
        h = d ? "Your squad clears **difficulty " + d + "**." : "Difficulty 1 needs 770k squad Might.";
        if (d < 11) h += " Difficulty " + (d + 1) + " needs " + big(D.heroRoad[d]) + ".";
      } else if (kind === "expedition") {
        if (p.sanctuary < 16) h = "Expedition unlocks at Sanctuary 16; you are at " + p.sanctuary + ".";
        else {
          var best = 0; for (var i = 1; i <= 60; i++) if (p.might >= D.expeditionAt(p.faction, i).might) best = i;
          h = best ? "In the " + p.faction + " arena your " + big(p.might) + " Might clears up to **difficulty " + best + "** (" + num(D.expeditionAt(p.faction, best).medals) + " medals)." : "Difficulty 1 in the " + p.faction + " arena needs " + big(D.expeditionAt(p.faction, 1).might) + " Might.";
        }
      }
      el.innerHTML = '<div class="note note-good">' + h.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>") + "</div>";
    }
    draw(); onProfile(el, draw);
  };

  window.KMA_TOOLS = T;
})();
