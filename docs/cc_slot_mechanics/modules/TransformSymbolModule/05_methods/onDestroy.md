---
id: "cc_slot_mechanics:TransformSymbolModule:methods:onDestroy"
title: "TransformSymbolModule.onDestroy Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolModule", "transform_symbol_module", "cc_slot_mechanics", "methods", "onDestroy"]
---

# 📖 `TransformSymbolModule.onDestroy()`

---

## 1. Method Signature & Overview

```typescript
onDestroy(): void
```

- **Primary Role**: Implements onDestroy within the TransformSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
		if (this.moduleEvent) {
			this.moduleEvent.targetOff(this);
		}
	}
```
