---
id: "cc_slot_module:JackpotWinNoticePopup:gotchas:01_unscheduled_callback_leak_on_destroy"
title: "Unscheduled Callback Leak on Destroy"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "gotchas", "callback_leak"]
---

# ⚠️ Unscheduled Callback Leak in JackpotWinNoticePopup

---

## 1. Defect & Solution

Always execute `this.unscheduleAllCallbacks()` and `this.node.stopAllActions()` inside `onDestroy()`:

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.jackpotData, this);
    this.unscheduleAllCallbacks();
    this.node.stopAllActions();
}
```
