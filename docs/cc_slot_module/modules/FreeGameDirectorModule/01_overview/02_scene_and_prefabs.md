---
id: "cc_slot_module:FreeGameDirectorModule:overview:scene_and_prefabs"
title: "FreeGameDirectorModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ FreeGameDirectorModule Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement (Cocos Creator 2.4 Production Tree)

Inspected live from production scenes (`g9000L` / `g9666L`), `FreeGameDirectorModule` resides on `FreeGamePrefab` under `Canvas/Director/GameMode`:

```text
Canvas/Director/GameMode/FreeGamePrefab [Node with Components]
├── [Component 1] BaseGameMode
├── [Component 2] FreeGameDirectorModule (Spin loop controller & spins counter)
├── [Component 3] FreeGameWriterModule (Script queue generator)
├── [Component 4] GameLogicEventHandler
├── [Component 5] OnAddSlotModule
└── [Children Nodes]:
    ├── SlotTableModule (SlotTableModule, TableModuleConfig, SlotTableData, SlotTableNearWinModule)
    ├── SlotTablePaylineModule (SlotTablePaylineModule, PaylineConfig, SlotTablePaylineData)
    ├── TransformSymbolModule (TransformSymbolModule, TransformSymbolConfig, TransformSymbolData)
    └── SymbolManger (SlotSymbolManager)
```

---

## 2. Prefab Activation

Hidden (`active: false` or `opacity: 0`) during Normal spins; activated by `GameDirector` upon receiving Free Spins trigger packets from backend.
