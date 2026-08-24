---
id: "cc_slot_module:JackpotModule:gotchas:index"
title: "JackpotModule Gotchas Index"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ JackpotModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_missing_nested_jackpot_observer_cleanup`](./01_missing_nested_jackpot_observer_cleanup.md)** | Memory Leak from Nested Index Observers | HIGH | Failing to cancel `this.observerJPIndex()` before creating a new watch on `jackpots.${index}` leads to duplicate ticker animations. |
| **[`02_jackpot_frozen_during_active_spins`](./02_jackpot_frozen_during_active_spins.md)** | Accidental Jackpot Freeze State | HIGH | If `pauseUpdateJackpot` is set to true and not cleared via `resumeJackpot()`, progressive pools freeze permanently. |
