---
id: "cc_slot_mechanics:ClusterModuleData:integration:director"
title: "ClusterModuleData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["ClusterModuleData", "cluster_module_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `ClusterModuleData` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `ClusterModuleData` hooks directly into the writer command array:

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
| **`CLUSTER_WIN_EVALUATED`** | `GameModeDirector` / `SlotTable` | `ClusterModuleData` | `{ totalWay, matrix, colIndex }` |
| **`CLUSTER_EXPLODE_START`** | `GameModeDirector` / `SlotTable` | `ClusterModuleData` | `{ totalWay, matrix, colIndex }` |
