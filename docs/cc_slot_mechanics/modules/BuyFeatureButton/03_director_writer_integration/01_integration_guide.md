---
id: "cc_slot_mechanics:BuyFeatureButton:integration:director"
title: "BuyFeatureButton Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["BuyFeatureButton", "buy_feature_button", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `BuyFeatureButton` Director & ScriptExecutor Integration

---

## 1. Script Writer Command Integration

In the ARK Slot framework, `BuyFeatureButton` hooks directly into the writer command array:

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
| **`BUY_FEATURE_CLICKED`** | `GameModeDirector` / `SlotTable` | `BuyFeatureButton` | `{ totalWay, matrix, colIndex }` |
| **`CONFIRM_BUY_FEATURE`** | `GameModeDirector` / `SlotTable` | `BuyFeatureButton` | `{ totalWay, matrix, colIndex }` |
| **`START_PURCHASED_FEATURE`** | `GameModeDirector` / `SlotTable` | `BuyFeatureButton` | `{ totalWay, matrix, colIndex }` |
