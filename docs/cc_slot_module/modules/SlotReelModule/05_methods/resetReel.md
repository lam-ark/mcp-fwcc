---
id: "cc_slot_module:SlotReelModule:method:resetReel"
title: "SlotReelModule.resetReel() Method Specification"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "method", "resetReel", "coordinate_reset", "cleanup"]
---

# `SlotReelModule.resetReel(): void`

---

## 1. Method Signature
```typescript
public resetReel(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Computes accumulated vertical translation offset: `offset = Math.abs(this.node.position.y)`.
2. Subtracts offset from all child symbol positions: `s.setPosition(s.position.x, s.position.y - offset)`.
3. Re-sorts `listSymbols` descending by Y coordinate.
4. Snaps the column container node back to `this.originalPosition`.
5. Hides offscreen buffer symbols: `this.hideFakeSymbols()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
resetReel(): void {
	const offset = Math.abs(this.node.position.y);
	this.listSymbols.forEach((s) => s.setPosition(s.position.x, s.position.y - offset));
	this.listSymbols.sort((a, b) => b.position.y - a.position.y);
	this.node.setPosition(this.originalPosition);

	this.hideFakeSymbols();
}
```
