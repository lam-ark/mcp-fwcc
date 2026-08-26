---
id: "cc_slot_mechanics:HorizontalCascadeData:integration:director"
title: "HorizontalCascadeData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeData", "horizontal_cascade_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `HorizontalCascadeData` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `HorizontalCascadeData` hooks directly into the writer command array:

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
| **`TABLE_START_RESPIN`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeData` | `{ totalWay, matrix, colIndex }` |
| **`CASCADE_DROP_COMPLETED`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeData` | `{ totalWay, matrix, colIndex }` |
| **`DISAPPEAR_ANIM_END`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeData` | `{ totalWay, matrix, colIndex }` |
