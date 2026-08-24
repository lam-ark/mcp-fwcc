---
id: "cc_slot_module:SlotTablePaylineData:game_flow:spin_phase_breakdown"
title: "SlotTablePaylineData Spin Phase State Breakdown"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 SlotTablePaylineData Spin Phase State Breakdown

---

## 1. State Mutation Across Spin Loop

1. **Spin Initiation**: State keys are updated via `GameDataStore` to reflect active game mode (`state`).
2. **Server Packet Arrival**: Keys `matrix`, `payLines`, `respinGamePayLines`, `jackpotPayline` populate into `SlotTablePaylineData`.
3. **Reel Stop Query**: `SlotTablePaylineModule` invokes `getPayLines()`, triggering on-demand geometric mapping (`convertPayLine`).
4. **Respin / Free Game Transition**: Mode flags switch `getMatrix()` and `getPayLines()` from `normalGameMatrix` to `freeGameMatrix` or `respinGameMatrix`.
