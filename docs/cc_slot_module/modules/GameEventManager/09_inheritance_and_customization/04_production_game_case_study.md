---
id: "cc_slot_module:GameEventManager:customization:production_game_case_study"
title: "Production Case Study: Custom Multiplier Event in Red Cliff (g9666L)"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "customization", "case_study", "red_cliff", "g9666L", "RESET_MULTIPLIER"]
---

# 📖 Production Case Study: Custom Multiplier Event in Red Cliff (`g9666L`)

## 1. Context & Business Logic Requirement

In **Red Cliff (`g9666L`)**, when exiting Free Game mode back to Normal Game, the progressive win multiplier must reset to `x1`.

Because `FreeGameDirectorModule9666` and `MultiplierModule9666` live on completely separate nodes in the scene hierarchy, `GameEventManager` is used to cleanly decouple them.

---

## 2. Production Code Implementation

### A. Publisher (`FreeGameDirectorModule9666.ts`)
```typescript
async exitFreeGameSequence(): Promise<void> {
    // 1. Tell MultiplierModule to reset multiplier display to x1
    await this.eventManager.emit("RESET_MULTIPLIER", false);

    // 2. Transition game mode back to normal game
    await this.eventManager.emit(GameUIEvents.GAME_MODE.EXIT_GAME_MODE);
}
```

### B. Subscriber (`MultiplierModule9666.ts`)
```typescript
@ccclass
export default class MultiplierModule9666 extends SlotBaseModule {
    @property(cc.Label)
    lblMultiplier: cc.Label = null;

    protected registerEvents(): void {
        super.registerEvents();
        this.eventManager.on("RESET_MULTIPLIER", this.onResetMultiplier, this);
    }

    private onResetMultiplier(animate: boolean = false): void {
        this.lblMultiplier.string = "x1";
    }

    onDestroy(): void {
        if (this.eventManager) {
            this.eventManager.targetOff(this);
        }
        super.onDestroy();
    }
}
```
