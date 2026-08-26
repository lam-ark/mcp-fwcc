---
id: "cc_slot_mechanics:TumblingTableConfig:integration:director"
title: "TumblingTableConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TumblingTableConfig", "tumbling_table_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TumblingTableConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TumblingTableConfig` hooks directly into the writer command array:

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
| **`TUMBLING_DROP_START`** | `GameModeDirector` / `SlotTable` | `TumblingTableConfig` | `{ totalWay, matrix, colIndex }` |
| **`TUMBLING_DROP_SETTLE`** | `GameModeDirector` / `SlotTable` | `TumblingTableConfig` | `{ totalWay, matrix, colIndex }` |
