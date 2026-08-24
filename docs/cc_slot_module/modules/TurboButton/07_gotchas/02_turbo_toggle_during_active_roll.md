---
id: "cc_slot_module:TurboButton:gotchas:turbo_toggle_during_active_roll"
title: "Gotcha: Reel Deceleration Mid-Spin Glitch"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "gotchas", "mid_spin"]
---

# ⚠️ Gotcha: Reel Deceleration Mid-Spin Glitch

---

## 1. Problem Description

If the player turns Turbo OFF while reels are already spinning in high-speed Turbo mode, transitioning abruptly to slow deceleration can cause easing overshoot glitches if reel step calculations assume constant velocity.

---

## 2. Prevention

`SlotTableDirector` caches the `isTurboActive` state at spin start for current reel easing formulas and applies newly toggled settings to subsequent spins.
