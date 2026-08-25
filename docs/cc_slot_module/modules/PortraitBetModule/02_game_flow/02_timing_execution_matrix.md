---
id: "cc_slot_module:PortraitBetModule:game_flow:timing_execution_matrix"
title: "PortraitBetModule Timing Matrix"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "game_flow", "timing"]
---

# 📊 PortraitBetModule Timing Matrix

---

## 1. Execution Matrix

| Action | Method | Result |
| :--- | :--- | :--- |
| **Max Bet Click** | `onMaxBetClick()` | Emits `HIT_MAX_BET` toast. |
| **Min Bet Click** | `onMinBetClick()` | Emits `HIT_MIN_BET` toast. |
| **Spin Start** | `disableBet()` | `minBetBtn.interactable = false`, `maxBetBtn.interactable = false`. |
