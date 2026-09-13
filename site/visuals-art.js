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
  // Skill icon ids per hero, from scripts/assets.json. Four per hero, in in-game order.
  var SKILLS = {"annie":["skill-21-1","skill-21-2","skill-21-3","skill-21-4"],"arthur":["skill-9-1","skill-9-2","skill-9-3","skill-9-4"],"ash":["skill-14-1","skill-14-2","skill-14-3","skill-14-4"],"bell":["skill-29-1","skill-29-2","skill-29-3","skill-29-4"],"bella":["skill-5-1","skill-5-2","skill-5-3","skill-5-4"],"bestar":["skill-17-1","skill-17-2","skill-17-3","skill-17-4"],"billy":["skill-30-1","skill-30-2","skill-30-3","skill-30-4"],"celia":["skill-3-1","skill-3-2","skill-3-3","skill-3-4"],"claire":["skill-4-1","skill-4-2","skill-4-3","skill-4-4"],"claire-advanced":["skill-4-1-js","skill-4-2-js","skill-4-3-js","skill-4-4-js"],"cynthia":["skill-20-1","skill-20-2","skill-20-3","skill-20-4"],"daskal":["skill-24-1","skill-24-2","skill-24-3","skill-24-4"],"durant":["skill-1-1","skill-1-2","skill-1-3"],"grenwald":["skill-18-1","skill-18-2","skill-18-3","skill-18-4"],"griffith":["skill-12-1","skill-12-2","skill-12-3","skill-12-4"],"harper":["skill-23-1","skill-23-2","skill-23-3","skill-23-4"],"hastar":["skill-16-1","skill-16-2","skill-16-3","skill-16-4"],"joker":["skill-22-1","skill-22-2","skill-22-3","skill-22-4"],"kafa":["skill-15-1","skill-15-2","skill-15-3"],"kesso":["skill-6-1","skill-6-2","skill-6-3","skill-6-4"],"louis":["skill-28-1","skill-28-2","skill-28-3","skill-28-4"],"lucius":["skill-7-1","skill-7-2","skill-7-3","skill-7-4"],"marlena":["skill-10-1","skill-10-2","skill-10-3","skill-10-4"],"nicole":["skill-31-1","skill-31-2","skill-31-3","skill-31-4"],"red-lady":["skill-25-1","skill-25-2","skill-25-3","skill-25-4"],"robin":["skill-11-1","skill-11-2","skill-11-3"],"shadow":["skill-19-1","skill-19-2","skill-19-3","skill-19-4"],"sivir":["skill-8-1","skill-8-2","skill-8-3","skill-8-4"],"stellar":["skill-13-1","skill-13-2","skill-13-3","skill-13-4"],"ulfrid":["skill-26-1","skill-26-2","skill-26-3","skill-26-4"],"william":["skill-2-1","skill-2-2","skill-2-3"],"zoya":["skill-27-1","skill-27-2","skill-27-3","skill-27-4"]};
  var TIER_ANCHOR = { UR: "ur-heroes", SSR: "ssr-heroes", SR: "sr-starters" };
  var ROLE_NOTE = {
    Tank: "Front line. Soaks damage so the back row lives.",
    Damage: "Carries the fight. Invest here once your tanks hold.",
    Support: "Heals, shields or buffs. One is plenty for most squads.",
    Control: "Stuns and slows. Decides fights that stats alone would lose."
  };
  function roleNote(role) {
    for (var k in ROLE_NOTE) if (String(role).indexOf(k) === 0) return ROLE_NOTE[k];
    return "";
  }

  V["hero-gallery"] = function (el) {
    var groups = [["UR", "UR heroes"], ["SSR", "SSR heroes"], ["SR", "SR starters"]];
    var picked = null;

    function sheet(x) {
      var fac = x[2].replace("?", ""), col = FCOL[fac] || "var(--line-strong)";
      var icons = (SKILLS[x[0]] || []).map(function (id, i) {
        return '<img class="hs-skill" src="img/skills/' + id + '.webp" alt="Skill ' + (i + 1) + '" title="Skill ' + (i + 1)  + '" loading="lazy" onerror="this.remove()">';
      }).join("");
      return '<div class="hsheet" style="--fc:' + col + '">' +
        '<img class="hs-portrait" src="img/portraits/' + x[0] + '.webp" alt="' + esc(x[1]) + ' portrait" onerror="this.src=\'img/cards/' + x[0] + '.webp\'">' +
        '<div class="hs-body">' +
          '<div class="hs-top"><span class="rar rar-' + x[3] + '">' + x[3] + '</span>' + (x[5] !== "–" ? ' <span class="tier tier-' + x[5] + '">' + x[5] + ' tier</span>' : '') + '</div>' +
          '<h3 class="hs-name">' + esc(x[1]) + '</h3>' +
          '<dl class="hs-facts"><div><dt>Faction</dt><dd>' + esc(x[2]) + '</dd></div><div><dt>Role</dt><dd>' + esc(x[4]) + '</dd></div></dl>' +
          (roleNote(x[4]) ? '<p class="hs-note">' + esc(roleNote(x[4])) + '</p>' : '') +
          (icons ? '<div class="hs-label">Skills</div><div class="hs-skills">' + icons + '</div>' : '') +
          '<div class="hs-links"><a href="#/hero-tier-list/' + TIER_ANCHOR[x[3]] + '">Tier list entry</a><a href="#/squad-builder">Try in the squad builder</a><a href="#/hero-planner">Plan shards and levels</a></div>' +
        '</div>' +
        '<button class="hs-close" type="button" aria-label="Close hero sheet">×</button>' +
      '</div>';
    }

    function draw() {
      var h = '<div class="gallery-wrap">';
      h += '<div class="hsheet-slot" aria-live="polite">' + (picked ? sheet(picked) : '<div class="hsheet-hint">Tap a hero to open their sheet.</div>') + '</div>';
      groups.forEach(function (g) {
        h += '<div class="gallery-head"><span class="rar rar-' + g[0] + '">' + g[0] + '</span> ' + esc(g[1]) + '</div><div class="gallery gallery-portraits">';
        HEROES.filter(function (x) { return x[3] === g[0]; }).forEach(function (x) {
          var fac = x[2].replace("?", ""), col = FCOL[fac] || "var(--line-strong)";
          var on = picked && picked[0] === x[0];
          h += '<button type="button" class="pcard' + (on ? " on" : "") + '" data-hero="' + x[0] + '" style="--fc:' + col + '" aria-pressed="' + (on ? "true" : "false") + '">' +
            '<img src="img/portraits/' + x[0] + '.webp" alt="" loading="lazy" onerror="this.src=\'img/cards/' + x[0] + '.webp\'">' +
            (x[5] !== "–" ? '<span class="tier tier-' + x[5] + ' gtier">' + x[5] + '</span>' : '') +
            '<span class="pcap"><span class="gname">' + esc(x[1]) + '</span><span class="gmeta">' + esc(x[2]) + ' · ' + esc(x[4]) + '</span></span>' +
          '</button>';
        });
        h += '</div>';
      });
      h += '<div class="fig-credit">Portraits and skill icons © the game\'s publisher, via wiki-last-asylum.com. The coloured edge is the faction: amber Warrior, green Ranger, blue Warlock. A question mark means sources disagree on the faction.</div></div>';
      el.innerHTML = h;
    }

    el.addEventListener("click", function (e) {
      var card = e.target.closest && e.target.closest(".pcard");
      if (card) {
        var slug = card.getAttribute("data-hero");
        picked = picked && picked[0] === slug ? null : HEROES.filter(function (x) { return x[0] === slug; })[0];
        draw();
        var sh = el.querySelector(".hsheet");
        if (sh && sh.getBoundingClientRect().top < 60) sh.scrollIntoView({ block: "start", behavior: "smooth" });
        return;
      }
      if (e.target.closest && e.target.closest(".hs-close")) { picked = null; draw(); }
    });
    draw();
  };

  /* ---------- 18. Full-body UR art strip ---------- */
  V["hero-art"] = function (el) {
    var list = [["arthur","Arthur"],["marlena","Marlena"],["shadow","Shadow"],["daskal","Daskal"],["louis","Louis"],["brian","Ulfrid"],["harper","Harper"],["zoya","Zoya"],["annie","Annie"],["cynthia","Cynthia"],["red-lady","Red Lady"],["jester","Joker"],["billy","Billy"],["bell","Bell"],["nicole","Nicole"]];
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
