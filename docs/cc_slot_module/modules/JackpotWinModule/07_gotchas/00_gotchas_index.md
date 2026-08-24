---
id: "cc_slot_module:JackpotWinModule:gotchas:index"
title: "JackpotWinModule Gotchas Index"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ JackpotWinModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_missing_fast_skip_tween_cleanup`](./01_missing_fast_skip_tween_cleanup.md)** | Stale Tween Override on Accelerated Skip | MEDIUM | Failing to stop the initial 10s `_tweenMoney` before creating the 1s skip tween creates overlapping number increments. |
