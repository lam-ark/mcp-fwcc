---
id: "cc_slot_module:FortuneWheelGameDirector:overview:scene_and_prefabs"
title: "FortuneWheelGameDirector Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ FortuneWheelGameDirector Scene Node Placement & Prefab Structure

---

## 1. Scene Graph Placement

Mounted on `FortuneWheelPrefab` under `Canvas/Director/GameMode`:

```text
Canvas/Director/GameMode
└── FortuneWheelPrefab [Node]
    ├── BaseGameMode
    ├── FortuneWheelGameDirector (Wheel angular physics & sector settling)
    ├── GameLogicEventHandler
    └── WheelNode [Child Node]
        ├── WheelRim (sp.Skeleton / cc.Sprite - Rotating wheel disk)
        └── Indicator (sp.Skeleton - Stopper needle)
```

---

## 2. Injected Mode Lifecycle

Toggled by `GameDirector` when the server emits Fortune Wheel mini-game bonus triggers.
