---
id: "cc_slot_module:CutsceneController:overview:scene_and_prefabs"
title: "CutsceneController Scene Node Placement & Children Hierarchy"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ CutsceneController Scene Node Placement & Children Hierarchy

---

## 1. Inspected Scene Node Placement

Mounted on the `CutsceneControl` node directly under `Director`:

```text
Canvas/Director
└── CutsceneControl [Component: CutsceneController]
    ├── IntroFreeGame [IntroFreeGameModule]
    ├── JackpotWin [JackpotWinModule]
    ├── TotalWin [TotalWinModule]
    └── WinEffect [WinEffectModule]
```
