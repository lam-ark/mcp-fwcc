---
id: "cc_slot_module:FreeGameWriterModule:customization:override_points_matrix"
title: "FreeGameWriterModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 FreeGameWriterModule Extension Points Matrix

## 1. Extension Points Matrix

| Method Name | Default Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`makeScriptFreeSpinTrigger()`** | Standard 5-step trigger queue | `YES` | `RECOMMENDED` | Ingesting multiplier updates or sticky wild setups. |
| **`makeScriptShowResultFinal()`** | Branch on `freeGameRemain > 0` | `YES` | Optional | Retrigger evaluations or extra feature transitions. |
| **`getFreeGameRemainScript()`** | Updates spin times | `YES` | None | Adding subtle reel frame lighting or sound triggers. |
| **`getFreeGameEndScript()`** | Total Win cutscene + exit | `YES` | None | Custom outro animations or jackpot transitions. |
