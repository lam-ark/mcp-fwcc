---
id: "cc_slot_module:SlotTableModule:gotcha:symbol_manager_pooling_race_condition"
title: "Gotcha: Symbol Pooling Race Condition on Sudden Resync"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "gotchas", "symbol_pooling", "race_condition"]
---

# ⚠️ Gotcha: Symbol Pooling Race Condition on Sudden Resync

## 1. Defect Symptom
When a player rapidly switches modes or reconnects while win line Spine animations are looping, symbols disappear or clone unexpectedly across columns.

---

## 2. Root Cause Analysis
`syncTable()` invokes `this.removeAllSymbols()` synchronously on line 90:
```typescript
// remove all symbols one time, be careful if other module is using symbols
this.removeAllSymbols();
```
If `SlotTablePaylineModule` or `WinEffectModule` is holding a reference to a symbol node that is concurrently returned to `SlotSymbolManager`'s `cc.NodePool`, the node gets reused by `resumeReel()` while still executing tween actions.

---

## 3. Recommended Resolution
Always invoke `SlotTablePaylineModule.clearPaylines()` before dispatching `SYNC_TABLE` to ensure all external references release their symbols before pooling.
