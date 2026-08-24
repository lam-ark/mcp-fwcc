---
id: "cc_slot_module:BetModule:gotchas:index"
title: "BetModule Gotchas Index"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BetModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_stale_bet_label_null_leak`](./01_stale_bet_label_null_leak.md)** | Null Pointer Crash on Unassigned Labels | MEDIUM | If `betDenomLabel` or `totalBetLabel` is unassigned in Inspector, `node.emit` crashes during startup. |
| **[`02_unhandled_min_max_interactable_lock`](./02_unhandled_min_max_interactable_lock.md)** | Button Lockout Without `canTriggerSameValue` | HIGH | Omitting `{ canTriggerSameValue: true }` in observer setup prevents button re-enabling after balance refills. |
