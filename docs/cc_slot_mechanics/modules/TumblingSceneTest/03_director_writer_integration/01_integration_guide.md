---
id: "cc_slot_mechanics:TumblingSceneTest:integration:director"
title: "TumblingSceneTest Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TumblingSceneTest", "tumbling_scene_test", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TumblingSceneTest` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TumblingSceneTest` hooks directly into the writer command array:

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
| **`TUMBLING_DROP_START`** | `GameModeDirector` / `SlotTable` | `TumblingSceneTest` | `{ totalWay, matrix, colIndex }` |
| **`TUMBLING_DROP_SETTLE`** | `GameModeDirector` / `SlotTable` | `TumblingSceneTest` | `{ totalWay, matrix, colIndex }` |
