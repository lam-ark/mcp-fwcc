---
id: "cc_slot_module:SlotCustomNodePool:method:getSymbolFromPool"
title: "SlotCustomNodePool.getSymbolFromPool() Method Specification"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "method", "getSymbolFromPool", "fallback_instantiation"]
---

# `SlotCustomNodePool.getSymbolFromPool(pool: cc.NodePool, symbolCode: string | null, isSpecial: boolean): cc.Node`

---

## 1. Method Signature
```typescript
protected getSymbolFromPool(pool: cc.NodePool | undefined, symbolCode: string | null, isSpecial: boolean): cc.Node
```

---

## 2. Detailed Algorithmic Execution Logic
1. If pool exists and has ready nodes (`pool.size() > 0`):
   - Checks out node: `obj = pool.get()`.
   - Stamps `obj[SPECIAL_SYMBOL_KEY] = isSpecial`.
   - Returns ready node.
2. **Exhaustion Fallback (Dynamic Instantiation)**:
   - Resolves template prefab (`specialSymbolTemplate.template` or `this.normalSymbolTemplate`).
   - Instantiates template: `obj = instantiate(template)`.
   - Stamps origin pool name and special flag via `this.setNodeMetadata(...)`.
   - Returns newly created node.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected getSymbolFromPool(pool: cc.NodePool | undefined, symbolCode: string | null, isSpecial: boolean): cc.Node {
	// Try to get from pool first
	if (pool && pool.size() > 0) {
		const obj = pool.get();
		obj[SPECIAL_SYMBOL_KEY] = isSpecial;
		return obj;
	}
	
	// Fallback: create new instance
	let template: cc.Prefab = null;
	if (isSpecial) {
		const specialSymbolTemplate = this.specialSymbolTemplates.find((t: SpecialSymbolTemplates) => t.symbolCode === symbolCode);
		if (specialSymbolTemplate) {
			template = specialSymbolTemplate.template;
		}
	} else {
		template = this.normalSymbolTemplate;
	}
	
	const obj = instantiate(template);
	this.setNodeMetadata(obj, isSpecial ? this.getSpecialPoolName(symbolCode!) : NORMAL_POOL_NAME, isSpecial);
	return obj;
}
```
