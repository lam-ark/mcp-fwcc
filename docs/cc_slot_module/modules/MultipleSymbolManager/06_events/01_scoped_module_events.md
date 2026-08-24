---
id: "cc_slot_module:MultipleSymbolManager:events:scoped_module_events"
title: "MultipleSymbolManager Scoped Module Events"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "events", "scoped_events", "moduleEvent"]
---

# 📡 MultipleSymbolManager Scoped Module Events

---

## 1. Scoped Events Summary

`MultipleSymbolManager` functions as an in-memory symbol allocation and pool management service. It is invoked directly through its public API surface (`initSymbolPool`, `getSymbolFromPool`, `removeSymbol`, `removeAllSymbols`, `updateSymbolSiblingIndex`) by `SlotTableModule` and `SlotReelModule`.

---

## 2. Debug & Lifecycle Event Bindings

Like its parent `SlotSymbolManager`, in developer builds (`CC_DEV`), `MultipleSymbolManager` registers debug inspect handlers:

| Event Name | Source | Handler | Purpose |
| :--- | :--- | :--- | :--- |
| `show-log-using-symbols` | `cc.director` | `showLogUsingSymbols()` | Outputs count and details of active checked-out symbols. |
| `show-log-using-symbols-owner` | `cc.director` | `showLogUsingSymbolsWithOwner()` | Groups active symbols by owning reel or module. |

In production builds, `MultipleSymbolManager` operates entirely via direct method invocations without event bus dispatch overhead.
