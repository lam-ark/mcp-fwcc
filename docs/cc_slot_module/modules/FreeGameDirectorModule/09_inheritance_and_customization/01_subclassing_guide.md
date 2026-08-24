---
id: "cc_slot_module:FreeGameDirectorModule:customization:subclassing_guide"
title: "FreeGameDirectorModule Subclassing & Feature Customization Guide"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ FreeGameDirectorModule Subclassing & Feature Customization Guide

## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { FreeGameDirectorModule } from "../../../GameMode/FreeGame/FreeGameDirectorModule";
const { ccclass } = _decorator;

@ccclass("FreeGameDirector9666")
export default class FreeGameDirector9666 extends FreeGameDirectorModule {
    override enter(): void {
        super.enter();
        // Custom feature banner or multiplier setup
    }
}
```

---

## 2. Invariant Subclassing Rules

1. **Always maintain `syncSpinTimes()`**: Ensures initial and retriggered spin counts match `GameDataStore`.
2. **Preserve `isFirstAutoSpin` pattern**: Ensures seamless entry without awkward pacing freezes.
