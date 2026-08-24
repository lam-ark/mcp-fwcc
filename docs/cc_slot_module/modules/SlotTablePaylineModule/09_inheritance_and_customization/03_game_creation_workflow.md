---
id: "cc_slot_module:SlotTablePaylineModule:inheritance:game_creation_workflow"
title: "SlotTablePaylineModule Game Creation Workflow"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "inheritance", "workflow"]
---

# 📋 SlotTablePaylineModule Game Creation Workflow

---

## 1. Step-by-Step Checklist for New Slot Games

1. **Scene Graph Structure**: Attach `SlotTablePaylineModule` to a node `Payline` inside `BoardG`.
2. **Attach Companion Modules**: Add `PaylineConfig`, `SlotTablePaylineData`, and `SlotPaylineSchedule` onto the same node.
3. **Configure Payline Rules**:
   - In `PaylineConfig`, set `PAYLINE_TYPE` (Lines, AllWays, Cluster, ScatterPay).
   - Define `TABLE_CONFIG.cellSize` to match symbol cell dimensions.
   - For line games, populate `PAY_LINE_MATRIX` with all payline tracks.
4. **Wire Visual Layers**: Add child nodes with `PaylineSymbolModule`, `PaylineWinFrameModule`, `PaylineLineModule`, and `PaylineNumberModule`.
5. **Director Registration**: Ensure `Payline` is added to the active `GameModeDirectorModule.moduleList`.
