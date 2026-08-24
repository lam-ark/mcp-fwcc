---
id: "cc_slot_module:GameModeDirectorModule:events:scoped_module_events"
title: "GameModeDirectorModule Scoped Module Events (GameModuleEvent)"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "events", "scoped_events", "GameModuleEvent"]
---

# 📡 GameModeDirectorModule Scoped Module Events (`GameModuleEvent`)

## 1. Scoped Events Dictionary

The `moduleEvent` bus isolates communication between the mode director and its designated `moduleList` children:

| Event Topic | Payload | Emitted By | Listened By & Purpose |
| :--- | :--- | :--- | :--- |
| **`TABLE_INIT`** | None | `init()` | `SlotTableModule`: Initializes reel structures. |
| **`SHOW_BEAUTY_MATRIX`** | None | `init()` | `SlotTableModule`: Displays initial attractive symbol grid. |
| **`TABLE_START_SPIN`** | None | `_startSpinTable()` | `SlotTableModule`: Accelerates reels into continuous spin. |
| **`TABLE_STOP_SPIN`** | `matrix` | `_stopSpinTable()` | `SlotTableModule`: Decelerates columns to display result. |
| **`TABLE_FAST_STOP`** | None | `onFastToResult()` | `SlotTableModule`: Snaps reels instantly without bounce. |
| **`SHOW_PAYLINES`** | `payLines` | `_showPayLines()` | `PaylineModule`: Renders winning line trails. |
| **`TRIGGER_WIN_EFFECT`**| `winData` | `_triggerWinEffect()` | `WinEffectModule`: Displays Big Win coin fountains. |
| **`SYNC_TABLE`** | `matrix, mode` | `_resumeNormalTable()` | `SlotTableModule`: Syncs matrix when returning from free spins. |
