/* [KMA] Alliance Handbook — artwork widgets.
   Galleries built from the game art in site/img/ and the roster in data.js.
   Registered onto the same window.KMA_VISUALS map as the hand-drawn diagrams. */
(function () {
  "use strict";
  var V = window.KMA_VISUALS || (window.KMA_VISUALS = {});
  var D = window.KMA_DATA || { heroes: [], buildings: [] };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  /* ---------- 17. Hero gallery (game portraits) ---------- */
  var HEROES = D.heroes;
  var FCOL = { Warrior: "var(--accent)", Ranger: "var(--green)", Warlock: "var(--blue)" };
  V["hero-gallery"] = function (el) {
    var groups = [["UR", "UR heroes"], ["SSR", "SSR heroes"], ["SR", "SR starters"]];
    var h = '<div class="gallery-wrap">';
    groups.forEach(function (g) {
      h += '<div class="gallery-head"><span class="rar rar-' + g[0] + '">' + g[0] + '</span> ' + esc(g[1]) + '</div><div class="gallery">';
      HEROES.filter(function (x) { return x[3] === g[0]; }).forEach(function (x) {
        var fac = x[2].replace("?", ""), col = FCOL[fac] || "var(--line-strong)";
        h += '<a class="gcard" href="#/hero-tier-list/' + (g[0] === "UR" ? "ur-heroes" : g[0] === "SSR" ? "ssr-heroes" : "sr-starters") + '" style="--fc:' + col + '">' +
          '<img src="img/cards/' + x[0] + '.webp" alt="' + esc(x[1]) + '" loading="lazy" onerror="this.style.visibility=\'hidden\'">' +
          '<div class="gname">' + esc(x[1]) + '</div><div class="gmeta">' + esc(x[2]) + ' · ' + esc(x[4]) + '</div>' +
          (x[5] !== "–" ? '<span class="tier tier-' + x[5] + ' gtier">' + x[5] + '</span>' : '') + '</a>';
      });
      h += '</div>';
    });
    h += '<div class="fig-credit">Portraits © 37GAMES, via the official site and wiki-last-asylum.com. Border colour = faction (amber Warrior, green Ranger, blue Warlock). A question mark means sources disagree on the faction.</div></div>';
    el.innerHTML = h;
  };

  /* ---------- 18. Full-body UR art strip ---------- */
  V["hero-art"] = function (el) {
    var list = [["arthur","Arthur"],["marlena","Marlena"],["shadow","Shadow"],["daskal","Daskal"],["louis","Louis"],["brian","Ulfrid"],["harper","Harper"],["zoya","Zoya"],["annie","Annie"],["cynthia","Cynthia"],["red-lady","Red Lady"],["jester","Joker"],["billy","Billy"],["bell","Bell"]];
    el.innerHTML = '<div class="art-strip">' + list.map(function (x) { return '<figure class="art"><img src="img/heroes/' + x[0] + '.webp" alt="' + esc(x[1]) + ' full art" loading="lazy" onerror="this.parentNode.style.display=\'none\'"><figcaption>' + esc(x[1]) + '</figcaption></figure>'; }).join('') + '</div>';
  };

  /* ---------- 19. Building grid (game icons) ---------- */
  var BUILDINGS = D.buildings;
  V["building-grid"] = function (el) {
    var sorted = BUILDINGS.slice().sort(function (a, b) { return a[2] - b[2]; });
    el.innerHTML = '<div class="bgrid">' + sorted.map(function (b) {
      return '<div class="bcard"><img src="img/buildings/' + b[0] + '.webp" alt="' + esc(b[1]) + '" loading="lazy" onerror="this.style.visibility=\'hidden\'"><div class="bname">' + esc(b[1]) + '</div><div class="bmeta">Sanctuary ' + b[2] + '</div><div class="bdesc">' + esc(b[3]) + '</div></div>';
    }).join('') + '</div><div class="fig-credit">Building icons © 37GAMES via wiki-last-asylum.com, ordered by the Sanctuary level that unlocks them.</div>';
  };
})();
