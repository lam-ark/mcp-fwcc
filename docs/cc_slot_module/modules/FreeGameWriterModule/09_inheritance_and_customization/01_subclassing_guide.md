---
id: "cc_slot_module:FreeGameWriterModule:customization:subclassing_guide"
title: "FreeGameWriterModule Subclassing & Script Pipeline Guide"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ FreeGameWriterModule Subclassing & Script Pipeline Guide

## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { FreeGameWriterModule } from "../../../GameMode/FreeGame/FreeGameWriterModule";
const { ccclass } = _decorator;

@ccclass("FreeGameWriter9666")
export default class FreeGameWriter9666 extends FreeGameWriterModule {
    override makeScriptFreeSpinTrigger(): Object[] {
        const listScript = super.makeScriptFreeSpinTrigger();
        // Custom feature commands
        return listScript;
    }
}
```

---

## 2. Invariant Subclassing Rules

1. **Retain `_decreaseFreeGameSpinTimes`**: Ensures the badge counter always syncs at the start of spinning.
2. **Use `_showUnskippedCutscene` for Total Win**: Guarantees the player sees their final summary.
