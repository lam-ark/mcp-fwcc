---
id: "cc_slot_module:SettingPanel:director_writer:subsystem_impacts"
title: "SettingPanel Subsystem Impacts"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SettingPanel Subsystem Impacts

---

## 1. Subsystem Impacts

- **Sound Player (`SlotSoundPlayerModule`)**: `setBgmEnable()` and `setEffectEnable()` are directly synchronized.
- **Child Popups**: Dispatches events to open Bet History and Jackpot History modals.
