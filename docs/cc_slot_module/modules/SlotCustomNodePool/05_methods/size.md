---
id: "cc_slot_module:SlotCustomNodePool:method:size"
title: "SlotCustomNodePool.size() Method Specification"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "method", "size"]
---

# `SlotCustomNodePool.size(): number`

---

## 1. Method Signature
```typescript
public size(): number
```

---

## 2. Detailed Algorithmic Execution Logic
1. Iterates over all pools in `this._pools`.
2. Sums up `pool.size()` across all registered pools.
3. Returns aggregate ready node count.

---

## 3. Un-truncated Source Code Implementation
```typescript
size(): number {
	let totalSize = 0;
	this._pools.forEach(pool => {
		totalSize += pool.size();
	});
	return totalSize;
}
```
