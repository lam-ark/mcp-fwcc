---
id: "cc_slot_module:SlotCustomNodePool:method:getSpecialPoolName"
title: "SlotCustomNodePool.getSpecialPoolName() Method Specification"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "method", "getSpecialPoolName"]
---

# `SlotCustomNodePool.getSpecialPoolName(symbolCode: string): string`

---

## 1. Method Signature
```typescript
protected getSpecialPoolName(symbolCode: string): string
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns formatted key: `'SlotCustomNodePool_special_' + symbolCode`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected getSpecialPoolName(symbolCode: string): string {
	return `${SPECIAL_POOL_NAME_PREFIX}${symbolCode}`;
}
```
