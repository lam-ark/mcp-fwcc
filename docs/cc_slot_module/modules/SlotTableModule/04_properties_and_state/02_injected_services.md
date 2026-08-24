---
id: "cc_slot_module:SlotTableModule:properties:injected_services"
title: "SlotTableModule Injected Services"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "properties", "injected_services"]
---

# 💉 SlotTableModule Injected Services

## 1. Injected Services Reference Table

| Service Token | Injected Property | Role |
| :--- | :--- | :--- |
| **`GameConfig`** | `@inject(GameConfig) gameConfig` | Supplies global game parameters to `SlotSymbolManager`. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | Queries `gameSettings.isTurboActive` for speed presets. |
| **`SlotTableData`** | `this._slotTableData` (Component) | Ingests `getMatrix()` and `getResumeMatrix()`. |
| **`TableModuleConfig`** | `this.config` (Component) | Supplies `TABLE_FORMAT`, `SYMBOL_WIDTH`, easing curves. |
