---
id: "cc_slot_module:SlotSymbolManager:customization:production_game_case_study"
title: "Production Case Study: Dynamic Wild Sibling Index Layering"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "customization", "case_study"]
---

# 📖 Production Case Study: Dynamic Wild Sibling Index Layering

## 1. Context & Sibling Ordering Logic

In production slot games, when a 5-of-a-kind line hits across a row containing 2 Wilds and 3 High-Pay symbols:
1. `SlotTablePaylineModule` passes the 5 symbol nodes into `symbolManager.updateSymbolSiblingIndex()`.
2. `sortSymbols()` evaluates `layerConfig`: Wild (`Priority: 1`) receives lower array index than High-Pay (`Priority: 4`).
3. Sibling index sets Wilds at the top of the render hierarchy, preventing visual overlap glitches between adjacent Spine bounding boxes.
