---
id: "cc_slot_mechanics:HorizontalTableTest:methods:stopWithRandomMatrix"
title: "HorizontalTableTest.stopWithRandomMatrix Method"
category: "cc_slot_mechanics"
tags: ["HorizontalTableTest", "horizontal_table_test", "cc_slot_mechanics", "methods", "stopWithRandomMatrix"]
---

# 📖 `HorizontalTableTest.stopWithRandomMatrix()`

---

## 1. Method Signature & Overview

```typescript
stopWithRandomMatrix(): void
```

- **Primary Role**: Implements stopWithRandomMatrix within the HorizontalTableTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopWithRandomMatrix(): void {
        const slotData = this.table.getComponent(SlotTableData);
        slotData["matrix"] = [2,3,3,2,3].map(String);
		this.table.stopSpin();
	}
```
