---
id: "cc_slot_mechanics:TransformSymbolModule:integration:director"
title: "TransformSymbolModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TransformSymbolModule", "transform_symbol_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TransformSymbolModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TransformSymbolModule` hooks directly into the writer command array:

```typescript
makeScriptStartSpinning(): Object[] {
    const listScript = [];
    listScript.push({
        command: "_startSpinningTable",
    });
    return listScript;
}
```

---

## 2. Director Event Handlers

| Event Name | Source | Listener Module | Functional Payload |
| :--- | :--- | :--- | :--- |
| **`TRANSFORM_SYMBOL_TO_WILD`** | `GameModeDirector` / `SlotTable` | `TransformSymbolModule` | `{ totalWay, matrix, colIndex }` |
| **`FRAME_TIER_UPGRADE`** | `GameModeDirector` / `SlotTable` | `TransformSymbolModule` | `{ totalWay, matrix, colIndex }` |
| **`PLAY_TRANSFORM_VFX`** | `GameModeDirector` / `SlotTable` | `TransformSymbolModule` | `{ totalWay, matrix, colIndex }` |
