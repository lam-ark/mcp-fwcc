---
id: "cc_slot_mechanics:TransformSymbolData:methods:getTransformDataFromMatrix"
title: "TransformSymbolData.getTransformDataFromMatrix Method"
category: "cc_slot_mechanics"
tags: ["TransformSymbolData", "transform_symbol_data", "cc_slot_mechanics", "methods", "getTransformDataFromMatrix"]
---

# 📖 `TransformSymbolData.getTransformDataFromMatrix()`

---

## 1. Method Signature & Overview

```typescript
getTransformDataFromMatrix(): TransformData[]
```

- **Primary Role**: Implements getTransformDataFromMatrix within the TransformSymbolData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected getTransformDataFromMatrix(): TransformData[] {
		const transformData: TransformData[] = [];
		const matrix0: string[] = this.getMatrix0();
		const matrix: string[] = this.getMatrix();

		if (!matrix0.length || !matrix.length || eno.ArrayUtils.matrixEqual(matrix0, matrix)) {
			return [];
		}

		for (let i = 0; i < matrix.length; i++) {
			if (matrix[i] !== matrix0[i]) {
				transformData.push({ symbolCode: matrix[i], symbolIndex: i });
			}
		}

		return transformData;
	}
```
