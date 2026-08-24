---
id: "cc_slot_module:SlotTableData:gotchas:index"
title: "SlotTableData Gotchas & Pitfalls Index"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SlotTableData Gotchas & Pitfalls Index

---

## 1. Known Gotchas Summary Table

| Gotcha Document | Symptom | Root Cause | Fix Strategy |
| :--- | :--- | :--- | :--- |
| **[`01_table_format_mismatch_crash.md`](./01_table_format_mismatch_crash.md)** | `convertSlotMatrix` produces `undefined` cells or throws out-of-bounds error. | Total items in 1D array (`rawMatrix.length`) does not equal sum of `TABLE_FORMAT` entries. | Ensure server packet size matches $\sum \text{TABLE\_FORMAT}[i]$ exactly. |
