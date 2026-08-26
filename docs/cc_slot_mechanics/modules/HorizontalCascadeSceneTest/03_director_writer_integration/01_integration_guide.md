---
id: "cc_slot_mechanics:HorizontalCascadeSceneTest:integration:director"
title: "HorizontalCascadeSceneTest Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeSceneTest", "horizontal_cascade_scene_test", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `HorizontalCascadeSceneTest` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `HorizontalCascadeSceneTest` hooks directly into the writer command array:

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
| **`TABLE_START_RESPIN`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeSceneTest` | `{ totalWay, matrix, colIndex }` |
| **`CASCADE_DROP_COMPLETED`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeSceneTest` | `{ totalWay, matrix, colIndex }` |
| **`DISAPPEAR_ANIM_END`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeSceneTest` | `{ totalWay, matrix, colIndex }` |
