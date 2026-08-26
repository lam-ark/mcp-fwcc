---
id: "cc_slot_mechanics:TransformSymbolData:methods:getTransformDataFromProperty"
title: "TransformSymbolData.getTransformDataFromProperty Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolData", "transform_symbol_data", "cc_slot_mechanics", "methods", "getTransformDataFromProperty"]
---

# 📖 `TransformSymbolData.getTransformDataFromProperty()`

---

## 1. Method Signature & Overview

```typescript
getTransformDataFromProperty(): TransformData[]
```

- **Primary Role**: Implements getTransformDataFromProperty within the TransformSymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected getTransformDataFromProperty(): TransformData[] {
		if (!this[this.customTransformProperty]) {
			return [];
		}
		const arr = this[this.customTransformProperty].split(",");
		const transformData: TransformData[] = [];
		for (let i = 0; i < arr.length; i++) {
			const subArr = arr[i].split(":");
			transformData.push({ symbolCode: subArr[0], symbolIndex: Number(subArr[1]) });
		}
		return transformData;
	}
```
