---
id: "cc_slot_mechanics:TransformSymbolData:integration:director"
title: "TransformSymbolData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TransformSymbolData", "transform_symbol_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TransformSymbolData` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TransformSymbolData` hooks directly into the writer command array:

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
| **`TRANSFORM_SYMBOL_TO_WILD`** | `GameModeDirector` / `SlotTable` | `TransformSymbolData` | `{ totalWay, matrix, colIndex }` |
| **`FRAME_TIER_UPGRADE`** | `GameModeDirector` / `SlotTable` | `TransformSymbolData` | `{ totalWay, matrix, colIndex }` |
| **`PLAY_TRANSFORM_VFX`** | `GameModeDirector` / `SlotTable` | `TransformSymbolData` | `{ totalWay, matrix, colIndex }` |
