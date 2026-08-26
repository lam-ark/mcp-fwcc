---
id: "cc_slot_mechanics:SlotTableMegaModule:integration:director"
title: "SlotTableMegaModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["SlotTableMegaModule", "slot_table_mega_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `SlotTableMegaModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `SlotTableMegaModule` hooks directly into the writer command array:

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
| **`MEGA_REEL_LINK`** | `GameModeDirector` / `SlotTable` | `SlotTableMegaModule` | `{ totalWay, matrix, colIndex }` |
| **`MEGA_REEL_UNLINK`** | `GameModeDirector` / `SlotTable` | `SlotTableMegaModule` | `{ totalWay, matrix, colIndex }` |
