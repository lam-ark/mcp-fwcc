---
id: "cc_slot_mechanics:HorizontalCascadeModule:methods:startRespin"
title: "HorizontalCascadeModule.startRespin Method"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "methods", "startRespin"]
---

# 📖 `HorizontalCascadeModule.startRespin()`

---

## 1. Method Signature & Overview

```typescript
startRespin(matrix: string[][], traceWays: string[][]): void
```

- **Primary Role**: Implements startRespin within the HorizontalCascadeModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
public startRespin(matrix: string[][], traceWays: string[][]): void {
		if (!matrix && !traceWays) {
			const cascadeData: HorizontalCascadeData = this.getComponent(HorizontalCascadeData);
			const { horizonMatrix, listTraceWay } = cascadeData.formatData();
			super.startRespin(horizonMatrix, listTraceWay);
		} else {
			super.startRespin(matrix, traceWays);
		}
	}
```
