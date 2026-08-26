---
id: "cc_slot_mechanics:ClusterModule:integration:director"
title: "ClusterModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["ClusterModule", "cluster_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `ClusterModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `ClusterModule` hooks directly into the writer command array:

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
| **`CLUSTER_WIN_EVALUATED`** | `GameModeDirector` / `SlotTable` | `ClusterModule` | `{ totalWay, matrix, colIndex }` |
| **`CLUSTER_EXPLODE_START`** | `GameModeDirector` / `SlotTable` | `ClusterModule` | `{ totalWay, matrix, colIndex }` |
