---
id: "cc_slot_mechanics:HorizontalCascadeModuleConfig:integration:director"
title: "HorizontalCascadeModuleConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModuleConfig", "horizontal_cascade_module_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `HorizontalCascadeModuleConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `HorizontalCascadeModuleConfig` hooks directly into the writer command array:

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
| **`TABLE_START_RESPIN`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeModuleConfig` | `{ totalWay, matrix, colIndex }` |
| **`CASCADE_DROP_COMPLETED`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeModuleConfig` | `{ totalWay, matrix, colIndex }` |
| **`DISAPPEAR_ANIM_END`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeModuleConfig` | `{ totalWay, matrix, colIndex }` |
