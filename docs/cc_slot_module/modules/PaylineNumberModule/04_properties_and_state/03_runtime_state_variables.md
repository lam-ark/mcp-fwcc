---
id: "cc_slot_module:PaylineNumberModule:properties_and_state:runtime_state_variables"
title: "PaylineNumberModule Internal Runtime State Variables"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 PaylineNumberModule Internal Runtime State Variables

---

## 1. Runtime State Variables

| Variable | Type | Initial Value | Purpose |
| :--- | :--- | :--- | :--- |
| `numbers` | `PaylineNumberItem[]` | `[]` | Flat list of all discovered number badge components. |
| `payLines` | `PayLineInfo[]` | `[]` | Parsed list of winning lines received in `setupPaylines()`. |
| `mapNumberToItem` | `Map<string, PaylineNumberItem[]>` | `new Map()` | Fast lookup mapping `paylineID` to one or more gutter badge components. |
