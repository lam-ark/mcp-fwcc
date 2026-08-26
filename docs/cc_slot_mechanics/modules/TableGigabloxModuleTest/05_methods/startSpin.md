---
id: "cc_slot_mechanics:TableGigabloxModuleTest:methods:startSpin"
title: "TableGigabloxModuleTest.startSpin Method"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModuleTest", "table_gigablox_module_test", "cc_slot_mechanics", "methods", "startSpin"]
---

# 📖 `TableGigabloxModuleTest.startSpin()`

---

## 1. Method Signature & Overview

```typescript
startSpin(): void
```

- **Primary Role**: Implements startSpin within the TableGigabloxModuleTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
startSpin(): void {
		this.table.startSpin();
		this.scheduleOnce(() => {
			this.stopWithRandomMatrix();
		}, 0.3);
	}
```
