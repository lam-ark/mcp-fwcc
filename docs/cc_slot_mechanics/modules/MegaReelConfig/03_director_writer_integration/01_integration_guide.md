---
id: "cc_slot_mechanics:MegaReelConfig:integration:director"
title: "MegaReelConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["MegaReelConfig", "mega_reel_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `MegaReelConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `MegaReelConfig` hooks directly into the writer command array:

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
| **`MEGA_REEL_LINK`** | `GameModeDirector` / `SlotTable` | `MegaReelConfig` | `{ totalWay, matrix, colIndex }` |
| **`MEGA_REEL_UNLINK`** | `GameModeDirector` / `SlotTable` | `MegaReelConfig` | `{ totalWay, matrix, colIndex }` |
