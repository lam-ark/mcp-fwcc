---
id: "cc_slot_module:FreeGameWriterModule:customization:subclassing_guide"
title: "FreeGameWriterModule Subclassing & Pipeline Customization Guide"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "customization", "subclassing", "makeScript"]
---

# 🏗️ FreeGameWriterModule Subclassing & Pipeline Customization Guide

## 1. Class Inheritance Declaration

When constructing a custom Free Game script writer for a new slot title:

```typescript
const { _decorator } = cc;
import { FreeGameWriterModule } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("FreeGameWriterModule9666")
export default class FreeGameWriterModule9666 extends FreeGameWriterModule {
    // Custom makeScript definitions
}
```

---

## 2. Invariant Subclassing Rules

1. **Maintain Pure Synchronicity**: Generator methods must execute synchronously and return pure command descriptor objects.
2. **Handle Total Win Gracefully**: When overriding `getFreeGameEndScript()`, ensure `_gameExit` or `EXIT_GAME_MODE` runs after the summary cutscene closes.
