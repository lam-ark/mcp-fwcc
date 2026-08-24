---
id: "cc_slot_module:UIManagerModule:recipes:custom_five_mode_ui_layout_switch"
title: "Recipe: Adding Custom Hold & Spin HUD Layouts"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "recipes", "hold_and_spin", "custom_layout"]
---

# 💡 Recipe: Adding Custom Hold & Spin HUD Layouts

---

## 1. Subclassing Layout Router

```typescript
@ccclass
export class CustomUIManagerModule extends UIManagerModule {
    @property(cc.Node) holdAndSpinButton: cc.Node = null;
    @property(cc.Node) holdAndSpinTimes: cc.Node = null;

    showUIForGameMode(gameMode: number): void {
        super.showUIForGameMode(gameMode);
        if (gameMode === 99 /* CUSTOM_HOLD_AND_SPIN */) {
            this.showHoldAndSpinUI();
        }
    }

    showHoldAndSpinUI(): void {
        this.showJackpotUI();
        this.setNodeActive(this.bet, true);
        this.setNodeActive(this.wallet, true);
        this.setNodeActive(this.winAmount, true);
        this.setNodeActive(this.holdAndSpinButton, true);
        this.setNodeActive(this.holdAndSpinTimes, true);
    }
}
```
