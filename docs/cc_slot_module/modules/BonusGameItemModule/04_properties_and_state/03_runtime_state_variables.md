---
id: "cc_slot_module:BonusGameItemModule:properties:runtime_state_variables"
title: "BonusGameItemModule Runtime State Variables"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 BonusGameItemModule Runtime State Variables

## 1. Runtime State Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`node["isOpen"]`**| `boolean` | `false` | `playAnimOpen()`, `resetBoxUI()` | Flags whether chest is already opened. |
| **`itemId`** | `number` | `0` | `init()` | Grid index of the chest item. |
| **`isSelected`** | `boolean` | `false` | `onClickItem()` | Flags whether chest was directly selected. |
| **`staticFrameAssets`**| `Record<string, SpriteFrame>`| `{}` | `onLoad()` | Cached lookup dictionary of prize frames. |
