---
id: "cc_slot_module:NormalGameWriterModule:method:makeScriptNormalSpinTrigger"
title: "NormalGameWriterModule.makeScriptNormalSpinTrigger() Method Specification"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "method", "makeScriptNormalSpinTrigger", "spin_trigger"]
---

# `NormalGameWriterModule.makeScriptNormalSpinTrigger(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptNormalSpinTrigger(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assembles an array of 6 discrete initialization steps:
   * `_beforeSpinStart`: Resets speed and handles auto-spin delays.
   * `_syncPlaySessionData`: Syncs win amounts and credit balance.
   * `_pauseWallet`: Freezes balance changes during spin.
   * `_resetOnSpin`: Clears active win overlays.
   * `_clearWinAmount`: Resets bottom HUD win numbers.
   * `_resetTable`: Clears active payline highlights on the grid.
2. Returns the command array to `ScriptExecutor`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptNormalSpinTrigger(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_beforeSpinStart",
    });
    listScript.push({
        command: "_syncPlaySessionData",
    });
    listScript.push({
        command: "_pauseWallet",
    });
    listScript.push({
        command: "_resetOnSpin",
    });
    listScript.push({
        command: "_clearWinAmount",
    });
    listScript.push({
        command: "_resetTable",
    });
    return listScript;
}
```
