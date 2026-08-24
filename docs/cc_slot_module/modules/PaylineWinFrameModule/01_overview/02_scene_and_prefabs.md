---
id: "cc_slot_module:PaylineWinFrameModule:overview:scene_and_prefabs"
title: "PaylineWinFrameModule Scene Graph Placement"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ PaylineWinFrameModule Scene Graph Placement

---

## 1. Scene Placement

Attached as a child node under `Payline` inside `BoardG`:

```text
Canvas/Director/GameMode/BoardG/Payline
└── WinFramesLayer (PaylineWinFrameModule)
    └── Container (cc.Node - Holds instantiated win border boxes)
```

---

## 2. Inspector Properties

| Property | Type | Function |
| :--- | :--- | :--- |
| `container` | `cc.Node` | Parent node hosting active win frame prefabs. |
| `template` | `cc.Prefab` | Prefab asset containing the Spine or Sprite border animation. |
