---
id: "cc_slot_module:BonusGameTableModule:method:openAllBoxes"
title: "BonusGameTableModule.openAllBoxes() Method Specification"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "method", "openAllBoxes", "dim"]
---

# `BonusGameTableModule.openAllBoxes(result: any): Promise<void>`

---

## 1. Method Signature
```typescript
public openAllBoxes(result: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Reads `this.result = result || this._data.getBonusGameMatrix()`.
2. Updates distribution counts via `this.updateCurrentMatrix()`.
3. Loops through `this.listBoxes`:
   * If `box["isOpen"] === false`:
     * Retrieves simulated remaining value via `this.getRandomValue()`.
     * Emits `box.emit("BOX_OPEN", randValue)`.
     * Emits `box.emit("DIM")` to grey out the box.
4. Returns a `Promise` that resolves after `this._config.DELAY_OPEN_ALL_BOX` seconds.

---

## 3. Un-truncated Source Code Implementation
```typescript
openAllBoxes(result: any): Promise<void> {
    this.result = result || this._data.getBonusGameMatrix();
    if (this._config.TOTAL_ITEM === 1) {
        return Promise.resolve();
    }
    this.updateCurrentMatrix();
    for (let i = 0; i < this.listBoxes.length; i++) {
        if (this.listBoxes[i]["isOpen"] === false) {
            let randValue = this.getRandomValue();
            this.listBoxes[i].emit("BOX_OPEN", randValue);
            this.listBoxes[i].emit("DIM");
        }
    }
    return new Promise(resolve => {
        this.scheduleOnce(() => {
            resolve();
        }, this._config.DELAY_OPEN_ALL_BOX);
    });
}
```
