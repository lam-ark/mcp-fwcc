---
id: "cc_slot_module:SettingPanel:inheritance:subclassing_guide"
title: "SettingPanel Subclassing Guide"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SettingPanel Subclassing Guide

---

## 1. Guidelines

1. Extend `SettingPanel`.
2. Do not override `onLoad()`; implement `onLoadExtend()`.
3. In `onDestroy()`, invoke `super.onDestroy()` to unbind observers.
