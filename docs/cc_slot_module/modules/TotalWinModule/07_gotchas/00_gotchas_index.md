---
id: "cc_slot_module:TotalWinModule:gotchas:index"
title: "TotalWinModule Gotchas Index"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ TotalWinModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_fallback_winamountps_mismatch`](./01_fallback_winamountps_mismatch.md)** | Mismatch Between `content.winAmount` and `dataStore.getWinAmountPS` | MEDIUM | If `content.winAmount` is omitted, reading stale `winAmountPS` can result in displaying previous round amounts. |
