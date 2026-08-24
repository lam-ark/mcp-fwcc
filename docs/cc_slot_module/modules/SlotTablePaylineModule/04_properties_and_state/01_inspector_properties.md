---
id: "cc_slot_module:SlotTablePaylineModule:properties:inspector_properties"
title: "SlotTablePaylineModule Inspector Properties"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ SlotTablePaylineModule Inspector Properties

---

## 1. Property Schema

| Property | Type | Default | When Set | Where Read | Impact If Desynced |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `paylineComponents` | `BasePaylineComponent[]` | `[]` | Cocos Editor or `init()` auto-discovery | `init()` | If omitted, uses `getComponentsInChildren(BasePaylineComponent)`. |
