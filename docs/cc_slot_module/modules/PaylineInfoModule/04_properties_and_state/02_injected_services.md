---
id: "cc_slot_module:PaylineInfoModule:properties_and_state:injected_services"
title: "PaylineInfoModule Injected Services"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 PaylineInfoModule Injected Services

---

## 1. Injected Dependencies

| Service | Type | Scope | Purpose |
| :--- | :--- | :--- | :--- |
| `moneyFormatter` | `eno.MoneyFormatter` | `@inject` | Formats currency winning values. |
| `gameConfig` | `GameConfig` | `@inject` | Reads `PAY_SYSTEM` enum. |
| `dataStore` | `GameDataStore` | `@inject` | Checks `currentGameMode`. |
