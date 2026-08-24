---
id: "cc_slot_module:BonusGameItemModule:customization:override_points_matrix"
title: "BonusGameItemModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 BonusGameItemModule Extension Points Matrix

## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`onClickItem(e, auto)`** | Bubbles `CLICK_ITEM` event | `EXTEND_ONLY` | `MANDATORY` | Trigger chest vibration or touch ripple VFX. |
| **`playAnimOpen(val, cb)`**| Assigns sprite & runs tween | `YES` | `MANDATORY` | Trigger Spine explosion or coins fountain animations. |
| **`dim()`** | Sets `color = colorDim` | `YES` | `OPTIONAL` | Apply custom shader or grayscale material. |
| **`showScore(val)`** | Virtual hook | `YES` | None (Virtual) | Animate floating win multiplier label. |
