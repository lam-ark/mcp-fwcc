---
id: "cc_slot_module:SlotSymbolModule:method:clearSkeletonData"
title: "SlotSymbolModule.clearSkeletonData() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "clearSkeletonData", "memory_safety"]
---

# `SlotSymbolModule.clearSkeletonData(): void`

---

## 1. Method Signature
```typescript
public clearSkeletonData(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks if Spine component exists and is not protected by `SPECIAL_SYMBOL_KEY`.
2. Sets `this.spine.skeletonData = null`.
3. Flags `this.hasSkeletonData = false`.

---

## 3. Un-truncated Source Code Implementation
```typescript
clearSkeletonData(): void {
	if (this.spine && !this.node[SPECIAL_SYMBOL_KEY]) {
		this.spine.skeletonData = null;
	}
	this.hasSkeletonData = false;
}
```
