---
id: "cc_slot_mechanics:HorizontalCascadeModule:integration:director"
title: "HorizontalCascadeModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `HorizontalCascadeModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `HorizontalCascadeModule` hooks directly into the writer command array:

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
| **`TABLE_START_RESPIN`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeModule` | `{ totalWay, matrix, colIndex }` |
| **`CASCADE_DROP_COMPLETED`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeModule` | `{ totalWay, matrix, colIndex }` |
| **`DISAPPEAR_ANIM_END`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeModule` | `{ totalWay, matrix, colIndex }` |
