---
id: "cc_slot_module:FortuneWheelGameDirector:overview:scene_and_prefabs"
title: "FortuneWheelGameDirector Scene Hierarchy & Prefabs"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "overview", "scene", "prefabs"]
---

# 🌳 FortuneWheelGameDirector Scene Hierarchy & Prefabs

## 1. Scene Graph Hierarchy

Mounted under `Canvas/Director/GameMode/FortuneWheel`:

```text
Canvas (cc.Canvas)
└── Canvas/Director
    └── Canvas/Director/GameMode
        └── FortuneWheel ➔ [Mounted: FortuneWheelGameDirector, FortuneWheelGameWriter]
            ├── WheelTable (FortuneWheelModule, FortuneWheelModuleConfig, FortuneWheelModuleData)
            │   ├── WheelRotatingDisk (Sprite / Spine rotating wheel)
            │   └── WheelPointer (Ticking pin indicator)
            ├── SpinButton (cc.Button - triggers ON_SPIN_WHEEL)
            └── LabelCountDown (cc.Label - 15s auto-spin timer)
```
