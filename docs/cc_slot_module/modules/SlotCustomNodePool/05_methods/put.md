---
id: "cc_slot_module:SlotCustomNodePool:method:put"
title: "SlotCustomNodePool.put() Method Specification"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "method", "put", "node_recycling"]
---

# `SlotCustomNodePool.put(symbol: cc.Node): void`

---

## 1. Method Signature
```typescript
public put(symbol: cc.Node): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `MultipleSymbolManager.removeSymbol(node)` when recycling a symbol.

---

## 3. Detailed Algorithmic Execution Logic
1. Reads origin pool name from `symbol['__custom_pool_name_']`.
   - If missing: calls `symbol.destroy()` to prevent memory leaks.
2. Queries `this._pools.get(poolName)`.
   - If pool exists: calls `pool.put(symbol)`.
   - If pool not found: calls `symbol.destroy()`.

---

## 4. Un-truncated Source Code Implementation
```typescript
put(symbol: cc.Node): void {
	const poolName = symbol[CUSTOM_POOL_NAME_KEY] as string | undefined;
	if (!poolName) {
		symbol.destroy();
		return;
	}
	
	const pool = this._pools.get(poolName);
	if (pool) {
		pool.put(symbol);
	} else {
		symbol.destroy();
	}
}
```
