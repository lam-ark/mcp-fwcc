---
id: "cc_slot_module:PaylineFactory:overview:scene_and_prefabs"
title: "PaylineFactory Scene Node Placement & Prefab Configuration"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ PaylineFactory Scene Node Placement & Prefab Configuration

---

## 1. Inspected Scene Node Placement

Attached as a helper component on `SlotTablePaylineModule` or dedicated `PoolFactory` nodes:

```text
Canvas/Director/GameMode/MainGamePrefab
└── SlotTablePaylineModule [Node with Components]
    ├── SlotTablePaylineModule
    ├── PaylineFactory (Component: PaylineFactory)
    └── PaylineWinFrameModule
```

---

## 2. Inspector Properties

| Property | Type | Function |
| :--- | :--- | :--- |
| `poolItems` | `PoolItem[]` | Array of prefab registration entries (`name`, `prefab`, `initCount`). |
