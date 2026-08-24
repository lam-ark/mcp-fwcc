---
id: "cc_slot_module:SlotSymbolModule:method:changeColor"
title: "SlotSymbolModule.changeColor() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "changeColor", "vertex_color"]
---

# `SlotSymbolModule.changeColor(color: cc.Color): void`

---

## 1. Method Signature
```typescript
public changeColor(color: cc.Color): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Iterates over cached child nodes in `this._rendererList`.
2. Updates `renderer.color = color` only if current color differs from target color to avoid redundant GPU vertex buffer re-uploads.

---

## 3. Un-truncated Source Code Implementation
```typescript
changeColor(color: cc.Color): void {
	this._rendererList.forEach(renderer => {
		if (!renderer.color.equals(color)) {
			renderer.color = color;
		}
	});
}
```
