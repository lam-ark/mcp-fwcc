---
id: "cc_slot_module:BonusGameTableModule:events:global_event_bus"
title: "BonusGameTableModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 BonusGameTableModule Global Event Bus Integration

## 1. Global Events Summary

`BonusGameTableModule` operates exclusively within the scoped module event bus (`this.moduleEvent`) created by `GameModeDirectorModule`. It does not listen to or emit global `eventManager` events directly.
