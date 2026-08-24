---
id: "cc_slot_module:systems:table_engine:z_index_priority_layer_sorting"
title: "Z-Index Layer Hierarchy & Symbol Sorting Algorithm"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "table_engine", "z_index", "sorting", "layer_hierarchy", "spine", "flow"]
---

# 🥞 Z-Index Layer Hierarchy & Symbol Sorting Algorithm

---

## 1. Visual Layer Hierarchy & Z-Index Stack

In dynamic slot games with overlapping animations, expanding Wilds, and win celebrations, visual rendering layers must follow a strict **Z-Order Hierarchy** to prevent foreground clipping:

```mermaid
graph TD
    subgraph Z-Order Rendering Priority (Top to Bottom)
        L5["Level 5: Sticky Wild / Overlay Modals (Z = 500)"]
        L4["Level 4: Active Winning Spine Animations (Z = 400)"]
        L3["Level 3: Payline Win Frames & Highlighting (Z = 300)"]
        L2["Level 2: High Payout Static Symbols (Z = 200)"]
        L1["Level 1: Low Payout Static Symbols (Z = 100)"]
        L0["Level 0: Rolling Blur Symbols & Buffer Nodes (Z = 0)"]
    end
```

---

## 2. Dynamic Sorting Algorithm (`SlotSymbolManager.sortSymbols()`)

When symbols transition from rolling to static display, or from idle state to winning celebration, `SlotSymbolManager` dynamically calculates node `zIndex` (or `setSiblingIndex` in Cocos Creator 2.4):

```typescript
// Conceptual algorithm in SlotSymbolManager
sortSymbols(symbolNodeList: cc.Node[]): void {
    symbolNodeList.forEach((node) => {
        const symbolComponent = node.getComponent(SlotSymbolModule);
        let baseZIndex = 0;

        if (symbolComponent.isSticky) {
            baseZIndex = 500;
        } else if (symbolComponent.isWinningAnimationPlaying) {
            baseZIndex = 400;
        } else if (symbolComponent.isHighSymbol) {
            baseZIndex = 200;
        } else {
            baseZIndex = 100;
        }

        // Secondary tie-breaker: bottom-to-top rendering order
        node.zIndex = baseZIndex + (NUMBER_ROW - symbolComponent.rowIndex);
    });
}
```

---

## 3. Spine Skeleton Overdraw & Clipping Guards

1. **Reel Mask Boundary Clamping**: By default, each reel column is wrapped inside a `cc.Mask` component. Winning Spine skeletons with large explosion VFX are reparented to an overlay container above the table mask (`Table/WinOverlayContainer`) to allow particle FX to burst across adjacent reels without being clipped by column masks.
2. **Post-Animation Reset**: When win line blinking concludes, symbols are immediately reparented back to their original reel column and their `zIndex` is restored to base idle priority.
