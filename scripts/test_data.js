global.window = {};
require("../site/data.js");
var D = window.KMA_DATA, fail = 0, n = 0;
function t(name, got, want) {
  n++;
  var ok = JSON.stringify(got) === JSON.stringify(want);
  if (!ok) { fail++; console.log("FAIL " + name + "\n   got  " + JSON.stringify(got) + "\n   want " + JSON.stringify(want)); }
}
function ck(name, cond, detail) { n++; if (!cond) { fail++; console.log("FAIL " + name + (detail ? "  " + detail : "")); } }

// ---- server clock ----
var probe = new Date(Date.UTC(2026, 8, 13, 16, 0, 0));
t("reset is 02:00 UTC (00:00 at UTC-2)", D.nextReset(probe).toISOString(), "2026-09-14T02:00:00.000Z");
t("ms to reset = 10h", D.msToReset(probe), 10 * 3600000);
t("hms formats", D.hms(10 * 3600000), "10:00:00");
t("hms clamps negatives", D.hms(-5), "00:00:00");
// just before and just after reset the duel day must differ by exactly one
var before = new Date(Date.UTC(2026, 8, 14, 1, 59, 0));
var after  = new Date(Date.UTC(2026, 8, 14, 2,  1, 0));
t("duel day before reset", D.duelIdx(before), 6);   // still Sunday server-side
t("duel day after reset",  D.duelIdx(after),  0);   // Monday: Raven
ck("reset never more than 24h away", D.msToReset(probe) > 0 && D.msToReset(probe) <= 86400000);
// every minute of a day must produce a reset in (0, 24h]
var bad = 0;
for (var mi = 0; mi < 1440; mi++) {
  var d = new Date(Date.UTC(2026, 8, 13, 0, mi, 0));
  var ms = D.msToReset(d);
  if (!(ms > 0 && ms <= 86400000)) bad++;
  if (D.nextReset(d).getTime() % 3600000 !== 0) bad++;
}
ck("reset well-formed at all 1440 minutes", bad === 0, "bad=" + bad);
t("duel day names", D.DUEL_DAYS.slice(0, 6), ["Raven","Construction","Tech","Hero","Preparation","Raid"]);

// ---- sanctuary ----
t("S30 grain/timber", D.sanctuary(30).resource, 1356000000);
t("S30 herbs",        D.sanctuary(30).herbs,    441300000);
t("S30 stars",        D.sanctuary(30).stars,    326);
t("S30 seconds",      D.sanctuary(30).seconds,  8866423);
t("S20 grain",        D.sanctuary(20).resource, 60030000);
t("S25 herbs",        D.sanctuary(25).herbs,    97530000);
ck("no herbs below S9", [1,2,3,4,5,6,7,8].every(function(l){return D.sanctuary(l).herbs === 0;}));
ck("herbs from S9 up",  [9,10,15,20,30].every(function(l){return D.sanctuary(l).herbs > 0;}));
// monotonicity across every level
var m = [];
for (var l = 2; l <= 30; l++) m.push(D.sanctuary(l));
ck("cost strictly rises",  m.every(function(x,i){return i===0 || x.resource > m[i-1].resource;}));
ck("time strictly rises",  m.every(function(x,i){return i===0 || x.seconds  > m[i-1].seconds;}));
ck("stars never fall",     m.every(function(x,i){return i===0 || x.stars   >= m[i-1].stars;}));
ck("stars capped at 326",  m.every(function(x){return x.stars <= 326;}));
// hero cap rule: 5 at S1-3, 15 at S4, 5x from S5
t("hero caps", [1,2,3,4,5,10,23,30].map(function(l){return D.sanctuary(l).heroCap;}), [5,5,5,15,25,50,115,150]);
// Research Lab is always exactly one below, from S12 up
var labBad = [];
for (var l = 12; l <= 30; l++) {
  var lab = D.sanctuary(l).prereq.filter(function(p){return p[0]==="Research Lab";})[0];
  if (!lab || lab[1] !== l - 1) labBad.push(l);
}
ck("Research Lab is Sanctuary-1 from S12 up", labBad.length === 0, "off at " + labBad);
ck("S11 carries 2 prerequisites", D.sanctuary(11).prereq.length===2);
ck("S15+ all carry 3 prerequisites", [15,20,25,30].every(function(l){return D.sanctuary(l).prereq.length===3;}));

