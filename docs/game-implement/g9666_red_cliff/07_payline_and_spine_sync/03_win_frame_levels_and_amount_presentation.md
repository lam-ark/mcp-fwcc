---
id: "game-implement:9666:payline:win_frame_levels"
title: "Red Cliff (g9666) Tiered Win Frame Levels & Money Presentation"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "PaylineWinFrameEffect9666", "WinAmountModule9666", "MoneyTween", "tiers"]
---

# 🏆 Red Cliff (g9666) Tiered Win Frame Levels & Money Presentation

---

## 1. Tiered Total Win Frame System (`PaylineWinFrameEffect9666`)

The win presentation dynamically switches its visual frame effects based on the ratio between the total win amount and the total bet:

| Level | Win Ratio ($\text{Win} / \text{Bet}$) | Spine Active Animation | Spine Idle Animation | Visual Theme |
| :---: | :---: | :--- | :--- | :--- |
| **Level 1** | $< 5\times \text{Bet}$ | `total_1_active` | `total_1_idle` | Bronze border / subtle shimmer |
| **Level 2** | $5\times - 10\times \text{Bet}$ | `total_2_active` | `total_2_idle` | Silver border / radiant aura |
| **Level 3** | $\ge 10\times \text{Bet}$ | `total_3_active` | `total_3_idle` | Gold dragon frame / intense flames |

```typescript
public calculateWinLevel(winAmount: number, totalBet: number): TotalWinLevel {
    if (winAmount <= 0) return TotalWinLevel.NONE;
    if (totalBet <= 0) return TotalWinLevel.LEVEL_1;

    const winMultiplier = winAmount / totalBet;
    if (winMultiplier >= 10) return TotalWinLevel.LEVEL_3;
    if (winMultiplier >= 5) return TotalWinLevel.LEVEL_2;
    return TotalWinLevel.LEVEL_1;
}
```

---

## 2. MoneyTween & Win Amount Accumulation Flow

When displaying win updates in `lbRight`:
- **First win of spin**: Immediately display formatted number and start punch-scale bounce (`scale: 1.25 -> 0.95 -> 1.05 -> 1.0`).
- **Subsequent cascade wins**: Accumulate and smoothly count up using `MoneyTween.runNumber()` over duration `0.35s / this.speed`.
- **Mode Persistence**:
  - In **Normal Game**: The accumulated amount fades out upon new spin (`SPIN_START` / `RESET_ON_SPIN`).
  - In **Free Game**: Total accumulated win is **preserved** across all free spins without being cleared to 0.
