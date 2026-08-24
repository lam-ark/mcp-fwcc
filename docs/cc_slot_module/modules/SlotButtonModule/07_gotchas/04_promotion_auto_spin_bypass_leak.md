---
id: "cc_slot_module:SlotButtonModule:gotchas:promotion_auto_spin_bypass_leak"
title: "Gotcha: Auto-Spin Bypass During Promotional Free Rounds"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "gotchas", "promotions"]
---

# ⚠️ Gotcha: Auto-Spin Bypass During Promotional Free Rounds

---

## 1. Problem Description

Promotional spin regulations require that promotional rounds are consumed manually by player confirmation. If `holdToAutoSpin` is not suppressed when `hasPromotion = true`, players could enter auto-spin mode during promo events, causing compliance violations.

---

## 2. Prevention

In `SlotButtonNormal.onTouchStart()`:
```typescript
if (!this.holdToAutoSpin || this.hasPromotion) {
    return;
}
```
`hasPromotion` cleanly halts the auto-spin scheduler.
