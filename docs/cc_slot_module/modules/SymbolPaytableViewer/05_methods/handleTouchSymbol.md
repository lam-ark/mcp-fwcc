---
id: "cc_slot_module:SymbolPaytableViewer:methods:handleTouchSymbol"
title: "SymbolPaytableViewer.handleTouchSymbol Method"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "methods", "handleTouchSymbol", "coordinate_math", "matrix"]
---

# 📖 `SymbolPaytableViewer.handleTouchSymbol()`

---

## 1. Method Overview & Signature

Converts raw touch coordinates on the slot reel grid into 2D column and row matrix indices, looks up the corresponding symbol payout data, and positions the floating callout tooltip.

```typescript
protected handleTouchSymbol(event: cc.Event.EventTouch): void
```

---

## 2. Trigger Source & Execution Context

- **Trigger Event**: Fired by `Node.EventType.TOUCH_END` on `this.touchHolder`.
- **Pre-condition Guard**: Requires `this.gameSettings.currentGameState === GAME_STATE_ENUM.IDLE`. If reels are spinning, cascade active, or cutscenes playing, touches are safely ignored.

---

## 3. Mathematical Coordinate Conversion Breakdown

The coordinate conversion maps world space touches to zero-based matrix indices `[colIndex][rowIndex]`:

1. **Local Space Transform**:
   ```typescript
   const worldTouch = event.getLocation();
   const localTouch = this.touchHolder.convertToNodeSpaceAR(new cc.Vec2(worldTouch.x, worldTouch.y));
   ```
2. **Column Calculation ($X$-Axis)**:
   Given `TABLE_FORMAT` length $N$ (columns) and `SYMBOL_WIDTH` $W$:
   $$\text{originX} = \text{localTouch.x} + \frac{W \times N}{2}$$
   $$\text{colIndex} = \left\lfloor \frac{\text{originX}}{W} \right\rfloor$$
3. **Row Calculation ($Y$-Axis with Inverted Screen Space)**:
   Given column row count $R = \text{TABLE_FORMAT}[\text{colIndex}]$ and `SYMBOL_HEIGHT` $H$:
   $$\text{originY} = \text{localTouch.y} + \frac{H \times R}{2}$$
   $$\text{rawRowIndex} = \left\lfloor \frac{\text{originY}}{H} \right\rfloor$$
   $$\text{rowIndex} = R - 1 - \text{rawRowIndex}$$
4. **Symbol Code Retrieval**: Calls `this.getSymbolCode(colIndex, rowIndex)` to query active symbol type (`"A"`, `"K"`, `"WILD"`, `"SCATTER"`).
5. **Directional Callout Positioning**: Computes center column offset:
   $$\text{direction} = \text{colIndex} \le \left\lfloor \frac{N}{2} \right\rfloor ? \text{LEFT\_TO\_RIGHT} : \text{RIGHT\_TO\_LEFT}$$
6. **Presentation**: Dispatches `showSymbolInfo(symbolData)` to `SymbolPayoutViewer`.

---

## 4. Complete Source Code Implementation

```typescript
protected handleTouchSymbol(event): void {
    const gameState = this.gameSettings.currentGameState;
    if (gameState !== GAME_STATE_ENUM.IDLE) {
        return;
    }
    const { TABLE_FORMAT, SYMBOL_WIDTH, SYMBOL_HEIGHT } = this._config;
    let worldTouch = event.getLocation();
    const localTouch = this.touchHolder.convertToNodeSpaceAR(new cc.Vec2(worldTouch.x, worldTouch.y));

    const x = localTouch.x + (SYMBOL_WIDTH * TABLE_FORMAT.length) / 2;
    const colIndex = Math.floor(x / SYMBOL_WIDTH);

    const colRows = TABLE_FORMAT[colIndex];
    const y = localTouch.y + (SYMBOL_HEIGHT * colRows) / 2;
    const rawRowIndex = Math.floor(y / SYMBOL_HEIGHT);
    const rowIndex = colRows - 1 - rawRowIndex;

    const symbolCode = this.getSymbolCode(colIndex, rowIndex);
    if (!symbolCode) {
        return this.hideSymbolInfo();
    }

    const midIndex = Math.floor(TABLE_FORMAT.length / 2);
    const isSpecialSymbol = this._config.SPECIAL_SYMBOLS.indexOf(symbolCode) !== -1;

    const symbolData = {
        symbolWidth: SYMBOL_WIDTH,
        symbolHeight: SYMBOL_HEIGHT,
        symbolCode,
        isSpecialSymbol,
        symbolPos: this.getSymbolPosition(colIndex, rowIndex),
        direction: colIndex <= midIndex ? Layout.HorizontalDirection.LEFT_TO_RIGHT : Layout.HorizontalDirection.RIGHT_TO_LEFT
    };
    this.showSymbolInfo(symbolData);
}
```
