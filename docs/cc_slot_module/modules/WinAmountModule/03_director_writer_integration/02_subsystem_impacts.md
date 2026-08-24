---
id: "cc_slot_module:WinAmountModule:director_writer:subsystem_impacts"
title: "WinAmountModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 WinAmountModule Cross-Subsystem Impacts

---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`PaylineControllerModule`** | Coordinates line presentation duration with win roll-ups. |
| **`WalletModule`** | Waits for `updateWinAmount` completion before executing `resumeWallet()`. |
| **`SlotSoundPlayerModule`** | Plays continuous coin count-up audio synchronized with `MoneyTween`. |
| **`WinEffectModule`** | Replaces on-screen label display during fullscreen Big Win cutscenes. |
