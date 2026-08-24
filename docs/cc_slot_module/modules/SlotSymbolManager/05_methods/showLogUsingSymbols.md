---
id: "cc_slot_module:SlotSymbolManager:method:showLogUsingSymbols"
title: "SlotSymbolManager.showLogUsingSymbols() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "showLogUsingSymbols", "debug"]
---

# `SlotSymbolManager.showLogUsingSymbols(tableFormat: number[]): void`

---

## 1. Method Signature
```typescript
public showLogUsingSymbols(tableFormat: number[] = []): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Filters active symbols where `owner !== NONE` and `index !== UNUSED`.
2. Sorts symbols by `index` ascending.
3. If `tableFormat` is provided, maps into a 2D matrix array and logs via `cc.log()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
showLogUsingSymbols(tableFormat: number[] = []): void {
    if (!this.node.active || !this.enabledInHierarchy) {
        return;
    }

    const usingSymbols = this.usingSymbols.map((symbol) => {
        return this.getSymbolModule(symbol) 
    });

    const symbols = usingSymbols.filter(symbol => {
        return symbol.getOwner() !== SymbolOwnerType.NONE && symbol.getIndex() !== SymbolIndexType.UNUSED;
    });

    symbols.sort((a, b) => a.getIndex() - b.getIndex());
    const logSymbols = symbols.map((symbol) => {
        return {
            index: symbol.getIndex(),
            symbol: symbol.symbolCode,
            owner: symbol.getOwner()
        }
    });
    if (tableFormat.length == 0) {
        log(logSymbols);
    } else {
        let index = 0;
        const matrix: any[][] = [];
        for (let col = 0; col < tableFormat.length; col++) {
            matrix.push(Array(tableFormat[col]).fill(""));
            for (let row = 0; row < tableFormat[col]; row++) {
                matrix[col][row] = logSymbols[index];
                index++;
            }
        }
        log(matrix);
    }
}
```
