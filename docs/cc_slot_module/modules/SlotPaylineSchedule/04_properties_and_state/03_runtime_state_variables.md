---
id: "cc_slot_module:SlotPaylineSchedule:properties_and_state:runtime_state_variables"
title: "SlotPaylineSchedule Internal Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotPaylineSchedule Internal Runtime State Variables

---

## 1. Runtime State Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `payLines` | `any[]` | `[]` | Parsed list of win lines received in `setData()`. |
| `jackpotPayline` | `any` | `null` | Dedicated jackpot hit descriptor. |
| `tweenSchedule` | `any` | `null` | Active `cc.tween` sequence handle; stopped in `stopSchedule()`. |
| `timelineConfig` | `any` | `null` | Cached duration per payline cycle step. |
