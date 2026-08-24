---
id: "cc_slot_module:MultipleSymbolManager:method:getSymbolFromPool"
title: "MultipleSymbolManager.getSymbolFromPool() Method Specification"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "method", "getSymbolFromPool"]
---

# `MultipleSymbolManager.getSymbolFromPool(code: string): cc.Node`

---

## 1. Method Signature
```typescript
public getSymbolFromPool(code: string): cc.Node
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Overrides `SlotSymbolManager.getSymbolFromPool(code)` when creating or checking out a symbol.

---

## 3. Detailed Algorithmic Execution Logic
1. Passes `code` directly to `this.symbolPool.get(code)`.
2. Returns the resolved symbol `cc.Node`.

---

## 4. Un-truncated Source Code Implementation
```typescript
getSymbolFromPool(code: string): cc.Node {
	return this.symbolPool.get(code);
}
```
