---
id: "cc_slot_module:AutoScaleBackgroundModule:gotchas:window_listener_leak"
title: "AutoScaleBackgroundModule Gotcha: Window Resize Listener Leak"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "gotchas", "memory_leak"]
---

# ⚠️ AutoScaleBackgroundModule Gotcha: Window Resize Listener Leak

---

## 1. Solution
Always store `this._thisOnResized = this.onScreenResized.bind(this)` and call `window.removeEventListener('resize', this._thisOnResized)` inside `onDestroy()`.
