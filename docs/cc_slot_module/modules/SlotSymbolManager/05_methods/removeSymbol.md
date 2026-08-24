---
id: "cc_slot_module:SlotSymbolManager:method:removeSymbol"
title: "SlotSymbolManager.removeSymbol() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "removeSymbol", "sticky_symbol"]
---

# `SlotSymbolManager.removeSymbol(symbol: cc.Node, isForce: boolean): void`

---

## 1. Method Signature
```typescript
public removeSymbol(symbol: cc.Node, isForce: boolean = false): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks `symbolModule = this.getSymbolModule(symbol)`.
2. If `symbolModule.getIndex() === SymbolIndexType.STICKY` and `!isForce`, exits immediately to preserve sticky symbols.
3. Calls `symbolModule.resetBeforeBackToPool()`.
4. Resets metadata: `symbolModule.setIndex(SymbolIndexType.UNUSED)` and `symbolModule.setOwner(SymbolOwnerType.NONE)`.
5. Removes node from `this.usingSymbols` array via `splice()`.
6. Recycles node: `this.symbolPool.put(symbol)` if pool exists, else destroys.

---

## 3. Un-truncated Source Code Implementation
```typescript
removeSymbol(symbol: cc.Node, isForce: boolean = false): void {
    const symbolModule = this.getSymbolModule(symbol);
    if (symbolModule && symbolModule.getIndex() === SymbolIndexType.STICKY && !isForce) {
        return;
    }

    symbolModule.resetBeforeBackToPool();
    symbolModule.setIndex(SymbolIndexType.UNUSED);
    symbolModule.setOwner(SymbolOwnerType.NONE);

    const indexOf = this.usingSymbols.indexOf(symbol);
    if (indexOf != -1) {
        this.usingSymbols.splice(indexOf, 1);
    }

    if (this.symbolPool) {
        this.symbolPool.put(symbol);
    } else {
        symbol.destroy();
    }
}
```
