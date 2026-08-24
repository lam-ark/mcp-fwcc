---
id: "cc_slot_module:FreeGameWriterModule:method:getFreeGameEndScript"
title: "FreeGameWriterModule.getFreeGameEndScript() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "method", "getFreeGameEndScript"]
---

# `FreeGameWriterModule.getFreeGameEndScript(): Object[]`

---

## 1. Method Signature
```typescript
getFreeGameEndScript(): Object[]
```

---

## 2. Detailed Algorithmic Execution Logic
Generates the concluding sequence:
1. `_showUnskippedCutscene` with `{ cutsceneType: CUTSCENE_TYPE_ENUM.TOTAL_WIN }`.
2. `_gameExit` to transition the engine back to Base Game.

---

## 3. Un-truncated Source Code Implementation
```typescript
getFreeGameEndScript(): Object[] {
    let listScript = [];
    listScript.push({
        command: "_showUnskippedCutscene",
        data: { cutsceneType: CUTSCENE_TYPE_ENUM.TOTAL_WIN, cutsceneData: {} },
    });
    listScript.push({
        command: "_gameExit",
    });
    return listScript;
}
```
