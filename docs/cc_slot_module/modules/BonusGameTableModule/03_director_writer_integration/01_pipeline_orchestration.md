---
id: "cc_slot_module:BonusGameTableModule:director_writer:pipeline_orchestration"
title: "BonusGameTableModule Event-Driven Pipeline Orchestration"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 BonusGameTableModule Event-Driven Pipeline Orchestration

## 1. Module Event Pipeline Integration

`BonusGameTableModule` receives scoped module events emitted by `BonusGameDirectorModule`:
1. `INIT_BONUS_GAME` ➔ Spawns and indexes box items.
2. `OPEN_ITEM` / `OPEN_FINAL_ITEM` ➔ Forwards open command to target chest index.
3. `OPEN_ALL_ITEMS` ➔ Calculates remaining prize counts and dims unpicked boxes.
4. `BLOCK_BONUS_GAME` / `UNBLOCK_BONUS_GAME` ➔ Toggles button interactivity on child items.
