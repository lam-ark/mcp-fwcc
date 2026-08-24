---
id: "cc_slot_module:systems:table_engine:mega_symbols_and_irregular_grids"
title: "Mega Symbols, Multi-Cell Sizing & Irregular Grids"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "table_engine", "mega_symbols", "irregular_grids", "megaways", "geometry", "flow"]
---

# 🗿 Mega Symbols, Multi-Cell Sizing & Irregular Grids

---

## 1. Multi-Cell Symbol Geometry ($2\times 2$, $3\times 3$, $1\times 3$)

In modern slot games, symbols can span multiple matrix rows and columns (e.g. Giant Symbols, Full Reel Expanding Wilds):

```mermaid
graph TD
    subgraph 3x3 Mega Symbol Grid Coverage
        M1["[Col 1, Row 2]"] --- M2["[Col 2, Row 2]"] --- M3["[Col 3, Row 2]"]
        M4["[Col 1, Row 1]"] --- MasterNode["Master Node Anchor (Center: Col 2, Row 1)"] --- M6["[Col 3, Row 1]"]
        M7["[Col 1, Row 0]"] --- M8["[Col 2, Row 0]"] --- M9["[Col 3, Row 0]"]
    end
```

### Architectural Implementation:
1. **Master Anchor Node**: A single master `SlotSymbolModule` node is allocated at the visual center of the mega block, hosting the scaled Spine animation or large texture.
2. **Virtual / Ghost Cells**: Surrounding matrix coordinates reference the master symbol's ID in math evaluation while disabling their individual visual sprites (`active = false`), preventing duplicate overdraw and conflicting draw calls.

---

## 2. Irregular & Dynamic Grids (Megaways & Variable Heights)

For games with dynamic row heights per column (e.g. 3-4-5-4-3 layouts or dynamic Megaways):

```typescript
// Configured in GameConfig / TableModuleConfig
export const TABLE_FORMAT = [
    3, // Col 0: 3 rows
    4, // Col 1: 4 rows
    5, // Col 2: 5 rows (center reel)
    4, // Col 3: 4 rows
    3  // Col 4: 3 rows
];
```

* `SlotTableModule` reads `TABLE_FORMAT` during initialization to dynamically instantiate varying numbers of symbol nodes per reel column.
* Reel mask heights and bounce easing bounding boxes are computed dynamically per column rather than assuming a uniform rectangular grid.
