---
id: "cc_slot_module:WinEffectModule:recipes:custom_five_tier_win_effect_celebration"
title: "Recipe: Implementing 5-Tier Victory Celebrations (Epic & Legendary)"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "recipes", "5_tiers", "epic_win"]
---

# 💡 Recipe: Implementing 5-Tier Victory Celebrations (Epic & Legendary)

---

## 1. Objective

Extend `WinEffectModule` to support 5 progressive win tiers: Big ($10\times$), Mega ($30\times$), Super ($50\times$), Epic ($100\times$), and Legendary ($250\times$).

```typescript
@ccclass
export class FiveTierWinEffectModule extends WinEffectModule {
    @property epicRate: number = 100;
    @property legendaryRate: number = 250;

    protected _epicWinAmount: number = 0;
    protected _legendaryWinAmount: number = 0;

    initValue(): void {
        super.initValue();
        this._epicWinAmount = this.content.totalBet * this.epicRate;
        this._legendaryWinAmount = this.content.totalBet * this.legendaryRate;
    }

    updateCurrentTitle(): void {
        if (this.currentValue >= this._legendaryWinAmount) {
            this.changeTitle(4);
        } else if (this.currentValue >= this._epicWinAmount) {
            this.changeTitle(3);
        } else {
            super.updateCurrentTitle();
        }
    }
}
```
