---
id: "cc_slot_module:SpinTimesModule:gotchas:index"
title: "SpinTimesModule Gotchas Index"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SpinTimesModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_infinity_spin_count_formatting`](./01_infinity_spin_count_formatting.md)** | Text Overflow from Unbounded Spin Quantities | MEDIUM | Auto-spin counts exceeding 100,000 must render `'∞'` rather than clipping wide integer strings. |
| **[`02_stale_spin_times_label_visibility`](./02_stale_spin_times_label_visibility.md)** | Lingering Free Spin Counter on Mode Exit | HIGH | Failing to reset `freeSpinTimes` when switching modes leaves orphaned badges visible in normal game. |
