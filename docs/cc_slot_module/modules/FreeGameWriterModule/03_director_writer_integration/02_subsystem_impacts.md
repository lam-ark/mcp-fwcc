---
id: "cc_slot_module:FreeGameWriterModule:director_writer:subsystem_impacts"
title: "FreeGameWriterModule Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 FreeGameWriterModule Subsystem Impact Matrix

## 1. Subsystems Cross-Reference

| Script Method | Injected Command | Executing Subsystem | Subsystem Role |
| :--- | :--- | :--- | :--- |
| **`makeScriptFreeSpinTrigger`** | `_decreaseFreeGameSpinTimes` | `SpinTimes` HUD node | Decrements badge counter by 1 before reels move. |
| **`makeScriptFreeSpinTrigger`** | `_resetTable` | `SlotTableModule` | Clears sticky frames and resets reel offsets. |
| **`getFreeGameEndScript`** | `_showUnskippedCutscene` | `CutsceneModule` | Plays `TOTAL_WIN` celebration dialog. |
| **`getFreeGameEndScript`** | `_gameExit` | `FreeGameDirectorModule` | Emits `EXIT_GAME_MODE` to return to Normal Game. |
