---
id: squad-builder
title: Squad Builder
category: tools
summary: Drag five heroes into a squad and see the faction bonus, role balance, bench skill and a score update live.
tags: squad builder, heroes, faction bonus, formation, tool
updated: 2026-09-13
---

<div data-widget="squad-builder"></div>

## How the score works

There is no published damage formula for this game, so the score here is a transparent heuristic rather than a simulation of the real combat engine. It works like this:

1. Each hero contributes a **survivability** weight and a **damage** weight based on its role. A tank is 1.00 survivability and 0.25 damage; a damage dealer is 0.30 and 1.00; a healer is 0.90 and 0.35; a support is 0.50 and 0.70 because buffs multiply the squad's output.
2. Both totals are multiplied by your **faction bonus** and, if the bench is used, by the **bench skill** (+20%).
3. The score combines them weighted 60% toward survivability and 40% toward damage, scaled so that a full three-tank, two-damage squad at +15% faction bonus reads 100.

Survivability is weighted higher because the published 170,000-combination simulation found that damage reduction multiplies the whole squad's effective health, so survivability investments outscale damage ones. Read the two meters rather than the single number; they are the honest part.

## What the game itself decides

| Rule | Value |
|---|---|
| Faction bonus | 5 of one faction +20% HP, ATK and DEF; 4 of one +15%; 3 plus 2 of another +10%; 3 of one +5% |
| Counter triangle | Warrior beats Warlock, Warlock beats Ranger, Ranger beats Warrior, for a flat 20% damage swing |
| Bench skill | Any UR at level 30 and 8 stars gives the squad +20% ATK, HP and DEF and +10% cooldown speed while sitting out |
| Rows | Two heroes in front, three behind. Tanks front, support middle, damage back |

See [Squads and team comps](#/team-comps) for the lineups each game mode wants, and [Hero tier list](#/hero-tier-list) for who to build first.
