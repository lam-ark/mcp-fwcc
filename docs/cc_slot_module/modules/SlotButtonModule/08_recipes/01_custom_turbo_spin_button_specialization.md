---
id: "cc_slot_module:SlotButtonModule:recipes:custom_turbo_spin_button_specialization"
title: "Recipe: Custom Spin Button with Embedded Lightning Mode"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "recipes", "lightning_spin", "custom_button"]
---

# 💡 Recipe: Custom Spin Button with Embedded Lightning Mode

---

## 1. Lightning Spin Subclass

```typescript
@ccclass
export class CustomLightningSpinButton extends SlotButtonModule {
    onLoadExtend(): void {
        this.modelName = "CustomLightningButton";
        super.onLoadExtend();
    }

    addEventListeners(): void {
        super.addEventListeners();
        this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onLightningClick, this);
    }

    onLightningClick(): void {
        this.gameLogic.emit(GameLogicUIEvents.LIGHTNING_SPIN_CLICKED);
    }
}
```
