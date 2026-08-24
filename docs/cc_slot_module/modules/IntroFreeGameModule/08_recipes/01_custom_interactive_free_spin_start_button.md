---
id: "cc_slot_module:IntroFreeGameModule:recipes:custom_interactive_free_spin_start_button"
title: "Recipe: Interactive Free Spins Start Confirmation Button"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "recipes", "interactive_start"]
---

# 💡 Recipe: Interactive Free Spins Start Confirmation Button

---

## 1. Objective

Allow players to manually press "Start Free Spins" or auto-dismiss after $5.0\text{s}$:

```typescript
@ccclass
export class InteractiveIntroFreeGame extends IntroFreeGameModule {
    @property(cc.Button) btnStart: cc.Button = null;

    enter(): void {
        this.btnStart.node.on(cc.Node.EventType.TOUCH_END, this.onClickStart, this);
        this.scheduleOnce(this.onClickStart, 5.0);
    }

    onClickStart(): void {
        this.unscheduleAllCallbacks();
        this.exit();
    }
}
```
