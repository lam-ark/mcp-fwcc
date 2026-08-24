---
id: "cc_slot_module:SlotCustomNodePool:method:initSymbolPool"
title: "SlotCustomNodePool.initSymbolPool() Method Specification"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "method", "initSymbolPool"]
---

# `SlotCustomNodePool.initSymbolPool(): void`

---

## 1. Method Signature
```typescript
public initSymbolPool(): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `MultipleSymbolManager.initSymbolPool()` during table initialization.

---

## 3. Detailed Algorithmic Execution Logic
1. Invokes `this.setupNormalSymbolPool()` to create and populate the normal pool.
2. Invokes `this.setupSpecialSymbolPool()` to create and populate all special pools.

---

## 4. Un-truncated Source Code Implementation
```typescript
initSymbolPool(): void {
	this.setupNormalSymbolPool();
	this.setupSpecialSymbolPool();
}
```
