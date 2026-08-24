---
id: "cc_slot_module:SlotSymbolResourceManager:properties:inspector_properties"
title: "SlotSymbolResourceManager Inspector Properties Reference"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "properties", "inspector_properties"]
---

# 🎛️ SlotSymbolResourceManager Inspector Properties Reference

---

## 1. Cocos Inspector Serialized Fields

| Property Name | Type | Default Value | Role in Component |
| :--- | :--- | :--- | :--- |
| **`symbolSfList`** | `SymbolModuleSpriteFrame[]` | `[]` | Array of static SpriteFrame mappings (`symbolCode` ➔ `symbolSf`). |
| **`blurSymbolSfList`** | `SymbolModuleSpriteFrame[]` | `[]` | Array of motion-blur SpriteFrame mappings. |
| **`backgroundSymbolSfList`** | `SymbolModuleSpriteFrame[]` | `[]` | Array of symbol card background SpriteFrame mappings. |
| **`symbolSkeletons`** | `SymbolModuleSkeleton[]` | `[]` | Array of Spine SkeletonData mappings (`symbolCode` ➔ `skeletonData`). |
| **`colorNormal`** | `cc.Color` | `(255, 255, 255, 255)` | Pure white vertex color for active winning / standard symbols. |
| **`colorDim`** | `cc.Color` | `(100, 100, 100, 255)` | Dimmed grey vertex color for non-winning symbols during paylines. |
