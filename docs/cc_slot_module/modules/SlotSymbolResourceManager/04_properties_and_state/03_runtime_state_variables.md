---
id: "cc_slot_module:SlotSymbolResourceManager:properties:runtime_state_variables"
title: "SlotSymbolResourceManager Runtime Asset Dictionaries"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "properties", "runtime_state", "dictionaries"]
---

# 📊 SlotSymbolResourceManager Runtime Asset Dictionaries

---

## 1. Internal Fast-Lookup Dictionaries

| Dictionary Name | Key Type | Value Type | Populated In | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `staticFrameAssets` | `string` (`symbolCode`) | `cc.SpriteFrame` | `initAssets()` | $O(1)$ fast lookup for static textures. |
| `blurFrameAssets` | `string` (`symbolCode`) | `cc.SpriteFrame` | `initAssets()` | $O(1)$ fast lookup for motion-blur textures. |
| `backgroundFrameAssets`| `string` (`symbolCode`) | `cc.SpriteFrame` | `initAssets()` | $O(1)$ fast lookup for card backgrounds. |
| `skeletonAssets` | `string` (`symbolCode`) | `sp.SkeletonData` | `initAssets()` | $O(1)$ fast lookup for Spine skeletons. |
