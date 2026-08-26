---
id: "cc_slot_mechanics:TableGigabloxModuleTest:methods:stopWithRandomMatrix"
title: "TableGigabloxModuleTest.stopWithRandomMatrix Method"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModuleTest", "table_gigablox_module_test", "cc_slot_mechanics", "methods", "stopWithRandomMatrix"]
---

# 📖 `TableGigabloxModuleTest.stopWithRandomMatrix()`

---

## 1. Method Signature & Overview

```typescript
stopWithRandomMatrix(): void
```

- **Primary Role**: Implements stopWithRandomMatrix within the TableGigabloxModuleTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopWithRandomMatrix(): void {
        const slotData = this.table.getComponent(TableGigabloxData);
        slotData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5].map(String);
		this.table.stopSpin();
	}
```
