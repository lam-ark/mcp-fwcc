---
id: "cc_slot_mechanics:ClusterModuleConfig:integration:director"
title: "ClusterModuleConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["ClusterModuleConfig", "cluster_module_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `ClusterModuleConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `ClusterModuleConfig` hooks directly into the writer command array:

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
| **`CLUSTER_WIN_EVALUATED`** | `GameModeDirector` / `SlotTable` | `ClusterModuleConfig` | `{ totalWay, matrix, colIndex }` |
| **`CLUSTER_EXPLODE_START`** | `GameModeDirector` / `SlotTable` | `ClusterModuleConfig` | `{ totalWay, matrix, colIndex }` |
