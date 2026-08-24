---
id: "cc_slot_module:SlotSymbolManager:method:initSymbolPool"
title: "SlotSymbolManager.initSymbolPool() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "initSymbolPool", "node_pool"]
---

# `SlotSymbolManager.initSymbolPool(): void`

---

## 1. Method Signature
```typescript
public initSymbolPool(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Instantiates a new `cc.NodePool(this.name)`.
2. Loops `index = 0` to `this.initCount - 1`:
   * If `this.template` is null, skips allocation.
   * Calls `let symbol = this.instantiateNewSymbol()`.
   * Pushes the instantiated symbol into `this.symbolPool.put(symbol)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
initSymbolPool(): void {
    this.symbolPool = new NodePool(this.name);
    for (let index = 0; index < this.initCount; index++) {
        if (!this.template) {
            continue;
        }
        let symbol = this.instantiateNewSymbol();
        this.symbolPool.put(symbol);
    }
}
```
