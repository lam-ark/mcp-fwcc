---
id: "cc_slot_module:ToastInfoModule:gotchas:rapid_toast_tween_conflict"
title: "Gotcha: Overlapping Scale Tweens on Rapid Alerts"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "gotchas", "tween_conflict"]
---

# ⚠️ Gotcha: Overlapping Scale Tweens on Rapid Alerts

---

## 1. Problem Description

When multiple network warnings arrive in rapid succession, running multiple `cc.tween(this.node)` instances simultaneously causes scale jitter and premature node deactivation.

---

## 2. Prevention

`showMessage` stops the existing tween before launching a new sequence:
```typescript
if (this._tweenToast) {
    this._tweenToast.stop();
}
```
