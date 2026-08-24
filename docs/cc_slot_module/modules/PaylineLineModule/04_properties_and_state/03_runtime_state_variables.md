---
id: "cc_slot_module:PaylineLineModule:properties_and_state:runtime_state_variables"
title: "PaylineLineModule Internal Runtime State Variables"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 PaylineLineModule Internal Runtime State Variables

---

## 1. Runtime Variable Specifications

| Variable Name | Type | Initial Value | Mutation Moment | Lifecycle Boundary |
| :--- | :--- | :--- | :--- | :--- |
| `linePool` | `cc.NodePool` | `new NodePool("SlotLineItem")` | `getLine()` takes; `clearAll()` returns. | Scene lifetime. |
| `payLines` | `PayLineInfo[]` | `[]` | Updated during `setupPaylines()`. | Spin lifetime. |
| `lines` | `cc.Node[]` | `[]` | Indexed by `lineID` on `showLineNumber()`; reset in `clearAll()`. | Round lifetime. |
