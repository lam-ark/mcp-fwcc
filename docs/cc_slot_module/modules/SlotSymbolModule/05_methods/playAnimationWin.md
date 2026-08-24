---
id: "cc_slot_module:SlotSymbolModule:method:playAnimationWin"
title: "SlotSymbolModule.playAnimationWin() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "playAnimationWin", "win_celebration"]
---

# `SlotSymbolModule.playAnimationWin(loop: boolean = true): void`

---

## 1. Method Signature
```typescript
public playAnimationWin(loop: boolean = true): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `SlotTablePaylineModule` / `PaylineSymbolModule` when animating symbol combinations participating in a winning payline.

---

## 3. Detailed Algorithmic Execution Logic
1. Dispatches `this.playAnimation(this.animName.win, loop)`.

---

## 4. Un-truncated Source Code Implementation
```typescript
playAnimationWin(loop: boolean = true): void {
	this.playAnimation(this.animName.win, loop);
}
```
