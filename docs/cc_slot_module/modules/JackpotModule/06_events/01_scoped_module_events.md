---
id: "cc_slot_module:JackpotModule:events:scoped_module_events"
title: "JackpotModule Scoped Events"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 JackpotModule Scoped Events

---

## 1. Local Scoped Events Emitted

| Event Name | Target Node | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| `ON_UPDATE_VALUE` | `item.label.node` | `value: number, time: number` | Instructs `JackpotLabel` to execute `MoneyTween.runNumber` count-up. |
