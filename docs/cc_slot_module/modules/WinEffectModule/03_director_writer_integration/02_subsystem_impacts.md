---
id: "cc_slot_module:WinEffectModule:director_writer:subsystem_impacts"
title: "WinEffectModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 WinEffectModule Cross-Subsystem Impacts

---

## 1. Cross-Subsystem Matrix

| Subsystem | Impact |
| :--- | :--- |
| **`CoinsEffect`** | Emits `SHOW_COINS_EFFECT` and `HIDE_COINS_EFFECT` to control coin showers. |
| **`SlotSoundPlayerModule`** | Invokes sound hooks (`playSoundStart`, `playSoundCounting`, `playSoundEnd`, `resumeMainBGM`). |
| **`UIManagerModule`** | Disables HUD buttons while celebratory modal is active. |
