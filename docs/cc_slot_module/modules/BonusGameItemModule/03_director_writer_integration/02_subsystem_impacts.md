---
id: "cc_slot_module:BonusGameItemModule:director_writer:subsystem_impacts"
title: "BonusGameItemModule Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BonusGameItemModule Subsystem Impact Matrix

## 1. Subsystem Impact Matrix

| Action | `BonusGameDirectorModule` | `SlotSoundPlayerModule` | Local Render |
| :--- | :--- | :--- | :--- |
| `onClickItem` | Receives `CLICK_ITEM` event | Optional `soundBoxClick` | Flags `isSelected = true` |
| `playAnimOpen` | Notified via callback | Plays `soundBoxOpen` SFX | Switches `itemSprite.spriteFrame` |
| `dim` | None | None | Applies `colorDim` tint |
