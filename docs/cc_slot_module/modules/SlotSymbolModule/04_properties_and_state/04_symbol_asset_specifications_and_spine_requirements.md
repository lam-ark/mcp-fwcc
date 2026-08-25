---
id: "cc_slot_module:SlotSymbolModule:properties_and_state:symbol_asset_specifications_and_spine_requirements"
title: "SlotSymbolModule Asset Specifications & Spine 3.8 Setup"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "symbol_assets", "spine_requirements", "static_sprites", "blur_sprites"]
---

# 🎨 SlotSymbolModule Asset Specifications & Spine 3.8 Setup

---

## 1. Asset Configuration Checklist

When configuring symbols for `SlotSymbolModule` in Cocos Creator:

| Asset Type | Format | Target Property / Component | Requirements |
| :--- | :--- | :--- | :--- |
| **Static Sprite** | `cc.SpriteFrame` | `sprSymbol.spriteFrame` | Must match symbol dimension; packed in POT atlas. |
| **Blur Sprite** | `cc.SpriteFrame` | `sprSymbolBlur.spriteFrame` | Vertical directional blur for fast reel spin phase. |
| **Spine Skeleton** | `sp.SkeletonData` | `spineSymbol.skeletonData` | Spine 3.8 format; contains `idle`, `win`, `appear`, `disappear` animations. |
| **Thumbnail Frame** | `cc.SpriteFrame` | `PaylineInfoModule.smallSymbolFrames` | Named with prefix `sym_${symbolId}` or `small_sym_${symbolId}`. |

---

## 2. Spine Skeleton Setup in Inspector

1. Attach `sp.Skeleton` component to child node `SpineSymbol`.
2. Assign `SkeletonData` export.
3. Check `Premultiplied Alpha = true`.
4. Ensure default animation is set to `idle` or `static`.
