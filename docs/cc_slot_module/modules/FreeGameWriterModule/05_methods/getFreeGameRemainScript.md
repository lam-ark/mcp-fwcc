---
id: "cc_slot_module:FreeGameWriterModule:method:getFreeGameRemainScript"
title: "FreeGameWriterModule.getFreeGameRemainScript() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "method", "getFreeGameRemainScript"]
---

# `FreeGameWriterModule.getFreeGameRemainScript(): Object[]`

---

## 1. Method Signature
```typescript
getFreeGameRemainScript(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
Reads `freeGameRemain` from `this.dataStore.playSession` and packages `{ command: "_updateSpinTimes", data: freeGameRemain }`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getFreeGameRemainScript(): Object[] {
    const { freeGameRemain } = this.dataStore.playSession;
    let listScript = [];
    listScript.push({
        command: "_updateSpinTimes",
        data: freeGameRemain,
    });
    return listScript;
}
```
