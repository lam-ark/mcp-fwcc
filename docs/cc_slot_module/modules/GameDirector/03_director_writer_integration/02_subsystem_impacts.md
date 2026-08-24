---
id: "cc_slot_module:GameDirector:director_writer:subsystem_impacts"
title: "GameDirector Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 GameDirector Subsystem Impact Matrix

## 1. Global Subsystems Cross-Reference

| Global Event / Action | `Canvas/Director/GameMode` | `UIManager` (HUD) | `SoundPlayerModule` | `eno.GameLogic` |
| :--- | :--- | :--- | :--- | :--- |
| **`SWITCH_GAME_MODE`** | Activates target mode node | Emits `UPDATE_GAME_MODE_UI` | Feature BGM crossfade | Subscribes mode events |
| **`EXIT_GAME_MODE`** | Restores prior mode node | Emits `UPDATE_GAME_MODE_UI` | Base Game BGM restore | Clears mode listeners |
| **`EVENT_HIDE`** | Pauses action manager | Freezes money count-ups | Mutes / Pauses audio | Calls `gameOnPause()` |
| **`EVENT_SHOW`** | Resumes action manager | Resumes money count-ups | Resumes audio | Calls `gameOnResume()` |
