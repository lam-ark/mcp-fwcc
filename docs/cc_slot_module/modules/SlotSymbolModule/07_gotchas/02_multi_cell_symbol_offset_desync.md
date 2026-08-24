---
id: "cc_slot_module:SlotSymbolModule:gotcha:multi_cell_symbol_offset_desync"
title: "Gotcha: Multi-Cell Mega Symbol Vertical Alignment Desync"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "gotchas", "mega_symbols", "alignment_offset"]
---

# ⚠️ Gotcha: Multi-Cell Mega Symbol Vertical Alignment Desync

---

## 1. Symptom & Visual Defect
In games with $1\times 3$ full-reel stacked Wilds (e.g. Red Cliff `g9666L`), the top and bottom of the Wild symbol extend beyond the reel column boundary, clipping incorrectly or offsetting from adjacent regular $1\times 1$ symbols.

---

## 2. Root Cause
In standard Cocos 2D nodes, the anchor point is `(0.5, 0.5)` (center). A $1\times 3$ symbol with height $3 \times 160 = 480\text{px}$ must have its origin shifted up by half the extra height:
$$\text{offsetY} = \left(\frac{\text{size.y}}{2} - 0.5\right) \times \text{SYMBOL\_HEIGHT}$$
If this offset is omitted, the symbol center is positioned at the top row rather than spanning across all 3 rows.

---

## 3. Standard Formula Implementation
In `SlotReelModule.initPositionByType()`:
```typescript
const offsetY = size.y > this.DEFAULT_SIZE.y ? (size.y / 2 - 0.5) * this.SYMBOL_HEIGHT : 0;
const y = startY - index * this.SYMBOL_HEIGHT + offsetY;
```
