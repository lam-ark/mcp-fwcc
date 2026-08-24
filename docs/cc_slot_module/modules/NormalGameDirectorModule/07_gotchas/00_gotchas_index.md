---
id: "cc_slot_module:NormalGameDirectorModule:gotchas:index"
title: "NormalGameDirectorModule Gotchas Index"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ NormalGameDirectorModule Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_missing_join_game_success_locks_spin_button`](./01_missing_join_game_success_locks_spin_button.md)** | Spin button remains disabled / unclickable after game loads. | `NormalGameDirectorModule` failed to receive or broadcast `JOIN_GAME_SUCCESS`. | 🔴 Critical (Game Blocked) |
