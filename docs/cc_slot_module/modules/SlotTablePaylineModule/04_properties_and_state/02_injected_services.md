---
id: "cc_slot_module:SlotTablePaylineModule:properties:injected_services"
title: "SlotTablePaylineModule Injected Services"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "properties", "injected_services", "ioc"]
---

# 💉 SlotTablePaylineModule Injected Services

---

## 1. Injected Tokens Matrix

`SlotTablePaylineModule` inherits dependencies from `SlotBaseModule`:

| Token | Type | When Provided | Purpose in Module |
| :--- | :--- | :--- | :--- |
| `moduleEvent` | `GameModuleEvent` | Mode Bootstrap (`setupModule`) | Mandatory channel for `SETUP_PAYLINES` and `TABLE_FORMAT_CHANGED`. |
| `eventManager` | `GameEventManager` | Scene Bootstrap (`GameInit`) | Global cross-mode event bus passed to child payline components. |
| `gameConfig` | `GameConfig` | Scene Bootstrap (`GameInit`) | Access to global game rules. |
| `soundPlayer` | `SlotSoundPlayerModule`| Scene Bootstrap (`GameInit`) | Sound dispatching. |
