---
id: "cc_slot_module:FreeGameDirectorModule:gotcha:is_first_auto_spin_delay_bypass"
title: "Gotcha: Awkward Delay Freeze on First Free Spin"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "gotchas", "auto_spin", "pacing"]
---

# ⚠️ Gotcha: Awkward Delay Freeze on First Free Spin

## 1. Defect Symptom
After the Free Game intro dialog closes, the game sits idle for nearly a second before the reels begin spinning.

---

## 2. Root Cause Analysis
In auto-spin modes, `delayAutoSpin()` enforces an interval between consecutive rounds. On the initial spin, this delay is redundant and creates perceived input lag.

---

## 3. Recommended Resolution
Ensure `this.isFirstAutoSpin = true` is set in `enter()` and consumed in `_beforeSpinStart()` to bypass delays on round 1.
