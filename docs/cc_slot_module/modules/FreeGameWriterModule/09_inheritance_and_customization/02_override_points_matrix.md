---
id: "cc_slot_module:FreeGameWriterModule:customization:override_points_matrix"
title: "FreeGameWriterModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 FreeGameWriterModule Extension Points Matrix

## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`makeScriptFreeSpinTrigger()`** | Builds 5-step pre-spin array | `YES` | `OPTIONAL` | Insert custom multiplier teaser or bonus symbol reset steps. |
| **`makeScriptShowResultFinal()`** | Branches on `freeGameRemain` | `YES` | `RECOMMENDED` | Insert feature retrigger check steps before updating count. |
| **`getFreeGameEndScript()`** | Returns `TOTAL_WIN` cutscene + `_gameExit` | `YES` | `OPTIONAL` | Display custom celebratory dialogues or jackpot summaries. |
| **`makeScriptResumeGameMode()`** | Returns `_resumeFreeTable` + `_resumeWinAmount` | `YES` | `OPTIONAL` | Restore progressive feature meters when reconnecting to Free Spins. |
