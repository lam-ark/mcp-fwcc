---
id: "cc_slot_module:BaseCutscene:recipes:custom_interactive_bonus_modal"
title: "Recipe: Creating an Interactive Bonus Selection Cutscene Modal"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "recipes", "interactive_modal", "bonus"]
---

# 💡 Recipe: Creating an Interactive Bonus Selection Cutscene Modal

---

## 1. Objective

Implement a custom chest selection modal extending `BaseCutscene`:

```typescript
@ccclass
export class TreasureChestCutscene extends BaseCutscene {
    @property(cc.Node) chests: cc.Node[] = [];

    enter(): void {
        this.chests.forEach((chest, idx) => {
            chest.active = true;
            chest.on(cc.Node.EventType.TOUCH_END, () => this.onSelectChest(idx), this);
        });
    }

    onSelectChest(idx: number): void {
        this.chests.forEach(c => c.off(cc.Node.EventType.TOUCH_END));
        // Play reveal animation, then close:
        this.scheduleOnce(() => {
            this.exit();
        }, 1.5);
    }
}
```
