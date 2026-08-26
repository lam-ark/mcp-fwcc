---
id: "cc_slot_mechanics:NudgeTableData:integration:director"
title: "NudgeTableData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["NudgeTableData", "nudge_table_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `NudgeTableData` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `NudgeTableData` hooks directly into the writer command array:

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
| **`NUDGE_REEL_START`** | `GameModeDirector` / `SlotTable` | `NudgeTableData` | `{ totalWay, matrix, colIndex }` |
| **`NUDGE_STEP_COMPLETE`** | `GameModeDirector` / `SlotTable` | `NudgeTableData` | `{ totalWay, matrix, colIndex }` |
