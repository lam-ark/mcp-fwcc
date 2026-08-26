---
id: "cc_slot_mechanics:TableGigabloxModule:methods:onLoadExtend"
title: "TableGigabloxModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModule", "table_gigablox_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `TableGigabloxModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the TableGigabloxModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this.config = this.getComponent(TableGigabloxConfig);
		this._slotTableData = this.getComponent(TableGigabloxData);
		this.getConfigValue();
	}
```
