---
id: "cc_slot_module:NormalGameWriterModule:method:makeScriptPreResumeGameMode"
title: "NormalGameWriterModule.makeScriptPreResumeGameMode() Method Specification"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "method", "makeScriptPreResumeGameMode", "resume"]
---

# `NormalGameWriterModule.makeScriptPreResumeGameMode(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptPreResumeGameMode(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assembles pre-resume sequence when reconnecting to an unfinished Base Game round:
   * `_pauseWallet`: Freezes balance updates during table restoration.
   * `_resumeNormalTable`: Rebuilds reel matrix symbols from stored session.
   * `_setUpPaylines`: Prepares payline coordinates.
   * `_resumeWinAmount`: Displays accumulated turn winnings.
2. Returns array to `ScriptExecutor`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptPreResumeGameMode(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_pauseWallet",
    });
    listScript.push({
        command: "_resumeNormalTable",
    });
    listScript.push({
        command: "_setUpPaylines",
    });
    listScript.push({
        command: "_resumeWinAmount",
    });
    return listScript;
}
```
