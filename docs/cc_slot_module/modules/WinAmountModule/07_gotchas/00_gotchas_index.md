---
id: "cc_slot_module:WinAmountModule:gotchas:index"
title: "WinAmountModule Gotchas Index"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ WinAmountModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_lower_value_speedup_logic_fail`](./01_lower_value_speedup_logic_fail.md)** | Speeding Up to Lower Win Amount | HIGH | Triggering fast forward with a value lower than the current rolling count causes a logic warning and drops tween frames. |
| **[`02_unstopped_fade_tween_leak`](./02_unstopped_fade_tween_leak.md)** | Interrupted Fade-Out Opacity Lock | MEDIUM | If `_tweenFade` is not halted before new roll-ups, opacity remains 0 while numbers tick up invisibly. |
