---
id: "cc_slot_module:SettingPanel:inheritance:override_points_matrix"
title: "SettingPanel Override Points Matrix"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "inheritance", "override_points"]
---

# 📋 SettingPanel Override Points Matrix

---

## 1. Extension Hooks

| Method | Safe to Override? | Required `super` | Purpose |
| :--- | :--- | :--- | :--- |
| `onLoadExtend()` | `YES` | `MANDATORY` | Bind custom setting models. |
| `onDestroy()` | `YES` | `MANDATORY` | Release observer listeners. |
