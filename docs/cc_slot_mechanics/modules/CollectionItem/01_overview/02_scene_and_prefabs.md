---
id: "cc_slot_mechanics:CollectionItem:overview:scene_and_prefabs"
title: "CollectionItem Scene Placement & Prefab Configuration"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "overview", "scene", "prefabs"]
---

# 🌲 CollectionItem Scene Placement & Prefab Configuration

---

## 1. Scene Anchor & Placement
- Mounted under the relevant table or game mode container node (e.g. `Canvas/Director/GameMode/BoardG`).

---

## 2. Inspector Properties Overview
Declared properties count: 5
- **`sprItem`** (`cc.Sprite`): default `null`
- **`lbItemName`** (`cc.Label`): default `null`
- **`lbCollection`** (`cc.Label`): default `null`
- **`prefix`** (`string`): default `''`
- **`itemFrames`** (`cc.SpriteFrame[]`): default `[]`
