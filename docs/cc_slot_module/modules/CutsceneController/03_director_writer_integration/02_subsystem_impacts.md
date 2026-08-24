---
id: "cc_slot_module:CutsceneController:director_writer:subsystem_impacts"
title: "CutsceneController Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 CutsceneController Cross-Subsystem Impacts

---

## 1. Cross-Subsystem Matrix

| Sibling Subsystem | Interaction / Impact |
| :--- | :--- |
| **`UIManagerModule`** | Intercepts `isDisplayCutscene()` to block touch inputs on spin buttons. |
| **`BaseGameDirector`** | Awaits `playCutScene()` promises before triggering mode transitions. |
| **`SlotSoundPlayerModule`** | Pauses/resumes background music across celebratory fanfares. |
