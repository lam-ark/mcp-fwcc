---
id: "cc_slot_module:JackpotWinModule:recipes:custom_four_tier_jackpot_presentation"
title: "Recipe: Dynamic Spine Animations for 4-Tier Jackpots"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "recipes", "spine", "4_tier_jackpot"]
---

# 💡 Recipe: Dynamic Spine Animations for 4-Tier Jackpots

---

## 1. Multi-Tier Spine Setup

```typescript
@ccclass
export class FourTierJackpotWinModule extends JackpotWinModule {
    @property(sp.Skeleton) spineTitle: sp.Skeleton = null;

    enter(): void {
        super.enter();
        const animName = `JACKPOT_${this.jackpotType.toUpperCase()}`;
        if (this.spineTitle) {
            this.spineTitle.setAnimation(0, animName, true);
        }
    }
}
```
