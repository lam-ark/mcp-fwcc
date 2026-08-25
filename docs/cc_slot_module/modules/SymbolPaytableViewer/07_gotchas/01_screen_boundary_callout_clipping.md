---
id: "cc_slot_module:SymbolPaytableViewer:gotchas:01_screen_boundary_callout_clipping"
title: "Screen Boundary Callout Clipping"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "gotchas", "clipping"]
---

# ⚠️ Screen Boundary Callout Clipping

---

## 1. Solution

Flip horizontal layout direction based on `colIndex <= midIndex`:

```typescript
direction: colIndex <= midIndex 
    ? Layout.HorizontalDirection.LEFT_TO_RIGHT 
    : Layout.HorizontalDirection.RIGHT_TO_LEFT
```
