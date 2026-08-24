---
id: "cc_slot_module:SlotSymbolModule:method:addAnimation"
title: "SlotSymbolModule.addAnimation() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "addAnimation", "spine_queuing"]
---

# `SlotSymbolModule.addAnimation(animationName: string, loop: boolean = true): void`

---

## 1. Method Signature
```typescript
public addAnimation(animationName: string, loop: boolean = true): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Validates node hierarchy and active state (`isValid(this.spine)`, `this.hasSkeletonData`, `this.node.activeInHierarchy`).
2. Confirms track exists via `SpineUtils.hasAnimation(this.spine, animationName)`.
   - If missing: logs debug warning and falls back to `this.stopAnimation()`.
3. Queues track onto Track 0: `this.spine.addAnimation(0, animationName, loop)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
addAnimation(animationName: string, loop: boolean = true): void {
	if (!isValid(this.spine) || !this.hasSkeletonData || !this.node.active || !this.node.activeInHierarchy) {
		return;
	}

	if (!SpineUtils.hasAnimation(this.spine, animationName)) {
		if (this.isDebug) {
			log(`[SlotSymbolModule] Animation ${animationName} not found in Symbol ${this.symbolCode}, stop animation and switch to static`);
		}
		this.stopAnimation();
		return;
	}

	this.spine.addAnimation(0, animationName, loop);
}
```
