---
id: "cc_slot_module:NormalGameDirectorModule:overview:scene_and_prefabs"
title: "NormalGameDirectorModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ NormalGameDirectorModule Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `NormalGameDirectorModule` sits on `MainGamePrefab`:

```text
Canvas/Director/GameMode/MainGamePrefab [Node]
├── BaseGameMode
├── NormalGameDirectorModule (Spin loop director)
├── NormalGameWriterModule (Script queue generator)
├── GameLogicEventHandler
├── OnAddSlotModule
└── [Child Modules Managed via moduleList]:
    ├── SlotTableModule (SlotTableModule, TableModuleConfig, SlotTableData, SlotTableNearWinModule)
    ├── SlotTablePaylineModule (SlotTablePaylineModule, PaylineConfig, SlotTablePaylineData)
    ├── TransformSymbolModule (TransformSymbolModule, TransformSymbolConfig, TransformSymbolData)
    └── SymbolManger (SlotSymbolManager)
```
