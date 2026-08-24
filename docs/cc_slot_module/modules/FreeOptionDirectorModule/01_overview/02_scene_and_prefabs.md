---
id: "cc_slot_module:FreeOptionDirectorModule:overview:scene_and_prefabs"
title: "FreeOptionDirectorModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ FreeOptionDirectorModule Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement (Cocos Creator 2.4 Production Tree)

Inspected live from production scenes (`g9000L` / `g9666L`), `FreeOptionDirectorModule` sits on `FreeOptionPrefab` under `Canvas/Director/GameMode`:

```text
Canvas/Director/GameMode/FreeOptionPrefab [Node with Components]
├── [Component 1] BaseGameMode
├── [Component 2] FreeOptionDirectorModule (Volatility modal director)
├── [Component 3] GameLogicEventHandler
├── [Component 4] OnAddSlotModule
└── [Children Nodes]:
    ├── Gradient (cc.Sprite, cc.BlockInputEvents - Modal backdrop)
    ├── options (cc.Layout - Horizontal option cards layout)
    │   ├── option_1 (cc.Sprite, cc.Button - High volatility choice)
    │   └── option_2 (cc.Sprite, cc.Button - Low volatility choice)
    └── CountDownText (cc.Label - Auto-pick fallback timer)
```

---

## 2. Option Selection Routing

Clicking `option_1` or `option_2` triggers `FreeOptionDirectorModule.onOptionSelected(optionId)` to notify the backend and launch `FreeGamePrefab`.
