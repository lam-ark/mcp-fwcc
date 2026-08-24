---
id: "cc_slot_module:SlotSymbolManager:properties:injected_services"
title: "SlotSymbolManager Injected Services"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "properties", "injected_services"]
---

# 💉 SlotSymbolManager Injected Services

## 1. Injected Services Reference Table

| Service Token | Property Reference | Role |
| :--- | :--- | :--- |
| **`GameConfig`** | `this.gameConfig` (passed via `setGameConfig()`) | Ingests `SYMBOL_CONFIG` to build `layerConfig` priority map. |
| **`TableModuleConfig`** | Sibling component | Defines `TABLE_FORMAT` and `SYMBOL_INDEXES` grid layout. |
