---
id: "cc_slot_module:FreeGameWriterModule:method:makeScriptResumeGameMode"
title: "FreeGameWriterModule.makeScriptResumeGameMode() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "method", "makeScriptResumeGameMode"]
---

# `FreeGameWriterModule.makeScriptResumeGameMode(): Object[]`

---

## 1. Method Signature
```typescript
makeScriptResumeGameMode(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
Constructs an array containing commands:
1. `_resumeFreeTable` ➔ Syncs the Free Game matrix.
2. `_resumeWinAmount` ➔ Syncs accumulated Free Game win total.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptResumeGameMode(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_resumeFreeTable",
    });
    listScript.push({
        command: "_resumeWinAmount",
    });
    return listScript;
}
```
