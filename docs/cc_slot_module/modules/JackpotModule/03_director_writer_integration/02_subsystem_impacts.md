---
id: "cc_slot_module:JackpotModule:director_writer:subsystem_impacts"
title: "JackpotModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 JackpotModule Cross-Subsystem Impacts

---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`UIManagerModule`** | Toggles `realJackpot` vs `trialJackpot` on demo mode switch. |
| **`JackpotWinModule`** | Emits `PAUSE_JACKPOT` and `RESUME_JACKPOT` during celebration. |
| **`JackpotLabel`** | Drives local `MoneyTween.runNumber` animations with `acceptRunDown: true`. |
