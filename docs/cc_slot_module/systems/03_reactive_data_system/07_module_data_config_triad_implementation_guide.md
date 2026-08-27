---
id: "cc_slot_module:systems:reactive_data:module_data_config_triad_implementation_guide"
title: "Step-by-Step Implementation Guide for Module-Data-Config Triads"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "reactive_data", "triad_guide", "implementation_recipe", "best_practices", "gotchas"]
---

# 🛠️ Step-by-Step Implementation Guide for Module-Data-Config Triads

---

## 1. Architectural Checklist Before Writing Code

When creating a new subsystem (e.g. `JackpotMeter`, `MultiplierReel`, `StickyWildTracker`, or game-specific feature `CollectMultiModule9666`):

- [ ] **1. Separation of Concerns**: Do not bundle calculations, state variables, and animations into one giant class.
- [ ] **2. Pure Data Layer (`*Data.ts`)**: Pure logic, key registration, zero direct rendering calls (`cc.Node`, `sp.Skeleton`).
- [ ] **3. Pure Config Layer (`*Config.ts`)**: Pure geometry, timings, easing curves, zero state variables.
- [ ] **4. Pure Visual Layer (`*Module.ts`)**: Extends `SlotBaseModule`, manages rendering and events, resolves peer data via `this.getComponent()`.

---

## 2. Step-by-Step Recipe

### Step 1: Create the Config Component (`*Config.ts`)
```typescript
const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiplierModuleConfig9666 extends cc.Component {
    @property({ tooltip: "Animation duration in seconds for multiplier pop" })
    public popDuration: number = 0.25;

    @property({ tooltip: "Max multiplier tier threshold" })
    public maxMultiplierTier: number = 100;

    @property({ tooltip: "Scale factor on multiplier hit" })
    public bounceScale: number = 1.35;
}
```

### Step 2: Create the Reactive Data Model (`*Data.ts`)
```typescript
import { BaseDataModule } from "../../../../cc-common/cc-slot-module/SlotModuleExport";

const { ccclass } = cc._decorator;

@ccclass
export default class MultiplierModuleData9666 extends BaseDataModule {
    override registeredKeys: string[] = [
        "multiplier", "winMultiplier", "globalMultiplier"
    ];

    getCurrentMultiplier(): number {
        return Number(this["multiplier"] || this["winMultiplier"] || this["globalMultiplier"]) || 1;
    }

    isMultiplierActive(): boolean {
        return this.getCurrentMultiplier() > 1;
    }
}
```

### Step 3: Create the Visual Controller (`*Module.ts`)
```typescript
import { SlotBaseModule } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
import MultiplierModuleConfig9666 from "./MultiplierModuleConfig9666";
import MultiplierModuleData9666 from "./MultiplierModuleData9666";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MultiplierModule9666 extends SlotBaseModule {
    @property(cc.Label)
    lbMultiplier: cc.Label = null;

    private _data: MultiplierModuleData9666 = null;
    private _config: MultiplierModuleConfig9666 = null;

    onLoadExtend(): void {
        super.onLoadExtend();
        // Co-located peer component resolution
        this._data = this.getComponent(MultiplierModuleData9666) || this.addComponent(MultiplierModuleData9666);
        this._config = this.getComponent(MultiplierModuleConfig9666) || this.addComponent(MultiplierModuleConfig9666);

        // Event bindings
        this.eventManager.on("UPDATE_MULTIPLIER", this.onUpdateMultiplier, this);
        this.eventManager.on("RESET_MULTIPLIER", this.onResetMultiplier, this);
    }

    private onUpdateMultiplier(): void {
        const val = this._data.getCurrentMultiplier();
        if (this.lbMultiplier) {
            this.lbMultiplier.string = `x${val}`;
            cc.tween(this.lbMultiplier.node)
                .to(this._config.popDuration, { scale: this._config.bounceScale }, { easing: "backOut" })
                .to(this._config.popDuration * 0.8, { scale: 1.0 }, { easing: "quadIn" })
                .start();
        }
    }

    private onResetMultiplier(): void {
        if (this.lbMultiplier) {
            this.lbMultiplier.string = "x1";
        }
    }

    onDestroy(): void {
        if (this.eventManager) {
            this.eventManager.targetOff(this);
        }
    }
}
```

---

## 3. Common Anti-Patterns & Defect Prevention

| Anti-Pattern | Why It Breaks | Correct Pattern |
| :--- | :--- | :--- |
| **Parsing `dataStore.playSession` directly inside `update()`** | Causes severe CPU lag, GC pressure, and bypasses reactive change notifications. | Use `*Data.ts` with `registeredKeys`. |
| **Hardcoding dimensions (`141`, `110`) in animation code** | Modifying grid size requires recompiling and editing TypeScript logic. | Store in `*Config.ts` (`SYMBOL_WIDTH: 141`). |
| **Forgetting `targetOff(this)` in `onDestroy`** | Leaks memory and triggers ghost event handlers after scene reload. | Always clean up Event Bus listeners. |
| **Mounting components on different disconnected nodes** | Requires expensive `cc.find()` or global singleton lookups. | Mount on the **same Scene Node (Co-location)** and use `this.getComponent()`. |
