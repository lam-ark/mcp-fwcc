---
id: "cc_slot_module:JackpotWinModule:overview:scene_and_prefabs"
title: "JackpotWinModule Scene Hierarchy & Structure"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ JackpotWinModule Scene Hierarchy & Structure

---

## 1. Inspected Scene Placement

Located under `Canvas/Director/CutsceneControl/JackpotWin`:

```text
Canvas/Director/CutsceneControl
└── JackpotWin [Component: JackpotWinModule]
    ├── Overlay [cc.Sprite, cc.Button]
    ├── Title [cc.Sprite / sp.Skeleton]
    ├── WinAmount [cc.Label]
    └── CoinsEffect [Component: CoinsEffect / cc.ParticleSystem]
```
