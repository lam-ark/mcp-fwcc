---
id: "cc_slot_mechanics:TransformSymbolVFX:integration:director"
title: "TransformSymbolVFX Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TransformSymbolVFX", "transform_symbol_vfx", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TransformSymbolVFX` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TransformSymbolVFX` hooks directly into the writer command array:

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
| **`TRANSFORM_SYMBOL_TO_WILD`** | `GameModeDirector` / `SlotTable` | `TransformSymbolVFX` | `{ totalWay, matrix, colIndex }` |
| **`FRAME_TIER_UPGRADE`** | `GameModeDirector` / `SlotTable` | `TransformSymbolVFX` | `{ totalWay, matrix, colIndex }` |
| **`PLAY_TRANSFORM_VFX`** | `GameModeDirector` / `SlotTable` | `TransformSymbolVFX` | `{ totalWay, matrix, colIndex }` |
