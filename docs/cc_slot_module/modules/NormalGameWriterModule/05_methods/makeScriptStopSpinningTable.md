---
id: "cc_slot_module:NormalGameWriterModule:method:makeScriptStopSpinningTable"
title: "NormalGameWriterModule.makeScriptStopSpinningTable() Method Specification"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "method", "makeScriptStopSpinningTable", "spin_stop", "paylines"]
---

# `NormalGameWriterModule.makeScriptStopSpinningTable(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptStopSpinningTable(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Inherited from `GameModeWriterModule`.
2. Assembles an array of steps to decelerate reels and evaluate payouts:
   * `_stopSpinningTable`: Emits `TABLE_STOP_SPIN` with landing symbol matrix.
   * `_setUpPaylines`: Emits `SETUP_PAYLINES` with winning coordinate map.
3. Returns the command array to `ScriptExecutor`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptStopSpinningTable(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_stopSpinningTable",
    });
    listScript.push({
        command: "_setUpPaylines",
    });
    return listScript;
}
```
