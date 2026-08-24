---
id: "cc_slot_module:FreeGameDirectorModule:customization:subclassing_guide"
title: "FreeGameDirectorModule Subclassing & Feature Customization Guide"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "customization", "subclassing", "retrigger", "multiplier"]
---

# 🏗️ FreeGameDirectorModule Subclassing & Feature Customization Guide

## 1. Class Inheritance Declaration

When creating the Free Game feature director for a new slot game:

```typescript
const { _decorator } = cc;
import { FreeGameDirectorModule, SlotSymbolManager } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
import FreeGameWriterModule9666 from "./FreeGameWriterModule9666";
const { ccclass } = _decorator;

@ccclass("FreeGameDirectorModule9666")
export default class FreeGameDirectorModule9666 extends FreeGameDirectorModule {
    onLoadExtend(): void {
        super.onLoadExtend();
        this.node["director"] = this;
        this.node["writer"] = this.getComponent(FreeGameWriterModule9666);
        this.init();
    }
}
```

---

## 2. Invariant Subclassing Rules

1. **Retrigger Event Handling**: Listen to feature events like `ADD_FREE_SPIN_TIMES` to update `this.dataStore.freeSpinTimes` and the HUD label dynamically during bonus hits.
2. **Multiplier Preservation**: Ensure progressive multipliers accumulated during Free Spins are reset on `_gameExit()` via `this.eventManager.emit('RESET_MULTIPLIER', false)` before returning to Base Game.
3. **Matrix Synchronization**: On `enter()`, ensure normal table symbols are synced if not in `isResume` mode.
