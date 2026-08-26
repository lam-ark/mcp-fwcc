---
id: "cc_slot_mechanics:MegaReelSceneTest:integration:director"
title: "MegaReelSceneTest Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MegaReelSceneTest", "mega_reel_scene_test", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MegaReelSceneTest` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MegaReelSceneTest` hooks directly into the writer command array:

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
| **`MEGA_REEL_LINK`** | `GameModeDirector` / `SlotTable` | `MegaReelSceneTest` | `{ totalWay, matrix, colIndex }` |
| **`MEGA_REEL_UNLINK`** | `GameModeDirector` / `SlotTable` | `MegaReelSceneTest` | `{ totalWay, matrix, colIndex }` |
