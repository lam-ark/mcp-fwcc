---
id: "cc_slot_module:WinEffectModule:overview:scene_and_prefabs"
title: "WinEffectModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ WinEffectModule Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement

Located on the `WinEffect` node under `CutsceneControl`:

```text
Canvas/Director/CutsceneControl
└── WinEffect [Component: WinEffectModule]
    ├── Overlay [cc.Sprite, cc.Button]
    ├── fastParticle [cc.ParticleSystem, cc.Animation]
    └── WinInfo
        ├── CoinsEffect [CoinsEffect]
        │   └── CoinParticle [cc.ParticleSystem]
        ├── Winamount [cc.Label]
        └── title [cc.Sprite]
```
