---
id: "cc_slot_mechanics:InfinityTableTest:methods:stopWithRandomMatrix"
title: "InfinityTableTest.stopWithRandomMatrix Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "methods", "stopWithRandomMatrix"]
---

# 📖 `InfinityTableTest.stopWithRandomMatrix()`

---

## 1. Method Signature & Overview

```typescript
stopWithRandomMatrix(): void
```

- **Primary Role**: Implements stopWithRandomMatrix within the InfinityTableTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopWithRandomMatrix(): void {
        const slotData = this.table.getComponent(InfinityTableData);
        slotData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5].map(String);
		this.table.stopSpin();
        
        this.scheduleOnce(() => {
            // fake respin
            this.table.startRespin(null);
			this.stopRespin1();
		}, 3.5);
	}
```
