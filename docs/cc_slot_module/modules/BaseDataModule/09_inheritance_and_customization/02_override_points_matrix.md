---
id: "cc_slot_module:BaseDataModule:customization:override_points_matrix"
title: "BaseDataModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 BaseDataModule Extension Points Matrix

## 1. Extension Points Matrix

| Method / Hook Name | Default Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`onloadExtend()`** | Empty placeholder | `YES` | None | Initializing local lookup dictionaries. |
| **`onDataUpdate(key, value)`** | `this[key] = value` | `YES` | `RECOMMENDED` | Custom formatters, validations, or coordinate transformations. |
| **`clearData()`** | Sets registered keys to null | `YES` | `RECOMMENDED` | Resetting custom feature counters or multipliers. |
| **`isFreeMode()`** | Checks FREE_GAME 1..4 | `YES` | Optional | Supporting custom bonus game mode types. |
