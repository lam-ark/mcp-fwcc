---
id: "cc_slot_mechanics:CascadeWildGenerationData:integration:director"
title: "CascadeWildGenerationData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationData", "cascade_wild_generation_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `CascadeWildGenerationData` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `CascadeWildGenerationData` hooks directly into the writer command array:

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
| **`SPAWN_CASCADE_WILD`** | `GameModeDirector` / `SlotTable` | `CascadeWildGenerationData` | `{ totalWay, matrix, colIndex }` |
| **`WILD_BURST_ANIMATION`** | `GameModeDirector` / `SlotTable` | `CascadeWildGenerationData` | `{ totalWay, matrix, colIndex }` |
