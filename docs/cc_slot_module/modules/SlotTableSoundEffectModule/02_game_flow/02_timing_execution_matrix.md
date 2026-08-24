---
id: "cc_slot_module:SlotTableSoundEffectModule:game_flow:timing_execution_matrix"
title: "SlotTableSoundEffectModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SlotTableSoundEffectModule Timing Execution Matrix

---

## 1. Execution Cost Matrix

| Method | Event Trigger | Complexity | Impact on Frame Rate |
| :--- | :--- | :--- | :--- |
| **`onLoadExtend()`** | Component Load | $O(1)$ | Binds node listeners and caches `TableModuleConfig`. |
| **`onReelStartSound()`** | `REEL_START_SOUND` | $O(1)$ | Zeroes counters (< 0.01ms). |
| **`onReelStopSound()`** | `REEL_STOP_SOUND` | $O(R)$ ($R \le 6$) | Iterates symbols of stopped column and triggers audio (< 0.05ms). |
| **`playSfxReelStop()`** | Helper | $O(1)$ | Dispatches SFX trigger to audio engine. |
| **`playSfxSpecialSymbol()`** | Helper | $O(1)$ | Array lookup for tiered audio ID. |
