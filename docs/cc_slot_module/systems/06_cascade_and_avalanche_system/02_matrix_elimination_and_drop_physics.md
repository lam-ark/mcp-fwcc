---
id: "cc_slot_module:systems:cascade_and_avalanche_system:matrix_elimination_and_drop_physics"
title: "Matrix Elimination Mathematics & Drop Physics"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "cascade", "drop_physics", "matrix_math", "tween_easing"]
---

# 📐 Matrix Elimination Mathematics & Drop Physics

---

## 1. Column Shift Mathematics (`getOldSymbols`)

For each column containing eliminated symbols:
1. Identify all surviving symbols (`!symbol.startsWith(DROP_SYMBOL_CODE)`).
2. Starting from bottom row ($j = \text{max}$), calculate the shift distance:
   $$\Delta y = (\text{currentIndex} - i) \times \text{cellSize.y}$$
3. Assign target landing and bounce coordinates:
   $$\text{targetPos} = (x, y - \Delta y)$$
   $$\text{targetBouncePos} = (x, y - \Delta y + 10\text{px})$$

---

## 2. Top Inflow Spawning Mathematics (`getNewSymbols`)

For new incoming symbols entering from the top of column $col$:
1. Calculate vertical start height above visible grid:
   $$\text{startY} = \text{firstPosition.y} + (\text{size} + \text{startIndex} - i) \times \text{cellSize.y}$$
2. Spawn new node at $(x, \text{startY})$.
3. Set target drop position to $(x, \text{tableConfig.positions}[col][row].y)$.

---

## 3. Tween Physics Curve

```typescript
symbol["tweenDroppedSymbol"] = cc.tween(symbol)
    .to(fallingTime - deltaTimeCubicIn, { position: targetPos }, { easing: 'cubicIn' })
    .call(() => {
        symbol.emit("PLAY_ANIMATION_APPEAR");
    })
    .to(timeBouncing * 0.3, { position: targetBouncePos })
    .delay(timeBouncing * 0.3)
    .to(timeBouncing * 0.3, { position: targetPos })
    .call(() => {
        symbol['tweenDroppedSymbol'] = null;
        symbol["droppedPosition"] = null;
    })
    .start();
```
