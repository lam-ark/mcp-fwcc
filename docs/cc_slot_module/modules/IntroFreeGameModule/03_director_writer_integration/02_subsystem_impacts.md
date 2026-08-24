---
id: "cc_slot_module:IntroFreeGameModule:director_writer:subsystem_impacts"
title: "IntroFreeGameModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 IntroFreeGameModule Cross-Subsystem Impacts

---

## 1. Cross-Subsystem Matrix

| Subsystem | Impact |
| :--- | :--- |
| **`BaseGameDirector`** | Switches active mode from `NormalGame` to `FreeGame` upon modal completion. |
| **`SlotSoundPlayerModule`** | Triggers free spin trigger jingle and transitions BGM to free game track. |
