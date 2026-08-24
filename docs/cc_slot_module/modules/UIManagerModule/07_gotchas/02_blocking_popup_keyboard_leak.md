---
id: "cc_slot_module:UIManagerModule:gotchas:blocking_popup_keyboard_leak"
title: "Gotcha: Spacebar Trigger During Cutscenes"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "gotchas", "spacebar_leak"]
---

# ⚠️ Gotcha: Spacebar Trigger During Cutscenes

---

## 1. Problem Description

When `SlotButtonModule.onKeyUp()` processes a Spacebar tap, if `UIManagerModule.checkDisplayPopup()` fails to check `CutsceneController.isDisplayCutscene()`, the player can spin the reels underneath a fullscreen Big Win animation.

---

## 2. Prevention

`UIManagerModule.checkDisplayPopup()` aggregates popup, cutscene, and visibility checks before allowing spacebar triggers.
