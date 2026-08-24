---
id: "cc_slot_module:FreeGameWriterModule:gotchas:index"
title: "FreeGameWriterModule Gotchas Index"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ FreeGameWriterModule Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_missing_decrease_free_spin_times_stuck_counter`](./01_missing_decrease_free_spin_times_stuck_counter.md)** | Spin counter badge does not decrement until reels come to a stop. | `makeScriptFreeSpinTrigger()` omitted `_decreaseFreeGameSpinTimes`. | 🟡 High (UI Desync) |
| **[`02_total_win_cutscene_skipped_prematurely`](./02_total_win_cutscene_skipped_prematurely.md)** | Fast clicking skips the `TOTAL_WIN` dialog and abruptly returns to Normal Game. | `getFreeGameEndScript()` emitted `_showCutscene` instead of `_showUnskippedCutscene`. | 🟡 High (Player Confusion) |
