---
id: "cc_slot_module:overview:best_practices_and_gotchas"
title: "Module Best Practices, Design Patterns & Engine Gotchas"
category: "cc_slot_module"
tags: ["cc_slot_module", "SlotBaseModule", "best_practices", "gotchas", "antipatterns", "memory_leak", "targetOff", "onLoadExtend", "red_cliff"]
---

# ⚠️ Module Best Practices, Design Patterns & Engine Gotchas

## 1. Top 5 Architectural Gotchas & Antipatterns

### 🛑 Gotcha #1: Overriding `onLoad()` without `super.onLoad()`
* **Symptom**: `TypeError: Cannot read property 'on' of undefined` on `this.eventManager`, `this.gameLogic`, or `this.soundPlayer`.
* **Root Cause**: `SlotBaseModule.onLoad()` executes `applyInjections(this, gameId)`. If a subclass defines `onLoad()` and neglects to call `super.onLoad()`, all `@inject` properties remain `null`.
* **Standard Fix**: **Never override `onLoad()`**. Always implement `onLoadExtend()` and `registerEvents()`.

```typescript
// ❌ INCORRECT: Drops injection pipeline
@ccclass
export default class BadModule extends SlotBaseModule {
    onLoad(): void {
        this.eventManager.on("EVENT", this.handler, this); // CRASH!
    }
}

// ✅ CORRECT: Safe template hook
@ccclass
export default class GoodModule extends SlotBaseModule {
    onLoadExtend(): void {
        // Initial setup logic
    }

    protected registerEvents(): void {
        this.eventManager.on("EVENT", this.handler, this); // Guaranteed non-null
    }
}
```

---

### 🛑 Gotcha #2: Early Injected Property Access in Field Initializers or Constructor
* **Symptom**: Field initializers evaluating `this.gameLogic` at class instantiation return `undefined`.
* **Root Cause**: In Cocos Creator 2.4, TypeScript class property initializers run inside the constructor before `onLoad()` is executed by the engine.
* **Standard Fix**: Move all state initialization dependent on injected singletons into `onLoadExtend()`.

```typescript
// ❌ INCORRECT: Constructor runs before onLoad()
@ccclass
export default class BadInitModule extends SlotBaseModule {
    private betData = this.gameLogic.getDataModel().BetData; // CRASH! this.gameLogic is null in constructor!
}

// ✅ CORRECT: Deferred resolution in onLoadExtend
@ccclass
export default class GoodInitModule extends SlotBaseModule {
    private betData: any = null;

    onLoadExtend(): void {
        this.betData = this.gameLogic.getDataModel().BetData; // SAFE!
    }
}
```

---

### 🛑 Gotcha #3: Registering a Single Module Node to Multiple GameModes
* **Symptom**: Runtime console error: `[ModuleRegistry] Module Table is registered to multiple GameMode.`
* **Root Cause**: `SlotBaseModule.setupModule` checks `if (this.moduleEvent !== null)`. A single node cannot listen to two different `GameModuleEvent` instances without event cross-talk.
* **Standard Fix**:
  1. Clone the module node in the scene (e.g. have `NormalGame/Table` and `FreeGame/Table`), or
  2. If sharing the same visual table across modes, use the global `this.eventManager` to dispatch mode-agnostic actions.

---

### 🛑 Gotcha #4: Event Listener Memory Leak on Scene Reload / Node Destruction
* **Symptom**: Ghost callbacks firing on destroyed nodes, texture memory increasing on every game enter/exit.
* **Root Cause**: `GameEventManager` maintains strong object references to listener targets in its subscription registry.
* **Standard Fix**: Always invoke `this.eventManager.targetOff(this)` in `onDestroy()`.

```typescript
onDestroy(): void {
    if (this.eventManager) {
        this.eventManager.targetOff(this);
    }
    if (this.gameLogic) {
        this.gameLogic.targetOff(this);
    }
}
```

---

### 🛑 Gotcha #5: Overlooking Fast-Play (FTR) Interruption Cleanup
* **Symptom**: Animations getting stuck, sound loops playing forever, or win counters desyncing when player clicks Turbo / Fast Stop.
* **Root Cause**: In fast-play mode, the engine fires `RESET_ALL_EFFECT_AND_TASKS` and immediately skips to the end of the round.
* **Standard Fix**: Override `resetAllEffectAndTasks()` to kill active tweens and restore default visual state.

```typescript
protected resetAllEffectAndTasks(): void {
    // 1. Kill running tweens on this node
    cc.Tween.stopAllByTarget(this.node);
    
    // 2. Hide animation overlays
    if (this.winEffectSpine) {
        this.winEffectSpine.node.active = false;
    }

    // 3. Reset labels
    if (this.winAmountLabel) {
        this.winAmountLabel.string = "";
    }
}
```

---

## 2. Production Subclassing Template (Live Pattern from Red Cliff `g9666L`)

Below is the standard, production-hardened template for authoring custom game-specific modules:

```typescript
const { _decorator } = cc;
import { SlotBaseModule } from "SlotBaseModule";
const { ccclass, property } = _decorator;

@ccclass
export default class CustomGameModule9666 extends SlotBaseModule {
    @property(cc.Label)
    private titleLabel: cc.Label = null;

    @property(sp.Skeleton)
    private vfxSpine: sp.Skeleton = null;

    /**
     * 1. Safe Initialization Hook (Post-Injection)
     */
    onLoadExtend(): void {
        this.updateVisualState();
    }

    /**
     * 2. Event Subscriptions Hook
     */
    protected registerEvents(): void {
        // Scoped event within active GameMode
        if (this.moduleEvent) {
            this.moduleEvent.on("TRIGGER_CUSTOM_FEATURE", this.onTriggerFeature, this);
        }

        // Global event across all GameModes
        if (this.eventManager) {
            this.eventManager.on("RESET_MULTIPLIER", this.onResetMultiplier, this);
        }
    }

    /**
     * 3. Business Logic Implementation
     */
    private onTriggerFeature(data: any): void {
        if (this.vfxSpine) {
            this.vfxSpine.node.active = true;
            this.vfxSpine.setAnimation(0, "win_loop", true);
        }
        if (this.soundPlayer) {
            this.soundPlayer.playSFX("feature_trigger");
        }
    }

    private onResetMultiplier(isResume: boolean): void {
        if (this.titleLabel) {
            this.titleLabel.string = "x1";
        }
    }

    private updateVisualState(): void {
        // Apply initial configuration
    }

    /**
     * 4. Interruption & Turbo Skip Cleanup
     */
    protected resetAllEffectAndTasks(): void {
        if (this.vfxSpine) {
            this.vfxSpine.node.active = false;
        }
        cc.Tween.stopAllByTarget(this.node);
    }

    /**
     * 5. Teardown & Leak Prevention
     */
    onDestroy(): void {
        if (this.eventManager) {
            this.eventManager.targetOff(this);
        }
        if (this.gameLogic) {
            this.gameLogic.targetOff(this);
        }
    }
}
```
