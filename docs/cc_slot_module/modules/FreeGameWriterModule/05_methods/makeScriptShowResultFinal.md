---
id: "cc_slot_module:FreeGameWriterModule:method:makeScriptShowResultFinal"
title: "FreeGameWriterModule.makeScriptShowResultFinal() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "method", "makeScriptShowResultFinal", "TOTAL_WIN"]
---

# `FreeGameWriterModule.makeScriptShowResultFinal(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptShowResultFinal(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Inspects `const { freeGameRemain } = this.dataStore.playSession`.
2. If `freeGameRemain && freeGameRemain > 0`:
   * Calls `this.getFreeGameRemainScript()` to update the HUD count.
3. If `freeGameRemain <= 0` (Last free spin completed):
   * Calls `this.getFreeGameEndScript()` to trigger `TOTAL_WIN` celebration dialogue and execute `_gameExit`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptShowResultFinal(): Object[] {
    const { freeGameRemain } = this.dataStore.playSession;
    if (freeGameRemain && freeGameRemain > 0) {
        return this.getFreeGameRemainScript();
    } else {
        return this.getFreeGameEndScript();
    }
}
```
