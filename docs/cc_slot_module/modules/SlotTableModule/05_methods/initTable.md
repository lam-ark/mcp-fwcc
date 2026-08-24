---
id: "cc_slot_module:SlotTableModule:method:initTable"
title: "SlotTableModule.initTable() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "initTable", "instantiate"]
---

# `SlotTableModule.initTable(): void`

---

## 1. Method Signature
```typescript
public initTable(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Computes horizontal starting offset:
   `this.START_X = -(this.TOTAL_COLS / 2 - 0.5) * this.SYMBOL_WIDTH;`
2. Loops `col = 0` to `this.TOTAL_COLS - 1`:
   * Instantiates reel node from `this.reelPrefab` via `this.createReelNode(col)`.
   * Sets node position: `node.setPosition(this.START_X + col * this.SYMBOL_WIDTH, 0)`.
   * Adds as child to `this.table`.
   * Retrieves `SlotReelModule` component and calls `initReel({ reelIndex: col, config: this.config, pool: this.symbolManager })`.
   * Pushes component into `this.reels`.

---

## 3. Un-truncated Source Code Implementation
```typescript
initTable(): void {
    this.START_X = -(this.TOTAL_COLS / 2 - 0.5) * this.SYMBOL_WIDTH;
    for (let col = 0; col < this.TOTAL_COLS; col++) {
        const reelNode = this.createReelNode(col);
        const reelComponent = reelNode.getComponent(SlotReelModule);
        reelComponent.initReel({ reelIndex: col, config: this.config, pool: this.symbolManager });
        this.reels.push(reelComponent);
    }
}
```
