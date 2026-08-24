---
id: "cc_slot_module:IntroGameModule:overview:scene_and_prefabs"
title: "IntroGameModule Scene Placement & Hierarchy"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ IntroGameModule Scene Placement & Hierarchy

---

## 1. Inspected Scene Node Placement

Mounted on the `IntroGame` node under `Director`:

```text
Canvas/Director
└── IntroGame [Component: IntroGameModule]
    ├── Background [cc.Sprite]
    ├── ProgressBar [cc.Node]
    ├── DoNotShowAgain [cc.Toggle / cc.Node]
    └── BtnJoinGame [cc.Button]
```
