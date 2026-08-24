---
id: "cc_slot_module:SlotSymbolManager:gotcha:missing_layer_config_priority_z_order_glitch"
title: "Gotcha: Missing Priority in GameConfig Breaks Sibling Z-Ordering"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "gotchas", "layer_config", "z_order"]
---

# ⚠️ Gotcha: Missing Priority in GameConfig Breaks Sibling Z-Ordering

## 1. Defect Symptom
During winning payline highlight cycles, expanding Wilds or Scatters are visually clipped or occluded beneath low-paying card symbols (10, J, Q).

---

## 2. Root Cause Analysis
`sortSymbols()` maps symbol codes to integer priorities via `this.layerConfig[code]`. If `GameConfig.SYMBOL_CONFIG` does not declare `Priority` or if `setGameConfig()` was not invoked, priorities default to `9999`, causing arbitrary Sibling Index placement.

---

## 3. Recommended Resolution
Ensure every symbol declared in `GameConfig.SYMBOL_CONFIG` defines an explicit `Priority` value (e.g. Wild: 1, Scatter: 2, HighPay: 3, LowPay: 4).
