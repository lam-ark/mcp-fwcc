---
id: "cc_slot_module:FreeGameWriterModule:gotcha:missing_decrease_free_spin_times_stuck_counter"
title: "Gotcha: Missing decreaseFreeGameSpinTimes Command Freezes Badge Counter"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "gotchas", "spin_counter"]
---

# ⚠️ Gotcha: Missing decreaseFreeGameSpinTimes Command Freezes Badge Counter

## 1. Defect Symptom
The Free Spin counter (e.g. `Spins Left: 10`) stays frozen at 10 while the reels spin, and abruptly jumps to 9 only when the spin finishes.

---

## 2. Root Cause Analysis
In `makeScriptFreeSpinTrigger()`, if `_decreaseFreeGameSpinTimes` is omitted, the counter is not updated at the moment the spin commences.

---

## 3. Recommended Resolution
Ensure `_decreaseFreeGameSpinTimes` is the final setup step in `makeScriptFreeSpinTrigger()`:
```typescript
listScript.push({ command: "_decreaseFreeGameSpinTimes" });
```
