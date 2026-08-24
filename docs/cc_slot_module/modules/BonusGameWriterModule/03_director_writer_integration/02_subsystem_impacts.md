---
id: "cc_slot_module:BonusGameWriterModule:director_writer:subsystem_impacts"
title: "BonusGameWriterModule Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BonusGameWriterModule Subsystem Impact Matrix

## 1. Subsystem Action Routing

| Generated Script Command | Bound Method in `BonusGameDirectorModule` | Subsystem Impact |
| :--- | :--- | :--- |
| `_syncJackpot` | `_syncJackpot()` | Ingests latest jackpot pool numbers into HUD. |
| `_unblockBonusGame` | `unblockBonusGame()` | Enables `cc.Button.interactable = true` on unopened chest items. |
| `_startCountDown` | `startCountDown()` | Starts/resumes the 15-second auto-selection countdown timer. |
| `_openItem` | `_openItem()` | Emits `OPEN_ITEM` to `BonusGameTableModule` to reveal chest. |
| `_openFinalItem` | `_openFinalItem()` | Emits `OPEN_FINAL_ITEM` and awaits animation completion Promise. |
| `_openAllItems` | `_openAllItems()` | Emits `OPEN_ALL_ITEMS` to reveal unpicked chests with dimmed styling. |
| `_playFinalResultEffect` | `_playFinalResultEffect()` | Triggers `TOTAL_WIN` cutscene overlay. |
| `_clearCurrentBonusGameData`| `_clearCurrentBonusGameData()` | Clears `openedBoxes` array in memory. |
