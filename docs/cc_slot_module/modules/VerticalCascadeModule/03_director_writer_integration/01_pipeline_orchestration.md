---
id: "cc_slot_module:VerticalCascadeModule:director_writer:pipeline_orchestration"
title: "VerticalCascadeModule 3-Tier Pipeline Orchestration"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 VerticalCascadeModule 3-Tier Pipeline Orchestration

---

## 1. 3-Tier Command Flow

```text
GameModeDirectorModule / Writer
       │
       ▼ (moduleEvent: TABLE_START_RESPIN, TABLE_STOP_RESPIN)
VerticalCascadeModule
       │
       ▼ (getSymbolByIndex, returnSymbol)
SlotSymbolManager & Cocos Render Tree
```

1. **Director Layer**: `GameModeDirectorModule` iterates through cascade steps via `ScriptExecutor`.
2. **Avalanche Engine (`VerticalCascadeModule`)**: Controls physics falls and returns Promise.
3. **Symbol Pool Layer (`SlotSymbolManager`)**: Provides recycled symbol nodes.
