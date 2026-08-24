---
id: "cc_slot_module:TurboButton:director_writer:subsystem_impacts"
title: "TurboButton Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 TurboButton Cross-Subsystem Impacts

---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`SlotGameSettings`** | Sets `isTurboActive` boolean. |
| **`SlotTableDirector`** | Switches reel spin speed curves to high-speed profiles when `isTurboActive = true`. |
| **`SlotSoundPlayerModule`** | Plays `sfxTurboOn` / `sfxTurboOff` audio clips. |
