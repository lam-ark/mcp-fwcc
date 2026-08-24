---
id: "cc_slot_module:SlotSymbolManager:method:instantiateNewSymbol"
title: "SlotSymbolManager.instantiateNewSymbol() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "instantiateNewSymbol"]
---

# `SlotSymbolManager.instantiateNewSymbol(): cc.Node`

---

## 1. Method Signature
```typescript
protected instantiateNewSymbol(): cc.Node
```

---

## 2. Detailed Algorithmic Execution Logic
Instantiates a new `cc.Node` clone from `this.template` prefab and returns it.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected instantiateNewSymbol(): cc.Node {
    const symbol = instantiate(this.template);

    return symbol;
}
```
