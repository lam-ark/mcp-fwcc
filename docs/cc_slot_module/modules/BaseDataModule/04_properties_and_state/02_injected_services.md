---
id: "cc_slot_module:BaseDataModule:properties:injected_services"
title: "BaseDataModule Injected Services"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 BaseDataModule Injected Services

## 1. Injected Services Reference Table

| Injected Property | Service Type | Injection Annotation | Role |
| :--- | :--- | :--- | :--- |
| **`dataStore`** | `GameDataStore` | `@inject(GameDataStore)` | Central session state store holding parsed `playSession` data. |
| **`baseMode`** | `SlotBaseModule` | `this.getComponent(SlotBaseModule)` | Sibling presentation controller on the same scene node. |
