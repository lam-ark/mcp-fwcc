---
id: "cc_slot_module:SlotSymbolResourceManager:methods:index"
title: "SlotSymbolResourceManager Methods Index"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "methods", "index"]
---

# 📋 SlotSymbolResourceManager Methods Index

---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`onLoad(): void`](./onLoad.md)** | `public` | Component lifecycle hook triggering dictionary initialization. |
| **[`initAssets(): void`](./initAssets.md)** | `protected` | Iterates over inspector arrays and populates dictionary records. |
| **[`getSymbolFrame(symbolCode): cc.SpriteFrame`](./getSymbolFrame.md)** | `public` | Retrieves high-res static texture for symbol code. |
| **[`getBlurSymbolFrame(symbolCode): cc.SpriteFrame`](./getBlurSymbolFrame.md)** | `public` | Retrieves motion-blur texture with fallback to static texture. |
| **[`getBackgroundFrame(symbolCode): cc.SpriteFrame`](./getBackgroundFrame.md)** | `public` | Retrieves background card texture for symbol code. |
| **[`getSymbolSkeleton(symbolCode): sp.SkeletonData`](./getSymbolSkeleton.md)** | `public` | Retrieves Spine SkeletonData asset for symbol code. |
| **[`getColorNormal(): cc.Color`](./getColorNormal.md)** | `public` | Returns bright white vertex color (`#FFFFFF`). |
| **[`getColorDim(): cc.Color`](./getColorDim.md)** | `public` | Returns dimmed grey vertex color (`#646464`). |
