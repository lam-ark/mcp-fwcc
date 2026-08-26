---
id: "cc_slot_mechanics:StickySymbolModule:integration:director"
title: "StickySymbolModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `StickySymbolModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `StickySymbolModule` hooks directly into the writer command array:

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
| **`STICKY_LOCK_APPLIED`** | `GameModeDirector` / `SlotTable` | `StickySymbolModule` | `{ totalWay, matrix, colIndex }` |
| **`STICKY_UNLOCK_ALL`** | `GameModeDirector` / `SlotTable` | `StickySymbolModule` | `{ totalWay, matrix, colIndex }` |
| **`RESPIN_RETAIN_SYMBOLS`** | `GameModeDirector` / `SlotTable` | `StickySymbolModule` | `{ totalWay, matrix, colIndex }` |
