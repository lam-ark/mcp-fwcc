---
id: "cc_slot_module:TrialModeManager:overview:scene_and_prefabs"
title: "TrialModeManager Scene Node Hierarchy"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ TrialModeManager Scene Node Hierarchy

---

## 1. Canonical Hierarchy Placement

Mounted under `Canvas/Director/TrialMode`:

```text
Canvas/Director/TrialMode [Component: TrialModeManager]
├── TrialModePanel [Component: cc.Node, Optional Selection Modal]
│   └── OptionHolder [Component: cc.Node, Container for Option Buttons]
│       ├── OptionFreeSpins [Component: Button]
│       ├── OptionBonusGame [Component: Button]
│       └── OptionBigWin [Component: Button]
└── BackToRealButton [Component: Button]
```
