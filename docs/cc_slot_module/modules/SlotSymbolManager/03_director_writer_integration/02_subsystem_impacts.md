---
id: "cc_slot_module:SlotSymbolManager:director_writer:subsystem_impacts"
title: "SlotSymbolManager Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SlotSymbolManager Subsystem Impact Matrix

## 1. Subsystems Cross-Reference

| Action | `SlotReelModule` | `SlotTablePaylineModule` | `SlotSymbolModule` | `cc.NodePool` |
| :--- | :--- | :--- | :--- | :--- |
| `getSymbolByIndex(idx, owner)` | Allocates visual slot | Binds symbol to payline index | Sets index & owner metadata | Pops node or instantiates |
| `removeAllSymbols()` | Clears column slots | None | Resets Spine state to default | Reclaims non-sticky instances |
| `updateSymbolSiblingIndex()`| None | Reorders winning symbols | Evaluates `isHighlight` property | Mutates `siblingIndex` |
