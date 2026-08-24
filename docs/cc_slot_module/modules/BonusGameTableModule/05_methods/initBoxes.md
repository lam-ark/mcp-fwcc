---
id: "cc_slot_module:BonusGameTableModule:method:initBoxes"
title: "BonusGameTableModule.initBoxes() Method Specification"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "method", "initBoxes", "instantiate"]
---

# `BonusGameTableModule.initBoxes(): void`

---

## 1. Method Signature
```typescript
public initBoxes(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Reads `{ COL_NUMBER, ROW_NUMBER, WIDTH_STEP, HEIGHT_STEP }` from `this._config`.
2. Calculates top-left grid coordinates:
   * `this.startX = (-COL_NUMBER / 2) * WIDTH_STEP + WIDTH_STEP / 2;`
   * `this.startY = (ROW_NUMBER / 2) * HEIGHT_STEP - HEIGHT_STEP / 2;`
3. Calculates `maxBox = COL_NUMBER * ROW_NUMBER`.
4. Loops `index = 0` to `maxBox - 1`:
   * Instantiates `boxPrefab`.
   * Adds as child to `this.node`.
   * Sets `box["boxIndex"] = index`.
   * Pushes into `this.listBoxes`.
   * Sets local position via `this.getPosByIndex(index)`.
   * Emits `box.emit("INIT", index, this._config)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
initBoxes(): void {
    const { COL_NUMBER, ROW_NUMBER, WIDTH_STEP, HEIGHT_STEP } = this._config;
    this.startX = (-COL_NUMBER / 2) * WIDTH_STEP + WIDTH_STEP / 2;
    this.startY = (ROW_NUMBER / 2) * HEIGHT_STEP - HEIGHT_STEP / 2;

    const maxBox = COL_NUMBER * ROW_NUMBER;
    this.listBoxes = [];
    this.resultList = [];
    for (let index = 0; index < maxBox; index++) {
        const box = instantiate(this.boxPrefab);
        this.node.addChild(box);
        box.active = true;
        box["boxIndex"] = index;
        this.listBoxes.push(box);
        box.setPosition(this.getPosByIndex(index));
        box.emit("INIT", index, this._config);
    }
}
```
