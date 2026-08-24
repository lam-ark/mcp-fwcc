---
id: "cc_slot_module:SlotSymbolModule:method:reset"
title: "SlotSymbolModule.reset() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "reset"]
---

# `SlotSymbolModule.reset(): void`

---

## 1. Method Signature
```typescript
public reset(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Halts Spine animation: `this.stopAnimation()`.
2. Restores static sprite visibility: `this.showStatic()`.
3. Restores full brightness color: `this.enableHighlight()`.
4. Flushes cached skeleton data: `this.clearSkeletonData()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
reset(): void {
	this.stopAnimation();
	this.showStatic();
	this.enableHighlight();
	this.clearSkeletonData();
}
```
