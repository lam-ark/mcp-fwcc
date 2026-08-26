---
id: "cc_slot_mechanics:TransformSymbolVFX:methods:onLoad"
title: "TransformSymbolVFX.onLoad Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolVFX", "transform_symbol_vfx", "cc_slot_mechanics", "methods", "onLoad"]
---

# 📖 `TransformSymbolVFX.onLoad()`

---

## 1. Method Signature & Overview

```typescript
onLoad(): void
```

- **Primary Role**: Implements onLoad within the TransformSymbolVFX mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoad(): void {
		if (!this.skeleton) {
			this.skeleton = this.node.getComponent(sp.Skeleton);
		}

		if (this.skeleton) {
			this.node.on('PLAY_ANIMATION', this.onPlayAnimation, this);
			this.node.on('STOP_ANIMATION', this.onStopAnimation, this);
		}
		this.node.active = false;
	}
```
