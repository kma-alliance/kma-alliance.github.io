/* [KMA] Alliance Handbook — game data layer.
   One place for every number the site draws, charts or calculates from.
   Sources: wiki-last-asylum.com, lastasylumplague.com, lastasylumguide(s).com.
   Values marked "est" in the UI are interpolated between published anchors. */
(function () {
  "use strict";

  // [slug, name, faction, rarity, role, tier] — role drives the squad model below.
  var heroes = [
    ["arthur","Arthur","Warrior","UR","Tank","S"],["marlena","Marlena","Warrior","UR","Damage","S"],["shadow","Shadow","Ranger","UR","Ranged tank","S"],
    ["daskal","Daskal","Warrior","UR","Tank","S"],["louis","Louis","Ranger","UR","Tank","S"],["ulfrid","Ulfrid (Brian)","Warlock","UR","Tank","S"],
    ["billy","Billy","Warlock","UR","Tank","A"],["harper","Harper","Warrior","UR","Support","A"],["bell","Bell","Ranger","UR","Support","A"],
    ["nicole","Nicole","Warlock","UR","Support","A"],["zoya","Zoya","Warrior?","UR","Damage","A"],["annie","Annie","Warlock","UR","Damage","A"],
    ["cynthia","Cynthia","Ranger","UR","Damage","A"],["red-lady","Red Lady","Ranger","UR","Damage","A"],["joker","Joker (Jester)","Warlock","UR","Damage","A"],
    ["bella","Bella","Warrior","SSR","Tank","A"],["griffith","Griffith","Ranger","SSR","Ranged tank","A"],["grenwald","Grenwald","Warlock","SSR","Damage","A"],
    ["stellar","Stellar","Warlock","SSR","Healer","A"],["claire","Claire","Warrior","SSR","Damage","B"],["bestar","Bestar","Ranger","SSR","Damage","B"],
    ["hastar","Hastar","Warlock?","SSR","Hybrid tank","B"],["lucius","Lucius","Warrior","SSR","Tank","B"],["kesso","Kesso","Warrior","SSR","Damage","C"],
    ["sivir","Sivir","Warrior","SSR","Damage","C"],["celia","Celia","Warrior","SSR","Economy","C"],["ash","Ash","Ranger","SSR","Damage","D"],
    ["durant","Durant","Warrior","SR","Tank","–"],["william","William","Warrior","SR","Damage","–"],["robin","Robin","Ranger","SR","Damage","–"],["kafa","Kafa","Warlock","SR","Damage","–"]
  ];

  // [slug, name, sanctuaryLevel, note]
  var buildings = [
    ["sanctuary","Sanctuary",1,"HQ. Gates everything."],["farm","Farm",1,"Grain, up to 4"],["lumberyard","Lumberyard",1,"Timber, up to 4"],["herb-garden","Herb Garden",1,"Herbs; 2nd at Sanctuary 2, 4th at 19"],
    ["soldiers-rest","Soldier's Rest",1,"Fallen troops return"],["residence","Residence",1,"Survivor panel"],["hall-of-honor","Hall of Honor",1,"Max level 1, open from the start"],["temple","Temple",1,"Monument"],
    ["granary","Granary",3,"Protected grain"],["lumber-depot","Lumber Depot",3,"Protected timber"],["herb-storage","Herb Storage",3,"Protected herbs"],["builders-hut","Builder's Hut",3,"Free speedup time"],
    ["walls","Walls",4,"City DEF, prerequisite"],["gear-workshop","Gear Workshop",4,"Craft hero gear"],["explorers-camp","Explorer's Camp",4,"Hero XP, idle window"],["tavern","Tavern",4,"Free recruits"],
    ["squad-1","Squad 1",4,"Rally squad"],["alliance-hall","Alliance Hall",5,"Helps per queue"],["antitoxin-workshop","Antitoxin Workshop",5,"Hero XP, up to 5"],["smelting-workshop","Smelting Workshop",5,"Gearstone, push to 25"],
    ["weaving-workshop","Weaving Workshop",5,"Cloth"],["epigraph-workshop","Epigraph Workshop",5,"Raven epigraphs"],["falcon-tower","Falcon Tower",6,"World map, quests"],["training-grounds","Training Grounds",6,"Troop tier, up to 3"],
    ["barracks","Barracks",6,"Troop capacity"],["scout-squad","Scout Squad",6,"Scout speed"],["nomad-trader","Nomad Trader",6,"Exchange"],["infirmary","Infirmary",7,"Heals wounded, up to 3"],
    ["research-lab","Research Lab",7,"Research; one below Sanctuary"],["arena","Arena",7,"5 free fights a day"],["raven-nest","Raven Nest",7,"Sixth fighter"],["warrior-statue","Warrior Statue",7,"Warrior stats, leadership"],
    ["squad-2","Squad 2",8,"Gathering squad"],["watchtower","Watchtower",8,"March alarm, anti-scout"],["curio-hall","Curio Hall",8,"Collections"],["black-ops","Black Ops",9,"Covert Operations"],
    ["monument","Monument",9,"Milestones"],["2nd-workbench","2nd Workbench",9,"Second research queue"],["lord-statue","Lord Statue",10,"Lord specialty"],["private-stable","Private Stable",11,"Caravans"],
    ["alliance-stable","Alliance Stable",11,"Alliance caravans"],["warlock-statue","Warlock Statue",11,"Warlock stats"],["ranger-statue","Ranger Statue",12,"Ranger stats"],["raven-workshop","Raven Workshop",15,"Raven gear chests"],
    ["squad-3","Squad 3",20,"Third squad"],["squad-4","Squad 4",5,"Premium pass squad"]
  ];


  // Official Alliance Duel day names.
  var DUEL_DAYS = ["Raven", "Construction", "Tech", "Hero", "Preparation", "Raid", "Sunday (no Duel day)"];

  // ---------- Server clock ----------
  // The daily reset (and the Alliance Duel day roll) happens at 00:00 SERVER time, not 00:00 UTC.
  // Server time defaults to UTC-2; a player can correct it on the Timezones page and it is
  // remembered on their device. Every countdown on the site reads through here.
  var DEFAULT_SERVER_OFFSET = -2;
  function serverOffset() {
    try { var v = parseFloat(localStorage.getItem("kma-server-offset")); if (!isNaN(v)) return v; } catch (e) {}
    return DEFAULT_SERVER_OFFSET;
  }
  function setServerOffset(h) { try { localStorage.setItem("kma-server-offset", String(h)); } catch (e) {} }
  // A Date whose getUTC* fields read as the server wall clock.
  function serverNow(now) { return new Date((now || new Date()).getTime() + serverOffset() * 3600000); }
  // The real instant of the next 00:00 server time.
  function nextReset(now) {
    now = now || new Date();
    var s = serverNow(now);
    return new Date(Date.UTC(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate() + 1) - serverOffset() * 3600000);
  }
  function msToReset(now) { now = now || new Date(); return nextReset(now) - now; }
  // Alliance Duel day index, Monday = 0, on the server calendar.
  function duelIdx(now) { return (serverNow(now).getUTCDay() + 6) % 7; }
  function hms(ms) {
    if (ms < 0) ms = 0;
    var p = function (n) { return (n < 10 ? "0" : "") + n; };
    return p(Math.floor(ms / 36e5)) + ":" + p(Math.floor(ms % 36e5 / 6e4)) + ":" + p(Math.floor(ms % 6e4 / 1e3));
  }

  // One shared registry of 1-second timers. Widgets from different files used to each
  // keep their own single interval handle and silently cancel one another; the router
  // clears them all before each render so none outlive the node they update.
  var ticks = [];
  function startTick(fn) { ticks.push(setInterval(fn, 1000)); try { fn(); } catch (e) {} }
  function stopTicks() { ticks.forEach(clearInterval); ticks = []; }

  // Anonymous visit counting (GoatCounter, no cookies). Guides change without a page load,
  // so every guide opened is counted by hand. count.js loads async, so early calls wait for it.
  // Only paths and event names are sent: never profile numbers, names or codes.
  function track(path, title, isEvent) {
    var tries = 0;
    (function go() {
      var gc = window.goatcounter;
      if (gc && typeof gc.count === "function") { try { gc.count({ path: path, title: title || path, event: !!isEvent }); } catch (e) {} return; }
      if (++tries < 25) setTimeout(go, 400);
    })();
  }

  // ---------- Sanctuary upgrade table ----------
  // Published anchors; everything else is log-interpolated and flagged as an estimate.
  var sancRes = { 2: 32, 3: 983, 4: 2598, 5: 19730, 6: 92710, 7: 235800, 8: 395600, 9: 605800, 10: 748700, 15: 6474000, 20: 60030000, 25: 277900000, 30: 1356000000 };
  var sancHerb = { 9: 208700, 10: 232900, 15: 2290000, 20: 18410000, 25: 97530000, 30: 441300000 };
  // Cumulative Star thresholds (a gate, never a spend). Whole pool is 326.
  var sancStars = { 3: 17, 4: 19, 5: 28, 6: 47, 7: 61, 8: 80, 9: 96, 10: 112, 15: 201, 20: 247, 25: 292, 30: 326 };
  // Base build time in seconds, before any construction-speed buff.
  var sancSecs = { 3: 3, 4: 300, 5: 658, 6: 2063, 7: 5440, 8: 10895, 9: 15410, 10: 20123, 15: 80105, 20: 430820, 25: 1911955, 30: 8866423 };
  var sancPrereq = {
    5: [["Walls", 3]], 6: [["Walls", 5]], 7: [["Training Grounds", 4], ["Alliance Hall", 3]], 8: [["Training Grounds", 6], ["Alliance Hall", 5]],
    9: [["Walls", 8], ["Alliance Hall", 7]], 10: [["Walls", 9], ["Infirmary", 7]], 11: [["Research Lab", 7], ["Training Grounds", 10]],
    15: [["Research Lab", 14], ["Training Grounds", 14], ["Herb Garden", 7]], 20: [["Research Lab", 19], ["Alliance Hall", 18], ["Farm", 10]],
    25: [["Research Lab", 24], ["Training Grounds", 24], ["Herb Storage", 10]], 30: [["Research Lab", 29], ["Training Grounds", 29], ["Antitoxin Workshop", 15]]
  };
  var sancUnlocks = {
    3: "Builder's Hut, storage buildings", 4: "Alliance, Campaign, VIP, Walls, Squad 1", 5: "Alliance Hall, Antitoxin and Smelting Workshops",
    6: "World map, Training Grounds, Falcon Tower", 7: "Research Lab, Arena, Raven, first free shield, Survival Battle",
    8: "Squad 2, Watchtower, Demon King, Wandering Phantom", 9: "Second research queue, Covert Operations",
    10: "Alliance Duel, caravans, Canyon Conquest", 11: "Warlock Statue, stables", 12: "Ranger Statue",
    13: "Undead Siege stage 1 range starts", 15: "Elixir Scramble, Royal City, Crystal Valley, Raven Workshop",
    16: "Expedition", 20: "Squad 3, T7 troops", 24: "T8 troops", 27: "T9 troops", 30: "T10 troops, hero level 150"
  };

  function logInterp(table, lv) {
    var keys = Object.keys(table).map(Number).sort(function (a, b) { return a - b; });
    if (table[lv] !== undefined) return { v: table[lv], est: false };
    var lo = null, hi = null;
    keys.forEach(function (k) { if (k < lv) lo = k; if (hi === null && k > lv) hi = k; });
    if (lo === null || hi === null) return { v: lo !== null ? table[lo] : 0, est: true };
    var a = Math.log(Math.max(1, table[lo])), b = Math.log(Math.max(1, table[hi]));
    return { v: Math.round(Math.exp(a + (b - a) * (lv - lo) / (hi - lo))), est: true };
  }
  function linInterp(table, lv) {
    var keys = Object.keys(table).map(Number).sort(function (a, b) { return a - b; });
    if (table[lv] !== undefined) return { v: table[lv], est: false };
    var lo = null, hi = null;
    keys.forEach(function (k) { if (k < lv) lo = k; if (hi === null && k > lv) hi = k; });
    if (lo === null) return { v: 0, est: false };
    if (hi === null) return { v: table[lo], est: true };
    return { v: Math.round(table[lo] + (table[hi] - table[lo]) * (lv - lo) / (hi - lo)), est: true };
  }
  function sanctuary(lv) {
    var res = logInterp(sancRes, lv), herb = lv < 9 ? { v: 0, est: false } : logInterp(sancHerb, lv);
    var st = linInterp(sancStars, lv), sec = logInterp(sancSecs, lv);
    var pre = sancPrereq[lv];
    if (!pre && lv >= 10) pre = [["Research Lab", lv - 1], ["Training Grounds", lv - 1]];
    return {
      level: lv, resource: res.v, herbs: herb.v, stars: st.v, seconds: sec.v,
      est: res.est || herb.est || sec.est, starsEst: st.est, starsCumulative: true,
      prereq: pre || [], prereqEst: !sancPrereq[lv] && lv >= 10,
      heroCap: lv <= 3 ? 5 : (lv === 4 ? 15 : lv * 5), unlocks: sancUnlocks[lv] || ""
    };
  }

  // ---------- Hero costs ----------
  var shardPerStep = [2, 3, 4, 6, 8, 12, 25, 35, 40, 60];       // per 0.2 star, by whole-star band
  var shardPerStar = [10, 15, 20, 30, 40, 60, 125, 175, 200, 300];
  function shardsBetween(fromStar, toStar) {              // stars in 0.2 steps
    var n = 0;
    for (var s = Math.round(fromStar * 5) + 1; s <= Math.round(toStar * 5); s++) {
      n += shardPerStep[Math.min(9, Math.floor((s - 1) / 5))];
    }
    return n;
  }
  var antiAnchors = [[2,100],[10,1500],[11,2100],[30,19900],[44,47900],[45,137900],[60,1550000],[90,20800000],[91,21700000],[148,168000000]];
  var ANTI_LAST = 148; // nothing above this is published
  function antitoxinAt(lv) {
    if (lv <= 1) return 0;
    if (lv > ANTI_LAST) return null;   // Lv149-150 costs are not published anywhere
    for (var i = 0; i < antiAnchors.length; i++) if (antiAnchors[i][0] === lv) return antiAnchors[i][1];
    var lo = antiAnchors[0], hi = antiAnchors[antiAnchors.length - 1];
    for (var j = 0; j < antiAnchors.length - 1; j++) {
      if (antiAnchors[j][0] < lv && antiAnchors[j + 1][0] > lv) { lo = antiAnchors[j]; hi = antiAnchors[j + 1]; break; }
    }
    var a = Math.log(lo[1]), b = Math.log(hi[1]);
    return Math.round(Math.exp(a + (b - a) * (lv - lo[0]) / (hi[0] - lo[0])));
  }
  function antitoxinBetween(from, to) {
    var t = 0, partial = false;
    for (var l = from + 1; l <= to; l++) { var a = antitoxinAt(l); if (a === null) { partial = true; break; } t += a; }
    return partial ? { total: t, partial: true, upTo: ANTI_LAST } : { total: t, partial: false, upTo: to };
  }

  // ---------- Squad model ----------
  // Transparent heuristic, not the game's formula. Weights per role.
  var roleWeight = {
    "Tank":         { surv: 1.00, dmg: 0.25 },
    "Ranged tank":  { surv: 0.85, dmg: 0.45 },
    "Hybrid tank":  { surv: 0.80, dmg: 0.45 },
    "Damage":       { surv: 0.30, dmg: 1.00 },
    "Support":      { surv: 0.50, dmg: 0.70 },
    "Healer":       { surv: 0.90, dmg: 0.35 },
    "Economy":      { surv: 0.40, dmg: 0.30 }
  };
  function factionBonus(counts) {
    var vals = Object.keys(counts).map(function (k) { return counts[k]; }).sort(function (a, b) { return b - a; });
    var top = vals[0] || 0, second = vals[1] || 0;
    if (top >= 5) return 20;
    if (top === 4) return 15;
    if (top === 3 && second >= 2) return 10;
    if (top === 3) return 5;
    return 0;
  }

  // ---------- Troops ----------
  var troopTier = [[1,"T1"],[3,"T2"],[6,"T3"],[10,"T4"],[14,"T5"],[17,"T6"],[20,"T7"],[24,"T8"],[27,"T9"],[30,"T10"]];
  function tierFor(tg) { var t = "–"; troopTier.forEach(function (x) { if (tg >= x[0]) t = x[1]; }); return t; }

  // ---------- Alliance Duel scoring ----------
  var duel = [
    { day: 1, name: "Raven", items: [
      ["Falcon Quests claimed", 10000, "quests"], ["Raven Essence used", 2500, "essence"], ["Stamina used", 150, "stamina"], ["Raven Fruit used", 2, "fruit"] ] },
    { day: 2, name: "Construction", items: [
      ["UR Caravans dispatched", 100000, "caravans"], ["UR Covert Ops run", 75000, "ops"], ["Survivors recruited", 1500, "survivors"], ["Construction speedup minutes", 50, "build"] ] },
    { day: 3, name: "Tech", items: [
      ["Lv5 Raven Gear Chests", 90000, "chest5"], ["Lv3 Raven Gear Chests", 10000, "chest3"], ["Falcon Quests claimed", 10000, "quests"], ["Study Scrolls used", 300, "scrolls"], ["Research speedup minutes", 50, "research"] ] },
    { day: 4, name: "Heroes", items: [
      ["UR hero shards used", 10000, "urshard"], ["SSR hero shards used", 3500, "ssrshard"], ["Hero recruits (pulls)", 1500, "pulls"], ["Skill Badges used", 10, "badges"] ] },
    { day: 5, name: "Preparation", items: [
      ["T10 trained or promoted", 110, "t10"], ["T9 trained or promoted", 100, "t9"], ["Falcon Quests claimed", 10000, "quests"], ["Any speedup minutes", 50, "anyspeed"] ] },
    { day: 6, name: "Raid", items: [
      ["UR Caravans dispatched", 100000, "caravans"], ["UR Covert Ops run", 75000, "ops"], ["T10 kills on the matched alliance", 55, "kills"], ["Any speedup minutes incl. healing", 50, "anyspeed"] ] }
  ];

  // ---------- Gates ----------
  var heroRoad = [770000, 2800000, 6800000, 8600000, 11600000, 16400000, 21500000, 25500000, 30000000, 35000000, 40000000];
  var undeadSiege = [
    [1, 13, 15, 2414269, 16704000], [2, 14, 16, 3293051, 20880000], [3, 15, 17, 4229772, 26100000], [4, 17, 20, 6088213, 52800000], [5, 19, 22, 8014806, 75400000],
    [6, 21, 24, 11522865, 119700000], [7, 23, 26, 14019948, 138800000], [8, 25, 28, 17411540, 196300000], [9, 26, 29, 20155943, 202600000], [10, 27, 30, 24471960, 255600000]
  ];
  var expedition = {
    anchors: [1, 5, 10, 20, 30, 40, 50, 60],
    Warrior: [350938, 2006583, 5137961, 11119474, 16005860, 21349004, 27971251, 46478744],
    Ranger: [1151340, 2895720, 5752395, 11756375, 16864655, 22773645, 29436840, 48865309],
    Warlock: [355200, 2055925, 5329835, 11582785, 16672770, 22238545, 29136720, 48738131],
    medals: [260, 1300, 2600, 7800, 13000, 26000, 39000, 41600]
  };
  function expeditionAt(faction, diff) {
    var a = expedition.anchors, arr = expedition[faction] || expedition.Warrior, med = expedition.medals;
    if (diff <= 1) return { might: arr[0], medals: med[0] };
    for (var i = 0; i < a.length - 1; i++) {
      if (a[i] <= diff && diff <= a[i + 1]) {
        var t = (diff - a[i]) / (a[i + 1] - a[i]);
        return { might: Math.round(arr[i] + (arr[i + 1] - arr[i]) * t), medals: Math.round(med[i] + (med[i + 1] - med[i]) * t) };
      }
    }
    return { might: arr[arr.length - 1], medals: med[med.length - 1] };
  }

  // ---------- Server calendar ----------
  // New-server calendar in Monument days (the opening day is day 1). Checked 2026-09-13 against
  // official update notes, streams of a server opened 21 Aug 2026 that name the day on air, and
  // datamined data (whose hero days run one lower than the Monument; they are corrected here).
  // [day, what happens, confidence "high" | "med" | "low", kind "hero" | "event" | "war" | "unlock"]
  var serverDays = [
    [1, "Marlena and Arthur available. Quiz of Wisdom, Final Dawn and Wandering Phantom open by Sanctuary level", "high", "hero"],
    [2, "Survival Battle opens (Sanctuary 7)", "high", "event"],
    [3, "Demon King Blight opens", "med", "event"],
    [4, "Cheese Trap arrives (trap levels 1 and 2). Caravans open", "high", "event"],
    [4, "Top Healer starts, runs 7 days (seen running on day 5)", "high", "event"],
    [7, "Cheese Trap level 3", "high", "event"],
    [8, "Cynthia (hero wheel, free daily spins) and Shadow (hero pass)", "high", "hero"],
    [12, "Crystal Cluster Valley first session, some time on days 12 to 18 (Sanctuary 15)", "med", "event"],
    [14, "Cheese Trap level 4", "high", "event"],
    [15, "Undead Siege opens (official: 2 weeks after server launch)", "high", "event"],
    [15, "Joker (hero wheel) and Annie (hero pass)", "high", "hero"],
    [15, "Canyon Conquest first round, days 15 to 21 (15 members at Sanctuary 15+)", "med", "event"],
    [20, "First Thief Hunt around days 20 to 21, then roughly every two weeks", "med", "event"],
    [21, "Cheese Trap level 5", "high", "event"],
    [22, "Harper (hero pass)", "high", "hero"],
    [27, "First Royal City Scramble: the winner's leader becomes King", "high", "war"],
    [29, "Kingdom War announced. Alliance Duel goes cross-server with a Saturday raid. Cross-server caravans", "med", "war"],
    [29, "Daskal (hero pass; Daily Offer about two weeks later)", "high", "hero"],
    [30, "Cheese Trap level 6", "high", "event"],
    [31, "Harper joins the Tavern recruit pool", "med", "hero"],
    [36, "Red Lady", "high", "hero"],
    [43, "Ulfrid (formerly Brian)", "high", "hero"],
    [45, "Cheese Trap level 7", "high", "event"],
    [50, "Alliance League eligibility: kingdom online more than 7 weeks, top 16 alliances", "high", "war"],
    [57, "Zoya", "high", "hero"],
    [60, "Cheese Trap level 8", "high", "event"],
    [64, "Louis", "high", "hero"],
    [66, "Tavern pool adds Cynthia, Shadow, Annie, Joker and Marlena", "med", "hero"],
    [71, "Bell", "high", "hero"],
    [78, "Raven Runes unlock (their building on day 79)", "high", "unlock"],
    [85, "Billy", "high", "hero"],
    [90, "Cheese Trap level 9", "high", "event"],
    [99, "Nicole, the last UR hero", "high", "hero"],
    [120, "Cheese Trap level 10", "high", "event"],
    [136, "Era of Revival, around days 136 to 160: servers enter in groups of 32 and close to new characters", "med", "war"]
  ];
  // Weekly events first fire on a weekday, so their server day depends on the weekday the server opened.
  function dayDate(start, day) { var t = Date.parse(start + "T00:00:00Z"); return isNaN(t) ? null : new Date(t + (day - 1) * 864e5); }
  function firstWeekdayFrom(start, fromDay, weekday) { // weekday: 0 Sunday ... 6 Saturday
    for (var d = fromDay; d < fromDay + 7; d++) { var dt = dayDate(start, d); if (dt && dt.getUTCDay() === weekday) return d; }
    return null;
  }
  function serverCalendar(start) {
    var rows = serverDays.map(function (r) { return { day: r[0], text: r[1], conf: r[2], kind: r[3] }; });
    var ava = start ? firstWeekdayFrom(start, 8, 1) : null;
    rows.push({ day: ava || 9, kind: "war", conf: ava ? "med" : "low",
      text: ava ? "First Alliance Duel week (AvA) starts: same server, no raid day" : "First Alliance Duel week (AvA) starts on the first Monday on or after day 8: same server, no raid day" });
    var elixir = start ? firstWeekdayFrom(start, 13, 5) : null;
    rows.push({ day: elixir || 13, kind: "event", conf: elixir ? "med" : "low",
      text: elixir ? "First Elixir Scramble, this Friday or the next (register Monday to Wednesday, Sanctuary 15)" : "First Elixir Scramble on the first Friday on or after about day 13" });
    var kvk = start ? firstWeekdayFrom(start, 35, 6) : null;
    rows.push({ day: kvk || 35, kind: "war", conf: "low",
      text: "First Kingdom War battles expected on a Saturday between days 35 and 48" });
    rows.sort(function (a, b) { return a.day - b.day; });
    rows.forEach(function (r) { r.date = start ? dayDate(start, r.day) : null; });
    return rows;
  }

  // ---------- VIP, shields, misc ----------
  var vip = [[1,0,"Basic"],[3,1050,"Up to +8% production"],[5,11000,"+13% production, +15% build"],[8,55000,"Expedition battles, +8% march, +30% build"],[11,null,"Universal UR fragments in the Diamond Shop"],[12,550000,"First combat stats: +4% hero HP/ATK/DEF"],[20,50000000,"+13% hero stats, +50% build and training"]];
  var shields = [[8,7500,1500],[12,9900,2500],[24,19800,5000],[72,null,12000]];
  var lure = [[15,3],[20,7],[25,12],[30,18],[35,25]];

  window.KMA_DATA = {
    heroes: heroes, buildings: buildings,
    sanctuary: sanctuary, sancRes: sancRes, sancStars: sancStars,
    shardPerStar: shardPerStar, shardsBetween: shardsBetween,
    antitoxinAt: antitoxinAt, antitoxinBetween: antitoxinBetween,
    roleWeight: roleWeight, factionBonus: factionBonus,
    troopTier: troopTier, tierFor: tierFor,
    duel: duel, heroRoad: heroRoad, undeadSiege: undeadSiege, expeditionAt: expeditionAt,
    serverDays: serverDays, serverCalendar: serverCalendar, dayDate: dayDate, vip: vip, shields: shields, lure: lure,
    serverOffset: serverOffset, setServerOffset: setServerOffset, serverNow: serverNow,
    nextReset: nextReset, msToReset: msToReset, duelIdx: duelIdx, hms: hms,
    startTick: startTick, stopTicks: stopTicks, track: track,
    DUEL_DAYS: DUEL_DAYS, ANTI_LAST: ANTI_LAST
  };
})();
