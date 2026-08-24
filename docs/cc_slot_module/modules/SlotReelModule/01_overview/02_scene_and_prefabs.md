---
id: "cc_slot_module:SlotReelModule:overview:scene_and_prefabs"
title: "SlotReelModule Scene Placement, Prefabs & Companion Hierarchy"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "node_tree"]
---

# 🌳 SlotReelModule Scene Placement & Companion Hierarchy

---

## 1. Canonical Scene Node Hierarchy

`SlotReelModule` instances (`Reel_0` through `Reel_N`) are instantiated as children of `SlotTableModule` inside column clipping masks:

```text
Canvas/Director/GameMode/BoardG/Table (SlotTableModule.ts)
├── ReelContainer_0 (cc.Mask)
│   └── Reel_0 (SlotReelModule.ts)
│       ├── Symbol_0 (SlotSymbolModule.ts)
│       ├── Symbol_1 (SlotSymbolModule.ts)
│       ├── Symbol_2 (SlotSymbolModule.ts)
│       └── TopBuffer_Symbol (SlotSymbolModule.ts)
├── ReelContainer_1 (cc.Mask)
│   └── Reel_1 (SlotReelModule.ts)
└── ReelContainer_N (cc.Mask)
    └── Reel_N (SlotReelModule.ts)
```

---

## 2. Companion Subsystems & Dependency Quad

| Role | Class Name | Asset / Node Location | Interaction Purpose |
| :--- | :--- | :--- | :--- |
| **Parent Table** | `SlotTableModule` | `Canvas/Director/GameMode/BoardG/Table` | Triggers `runReelSpin()`, `showResult()`, and handles stop callbacks. |
| **Symbol Pool** | `SlotSymbolManager` | `Canvas/Director/GameMode/BoardG/Table/SymbolManager` | Provides pooled nodes via `createSymbol()` / `createBlurSymbol()`. |
| **Configuration** | `TableModuleConfig` | Embedded in Table component | Provides `SYMBOL_WIDTH`, `SYMBOL_HEIGHT`, `TABLE_FORMAT`, buffer sizes. |
| **Symbol Module** | `SlotSymbolModule` | Attached to child symbol nodes | Controls visual state (Static, Blur, Spine) and size coordinates. |
