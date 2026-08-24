---
id: "cc_slot_module:BonusGameDirectorModule:director_writer:subsystem_impacts"
title: "BonusGameDirectorModule Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BonusGameDirectorModule Subsystem Impact Matrix

## 1. Subsystems Cross-Reference

| Command / Trigger | `BonusGameTableModule` | `CutsceneManager` | `eno.GameLogic` | `GameDataStore` |
| :--- | :--- | :--- | :--- | :--- |
| **`onClickItem`** | Disables all boxes | None | `SEND_BONUS_GAME_REQUEST` | Updates `openedBoxes` |
| **`_openItem`** | Reveals target chest prize | None | None | Ingests `bonusValue` |
| **`_openAllItems`**| Reveals unopened boxes dimmed | None | None | Reads `bonusGameMatrix` |
| **`_playFinalResultEffect`**| None | Plays `TOTAL_WIN` / `JACKPOT_WIN` | None | Reads jackpot info |
