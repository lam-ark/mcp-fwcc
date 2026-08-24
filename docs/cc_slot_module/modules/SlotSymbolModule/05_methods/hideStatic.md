---
id: "cc_slot_module:SlotSymbolModule:method:hideStatic"
title: "SlotSymbolModule.hideStatic() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "hideStatic"]
---

# `SlotSymbolModule.hideStatic(): void`

---

## 1. Method Signature
```typescript
public hideStatic(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Invokes `this.switchToStatic(false)`, setting `sprite.node.active = false` and `spine.node.active = true`.

---

## 3. Un-truncated Source Code Implementation
```typescript
hideStatic(): void {
	this.switchToStatic(false);
}
```
