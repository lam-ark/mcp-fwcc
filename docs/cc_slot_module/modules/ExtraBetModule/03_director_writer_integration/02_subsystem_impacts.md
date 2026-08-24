---
id: "cc_slot_module:ExtraBetModule:director_writer:subsystem_impacts"
title: "ExtraBetModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 ExtraBetModule Cross-Subsystem Impacts

---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`UIManagerModule`** | Controls container visibility based on `hasExtraBet`. |
| **`SlotDataStore`** | Records `extraBetValue` modifier for total bet calculations. |
| **`SlotSoundPlayerModule`** | Plays `sfxIncreaseExtraBetId` / `sfxDecreaseExtraBetId`. |
