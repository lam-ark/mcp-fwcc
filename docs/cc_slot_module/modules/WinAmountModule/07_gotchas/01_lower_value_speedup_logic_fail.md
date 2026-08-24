---
id: "cc_slot_module:WinAmountModule:gotchas:lower_value_speedup_logic_fail"
title: "Gotcha: Speeding Up to Lower Win Amount"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "gotchas", "fast_forward"]
---

# ⚠️ Gotcha: Speeding Up to Lower Win Amount

---

## 1. Problem Description

If a script attempts to fast-forward `WinAmountModule` with a `winAmount` lower than `_currentValue`, `fastUpdateWinAmount` aborts with a warning to prevent backward counting.

---

## 2. Prevention

Always pass a target `winAmount` $\ge \text{current value}$ or let the method default to `_winValue`.
