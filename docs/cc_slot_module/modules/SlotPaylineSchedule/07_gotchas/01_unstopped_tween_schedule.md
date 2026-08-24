---
id: "cc_slot_module:SlotPaylineSchedule:gotchas:unstopped_tween_schedule"
title: "Gotcha: Orphaned Looping Tween on Fast Spin"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "gotchas", "tween_leak", "spin_overlap"]
---

# ⚠️ Gotcha: Orphaned Looping Tween on Fast Spin

---

## 1. Problem Description

If a player taps "SPIN" rapidly during Stage 2 idle payline cycling, and the Mode Director fails to emit `CLEAR_PAYLINES`, `this.tweenSchedule` continues executing indefinitely in the background.

---

## 2. Symptom

Reels are rolling for Spin N+1, but `SlotPaylineSchedule` continues firing `PAYLINE_SHOW_LINE` every $2.0\text{s}$, causing symbols on the rolling reels to randomly highlight, dim, or glitch visually.

---

## 3. Root Cause

`cc.tween(this.node).repeatForever()` persists until explicitly cancelled via `tween.stop()` or `node.stopAllActions()`.

---

## 4. Fix & Safeguard

Always ensure `NormalGameDirectorModule` executes `CLEAR_PAYLINES` immediately upon receiving `SPIN_CLICKED` or during `startSpin()`.
