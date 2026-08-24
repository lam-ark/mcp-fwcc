---
id: "cc_slot_module:BonusGameDirectorModule:gotchas:index"
title: "BonusGameDirectorModule Gotchas Index"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BonusGameDirectorModule Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_rapid_clicks_during_network_transit`](./01_rapid_clicks_during_network_transit.md)** | Player can tap multiple chests before the first network response returns. | Failure to call `blockBonusGame()` synchronously on the first touch event. | 🔴 Critical (State Corruption) |
