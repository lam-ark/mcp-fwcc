---
id: "cc_slot_module:CoinsEffect:overview:scene_and_prefabs"
title: "CoinsEffect Scene Placement & Hierarchy"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ CoinsEffect Scene Placement & Hierarchy

---

## 1. Inspected Scene Node Placement

Mounted as a child node under win modals:

```text
Canvas/Director/CutsceneControl
├── WinEffect
│   └── WinInfo
│       └── CoinsEffect [Component: CoinsEffect]
│           └── CoinParticle [cc.ParticleSystem]
└── TotalWin
    └── coinsEffect [Component: CoinsEffect]
```
