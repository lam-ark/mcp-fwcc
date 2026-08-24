---
id: "cc_slot_module:SlotSymbolManager:method:returnSymbol"
title: "SlotSymbolManager.returnSymbol() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "returnSymbol"]
---

# `SlotSymbolManager.returnSymbol(symbol: cc.Node): void`

---

## 1. Method Signature
```typescript
public returnSymbol(symbol: cc.Node): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. If `symbol` is null, returns early.
2. If `this.isSymbolPool` is true, calls `this.removeSymbol(symbol)`.
3. If `this.isSymbolPool` is false: checks `this.usingSymbols`; if not in active array, removes symbol; otherwise reparents node back to `this.node` via `eno.changeParent()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
returnSymbol(symbol: cc.Node): void {
    if (!symbol) {
        return;
    }

    if (this.isSymbolPool) {
        this.removeSymbol(symbol);
    } else {
        const indexOf = this.usingSymbols.indexOf(symbol);
        if (indexOf === -1) {
            this.removeSymbol(symbol);
        } else {
            eno.changeParent(symbol, this.node);
        }
    }
}
```
