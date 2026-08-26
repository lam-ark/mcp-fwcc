---
id: "cc_slot_mechanics:HorizontalCascadeModule:methods:stopRespin"
title: "HorizontalCascadeModule.stopRespin Method"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "methods", "stopRespin"]
---

# 📖 `HorizontalCascadeModule.stopRespin()`

---

## 1. Method Signature & Overview

```typescript
stopRespin(matrix: string[][], traceWays: string[][]): Promise<void>
```

- **Primary Role**: Implements stopRespin within the HorizontalCascadeModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
public stopRespin(matrix: string[][], traceWays: string[][]): Promise<void>  {
		if (!matrix && !traceWays) {
			const cascadeData: HorizontalCascadeData = this.getComponent(HorizontalCascadeData);
			const { horizonMatrix, listTraceWay } = cascadeData.formatData();
			
			matrix = horizonMatrix;
			traceWays = listTraceWay;
		}

		return super.stopRespin(matrix, traceWays);
	}
```
