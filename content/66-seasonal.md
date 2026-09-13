---
id: seasonal
title: Seasonal and Limited Events
category: solo
summary: Holiday windows of about a week with a login track, a farmable currency, a mini-game with one free key a day, and an exchange market with a skin as the prize. Plan the currency, spend all of it before the end.
tags: seasonal, limited events, easter, fantasy realm, pirate, qixi, skins, teacup market, sweetheart banquet
updated: 2026-09-13
---

```kma-event
{
  "kind": "Limited event",
  "icon": "calendar",
  "art": "img/shots/screenshot-town-rebuild.jpg",
  "headline": "About a week each. Take the **free key every day**, hit the daily currency cap, and **spend everything** before the timer runs out.",
  "facts": [
    ["Duration", "About 7 days per event"],
    ["When", "Holidays and themed windows, announced in-game"],
    ["Cost", "Free daily key and free gift; optional paid passes"],
    ["Who", "Solo, with some server-wide ranking parts"]
  ],
  "rewards": ["City and squad skins", "UR Hero Omni Shards", "Raven Essence", "Decorations and titles"]
}
```

Seasonal events arrive for about a week, pay things you cannot get anywhere else, and then disappear with whatever you did not spend. They look busy, with several tabs and more than one currency, but they all follow the same shape. What decides success is **daily discipline**: claim the free parts every day, hit each daily cap, and **plan what you will buy before the last day**.

## How it works

Every seasonal event so far has been built from the same parts. Once you know them, a new event takes a minute to read.

```kma-steps
{
  "title": "The parts of a seasonal event",
  "steps": [
    { "label": "Free gift and login track", "text": "Claim on day one. In Fantasy Realm the free gift included event currency and speedups." },
    { "label": "Farmable currency", "text": "Earned from normal play such as Falcon Tower, monsters, blights and covert ops, sometimes with a **daily cap**." },
    { "label": "Mini-game", "text": "A box, game or dig that uses keys. You get **one free key a day**; more cost money." },
    { "label": "Exchange market", "text": "Spend the event currency. The flagship is usually a city skin with stats." },
    { "label": "Server ranking", "text": "Sometimes a server-wide meter with rewards for the top players." }
  ],
  "note": "Paid passes usually sit on top. In Fantasy Realm they cost $5 and $25."
}
```

## Examples so far

### Easter (3 to 9 April 2026)

Easter Celebration quests, an Easter Egg Hunt with its own exchange, an Art Market with efficiency buffs, and a login and pack track. Rewards included a UR Hero Omni Shard, Raven Essence, Tempered Steel, the Easter Egg Warrior decoration and the **Greenery** city skin. Gift code LAEGG26. Missed eggs and quests could not be recovered.

### Fantasy Realm (7 days)

The most detailed example, and a good model for the next one.

- **Fantasy Realm Gift:** free on day one.
- **Wondrous Toy Box:** opened with Toy Keys, one free a day. Milestones at 30, 120, 300, 600 and 1,000 opens.
- **Teacup Market:** the exchange. The Rabbit Tea Party skin cost 4,000 teacups; a permanent title (+1.5% hero skill damage) cost 2,000.
- **Sweetheart Banquet:** server-wide. Up to 300 cupcakes a day, and 10 cupcakes make 1 point. A shop guide says the top 3 earned a permanent +3,300 hero HP reward, shown in a player video as the **Dream Hour** decoration, and the top 50 got extra loot.
- **Passes:** $5 and $25.

```kma-bars
{
  "title": "Wondrous Toy Box milestones",
  "unit": "opens",
  "rows": [
    ["Free keys in 7 days", 7, "one a day"],
    ["Milestone 1", 30],
    ["Milestone 2", 120],
    ["Milestone 3", 300],
    ["Milestone 4", 600],
    ["Milestone 5", 1000]
  ],
  "highlight": "Free keys in 7 days",
  "note": "The daily free key alone reaches none of the milestones. Open it each day for the prize itself, and only chase milestones if you planned to pay for keys."
}
```

### Pirate event (August 2026)

A pirate-themed event with six tabs and three currencies. A player walkthrough lists a Mythic Treasure Store, Daily Missions, Pirate's Game, Pirate Market (the exchange), Grand Feast (a leaderboard that rewards top spenders), Deep Sea's Gift, and a Buried Treasure puzzle. One of its currencies is Pirate Anchors, and the creator warns they are easy to waste on the wrong things.

> **Unverified name:** One creator calls this event "Pirate's Mythic Treasure". That is close to [Mystic Treasure](#/mystic-treasure), the treasure-map feature, and players also use "Buried Treasure" when talking about Mystic Treasure. Whether they are linked is not confirmed. Check the event title in-game.

### Qixi (August 2026)

Only the gift code LAQIXI26 is documented. No anniversary event has been seen yet.

## What the skins are worth

Event skins are not only cosmetic in the client data. Here are the ones tied to events above.

| Skin | From | Slot | Bonus |
|---|---|---|---|
| Greenery | Easter | City | Hero ATK +5%, Hero HP +5% |
| Rabbit's Tea Party | Fantasy Realm | City | Hero ATK +5%, Hero DEF +5% |
| Dream Hour | Fantasy Realm | Squad | Hero HP +3,300 |

Many skins are granted for **7, 15 or 30 days**, and the bonus leaves when the skin does. Read the item description to see whether yours is permanent.

> **Unverified:** An earlier version of this page said skins carry no stats before the Era of Revival. The client data lists stats on these skins, and the Fantasy Realm video breaks down the Rabbit Tea Party buff, but neither shows whether the bonus is active on a server that has not reached the Era. Check the skin's detail screen before paying for one. The datamine also lists a Mythic Treasure squad skin (Hero HP +3,300); whether it came from the pirate event is not confirmed.

## The KMA plan

> **KMA:** The recommended approach is to claim the free gift on day one, use the free key and hit the currency cap every day, decide on day one what you will buy in the market, and spend all event currency on the last day. Nothing confirms that leftover currency carries over.

If the event rewards production or healing, **expand warehouses and wards first** so nothing you earn is wasted.

```kma-dodont
{
  "do": [
    "Claim the **free gift** and the free key on every day of the window.",
    "Hit the daily currency cap; missed days cannot be recovered.",
    "Pick your market target early, then check you can afford it by the end.",
    "Spend **every** event currency before the timer ends."
  ],
  "dont": [
    "Assume leftover currency carries over. It is not confirmed.",
    "Buy keys to chase a milestone you cannot finish before the end.",
    "Fight for a server ranking against spenders unless you planned to pay.",
    "Buy a timed skin believing its bonus is permanent."
  ]
}
```

## Quick answers

**Is the paid pass worth it?** Only if you would buy the event's market prize anyway. The free parts are the sure value.

**Can I finish the Toy Box milestones free?** Not from the daily free key alone. Seven free keys fall well short of the first milestone at 30 opens.

**Do event skins give stats?** The client data says yes for Greenery and Rabbit's Tea Party. Check the detail screen, and check whether yours is timed.

**Where are the gift codes?** On the [Gift codes](#/gift-codes) page, including LAEGG26 and LAQIXI26.

Related: [Gift codes](#/gift-codes) · [Mystic Treasure](#/mystic-treasure) · [Game timeline](#/game-timeline) · [Spending and VIP](#/spending-vip)
