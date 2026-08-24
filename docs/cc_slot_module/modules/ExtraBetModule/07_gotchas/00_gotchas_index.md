---
id: "cc_slot_module:ExtraBetModule:gotchas:index"
title: "ExtraBetModule Gotchas Index"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ ExtraBetModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_stale_extra_bet_label_sync`](./01_stale_extra_bet_label_sync.md)** | Null Reference on Unassigned `extraBetLabel` | MEDIUM | Unassigned label crashes `onUpdateTotalBet()` on state sync. |
| **[`02_unhandled_extra_bet_min_max_lock`](./02_unhandled_extra_bet_min_max_lock.md)** | Button Lockout from Missing State Reset | HIGH | Failure to clear disabled state on mode return locks player out of Ante-Bet. |
