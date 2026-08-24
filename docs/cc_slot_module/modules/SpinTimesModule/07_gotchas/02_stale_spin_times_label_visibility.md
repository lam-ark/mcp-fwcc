---
id: "cc_slot_module:SpinTimesModule:gotchas:stale_spin_times_label_visibility"
title: "Gotcha: Lingering Free Spin Counter on Mode Exit"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "gotchas", "mode_exit"]
---

# ⚠️ Gotcha: Lingering Free Spin Counter on Mode Exit

---

## 1. Problem Description

When transitioning from Free Spins back to Normal Game, if `UIManagerModule.hideAllUI()` does not deactivate `freeSpinTimes`, a leftover badge displaying `0` remains anchored over the spin button.

---

## 2. Prevention

`UIManagerModule.hideSpinControls()` explicitly deactivates both `normalSpinTimes` and `freeSpinTimes` before mounting the new mode layout.
