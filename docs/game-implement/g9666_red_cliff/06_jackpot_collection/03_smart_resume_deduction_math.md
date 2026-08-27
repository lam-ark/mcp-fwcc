---
id: "game-implement:9666:jackpot:smart_resume"
title: "Red Cliff (g9666) Smart Resume Deduction Algorithm"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "JackpotCollectionModule9666", "smart_resume", "math"]
---

# 🧮 Red Cliff (g9666) Smart Resume Deduction Algorithm

---

## 1. The Resume Paradox & Mathematical Formulation

When resuming a game round mid-spin, the server provides `collectSymbols` reflecting the **post-round total**.

To show the fly-in animation accurately, the client must display the pre-round token count:

$$C_{\text{before}} = \max(0, C_{\text{collected}} - W_{\text{current}})$$

```typescript
const adjustedList = rawList.map((item: string) => {
    const parts = item.split(':');
    const symbolCode = parts[0];
    const collected = parseInt(parts[1], 10) || 0;
    const required = parseInt(parts[2], 10) || 0;
    const currentWinCount = paylineCounts[symbolCode] || 0;
    const beforeCollect = Math.max(0, collected - currentWinCount);
    return `${symbolCode}:${beforeCollect}:${required}`;
});
this.initItems(adjustedList);
```
