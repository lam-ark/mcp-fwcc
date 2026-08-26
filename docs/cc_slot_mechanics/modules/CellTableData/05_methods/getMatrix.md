---
id: "cc_slot_mechanics:CellTableData:methods:getMatrix"
title: "CellTableData.getMatrix Method"
category: "cc_slot_mechanics"
tags: ["CellTableData", "cell_table_data", "cc_slot_mechanics", "methods", "getMatrix"]
---

# 📖 `CellTableData.getMatrix()`

---

## 1. Method Signature & Overview

```typescript
getMatrix(): string[][]
```

- **Primary Role**: Implements getMatrix within the CellTableData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getMatrix(): string[][] {
		let rawMatrix = this.getRawMatrix();
		return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT);
	}
```
