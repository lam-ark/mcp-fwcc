---
id: "cc_slot_module:BonusGameTableModule:gotchas:index"
title: "BonusGameTableModule Gotchas Index"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BonusGameTableModule Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_missing_box_prefab_crash`](./01_missing_box_prefab_crash.md)** | `TypeError: Cannot read property 'instantiate' of null` when entering Bonus Game. | `boxPrefab` property unassigned in Cocos Creator Inspector. | 🔴 Critical (Crash on Entry) |
