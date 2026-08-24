---
id: "cc_slot_module:SlotSymbolManager:method:sortSymbols"
title: "SlotSymbolManager.sortSymbols() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "sortSymbols", "priority_layer"]
---

# `SlotSymbolManager.sortSymbols(symbols: cc.Node[]): cc.Node[]`

---

## 1. Method Signature
```typescript
protected sortSymbols(symbols: cc.Node[]): cc.Node[]
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns empty array if input `symbols` is empty.
2. Initializes jagged 2D bucket array `layers: cc.Node[][] = []`.
3. Iterates over each symbol:
   * Extracts `code = symbol['symbolCode']`.
   * Queries priority from `this.layerConfig[code]` or `this.layerConfig[code[0]]`.
   * Falls back to `9999` if unmapped.
   * Pushes symbol into `layers[priority]`.
4. Flattens non-empty buckets in reverse order using `eno.ArrayUtils.flatOnce(layers.filter(Boolean).reverse())` so higher priority symbols render on top.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected sortSymbols(symbols: cc.Node[]): cc.Node[] {
    if (!symbols.length) {
        return [];
    }

    const layers: cc.Node[][] = [];

    for (const symbol of symbols) {
        const code = symbol['symbolCode'];
        if (!code) {
            continue;
        }
        let priority = this.layerConfig[code];

        if (priority == null) {
            priority = this.layerConfig[code[0]];
        }

        if (priority == null) {
            priority = 9999;
        }

        if (!layers[priority]) {
            layers[priority] = [];
        }
        layers[priority].push(symbol);
    }

    return eno.ArrayUtils.flatOnce(layers.filter(Boolean).reverse());
}
```
