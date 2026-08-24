---
id: "cc_slot_module:PaylineLineModule:gotchas:index"
title: "PaylineLineModule Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ PaylineLineModule Gotchas & Engine Defects Index

---

## 1. Catalog of Known Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_sparse_array_pooling_leak`](./01_sparse_array_pooling_leak.md)** | Sparse Array Indexing with `this.lines[lineID]` | MEDIUM | Using `this.lines[lineID]` with 1-based line IDs produces sparse arrays with `undefined` holes. |
