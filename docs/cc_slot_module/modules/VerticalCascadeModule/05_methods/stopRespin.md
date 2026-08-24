---
id: "cc_slot_module:VerticalCascadeModule:methods:stopRespin"
title: "VerticalCascadeModule.stopRespin Method"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "methods", "stopRespin", "avalanche_drop"]
---

# 📖 `VerticalCascadeModule.stopRespin()`

---

## 1. Method Overview & Signature

Stage 2 cascade trigger that calculates downward drop offsets, spawns incoming top symbols, launches gravity tweens, and returns a `Promise<void>` resolved upon cascade completion.

```typescript
public stopRespin(matrix: string[][], traceWays: string[][]): Promise<void>
```

---

## 2. Complete Source Code Implementation

```typescript
public stopRespin(matrix: string[][], traceWays: string[][]): Promise<void> {
    let tw = null;
    if (!matrix && !traceWays) {
        const cascadeData: CascadeModuleData = this.getComponent(CascadeModuleData);
        const { verticalMatrix, listTraceWayVertical } = cascadeData.formatData();
        this.matrix = verticalMatrix;
        tw = listTraceWayVertical;
    } else {
        this.matrix = matrix;
        tw = traceWays;
    }

    this.preparingSymbols();
    this.droppingSymbols();

    this._respinCB = () => {
        this.listSymbols = [];
        this.listTraceWay = tw;
        this._stopRespinCB && this._stopRespinCB();
        this._stopRespinCB = null;
        this._respinCB = null;
    }	

    this.scheduleOnce(this._respinCB, this.config.CASCADING_TIME_COMPLETED);
    this._hasStartRespin = false;
    this._hasRespinCompleted = true;

    return new Promise((resolve) => {
        this._stopRespinCB = resolve;
    });
}
```
