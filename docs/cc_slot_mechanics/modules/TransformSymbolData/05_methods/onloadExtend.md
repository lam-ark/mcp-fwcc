---
id: "cc_slot_mechanics:TransformSymbolData:methods:onloadExtend"
title: "TransformSymbolData.onloadExtend Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolData", "transform_symbol_data", "cc_slot_mechanics", "methods", "onloadExtend"]
---

# 📖 `TransformSymbolData.onloadExtend()`

---

## 1. Method Signature & Overview

```typescript
onloadExtend(): void
```

- **Primary Role**: Implements onloadExtend within the TransformSymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onloadExtend(): void {
		this.config = this.getComponent(TransformSymbolConfig);
		if (this.customTransformProperty) {
			this.registeredKeys.push(this.customTransformProperty);
		}
	}
```
