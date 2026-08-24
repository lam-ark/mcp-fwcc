---
id: "cc_slot_module:FreeGameWriterModule:method:makeScriptSyncPlaySessionData"
title: "FreeGameWriterModule.makeScriptSyncPlaySessionData() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "method", "makeScriptSyncPlaySessionData"]
---

# `FreeGameWriterModule.makeScriptSyncPlaySessionData(): Object[]`

---

## 1. Method Signature
```typescript
makeScriptSyncPlaySessionData(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
Generates `{ command: "_syncWinAmountPS" }`.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptSyncPlaySessionData(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_syncWinAmountPS",
    });
    return listScript;
}
```
