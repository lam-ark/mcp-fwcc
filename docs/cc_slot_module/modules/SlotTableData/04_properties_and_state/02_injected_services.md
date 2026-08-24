---
id: "cc_slot_module:SlotTableData:properties:injected_services"
title: "SlotTableData Injected Services & Dependencies"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "properties", "injected_services", "data_store"]
---

# 💉 SlotTableData Injected Services & Dependencies

---

## 1. Injected Services (Inherited from `BaseDataModule`)

| Service Name | Type | Injection Decorator | Role |
| :--- | :--- | :--- | :--- |
| `dataStore` | `GameDataStore` | `@inject(GameDataStore)` | Central data store managing game session state and socket packets. |
| `baseMode` | `SlotBaseModule` | `this.getComponent(SlotBaseModule)` | Root mode component reference. |
