---
id: "cc_slot_mechanics:NudgeReelModule:integration:director"
title: "NudgeReelModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `NudgeReelModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `NudgeReelModule` hooks directly into the writer command array:

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
| **`NUDGE_REEL_START`** | `GameModeDirector` / `SlotTable` | `NudgeReelModule` | `{ totalWay, matrix, colIndex }` |
| **`NUDGE_STEP_COMPLETE`** | `GameModeDirector` / `SlotTable` | `NudgeReelModule` | `{ totalWay, matrix, colIndex }` |
