---
id: "cc_slot_module:WinEffectModule:gotchas:turbo_money_tween_unhandled_completion"
title: "Gotcha: Unstopped _tweenMoney on Abrupt Mode Transitions"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "gotchas", "tween_leak", "turbo"]
---

# ⚠️ Gotcha: Unstopped `_tweenMoney` on Abrupt Mode Transitions

---

## 1. Problem Description

If a player enables Turbo mode during an active rolling count or navigates back to the lobby, `_tweenMoney` continues modifying `_lbWinAmount.node` in the background unless stopped in `onDestroy()`:
```typescript
if (this._tweenMoney) {
    this._tweenMoney.stop();
    this._tweenMoney = null;
}
```
Always verify that `onDestroy()` cleanly aborts all active `tween` actions.
