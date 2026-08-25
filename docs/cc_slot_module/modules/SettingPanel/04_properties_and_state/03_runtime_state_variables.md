---
id: "cc_slot_module:SettingPanel:properties:runtime_state_variables"
title: "SettingPanel Runtime State"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SettingPanel Runtime State

---

## 1. State Table

| Variable | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `initialized` | `boolean` | `false` | Workaround flag preventing unwanted audio clicks during toggle initialization. |
| `gameSettingData` | `any` | `null` | Cached reference to `GameSettingData`. |
| `uiManagerData` | `any` | `null` | Cached reference to `UIManagerData`. |
