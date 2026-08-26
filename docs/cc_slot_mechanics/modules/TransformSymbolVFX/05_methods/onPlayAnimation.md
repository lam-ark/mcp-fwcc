---
id: "cc_slot_mechanics:TransformSymbolVFX:methods:onPlayAnimation"
title: "TransformSymbolVFX.onPlayAnimation Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolVFX", "transform_symbol_vfx", "cc_slot_mechanics", "methods", "onPlayAnimation"]
---

# 📖 `TransformSymbolVFX.onPlayAnimation()`

---

## 1. Method Signature & Overview

```typescript
onPlayAnimation(): void
```

- **Primary Role**: Implements onPlayAnimation within the TransformSymbolVFX mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onPlayAnimation(): void {
		this.skeleton.node.active = true;
		this.skeleton.setAnimation(0, this.animation, this.isLoop);
	}
```
