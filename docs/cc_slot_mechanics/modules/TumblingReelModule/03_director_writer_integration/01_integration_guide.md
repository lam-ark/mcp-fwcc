---
id: "cc_slot_mechanics:TumblingReelModule:integration:director"
title: "TumblingReelModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TumblingReelModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TumblingReelModule` hooks directly into the writer command array:

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
| **`TUMBLING_DROP_START`** | `GameModeDirector` / `SlotTable` | `TumblingReelModule` | `{ totalWay, matrix, colIndex }` |
| **`TUMBLING_DROP_SETTLE`** | `GameModeDirector` / `SlotTable` | `TumblingReelModule` | `{ totalWay, matrix, colIndex }` |
