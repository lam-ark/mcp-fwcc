---
id: "cc_slot_mechanics:StickySymbolConfig:integration:director"
title: "StickySymbolConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["StickySymbolConfig", "sticky_symbol_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `StickySymbolConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `StickySymbolConfig` hooks directly into the writer command array:

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
| **`STICKY_LOCK_APPLIED`** | `GameModeDirector` / `SlotTable` | `StickySymbolConfig` | `{ totalWay, matrix, colIndex }` |
| **`STICKY_UNLOCK_ALL`** | `GameModeDirector` / `SlotTable` | `StickySymbolConfig` | `{ totalWay, matrix, colIndex }` |
| **`RESPIN_RETAIN_SYMBOLS`** | `GameModeDirector` / `SlotTable` | `StickySymbolConfig` | `{ totalWay, matrix, colIndex }` |
