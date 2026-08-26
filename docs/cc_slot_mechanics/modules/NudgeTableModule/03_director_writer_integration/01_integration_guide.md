---
id: "cc_slot_mechanics:NudgeTableModule:integration:director"
title: "NudgeTableModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["NudgeTableModule", "nudge_table_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `NudgeTableModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `NudgeTableModule` hooks directly into the writer command array:

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
| **`NUDGE_REEL_START`** | `GameModeDirector` / `SlotTable` | `NudgeTableModule` | `{ totalWay, matrix, colIndex }` |
| **`NUDGE_STEP_COMPLETE`** | `GameModeDirector` / `SlotTable` | `NudgeTableModule` | `{ totalWay, matrix, colIndex }` |
