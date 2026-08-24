---
id: "cc_slot_module:SlotTablePaylineData:properties:injected_services"
title: "SlotTablePaylineData Injected Services"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "properties", "injected_services", "ioc"]
---

# 💉 SlotTablePaylineData Injected Services

---

## 1. Injected Services Matrix

`SlotTablePaylineData` inherits services from `BaseDataModule` / `SlotBaseModule`:

| Token | Type | When Provided | Purpose in Module |
| :--- | :--- | :--- | :--- |
| `gameDataStore` | `GameDataStore` | Scene Bootstrap (`GameInit`) | Source reactive data store. |
| `gameConfig` | `GameConfig` | Scene Bootstrap (`GameInit`) | Master game configuration. |
| `eventManager` | `GameEventManager` | Scene Bootstrap (`GameInit`) | Global event bus. |
