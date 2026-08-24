---
id: "cc_slot_module:GameModeWriterModule:method:makeScriptPreStopSpinningTable"
title: "GameModeWriterModule.makeScriptPreStopSpinningTable() Method Specification"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "method", "makeScriptPreStopSpinningTable", "anticipation"]
---

# `GameModeWriterModule.makeScriptPreStopSpinningTable(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptPreStopSpinningTable(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assembles anticipation and jackpot sync commands:
   * `_syncJackpot`: Updates jackpot numbers on the top banner.
   * `_playSureWinEffect`: Triggers sure-win screen shake if flagged.
   * `_playPreStopSpinningEffect`: Triggers reel slowdown / anticipation sound.
2. Returns array to `ScriptExecutor`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptPreStopSpinningTable(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_syncJackpot",
    });
    listScript.push({
        command: "_playSureWinEffect",
    });
    listScript.push({
        command: "_playPreStopSpinningEffect",
    });
    return listScript;
}
```
