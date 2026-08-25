---
id: "cc_slot_module:SettingPanel:game_flow:timing_execution_matrix"
title: "SettingPanel Timing Matrix"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "game_flow", "timing"]
---

# 📊 SettingPanel Timing Matrix

---

## 1. Timing Table

| Action | Invoker | Method | State Mutation |
| :--- | :--- | :--- | :--- |
| **BGM Toggle** | Player Click | `onBgmToggle()` | `isEnableBGM` mutated |
| **SFX Toggle** | Player Click | `onSfxToggle()` | `isEnableSFX` mutated |
| **Close** | Player Click | `onExit()` | `isSettingsOpen = false` |
