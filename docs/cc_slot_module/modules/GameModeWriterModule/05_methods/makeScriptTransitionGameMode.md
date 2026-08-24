---
id: "cc_slot_module:GameModeWriterModule:method:makeScriptTransitionGameMode"
title: "GameModeWriterModule.makeScriptTransitionGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "method", "makeScriptTransitionGameMode"]
---

# `GameModeWriterModule.makeScriptTransitionGameMode(): Object[]`

---

## 1. Method Signature
```typescript
public makeScriptTransitionGameMode(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns `[{ command: "_showTransitionGameMode" }]` to trigger mode intro dialogues and music crossfades.

---

## 3. Un-truncated Source Code Implementation
```typescript
makeScriptTransitionGameMode(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_showTransitionGameMode",
    });
    return listScript;
}
```
