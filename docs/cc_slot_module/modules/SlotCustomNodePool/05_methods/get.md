---
id: "cc_slot_module:SlotCustomNodePool:method:get"
title: "SlotCustomNodePool.get() Method Specification"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "method", "get", "pool_routing"]
---

# `SlotCustomNodePool.get(symbolCode: string): cc.Node`

---

## 1. Method Signature
```typescript
public get(symbolCode: string): cc.Node
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `MultipleSymbolManager.getSymbolFromPool(code)` when checking out a node.

---

## 3. Detailed Algorithmic Execution Logic
1. Computes special pool name: `specialPoolName = this.getSpecialPoolName(symbolCode)`.
2. Queries `this._pools.get(specialPoolName)`.
   - If special pool exists: calls `this.getSymbolFromPool(specialPool, symbolCode, true)`.
   - Otherwise: calls `this.getSymbolFromPool(normalPool, null, false)` from the default normal pool.

---

## 4. Un-truncated Source Code Implementation
```typescript
get(symbolCode: string): cc.Node {
	const specialPoolName = this.getSpecialPoolName(symbolCode);
	const specialPool = this._pools.get(specialPoolName);
	
	if (specialPool) {
		return this.getSymbolFromPool(specialPool, symbolCode, true);
	}
	
	const normalPool = this._pools.get(NORMAL_POOL_NAME);
	return this.getSymbolFromPool(normalPool, null, false);
}
```
