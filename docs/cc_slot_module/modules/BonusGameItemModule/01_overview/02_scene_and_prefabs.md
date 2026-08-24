---
id: "cc_slot_module:BonusGameItemModule:overview:scene_and_prefabs"
title: "BonusGameItemModule Scene Structure & Prefabs"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "overview", "scene", "prefabs"]
---

# 🌳 BonusGameItemModule Scene Structure & Prefabs

## 1. Node Component Hierarchy

Attached to the root node of `BoxPrefab`:

```text
BoxPrefab (cc.Node) ➔ [Mounted: BonusGameItemModule, cc.Button]
├── BoxBackground (cc.Sprite / Spine Skeleton)
├── ItemSprite (cc.Sprite - displays revealed prize symbol)
└── ScoreLabel (cc.Label - displays win multiplier/cash)
```

---

## 2. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Purpose |
| :--- | :--- | :--- | :--- |
| **`itemSprite`** | `cc.Sprite` | `null` | Sprite component displaying the revealed item graphic. |
| **`itemSfList`** | `BonusItemSpriteFrame[]` | `[]` | Array mapping `symbolId` strings to `cc.SpriteFrame` assets. |
| **`colorNormal`** | `cc.Color` | `#FFFFFF` | Default untinted color when player opens a prize chest. |
| **`colorDim`** | `cc.Color` | `#646464` | Dimmed grayscale color applied to unselected chests at end of feature. |
| **`soundBoxClick`**| `string` | `""` | SFX key played on chest tap. |
| **`soundBoxOpen`** | `string` | `""` | SFX key played when chest reveals prize. |
