---
id: "cc_slot_mechanics:NudgeSceneTest:integration:director"
title: "NudgeSceneTest Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["NudgeSceneTest", "nudge_scene_test", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `NudgeSceneTest` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `NudgeSceneTest` hooks directly into the writer command array:

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
| **`NUDGE_REEL_START`** | `GameModeDirector` / `SlotTable` | `NudgeSceneTest` | `{ totalWay, matrix, colIndex }` |
| **`NUDGE_STEP_COMPLETE`** | `GameModeDirector` / `SlotTable` | `NudgeSceneTest` | `{ totalWay, matrix, colIndex }` |
