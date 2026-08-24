---
id: "cc_slot_module:SlotSymbolModule:method:playAnimationIdle"
title: "SlotSymbolModule.playAnimationIdle() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "playAnimationIdle"]
---

# `SlotSymbolModule.playAnimationIdle(): void`

---

## 1. Method Signature
```typescript
public playAnimationIdle(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Starts continuous looping idle track: `this.playAnimation(this.animName.idle, true)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
playAnimationIdle(): void {
	this.playAnimation(this.animName.idle, true);
}
```
