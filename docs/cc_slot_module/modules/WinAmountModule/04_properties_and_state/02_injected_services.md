---
id: "cc_slot_module:WinAmountModule:properties_and_state:injected_services"
title: "WinAmountModule Injected Services"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 WinAmountModule Injected Services

---

## 1. Injected Dependencies

| Service | Type | Scope | Purpose |
| :--- | :--- | :--- | :--- |
| `moneyFormatter` | `eno.MoneyFormatter` | `@inject` | Formats numeric values into currency strings. |
| `moneyTween` | `eno.MoneyTween` | `@inject` | Executes frame-by-frame numeric count-up tweens (`runNumber`). |
| `dataStore` | `GameDataStore` | `@inject` | Retrieves last win amount on reconnect (`getWinAmountPS()`). |
