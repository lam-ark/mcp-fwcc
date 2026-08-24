---
id: "cc_slot_module:systems:cascade_and_avalanche_system:mega_symbols_and_variable_height_grids"
title: "Mega Symbols & Variable-Height Grids in Cascade Engine"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "cascade", "mega_symbols", "variable_height", "format_matrix"]
---

# 🧱 Mega Symbols & Variable-Height Grids in Cascade Engine

---

## 1. Mega Symbol Code String Format

In cascading slot games with variable symbol heights, symbols are encoded as:
$$\text{SymbolString} = \text{SymbolCode}\_\text{Width}\_\text{Height}$$

Examples:
- `A_1_1`: Symbol `A`, 1 cell wide, 1 cell high (Standard).
- `W_1_2`: Symbol `W` (Wild), 1 cell wide, 2 cells high (Tall Mega).
- `K_1_3`: Symbol `K`, 1 cell wide, 3 cells high (Full Reel Mega).

---

## 2. Dynamic Center Offset Calculation

For a symbol with `size > 1`, the visual node is anchored to the bottom-most cell coordinate, with its Y-position adjusted upward by half the excess height:

$$y_{\text{node}} = y_{\text{bottom}} + (\text{size} - 1) \times \text{cellSize.y} \times 0.5$$

```typescript
const position = this.tableConfig.positions[i][row];
if (size > 1) {
    symbol.setPosition(new cc.Vec2(position.x, position.y + (size - 1) * this.tableConfig.cellSize.y * 0.5));
} else {
    symbol.setPosition(position);
}
```

---

## 3. Z-Index / Sibling Sorting

When multi-height symbols drop, `VerticalCascadeModule` calls:
```typescript
this.symbolManager.updateSymbolSiblingIndex(eno.ArrayUtils.flatOnce(this.listSymbols).filter(Boolean));
```
Ensuring taller symbols render on appropriate depth layers without clipping adjacent single-height tiles.
