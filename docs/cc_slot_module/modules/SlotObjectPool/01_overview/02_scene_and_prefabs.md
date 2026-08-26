---
id: "cc_slot_module:SlotObjectPool:overview:scene_and_prefabs"
title: "SlotObjectPool Scene Placement & Prefab Configuration"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "overview", "scene", "prefabs"]
---

# 🌲 SlotObjectPool Scene Placement & Prefab Configuration

---

## 1. Canonical Scene Node Anchor

`SlotObjectPool` is mounted on dedicated container nodes under the Table or UI layer:

```text
Canvas/Director/GameMode/BoardG/Payline
├── WinFramePool (SlotObjectPool - prefabObject: WinFramePrefab, initCount: 15)
└── LineDrawingPool (SlotObjectPool - prefabObject: LineSegmentPrefab, initCount: 20)
```

---

## 2. Inspector Properties Schema

| Property | Type | Default | Description |
| :--- | :--- | :---: | :--- |
| **`prefabObject`** | `cc.Prefab` | `null` | Prefab instantiated to populate the pool. |
| **`initCount`** | `number` | `15` | Number of nodes pre-warmed during `onLoad()`. |
