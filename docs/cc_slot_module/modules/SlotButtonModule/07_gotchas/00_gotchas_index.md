---
id: "cc_slot_module:SlotButtonModule:gotchas:index"
title: "SlotButtonModule Gotchas Index"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SlotButtonModule Gotchas Index

---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_unreleased_system_event_listener_leak`](./01_unreleased_system_event_listener_leak.md)** | Memory Leak from Retained Keyboard Listeners | HIGH | Failing to remove `systemEvent.off(KEY_UP)` in `onDisable()` causes ghost spacebar triggers after scene destruction. |
| **[`02_spacebar_trigger_when_popup_displayed`](./02_spacebar_trigger_when_popup_displayed.md)** | Spinning Underneath Active Modals | CRITICAL | Spacebar triggers executing without `uiManager.checkDisplayPopup()` cause invalid background bets. |
| **[`03_double_tap_auto_spin_conflict`](./03_double_tap_auto_spin_conflict.md)** | Double Tap vs Auto Spin Timing Conflict | MEDIUM | Fast stopping via double-tap can trigger an unintended auto-spin timer if `holdAction` is not cleared. |
| **[`04_promotion_auto_spin_bypass_leak`](./04_promotion_auto_spin_bypass_leak.md)** | Auto-Spin Bypass During Promotional Free Rounds | HIGH | Failing to guard `holdToAutoSpin` with `hasPromotion` violates promotional campaign rules. |
