---
id: "cc_slot_module:PayTablePanel:gotchas:01_scrollview_top_reset_gotcha"
title: "ScrollView Top Reset Gotcha"
category: "cc_slot_module"
tags: ["PayTablePanel", "paytablepanel", "cc_slot_module", "gotchas", "scrollview"]
---

# ⚠️ ScrollView Top Reset Gotcha

---

## 1. Defect & Solution

Always execute `this.scrollView.scrollToTop(0)` inside `showPayTablePanel(true)` so users start reading from the top header on each open.
