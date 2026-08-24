---
id: "cc_slot_module:TableModuleConfig:method:SYMBOL_INDEXES"
title: "TableModuleConfig.SYMBOL_INDEXES Getter Specification"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "method", "SYMBOL_INDEXES", "matrix_indexing"]
---

# `TableModuleConfig.SYMBOL_INDEXES: number[][]`

---

## 1. Property / Getter Signature
```typescript
public get SYMBOL_INDEXES(): number[][]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks if internal cache `this._symbolIndexes` is `null`.
2. If `null`, computes index mapping by calling `eno.SlotUtils.generateSymbolIndexes(this.TABLE_FORMAT)`:
   * For standard 5x3 table with `TABLE_FORMAT = [3, 3, 3, 3, 3]`:
     ```typescript
     [
       [0, 1, 2],     // Column 0
       [3, 4, 5],     // Column 1
       [6, 7, 8],     // Column 2
       [9, 10, 11],   // Column 3
       [12, 13, 14]   // Column 4
     ]
     ```
   * For 3x4x4x4x3 format:
     ```typescript
     [
       [0, 1, 2],
       [3, 4, 5, 6],
       [7, 8, 9, 10],
       [11, 12, 13, 14],
       [15, 16, 17]
     ]
     ```
3. Stores computed array in `this._symbolIndexes` and returns it.

---

## 3. Un-truncated Source Code Implementation
```typescript
private _symbolIndexes: number[][] | null = null;

public get SYMBOL_INDEXES(): number[][] {
    if (this._symbolIndexes === null) {
        this._symbolIndexes = eno.SlotUtils.generateSymbolIndexes(this.TABLE_FORMAT);
    }
    return this._symbolIndexes;
}
```
