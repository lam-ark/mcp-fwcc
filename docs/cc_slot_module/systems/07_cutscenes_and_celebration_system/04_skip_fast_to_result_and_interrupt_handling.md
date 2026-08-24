---
id: "cc_slot_module:systems:cutscenes_and_celebration_system:skip_fast_to_result_and_interrupt_handling"
title: "Touch Skip, Fast-to-Result & Interrupt Teardown Handling"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "cutscenes", "skip", "turbo", "fast_to_result", "interrupts"]
---

# ⚡ Touch Skip, Fast-to-Result & Interrupt Teardown Handling

---

## 1. Turbo / Fast-To-Result (FTR) Fast Particle Fallback

When `this.gameSettings.isTurboActive` or `this.gameSettings.isFastToResult` is true:
- `WinEffectModule.play()` sets `this.fullDisplay = false`.
- Bypasses full screen overlay and rolling count-up dialog.
- Directly invokes `showFastEffectWin()`:
  - Plays fast win sound SFX.
  - Fires burst particle system for $1\text{s}$.
  - Instantly executes `this.callback()` to avoid pipeline stall.

---

## 2. Touch Acceleration & Skip Guard (`bindQuickShow`)

To prevent accidental skips from lingering screen taps:
1. `bindQuickShow()` sets `_skippable = false` for `delayShowTime` ($1.0\text{s} - 2.0\text{s}$).
2. After `delayShowTime`, `_skippable = true`.
3. When player taps (`onClick()`):
   - Immediately stops money tween.
   - Snaps numerical value to `winAmount`.
   - Plays `playSoundCountingEnd()`.
   - Starts `delayHideTime` exit sequence.
