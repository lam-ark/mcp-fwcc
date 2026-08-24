---
id: "cc_slot_module:NormalGameWriterModule:method:makeScriptResumeNormalGame"
title: "NormalGameWriterModule.makeScriptResumeNormalGame() Method Specification"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "method", "makeScriptResumeNormalGame"]
---

# `NormalGameWriterModule.makeScriptResumeNormalGame(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptResumeNormalGame(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns `[{ command: "_showAllPaylines" }]` to highlight winning lines upon round resumption.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptResumeNormalGame(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_showAllPaylines",
    });
    return listScript;
}
```
