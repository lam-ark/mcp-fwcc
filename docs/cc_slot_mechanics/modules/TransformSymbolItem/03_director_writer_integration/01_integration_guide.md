---
id: "cc_slot_mechanics:TransformSymbolItem:integration:director"
title: "TransformSymbolItem Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TransformSymbolItem", "transform_symbol_item", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TransformSymbolItem` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TransformSymbolItem` hooks directly into the writer command array:

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
| **`TRANSFORM_SYMBOL_TO_WILD`** | `GameModeDirector` / `SlotTable` | `TransformSymbolItem` | `{ totalWay, matrix, colIndex }` |
| **`FRAME_TIER_UPGRADE`** | `GameModeDirector` / `SlotTable` | `TransformSymbolItem` | `{ totalWay, matrix, colIndex }` |
| **`PLAY_TRANSFORM_VFX`** | `GameModeDirector` / `SlotTable` | `TransformSymbolItem` | `{ totalWay, matrix, colIndex }` |
