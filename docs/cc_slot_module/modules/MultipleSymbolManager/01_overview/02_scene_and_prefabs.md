---
id: "cc_slot_module:MultipleSymbolManager:overview:scene_and_prefabs"
title: "MultipleSymbolManager Scene Prefab Placement & Hierarchy"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🌳 MultipleSymbolManager Scene Prefab Placement & Hierarchy

---

## 1. Scene Graph Attachment Point

`MultipleSymbolManager` replaces `SlotSymbolManager` on the `SymbolPool` node under `SlotTableModule`:

```text
Canvas/Director/GameMode/MainGamePrefab
└── SlotTableModule
    └── SymbolPool (Node: MultipleSymbolManager.ts)
        ├── template: Points to "SymbolStandard.prefab"
        ├── initCount: 30
        └── specialSymbolTemplates:
            ├── [0] { symbolCode: "WILD", template: WildPrefab, initCount: 5 }
            └── [1] { symbolCode: "SCATTER", template: ScatterPrefab, initCount: 5 }
```
