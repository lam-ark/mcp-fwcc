---
id: "cc_slot_module:ToastInfoModule:gotchas:index"
title: "ToastInfoModule Gotchas Index"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ ToastInfoModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_rapid_toast_tween_conflict`](./01_rapid_toast_tween_conflict.md)** | Overlapping Scale Tweens on Rapid Alerts | HIGH | Arriving messages must explicitly stop previous `_tweenToast` handles to prevent scale jitter. |
| **[`02_unstopped_toast_tween_on_destroy`](./02_unstopped_toast_tween_on_destroy.md)** | Unstopped Tween Callback on Destroy | MEDIUM | Failing to stop tweens before node removal throws callback errors during scene destruction. |
