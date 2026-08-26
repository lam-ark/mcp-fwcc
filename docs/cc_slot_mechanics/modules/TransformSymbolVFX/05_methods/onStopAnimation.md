---
id: "cc_slot_mechanics:TransformSymbolVFX:methods:onStopAnimation"
title: "TransformSymbolVFX.onStopAnimation Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolVFX", "transform_symbol_vfx", "cc_slot_mechanics", "methods", "onStopAnimation"]
---

# 📖 `TransformSymbolVFX.onStopAnimation()`

---

## 1. Method Signature & Overview

```typescript
onStopAnimation(): void
```

- **Primary Role**: Implements onStopAnimation within the TransformSymbolVFX mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onStopAnimation(): void {
		this.skeleton.node.active = false;
	}
```
