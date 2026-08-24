---
id: "cc_slot_module:BonusGameTableModule:customization:override_points_matrix"
title: "BonusGameTableModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 BonusGameTableModule Extension Points Matrix

## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`initBoxes()`** | Grid instantiation loop | `YES` | `OPTIONAL` | Implement circular or irregular honeycomb layouts. |
| **`getPosByIndex(idx)`** | Row/column step math | `YES` | `OPTIONAL` | Customize spatial placement of individual chests. |
| **`openBox(idx, val)`** | Emits `BOX_OPEN` to node | `YES` | `RECOMMENDED` | Trigger special audio or camera shakes on specific chests. |
| **`openAllBoxes(res)`** | Reveals remaining unopened boxes | `YES` | `RECOMMENDED` | Add fireworks or sequential cascade reveals. |
