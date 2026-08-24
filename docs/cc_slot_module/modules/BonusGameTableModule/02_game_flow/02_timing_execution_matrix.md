---
id: "cc_slot_module:BonusGameTableModule:game_flow:timing_execution_matrix"
title: "BonusGameTableModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ BonusGameTableModule Timing Execution Matrix

## 1. Timing Execution Matrix

| Action | Duration | Execution Mode | Behavior |
| :--- | :--- | :--- | :--- |
| `initBoxes` | Immediate | Synchronous | Clears previous boxes and spawns `COL_NUMBER * ROW_NUMBER` box nodes. |
| `openBox` | ~1.0s | Asynchronous (Fire-and-forget) | Node emits `BOX_OPEN` to item. |
| `openFinalBox`| ~1.0s | Async (Awaits Promise) | Node emits `BOX_OPEN` and waits for callback to resolve. |
| `openAllBoxes`| 3.0s (`DELAY_OPEN_ALL_BOX`) | Async (Delayed Promise) | Reveals unpicked boxes dimmed, waits for timer before completing. |
