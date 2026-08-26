---
id: "cc_slot_mechanics:BuyFeatureConfig:integration:director"
title: "BuyFeatureConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["BuyFeatureConfig", "buy_feature_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `BuyFeatureConfig` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `BuyFeatureConfig` hooks directly into the writer command array:

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
| **`BUY_FEATURE_CLICKED`** | `GameModeDirector` / `SlotTable` | `BuyFeatureConfig` | `{ totalWay, matrix, colIndex }` |
| **`CONFIRM_BUY_FEATURE`** | `GameModeDirector` / `SlotTable` | `BuyFeatureConfig` | `{ totalWay, matrix, colIndex }` |
| **`START_PURCHASED_FEATURE`** | `GameModeDirector` / `SlotTable` | `BuyFeatureConfig` | `{ totalWay, matrix, colIndex }` |
