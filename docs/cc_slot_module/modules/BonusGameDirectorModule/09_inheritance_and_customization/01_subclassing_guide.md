---
id: "cc_slot_module:BonusGameDirectorModule:customization:subclassing_guide"
title: "BonusGameDirectorModule Subclassing & Mini-Game Customization Guide"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "customization", "subclassing", "mini_game", "wheel_bonus"]
---

# 🏗️ BonusGameDirectorModule Subclassing & Mini-Game Customization Guide

## 1. Class Inheritance Declaration

When constructing a custom pick-and-click or mini-game feature director:

```typescript
const { _decorator } = cc;
import { BonusGameDirectorModule } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
import BonusGameWriterModule9666 from "./BonusGameWriterModule9666";
const { ccclass, property } = _decorator;

@ccclass("BonusGameDirectorModule9666")
export default class BonusGameDirectorModule9666 extends BonusGameDirectorModule {
    onExtendedLoad(): void {
        super.onExtendedLoad();
        this.node["director"] = this;
        this.node["writer"] = this.getComponent(BonusGameWriterModule9666);
        this.init();
    }
}
```

---

## 2. Invariant Subclassing Rules

1. **Always Block UI on Touch (`blockBonusGame`)**: When `onClickItem` executes, ensure UI input is blocked immediately to prevent packet flooding during network transit.
2. **Handle Auto-Pick Timers Cleanly**: Always call `super.onDestroy()` or `this.stopCountDown()` to cancel recurring countdown tweens and prevent memory leaks.
3. **Emit `RESET_BONUS_GAME` on Mode Exit**: Clean up chest states when transitioning back to Base Game.
