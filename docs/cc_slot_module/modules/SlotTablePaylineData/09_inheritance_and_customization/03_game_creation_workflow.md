---
id: "cc_slot_module:SlotTablePaylineData:inheritance:game_creation_workflow"
title: "SlotTablePaylineData Game Creation Workflow"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "inheritance", "workflow"]
---

# 📋 SlotTablePaylineData Game Creation Workflow

---

## 1. Step-by-Step Checklist for New Slot Games

1. **Mount to Payline Node**: Attach `SlotTablePaylineData` alongside `SlotTablePaylineModule` and `PaylineConfig`.
2. **Configure Backend Payline Keys**: Verify that server response keys map to `registeredKeys` (`payLines`, `normalGamePayLines`, `freeGamePayLines`).
3. **Verify Pay Type**: In `PaylineConfig`, confirm that `PAYLINE_TYPE` accurately specifies `Lines`, `AllWays`, `Cluster`, or `ScatterPay`.
4. **Test Coordinate Output**: Verify `getWinSymbols()` in debug console to ensure row and column indices align with reel layout.
