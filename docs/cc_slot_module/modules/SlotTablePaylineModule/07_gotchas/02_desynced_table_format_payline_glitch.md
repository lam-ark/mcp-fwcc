---
id: "cc_slot_module:SlotTablePaylineModule:gotchas:desynced_table_format_payline_glitch"
title: "Gotcha: Desynchronized Table Format on Expanding Grid"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "gotchas", "table_format", "desync"]
---

# 🛑 Gotcha: Desynchronized Table Format on Expanding Grid

---

## 1. Symptom & Visual Defect

In games featuring expanding reels (e.g. 3-3-3-3-3 expanding to 3-4-4-4-3), win line overlays and boxes appear shifted or fail to cover the expanded top row.

---

## 2. Root Cause

If the expanding reel component alters `TableModuleConfig.TABLE_FORMAT` without emitting `TABLE_FORMAT_CHANGED` on `moduleEvent`, `PaylineConfig.TABLE_CONFIG.format` retains the initial 5x3 configuration, causing `PaylineUtils` to compute incorrect cell Y-coordinates.

---

## 3. Standard Code Fix

Always dispatch `TABLE_FORMAT_CHANGED` when modifying matrix dimensions:

```typescript
this.moduleEvent.emit("TABLE_FORMAT_CHANGED", {
    tableFormat: [3, 4, 4, 4, 3]
});
```
