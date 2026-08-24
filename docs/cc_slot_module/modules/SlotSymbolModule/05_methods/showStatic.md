---
id: "cc_slot_module:SlotSymbolModule:method:showStatic"
title: "SlotSymbolModule.showStatic() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "showStatic"]
---

# `SlotSymbolModule.showStatic(): void`

---

## 1. Method Signature
```typescript
public showStatic(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Flags `this.isPlaying = false`.
2. Invokes `this.switchToStatic(true)`, setting `sprite.node.active = true` and `spine.node.active = false`.

---

## 3. Un-truncated Source Code Implementation
```typescript
showStatic(): void {
	this.isPlaying = false;
	this.switchToStatic(true);
}
```
