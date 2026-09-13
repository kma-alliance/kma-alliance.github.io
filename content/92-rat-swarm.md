---
id: rat-swarm
title: Rat Swarm and the Rat King
category: combat
summary: The tower defense layer of your Sanctuary and the rat targets on the world map. Choke points, tower order, the monster squad, and how to reach the Rat King with your team alive.
tags: rat swarm, rat king, tower defense, towers, rat horde, monster squad, stellar, pve
updated: 2026-09-13
---

```kma-event
{
  "kind": "Solo mode",
  "icon": "shield",
  "art": "img/store/slay-rats.jpg",
  "headline": "Rats come down fixed paths. **Stack towers where the paths meet**, keep your heroes alive, and save every skill for the Rat King.",
  "facts": [
    ["Where", "Your Sanctuary, early game onward"],
    ["Who", "Just you: towers plus up to 5 heroes"],
    ["Format", "Waves on fixed paths, the Rat King last"],
    ["Fight", "PvE: monster damage reduction wins"]
  ],
  "rewards": ["The next difficulty", "Rat hunts on the map: Recruit Tickets"]
}
```

The Rat Swarm is the tower defense side of the game. The official store listing sums it up: hold the last line against the Rat Swarm, recruit and upgrade your heroes, build defensive towers, and slay the Rat King to repel the swarm. What decides a run is not how many towers you own. It is **where the damage lands** and **how much HP your squad still has** when the boss arrives.

