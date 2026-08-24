---
id: "cc_slot_module:BonusGameWriterModule:customization:override_points_matrix"
title: "BonusGameWriterModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 BonusGameWriterModule Extension Points Matrix

## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`makeScriptResumeGameMode()`** | Returns resume box steps | `YES` | `OPTIONAL` | Restore custom mini-game progressive tier states. |
| **`makeScriptShowResultEntry()`** | Unblocks touches & opens item | `YES` | `RECOMMENDED` | Insert custom wheel spinning or level-up steps. |
| **`makeScriptShowResultFinal()`** | Opens final & all items + Total Win | `YES` | `RECOMMENDED` | Insert grand jackpot wheel spin cutscenes. |
