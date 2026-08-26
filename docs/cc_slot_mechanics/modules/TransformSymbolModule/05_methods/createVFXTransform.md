---
id: "cc_slot_mechanics:TransformSymbolModule:methods:createVFXTransform"
title: "TransformSymbolModule.createVFXTransform Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolModule", "transform_symbol_module", "cc_slot_mechanics", "methods", "createVFXTransform"]
---

# 📖 `TransformSymbolModule.createVFXTransform()`

---

## 1. Method Signature & Overview

```typescript
createVFXTransform(symbol: cc.Node): void
```

- **Primary Role**: Implements createVFXTransform within the TransformSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
createVFXTransform(symbol: cc.Node): void {
		if (!this.vfxPool) {
			return;
		}
		const vfx = this.vfxPool.getObject();

		const position = NodeUtils.getPositionInOtherNode(this.vfxLayer, symbol);
		vfx.setParent(this.vfxLayer);
		vfx.setPosition(position);
		vfx.active = true;
		vfx.emit("PLAY_ANIMATION");
	}
```