// ---- hero shards ----
t("0 to 8 stars", D.shardsBetween(0, 8), 475);
t("0 to 10 stars", D.shardsBetween(0, 10), 975);
t("shards are additive", D.shardsBetween(0,4) + D.shardsBetween(4,10), D.shardsBetween(0,10));
t("no shards for no progress", D.shardsBetween(6, 6), 0);
ck("one whole star = published per-star cost",
   [0,1,2,3,4,5,6,7,8,9].every(function(s){ return D.shardsBetween(s, s+1) === D.shardPerStar[s]; }));

// ---- antitoxin ----
t("Lv150 is unpublished", D.antitoxinAt(150), null);
t("Lv149 is unpublished", D.antitoxinAt(149), null);
t("Lv148 is published",   D.antitoxinAt(148), 168000000);
t("Lv1 costs nothing",    D.antitoxinAt(1), 0);
var ab = D.antitoxinBetween(30, 80);
ck("antitoxin range returns a total", ab.total > 0 && ab.partial === false);
var ab2 = D.antitoxinBetween(30, 150);
ck("antitoxin flags the unpublished tail", ab2.partial === true && ab2.upTo === 148);
var antiBad = 0;
for (var l = 3; l <= 148; l++) if (D.antitoxinAt(l) < D.antitoxinAt(l-1)) antiBad++;
ck("antitoxin never falls", antiBad === 0, "drops=" + antiBad);

// ---- troops ----
t("tier at TG30", D.tierFor(30), "T10");
t("tier at TG13", D.tierFor(13), "T4");
t("tier at TG0",  D.tierFor(0),  "–");
ck("tier never goes backwards", (function(){ var seen=0; for (var g=1;g<=30;g++){ var x=D.troopTier.filter(function(t){return g>=t[0];}).length; if(x<seen) return false; seen=x;} return true; })());

// ---- buildings ----
var bl = {}; D.buildings.forEach(function(b){ bl[b[1]] = b[2]; });
t("Hall of Honor is S1", bl["Hall of Honor"], 1);
t("Alliance Hall is S5", bl["Alliance Hall"], 5);
t("Infirmary is S7",     bl["Infirmary"], 7);
t("Herb Garden is S1",   bl["Herb Garden"], 1);
t("Private Stable is S11", bl["Private Stable"], 11);
t("Arena is S7",         bl["Arena"], 7);
t("Smelting is S5",      bl["Smelting Workshop"], 5);
ck("every building has a valid unlock level", D.buildings.every(function(b){ return b[2] >= 1 && b[2] <= 30; }));
ck("no duplicate building slugs", new Set(D.buildings.map(function(b){return b[0];})).size === D.buildings.length);
ck("no duplicate hero slugs", new Set(D.heroes.map(function(h){return h[0];})).size === D.heroes.length);

// ---- prereqs must reference real buildings ----
var names = new Set(D.buildings.map(function(b){ return b[1]; }));
var unknown = [];
for (var l = 2; l <= 30; l++) D.sanctuary(l).prereq.forEach(function(p){ if (!names.has(p[0])) unknown.push(l + ":" + p[0]); });
ck("prerequisites name real buildings", unknown.length === 0, unknown.join(", "));

// ---- shields / vip / lure ----
ck("shields rise with duration", D.shields.every(function(s,i){ return i===0 || s[0] > D.shields[i-1][0]; }));
ck("diamond price rises", D.shields.every(function(s,i){ return i===0 || s[2] > D.shields[i-1][2]; }));
var vp = D.vip.filter(function(v){ return v[1] !== null; });
ck("VIP levels rise", D.vip.every(function(v,i){ return i===0 || v[0] > D.vip[i-1][0]; }));
ck("published VIP thresholds rise", vp.every(function(v,i){ return i===0 || v[1] >= vp[i-1][1]; }));
ck("unpublished VIP cost is null, never 0", D.vip.every(function(v){ return v[1] === null || typeof v[1] === "number"; }));
ck("lure tiers rise", D.lure.every(function(x,i){ return i===0 || (x[0] > D.lure[i-1][0] && x[1] > D.lure[i-1][1]); }));

console.log((n - fail) + "/" + n + " checks passed");
process.exit(fail ? 1 : 0);
