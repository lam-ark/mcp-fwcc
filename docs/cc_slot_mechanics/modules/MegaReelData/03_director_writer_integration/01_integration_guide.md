---
id: "cc_slot_mechanics:MegaReelData:integration:director"
title: "MegaReelData Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MegaReelData` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MegaReelData` hooks directly into the writer command array:

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
| **`MEGA_REEL_LINK`** | `GameModeDirector` / `SlotTable` | `MegaReelData` | `{ totalWay, matrix, colIndex }` |
| **`MEGA_REEL_UNLINK`** | `GameModeDirector` / `SlotTable` | `MegaReelData` | `{ totalWay, matrix, colIndex }` |
