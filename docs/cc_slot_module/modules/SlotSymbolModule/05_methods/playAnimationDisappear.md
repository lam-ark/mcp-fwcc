---
id: "cc_slot_module:SlotSymbolModule:method:playAnimationDisappear"
title: "SlotSymbolModule.playAnimationDisappear() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "playAnimationDisappear", "cascade"]
---

# `SlotSymbolModule.playAnimationDisappear(): void`

---

## 1. Method Signature
```typescript
public playAnimationDisappear(): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called during cascading reel explosions (e.g. avalanche eliminate step).

---

## 3. Detailed Algorithmic Execution Logic
1. Starts non-looping disappear track: `this.playAnimation(this.animName.disappear, false)`.

---

## 4. Un-truncated Source Code Implementation
```typescript
playAnimationDisappear(): void {
	this.playAnimation(this.animName.disappear, false);
}
```
