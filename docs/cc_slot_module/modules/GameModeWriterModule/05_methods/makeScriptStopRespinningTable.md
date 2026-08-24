---
id: "cc_slot_module:GameModeWriterModule:method:makeScriptStopRespinningTable"
title: "GameModeWriterModule.makeScriptStopRespinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "method", "makeScriptStopRespinningTable", "cascade"]
---

# `GameModeWriterModule.makeScriptStopRespinningTable(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptStopRespinningTable(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assembles cascade landing and settlement pipeline:
   * `_showRespinResultEntry`: Evaluates intermediate respin payouts.
   * `_stopRespinningTable`: Stops cascading symbols at resting row offsets.
   * `_setUpPaylines`: Evaluates new lines formed by dropped symbols.
   * `_showRespinResultFinal`: Finalizes respin turn.
2. Returns array to `ScriptExecutor`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptStopRespinningTable(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_showRespinResultEntry",
    });
    listScript.push({
        command: "_stopRespinningTable",
    });
    listScript.push({
        command: "_setUpPaylines",
    });
    listScript.push({
        command: "_showRespinResultFinal",
    });
    return listScript;
}
```
