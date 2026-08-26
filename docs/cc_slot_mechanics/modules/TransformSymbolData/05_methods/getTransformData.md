---
id: "cc_slot_mechanics:TransformSymbolData:methods:getTransformData"
title: "TransformSymbolData.getTransformData Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolData", "transform_symbol_data", "cc_slot_mechanics", "methods", "getTransformData"]
---

# 📖 `TransformSymbolData.getTransformData()`

---

## 1. Method Signature & Overview

```typescript
getTransformData(): TransformData[]
```

- **Primary Role**: Implements getTransformData within the TransformSymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getTransformData(): TransformData[] {
		if (this.customTransformProperty) {
			return this.getTransformDataFromProperty();
		}
		return this.getTransformDataFromMatrix();
	}
```
