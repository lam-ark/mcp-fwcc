---
id: "cc_slot_module:TableModuleConfig:overview:scene_and_prefabs"
title: "TableModuleConfig Scene Hierarchy & Placement"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "overview", "scene"]
---

# 🌳 TableModuleConfig Scene Hierarchy & Placement

## 1. Scene Hierarchy Placement

Mounted directly alongside `SlotTableModule` on `Canvas/Director/GameMode/BoardG/Table`:

```text
Canvas/Director/GameMode/BoardG/Table
├── SlotTableModule (Grid orchestrator)
├── TableModuleConfig ➔ [Grid geometry, speed modes, SYMBOL_INDEXES]
├── SlotTableData (State container)
└── SlotSymbolManager (Symbol pooling)
```

---

## 2. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`SYMBOL_WIDTH`** | `number` | `180` | Horizontal pitch between column reels in pixels. |
| **`SYMBOL_HEIGHT`**| `number` | `160` | Vertical pitch between symbol rows in pixels. |
| **`BUFFER_TOP`** | `number` | `1` | Extra symbols rendered above visible viewport for seamless scrolling. |
| **`BUFFER_BOT`** | `number` | `1` | Extra symbols rendered below visible viewport. |
| **`TABLE_FORMAT`** | `number[]` | `[3, 3, 3, 3, 3]` | Array defining row count per column. |
