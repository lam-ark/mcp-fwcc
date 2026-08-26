---
id: "cc_slot_mechanics:TransformSymbolModule:methods:reset"
title: "TransformSymbolModule.reset Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolModule", "transform_symbol_module", "cc_slot_mechanics", "methods", "reset"]
---

# 📖 `TransformSymbolModule.reset()`

---

## 1. Method Signature & Overview

```typescript
reset(): void
```

- **Primary Role**: Implements reset within the TransformSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
reset(): void {
		if (this.vfxPool) {
			this.vfxPool.clear();
		}
		this.unscheduleAllCallbacks();
	}
```
