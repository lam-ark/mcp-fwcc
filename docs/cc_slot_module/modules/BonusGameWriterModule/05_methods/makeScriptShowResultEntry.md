---
id: "cc_slot_module:BonusGameWriterModule:method:makeScriptShowResultEntry"
title: "BonusGameWriterModule.makeScriptShowResultEntry() Method Specification"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "method", "makeScriptShowResultEntry"]
---

# `BonusGameWriterModule.makeScriptShowResultEntry(): any[]`

---

## 1. Method Signature
```typescript
public makeScriptShowResultEntry(): any[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Inspects `const { nextMode } = this.dataStore.playSession`.
2. Assembles command array:
   * Always adds `_syncJackpot`.
   * If `nextMode === GAME_MODE_ENUM.BONUS_GAME` (more picks remain):
     * Adds `_unblockBonusGame`.
     * Adds `_startCountDown`.
     * Adds `_openItem`.
   * Else (bonus concluded):
     * Adds `_blockBonusGame`.
3. Returns array to `ScriptExecutor`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptShowResultEntry(): any[] {
    const { nextMode } = this.dataStore.playSession;
    let listScript = [];

    listScript.push({
        command: "_syncJackpot",
    });
    if (nextMode === GAME_MODE_ENUM.BONUS_GAME) {
        listScript.push({
            command: "_unblockBonusGame",
        });
        listScript.push({
            command: "_startCountDown",
        });
        listScript.push({
            command: "_openItem",
        });
    } else {
        listScript.push({
            command: "_blockBonusGame",
        });
    }
    return listScript;
}
```
