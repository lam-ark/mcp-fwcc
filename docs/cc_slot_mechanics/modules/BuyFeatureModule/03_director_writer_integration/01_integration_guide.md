---
id: "cc_slot_mechanics:BuyFeatureModule:integration:director"
title: "BuyFeatureModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `BuyFeatureModule` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `BuyFeatureModule` hooks directly into the writer command array:

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
| **`BUY_FEATURE_CLICKED`** | `GameModeDirector` / `SlotTable` | `BuyFeatureModule` | `{ totalWay, matrix, colIndex }` |
| **`CONFIRM_BUY_FEATURE`** | `GameModeDirector` / `SlotTable` | `BuyFeatureModule` | `{ totalWay, matrix, colIndex }` |
| **`START_PURCHASED_FEATURE`** | `GameModeDirector` / `SlotTable` | `BuyFeatureModule` | `{ totalWay, matrix, colIndex }` |
