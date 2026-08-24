---
id: "cc_slot_module:SlotSymbolManager:method:getSymbolModule"
title: "SlotSymbolManager.getSymbolModule() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "getSymbolModule", "fast_cache"]
---

# `SlotSymbolManager.getSymbolModule(symbol: cc.Node): SlotSymbolModule`

---

## 1. Method Signature
```typescript
public getSymbolModule(symbol: cc.Node): SlotSymbolModule
```

---

## 2. Detailed Algorithmic Execution Logic
Caches the `SlotSymbolModule` component reference on `symbol['__SymbolModule__']` to eliminate repeated native `getComponent()` lookups in high-frequency loops.

---

## 3. Un-truncated Source Code Implementation
```typescript
getSymbolModule(symbol: cc.Node): SlotSymbolModule {
    if (!symbol['__SymbolModule__']) {
        symbol['__SymbolModule__'] = symbol.getComponent(SlotSymbolModule);
    }
    return symbol['__SymbolModule__'];
}
```
