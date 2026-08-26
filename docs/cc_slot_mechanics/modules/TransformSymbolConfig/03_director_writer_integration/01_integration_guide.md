---
id: "cc_slot_mechanics:TransformSymbolConfig:integration:director"
title: "TransformSymbolConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TransformSymbolConfig", "transform_symbol_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TransformSymbolConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TransformSymbolConfig` hooks directly into the writer command array:

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
| **`TRANSFORM_SYMBOL_TO_WILD`** | `GameModeDirector` / `SlotTable` | `TransformSymbolConfig` | `{ totalWay, matrix, colIndex }` |
| **`FRAME_TIER_UPGRADE`** | `GameModeDirector` / `SlotTable` | `TransformSymbolConfig` | `{ totalWay, matrix, colIndex }` |
| **`PLAY_TRANSFORM_VFX`** | `GameModeDirector` / `SlotTable` | `TransformSymbolConfig` | `{ totalWay, matrix, colIndex }` |
