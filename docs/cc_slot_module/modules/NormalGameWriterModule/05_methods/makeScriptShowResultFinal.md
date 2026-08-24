---
id: "cc_slot_module:NormalGameWriterModule:method:makeScriptShowResultFinal"
title: "NormalGameWriterModule.makeScriptShowResultFinal() Method Specification"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "method", "makeScriptShowResultFinal", "wallet"]
---

# `NormalGameWriterModule.makeScriptShowResultFinal(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptShowResultFinal(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns `[{ command: "_resumeWallet" }]` to unfreeze wallet update listeners after the spin completes.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptShowResultFinal(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_resumeWallet",
    });
    return listScript;
}
```
