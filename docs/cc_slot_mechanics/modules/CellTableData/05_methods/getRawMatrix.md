---
id: "cc_slot_mechanics:CellTableData:methods:getRawMatrix"
title: "CellTableData.getRawMatrix Method"
category: "cc_slot_mechanics"
tags: ["CellTableData", "cell_table_data", "cc_slot_mechanics", "methods", "getRawMatrix"]
---

# 📖 `CellTableData.getRawMatrix()`

---

## 1. Method Signature & Overview

```typescript
getRawMatrix(): string[]
```

- **Primary Role**: Implements getRawMatrix within the CellTableData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getRawMatrix(): string[] {
		let mx = this["freeGameMatrix"] || this["normalGameMatrix"] || this["matrix"];
		return mx;
	}
```
