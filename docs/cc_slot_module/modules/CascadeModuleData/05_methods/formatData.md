---
id: "cc_slot_module:CascadeModuleData:methods:formatData"
title: "CascadeModuleData.formatData Method"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "methods", "formatData", "elimination_map"]
---

# 📖 `CascadeModuleData.formatData()`

---

## 1. Method Overview & Signature

Transforms raw matrix and `traceWay` array into 2D vertical matrices with eliminated symbols replaced by `DROP_SYMBOL_CODE`.

```typescript
public formatData(): {
    verticalMatrix: string[][];
    listTraceWayVertical: string[][];
    horizonMatrix?: string[][];
    listTraceWayHorizontal?: string[][];
}
```

---

## 2. Complete Source Code Implementation

```typescript
formatData(): {
    verticalMatrix: string[][];
    listTraceWayVertical: string[][];
    horizonMatrix?: string[][];
    listTraceWayHorizontal?: string[][];
} {
    const matrix = this.getMatrix();
    const formatMatrix = this.config.CASCADE_TABLE_CONFIG.format;
    const traceWay = this.getTraceWay();

    let horizonMatrix = [];
    let listTraceWayHorizontal = [];

    let index = 0;
    let verticalMatrix = [];
    let listTraceWay = [];

    const sortedListSymbols = traceWay.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < formatMatrix.length; i++) {
        const size = formatMatrix[i];
        verticalMatrix[i] = [];
        listTraceWay[i] = [];
        for (let j = 0; j < size; j++) {
            verticalMatrix[i][j] = matrix[i][j];
            if (sortedListSymbols.indexOf(index) > -1) {
                listTraceWay[i][j] = `${this.config.DROP_SYMBOL_CODE}`;
            } else {
                listTraceWay[i][j] = matrix[i][j];
            }
            index++;
        }
    }

    return { verticalMatrix, listTraceWayVertical: listTraceWay, horizonMatrix, listTraceWayHorizontal };
}
```
