---
id: "cc_slot_module:SlotSymbolManager:method:getSymbolFromPool"
title: "SlotSymbolManager.getSymbolFromPool() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "getSymbolFromPool"]
---

# `SlotSymbolManager.getSymbolFromPool(code: string): cc.Node`

---

## 1. Method Signature
```typescript
public getSymbolFromPool(code: string): cc.Node
```

---

## 2. Detailed Algorithmic Execution Logic
If `this.symbolPool.size() > 0`, invokes `this.symbolPool.get(code)`; otherwise calls `this.instantiateNewSymbol()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getSymbolFromPool(code: string): cc.Node {
    return this.symbolPool.size() ? this.symbolPool.get(code) : this.instantiateNewSymbol();
}
```
