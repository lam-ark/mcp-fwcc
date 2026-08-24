---
id: "cc_slot_module:SlotTableModule:director_writer:subsystem_impacts"
title: "SlotTableModule Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SlotTableModule Subsystem Impact Matrix

## 1. Subsystems Cross-Reference

| Action | `SlotReelModule` | `SlotSymbolManager` | `SlotTableNearWinModule` | `SlotTablePaylineModule` |
| :--- | :--- | :--- | :--- | :--- |
| `TABLE_INIT` | Instantiates reel nodes | Sets game config & symbol pools | None | Coordinates matrix dimensions |
| `TABLE_START_SPIN`| Calls `runReelSpin()` | Recycles old symbol nodes | Emits `RESET_NEARWIN` | Clears previous win lines |
| `TABLE_STOP_SPIN` | Calls `showResult()` | Allocates target symbol nodes | Emits `SETUP_NEARWIN` | Prepares payline coordinates |
| `REEL_STOPPED` | Triggers stop bounce | None | Emits `REEL_STOP_NEARWIN` | Ingests stopped column indices |
