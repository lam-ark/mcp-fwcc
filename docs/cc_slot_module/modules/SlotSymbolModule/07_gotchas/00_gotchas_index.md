---
id: "cc_slot_module:SlotSymbolModule:gotchas:index"
title: "SlotSymbolModule Gotchas & Pitfalls Index"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SlotSymbolModule Gotchas & Pitfalls Index

---

## 1. Known Gotchas Summary Table

| Gotcha Document | Symptom | Root Cause | Fix Strategy |
| :--- | :--- | :--- | :--- |
| **[`01_spine_skeleton_leak_on_pool_recycle.md`](./01_spine_skeleton_leak_on_pool_recycle.md)** | GPU VRAM steadily increases during auto-spins until mobile browser crashes. | Returning nodes to `cc.NodePool` without clearing `spine.skeletonData = null`. | Always invoke `resetBeforeBackToPool()` in `SlotSymbolManager.removeSymbol()`. |
| **[`02_multi_cell_symbol_offset_desync.md`](./02_multi_cell_symbol_offset_desync.md)** | 1x3 Mega Symbols render misaligned, overlapping adjacent reel symbols. | Incorrect `initPositionByType()` anchor calculation ignoring `(size.y / 2 - 0.5) * SYMBOL_HEIGHT`. | Use standard `offsetY` formula in `SlotReelModule`. |
