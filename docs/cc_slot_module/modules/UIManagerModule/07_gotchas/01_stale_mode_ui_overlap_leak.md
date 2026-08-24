---
id: "cc_slot_module:UIManagerModule:gotchas:stale_mode_ui_overlap_leak"
title: "Gotcha: UI Overlap from Direct Node Activations"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "gotchas", "ui_overlap"]
---

# ⚠️ Gotcha: UI Overlap from Direct Node Activations

---

## 1. Problem Description

If a custom script directly modifies `normalSpinButton.active = true` without calling `UIManagerModule.updateGameModeUI(GAME_MODE_ENUM.NORMAL_GAME)`, previous elements (such as `freeSpinTimes` or `freeSpinButton`) may remain active, causing visual overlap and duplicate touch hits.

---

## 2. Prevention

Always route mode UI switches through `eventManager.emit(GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI, mode)` or `UIManagerModule.updateGameModeUI(mode)`.
