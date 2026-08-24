---
id: "cc_slot_module:PaylineNumberModule:events:scoped_module_events"
title: "PaylineNumberModule Internal Payline Events & Item Direct Calling"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 PaylineNumberModule Internal Payline Events & Item Direct Calling

---

## 1. Subscribed `payLineEmitter` Events

| Event Name | Handler | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| `PAYLINE_SET_DATA` | `setupPaylines` | `{ matrix, payLines }` | Ingests parsed winning lines. |
| `PAYLINE_BLINK_ALL` | `blinkAllPayLines` | None | Lights up all winning line numbers concurrently. |
| `PAYLINE_SHOW_LINE` | `showPayLine` | `(payLine: PayLineInfo)` | Isolates single line badge. |
| `PAYLINE_STOP_ALL` | `hideAll` | None | Dims all badges. |
| `PAYLINE_CLEAR` | `hideAll` | None | Resets gutter numbers on new spin. |

---

## 2. Direct Method Invocations on `PaylineNumberItem`

Calls `item.show()` and `item.hide()` directly on cached `PaylineNumberItem` component instances.
