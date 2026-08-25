---
id: "cc_slot_module:WinAmountTooltipModule:gotchas:01_infinite_tween_leak_on_destroy"
title: "Infinite Tween Leak on Destroy"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "gotchas", "tween_leak"]
---

# ⚠️ Infinite Tween Leak on Destroy

---

## 1. Defect & Solution

Always execute `this.stopAllTweens()` in `onDestroy()`:

```typescript
stopAllTweens(): void {
    this._currentTween && this._currentTween.stop();
    this._currentTween = null;
    this._tweenFade && this._tweenFade.stop();
    this._tweenFade = null;
}
```
