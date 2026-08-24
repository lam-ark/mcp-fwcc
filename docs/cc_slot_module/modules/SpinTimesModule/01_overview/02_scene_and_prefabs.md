---
id: "cc_slot_module:SpinTimesModule:overview:scene_and_prefabs"
title: "SpinTimesModule Scene Node Hierarchy"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ SpinTimesModule Scene Node Hierarchy

---

## 1. Canonical Placement

Mounted under `Canvas/Director/UIManager`:

```text
Canvas/Director/UIManager
├── NormalSpinTimes [Component: SpinTimesModule, gameMode: NORMAL_GAME]
│   └── SpinTimesLabel [Component: cc.Label]
└── FreeSpinTimes [Component: SpinTimesModule, gameMode: FREE_GAME]
    └── SpinTimesLabel [Component: cc.Label]
```
