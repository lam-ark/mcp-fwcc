---
id: "cc_slot_module:SlotButtonModule:director_writer:subsystem_impacts"
title: "SlotButtonModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SlotButtonModule Cross-Subsystem Impacts

---

## 1. Cross-Subsystem Matrix

| Subsystem | Impact |
| :--- | :--- |
| **`GameModeDirectorModule`**| Listens to `NORMAL_SPIN_CLICKED` to launch the spin pipeline. |
| **`UIManagerModule`** | Blocks Spacebar input when popups/cutscenes are open. |
| **`SlotSoundPlayerModule`** | Plays `sfxSpinId` audio cues on button click. |
| **`Display Node`** | Listens to `SPIN_BUTTON_STATE_CHANGE` to trigger Spine / Sprite transitions. |
