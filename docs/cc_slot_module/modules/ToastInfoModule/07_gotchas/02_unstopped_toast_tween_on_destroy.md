---
id: "cc_slot_module:ToastInfoModule:gotchas:unstopped_toast_tween_on_destroy"
title: "Gotcha: Unstopped Tween Callback on Destroy"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "gotchas", "destroy_tween"]
---

# ⚠️ Gotcha: Unstopped Tween Callback on Destroy

---

## 1. Problem Description

If a toast delay is ticking when the scene changes or the player exits to lobby, the delay `.call()` callback executes against a destroyed node, triggering runtime null reference exceptions.

---

## 2. Prevention

Always stop active tweens in `onDestroy()`:
```typescript
onDestroy(): void {
    this._tweenToast && this._tweenToast.stop();
    this._tweenToast = null;
}
```