This is a solo mode, not an alliance event. The alliance rat events are [Cheese Trap](#/cheese-trap) and the Plague Rats in [Crystal Valley](#/crystal-valley).

![The Rat King boss wave. Official screenshot.](img/shots/screenshot-rat-king.jpg)

## How it works

Waves of infected rats walk **fixed paths** toward your Sanctuary. You place and upgrade towers beside the paths and field up to 5 heroes. Player walkthroughs show the rats hitting the base in waves, the heroes and your plague doctor fighting beside the towers, and the Rat King arriving after the swarm.

```kma-steps
{
  "title": "How a run goes",
  "steps": [
    { "label": "Prepare", "when": "Before you start", "text": "Repair damaged towers, upgrade the ones at your choke, and restock medicine. Weak preparation is the usual reason a run fails." },
    { "label": "Trash waves", "when": "The early waves", "text": "Let the towers do the work. **Do not fire hero skills** on small waves; you will want them later." },
    { "label": "Heavy waves", "when": "Before the boss", "text": "This is where most runs are really lost. Every hit your tanks take here is HP they will not have for the boss." },
    { "label": "Rat King", "when": "Last wave", "text": "Fire your tank's and your damage dealer's ultimates in the **first 10 to 15 seconds**, while the King is inside your kill zone." },
    { "label": "After", "when": "Win or lose", "text": "Win: the next difficulty opens. Lose: repair, upgrade the key towers, and try again rather than adding new weak towers." }
  ]
}
```

### Choke points beat coverage

<div data-widget="rat-swarm-layout"></div>

Find the 2 or 3 places where paths **converge** and stack upgraded towers there. A rat walking past a choke is in range of every tower around it, so one well-upgraded cluster does more total damage than the same resources spread along the paths. Guides that agree on nothing else agree on this.

![A fenced base with a single opening, so every rat comes through one gap. Official App Store art.](img/store/gather-resources.jpg)

### Tower order at a choke

Guide sites disagree on the exact order. This is the reconciled version:

1. A **slow or control tower** at the entrance of the choke.
2. An **area damage tower** right behind it, so slowed rats die in the kill zone. A slow tower with nothing behind it only delays rats.
3. Build your second choke the same way.
4. **Single-target** towers last, close to the Sanctuary, for the Rat King.

> **Unverified:** tower types, the order above and the idea of numbered difficulty tiers come from guide sites, not from the game's own text. One site builds damage towers first and slow towers second. The store listing only says to build as many defensive towers as you can. Read your tower tooltips and trust what they say.

## Rats on the world map

The swarm in your Sanctuary is not the only place rats show up. Datamined game data lists rat targets on the world map that you hunt like any other monster, each costing **10 Stamina** per attack (the datamine calls it energy; it is the same refilling bar you spend on every map monster).

```kma-bars
{
  "title": "Rat targets on the world map: highest level",
  "unit": "level",
  "rows": [
    ["Plague Rat Horde", 75, "Recruit Ticket, SSR grain and timber supply"],
    ["Rat Horde", 24, "Recruit Ticket, SR grain and timber supply"],
    ["Giant Rat King attack", 25, "Recruit Ticket, SR grain and timber supply"],
    ["Menacing Giant Rat King", 25, "levels 3 to 25, same drops"]
  ],
  "highlight": "Plague Rat Horde",
  "note": "Every rat target costs 10 Stamina and can drop a Recruit Ticket. Stamina refills 1 point every 6 minutes, up to 120."
}
```

| What | Detail |
|---|---|
| Cost per hunt | 10 Stamina |
| Stamina refill | 1 every 6 minutes, 240 a day, cap 120 |
| Drops | Recruit Ticket, grain and timber Level Supply |
| Best day to hunt | Duel day 1 (Raven): **150 points per Stamina** used |

> **Unverified name:** these target names are English translations from a datamined wiki, which invents its own English names. The in-game labels may differ. The costs and drops are the reliable part.

Because Stamina refills whether you use it or not, a full bar is wasted income. Spend it on rat hunts on Monday, when it also scores for the [Alliance Duel](#/alliance-duel).

## The KMA plan

> **KMA:** Build Arthur first, then Marlena, then Stellar, and put upgrades into one choke before you build a second. If you are stuck on a Rat King, post a screenshot of your tower layout in alliance chat so a stronger player can spot the gap. Spend your Stamina on rat hunts on Duel Monday, not on a random Thursday.

The squad that holds the swarm is the site's standard **monster squad**. Every hero here is picked for PvE: damage reduction against monsters, damage bonuses against monsters, and healing across a long fight.

```kma-lineup
{
  "title": "Rat Swarm squad",
  "heroes": [
    ["arthur", "Tank", "Ultimate cuts Physical damage taken by nearby allies. The anchor of every top squad."],
    ["bella", "Tank", "Reduces monster damage to the team. Farmable from the Alliance Shop."],
    ["marlena", "Damage", "Top burst. Her ultimate is the one to save for the Rat King."],
    ["stellar", "Healer", "The only SSR healer. Her ultimate buffs team damage to monsters."],
    ["grenwald", "Damage", "Passive raises damage to monsters. Best free damage dealer."]
  ],
  "alts": [["griffith", "second tank with a squad-wide monster damage aura"], ["claire", "boss killer for the Rat King"], ["bestar", "bleed that grows in long fights"], ["zoya", "the ideal wave clearer if you own her"]],
  "note": "Matches the [tier list](#/hero-tier-list) and [Squads and Team Comps](#/team-comps). Three well-built heroes beat five half-built ones."
}
```

Investment order for this mode: Arthur's stars, then Marlena's stars, then Stellar, then the second choke's towers, then hero skills, then roster depth.

### Reaching the King alive

Survivability beats damage here. A squad built for maximum damage clears the early waves quickly, then arrives at the boss with its tanks half dead and loses. A good readiness test from guide sites: **only try the Rat King when the waves before it end with most of your team above half HP.** If they do not, the fix is towers at the choke or tank investment, not another attempt.

```kma-dodont
{
  "do": [
    "Stack towers at **2 or 3 choke points** and upgrade them fully.",
    "Put a slow tower in front of an area tower so slowed rats die in range.",
    "Hold ultimates through the trash waves and fire them in the **first 10 to 15 seconds** of the Rat King.",
    "Repair and upgrade between attempts.",
    "Spend full Stamina on rat hunts on Duel day 1."
  ],
  "dont": [
    "Spread level 1 towers along every path.",
    "Build a slow tower with nothing behind it.",
    "Run a five-damage squad. It dies on the boss wave.",
    "Retry the Rat King straight away with the same layout and the same HP problem."
  ]
}
```

## Quick answers

**Is the Rat Swarm an alliance event?** No. It is solo. For the alliance rat events, see [Cheese Trap](#/cheese-trap).

**My heroes keep dying on the Rat King. More damage?** Usually not. Improve the choke towers and your tanks so the team arrives with more HP, and save the ultimates for the boss.

**Which heroes if I have no URs?** Bella, Griffith, Stellar and Grenwald are all SSR monster specialists. Claire works as the boss killer.

**Where do I get Recruit Tickets from rats?** Hunt rat targets on the world map. Every one can drop a Recruit Ticket for 10 Stamina.

Related: [Squads and Team Comps](#/team-comps) · [Hero Tier List](#/hero-tier-list) · [Cheese Trap](#/cheese-trap) · [Alliance Duel](#/alliance-duel)
