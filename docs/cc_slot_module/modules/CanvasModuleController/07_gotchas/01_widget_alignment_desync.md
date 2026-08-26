---
id: "cc_slot_module:CanvasModuleController:gotchas:widget_alignment_desync"
title: "CanvasModuleController Gotcha: UI Widgets Out of Alignment on Resize"
category: "cc_slot_module"
tags: ["CanvasModuleController", "canvas_module_controller", "cc_slot_module", "gotchas", "widget_desync"]
---

# ⚠️ CanvasModuleController Gotcha: UI Widgets Out of Alignment on Resize

---

## 1. Symptom & Fix
If critical UI widgets (e.g. Spin Button, Bet panel) do not reflow on window resize, add their `cc.Widget` components to `widgetNodes` in the Inspector so the wrapper forces `widget.updateAlignment()` on every resize tick.
