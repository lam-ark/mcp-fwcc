---
id: "cc_slot_mechanics:MegaReelModule:integration:director"
title: "MegaReelModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MegaReelModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MegaReelModule` hooks directly into the writer command array:

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
| **`MEGA_REEL_LINK`** | `GameModeDirector` / `SlotTable` | `MegaReelModule` | `{ totalWay, matrix, colIndex }` |
| **`MEGA_REEL_UNLINK`** | `GameModeDirector` / `SlotTable` | `MegaReelModule` | `{ totalWay, matrix, colIndex }` |
