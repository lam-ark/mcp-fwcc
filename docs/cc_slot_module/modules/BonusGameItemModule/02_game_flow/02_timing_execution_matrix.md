---
id: "cc_slot_module:BonusGameItemModule:game_flow:timing_execution_matrix"
title: "BonusGameItemModule Item Animation Timing Matrix"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ BonusGameItemModule Item Animation Timing Matrix

## 1. Timing Matrix

| Phase | Duration | Execution Mode | Behavior |
| :--- | :--- | :--- | :--- |
| `onClickItem` | Immediate | Synchronous | Dispatches `CLICK_ITEM` custom event up the node tree. |
| `playAnimOpen` Phase 1 | `0.5s` | Tween Delay | Chest opening visual anticipation. |
| `playAnimOpen` Phase 2 | `0.5s` | Tween Delay | Score count-up / prize display before invoking `callback()`. |
| `dim` / `undim` | Immediate | Synchronous | Tint color mutation (`colorDim` vs `colorNormal`). |
