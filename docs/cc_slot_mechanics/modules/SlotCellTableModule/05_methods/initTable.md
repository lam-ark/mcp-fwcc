---
id: "cc_slot_mechanics:SlotCellTableModule:methods:initTable"
title: "SlotCellTableModule.initTable Method"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "methods", "initTable"]
---

# 📖 `SlotCellTableModule.initTable()`

---

## 1. Method Signature & Overview

```typescript
initTable(): void
```

- **Primary Role**: Implements initTable within the SlotCellTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
initTable(): void {
		//init list mask row
		this.initListMaskRow();

		//init reels
		this.initListReel();
	}
```
