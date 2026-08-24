---
id: "cc_slot_module:IntroGameModule:director_writer:subsystem_impacts"
title: "IntroGameModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 IntroGameModule Cross-Subsystem Impacts

---

## 1. Cross-Subsystem Coordination

| Subsystem | Impact |
| :--- | :--- |
| **`UIManagerModule`** | Keeps bottom HUD buttons locked until `HIDE_INTRO_GAME` is emitted. |
| **`SlotSoundPlayerModule`** | Plays UI click sound (`playSFXClick()`) when player taps Join Game button. |
