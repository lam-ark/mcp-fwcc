---
id: "cc_slot_module:GameModeDirectorModule:gotchas:index"
title: "GameModeDirectorModule Gotchas Index"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ GameModeDirectorModule Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_missing_moduleList_wiring_breaks_scoped_events`](./01_missing_moduleList_wiring_breaks_scoped_events.md)** | `SlotTableModule` or `PaylineModule` does not spin or show win lines when spin finishes. | The component node was not added to the `moduleList` Inspector array on `GameModeDirectorModule`. | 🔴 Critical (Reels Never Spin) |
