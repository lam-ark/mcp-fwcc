---
id: "cc_slot_module:NormalGameWriterModule:method:makeScriptStartSpinning"
title: "NormalGameWriterModule.makeScriptStartSpinning() Method Specification"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "method", "makeScriptStartSpinning", "spin_start"]
---

# `NormalGameWriterModule.makeScriptStartSpinning(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptStartSpinning(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assembles an array of steps to initiate spinning motion:
   * `_startSpinningTable`: Emits `TABLE_START_SPIN` to accelerate reel columns.
2. Returns the command array to `ScriptExecutor`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptStartSpinning(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_startSpinningTable",
    });
    return listScript;
}
```
