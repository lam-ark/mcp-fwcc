---
id: "cc_slot_module:SlotSymbolManager:customization:override_points_matrix"
title: "SlotSymbolManager Extension Points Matrix"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 SlotSymbolManager Extension Points Matrix

## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`instantiateNewSymbol()`** | Instantiates `this.template` | `YES` | Optional | Custom dynamic prefab injection or component binding. |
| **`sortSymbols(symbols)`** | Bucket sort by `layerConfig` | `YES` | Optional | Custom multi-dimensional layer sorting (e.g. Gigablox dimensions). |
| **`initSymbolPool()`** | Loops `initCount` into `NodePool` | `YES` | `RECOMMENDED` | Pre-warming multi-tier pools for multiple symbol sizes. |
| **`resetAllEffectAndTasks()`**| Virtual placeholder | `YES` | None | Clear active Spine tweens on table reset. |
