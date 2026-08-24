---
id: "cc_slot_module:TotalWinModule:recipes:custom_free_spins_recap_summary_dialog"
title: "Recipe: Enhanced Free Spins Recap Screen with Multipliers"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "recipes", "free_spins_recap"]
---

# 💡 Recipe: Enhanced Free Spins Recap Screen with Multipliers

---

## 1. Multi-Stat Free Spins Recap Setup

```typescript
@ccclass
export class DetailedTotalWinModule extends TotalWinModule {
    @property(cc.Label) lbRoundsCount: cc.Label = null;
    @property(cc.Label) lbMaxMultiplier: cc.Label = null;

    enter(): void {
        super.enter();
        if (this.lbRoundsCount) {
            this.lbRoundsCount.string = `${this.content.roundsPlayed || 10} FREE SPINS`;
        }
        if (this.lbMaxMultiplier) {
            this.lbMaxMultiplier.string = `MAX MULTIPLIER: ${this.content.maxMultiplier || 1}X`;
        }
    }
}
```
