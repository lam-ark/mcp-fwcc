---
id: "cc_slot_mechanics:CascadeWildGenerationSceneTest:integration:director"
title: "CascadeWildGenerationSceneTest Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationSceneTest", "cascade_wild_generation_scene_test", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `CascadeWildGenerationSceneTest` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `CascadeWildGenerationSceneTest` hooks directly into the writer command array:

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
| **`SPAWN_CASCADE_WILD`** | `GameModeDirector` / `SlotTable` | `CascadeWildGenerationSceneTest` | `{ totalWay, matrix, colIndex }` |
| **`WILD_BURST_ANIMATION`** | `GameModeDirector` / `SlotTable` | `CascadeWildGenerationSceneTest` | `{ totalWay, matrix, colIndex }` |
