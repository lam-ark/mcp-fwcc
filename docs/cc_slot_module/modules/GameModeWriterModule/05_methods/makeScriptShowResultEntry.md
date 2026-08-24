---
id: "cc_slot_module:GameModeWriterModule:method:makeScriptShowResultEntry"
title: "GameModeWriterModule.makeScriptShowResultEntry() Method Specification"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "method", "makeScriptShowResultEntry"]
---

# `GameModeWriterModule.makeScriptShowResultEntry(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptShowResultEntry(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assembles standard 3-step result presentation pipeline:
   * `_playJackpotWin`: Checks jackpot flag and triggers jackpot cutscene celebration.
   * `_showResultEntry`: Evaluates Big Win vs standard win paylines.
   * `_showTransitionGameMode`: Evaluates `nextMode` to trigger feature cutscene intros.
2. Returns array to `ScriptExecutor`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptShowResultEntry(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_playJackpotWin",
    });
    listScript.push({
        command: "_showResultEntry",
    });
    listScript.push({
        command: "_showTransitionGameMode",
    });
    return listScript;
}
```
