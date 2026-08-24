---
id: "cc_slot_module:SlotTableNearWinModule:director_writer:subsystem_impacts"
title: "SlotTableNearWinModule Subsystem Impacts"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SlotTableNearWinModule Subsystem Impacts

---

## 1. Cross-Subsystem Interactions

| Subsystem / Module | Interaction Trigger | Effect / Result |
| :--- | :--- | :--- |
| **`SlotTableModule`** | Emits `SETUP_NEARWIN`, `REEL_STOP_NEARWIN`, `RESET_NEARWIN` | Coordinates timing between near-win overlay and matrix presentation. |
| **`SlotReelModule`** | `extendTimeToStop(isNearWin, isLastReel)` | Lengthens reel spin duration before triggering deceleration easing. |
| **`TableModuleConfig`** | Ingests `SYMBOL_WIDTH`, `TABLE_FORMAT`, `SCATTER_SYMBOL`, etc. | Supplies layout math and target symbol key identifiers. |
| **`SlotSoundPlayerModule`** | Calls `playSfx(soundNearWinId)` / `stopSfx(soundNearWinId)` | Manages looping tension sound choreography. |
