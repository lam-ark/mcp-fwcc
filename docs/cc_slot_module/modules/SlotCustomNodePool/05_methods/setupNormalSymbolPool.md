---
id: "cc_slot_module:SlotCustomNodePool:method:setupNormalSymbolPool"
title: "SlotCustomNodePool.setupNormalSymbolPool() Method Specification"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "method", "setupNormalSymbolPool"]
---

# `SlotCustomNodePool.setupNormalSymbolPool(): void`

---

## 1. Method Signature
```typescript
protected setupNormalSymbolPool(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Invokes `createPool('SlotCustomNodePool_normal', this.normalSymbolTemplate, this.normalInitCount)`.
2. Stores resulting `cc.NodePool` in `this._pools.set(NORMAL_POOL_NAME, pool)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected setupNormalSymbolPool(): void {
	const pool = this.createPool(NORMAL_POOL_NAME, this.normalSymbolTemplate, this.normalInitCount);
	this._pools.set(NORMAL_POOL_NAME, pool);
}
```
