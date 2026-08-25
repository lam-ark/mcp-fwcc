---
id: "cc_slot_module:BetHistoryDetailPortrait:gotchas:01_respin_button_visibility_override_gotcha"
title: "Respin Button Visibility Override Gotcha"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "gotchas", "override"]
---

# ⚠️ Respin Button Visibility Override Gotcha

---

## 1. Defect & Solution

Set `visible: false, override: true` on inherited properties (`scrollItem`, `scrollView`, `scrollContent`) to clean up inspector bindings.
