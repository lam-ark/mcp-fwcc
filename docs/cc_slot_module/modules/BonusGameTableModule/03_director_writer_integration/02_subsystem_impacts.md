---
id: "cc_slot_module:BonusGameTableModule:director_writer:subsystem_impacts"
title: "BonusGameTableModule Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BonusGameTableModule Subsystem Impact Matrix

## 1. Subsystem Action Routing

| Incoming Event | Local Method | Subsystem Impact |
| :--- | :--- | :--- |
| `INIT_BONUS_GAME` | `initBoxes()` | Spawns `BonusGameItemModule` child nodes into scene graph. |
| `START_BONUS_GAME` | `setBoxValues()` | Ingests `REWARD_BOX_VALUE` / `JACKPOT_BOX_VALUE` configs. |
| `OPEN_ITEM` | `openBox()` | Emits `BOX_OPEN` to specific child box node. |
| `OPEN_ALL_ITEMS` | `openAllBoxes()` | Emits `BOX_OPEN` + `DIM` to all unopened child box nodes. |
| `BLOCK_BONUS_GAME` | `disableAllBoxes()` | Emits `DISABLE_CLICK` to all child boxes. |
| `UNBLOCK_BONUS_GAME`| `enableAllBoxes()` | Emits `ENABLE_CLICK` to unopened child boxes. |
