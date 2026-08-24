---
id: "cc_slot_module:PaylineLineModule:events:scoped_module_events"
title: "PaylineLineModule Internal Payline & Line Node Events"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "events", "scoped_events", "payLineEmitter"]
---

# 📡 PaylineLineModule Internal Payline & Line Node Events

---

## 1. Subscribed `payLineEmitter` Events

| Event Name | Handler | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| `PAYLINE_SET_DATA` | `setupPaylines` | `{ matrix, payLines }` | Receives winning line descriptors. |
| `PAYLINE_BLINK_ALL` | `blinkAllPayLines` | None | Displays all winning line tracks. |
| `PAYLINE_SHOW_LINE` | `showPayLine` | `(payLine: PayLineInfo)` | Isolates single active line. |
| `PAYLINE_STOP_ALL` | `hideAll` | None | Hides line entities during transition. |
| `PAYLINE_CLEAR` | `clearAll` | None | Resets and recycles line nodes to pool. |

---

## 2. Emitted Events on Line Item Nodes

| Event Name | Target | Purpose |
| :--- | :--- | :--- |
| `"INIT"` | `lineNode` | Passes `lineID` to initialize line graphics / color. |
| `"SHOW"` | `lineNode` | Triggers line drawing animation / fade in. |
| `"HIDE"` | `lineNode` | Hides line drawing. |
| `"RESET"` | `lineNode` | Clears graphics paths prior to pool return. |
