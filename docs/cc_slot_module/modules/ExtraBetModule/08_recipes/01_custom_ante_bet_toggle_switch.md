---
id: "cc_slot_module:ExtraBetModule:recipes:custom_ante_bet_toggle_switch"
title: "Recipe: Implementing a 2-State On/Off Ante-Bet Toggle Switch"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "recipes", "toggle_switch"]
---

# 💡 Recipe: Implementing a 2-State On/Off Ante-Bet Toggle Switch

---

## 1. Toggle Switch Subclass

```typescript
@ccclass
export class AnteBetToggleSwitch extends ExtraBetModule {
    @property(cc.Node) toggleOnNode: cc.Node = null;
    @property(cc.Node) toggleOffNode: cc.Node = null;

    onToggleClick(): void {
        const isCurrentlyActive = this.betModel && this.betModel.extraBetValue > 0;
        if (isCurrentlyActive) {
            this.onDecreaseExtraBet();
        } else {
            this.onIncreaseExtraBet();
        }
    }

    onUpdateTotalBet(): void {
        super.onUpdateTotalBet();
        const isActive = this.betModel && this.betModel.extraBetValue > 0;
        if (this.toggleOnNode) this.toggleOnNode.active = isActive;
        if (this.toggleOffNode) this.toggleOffNode.active = !isActive;
    }
}
```
