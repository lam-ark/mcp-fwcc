---
id: "cc_slot_mechanics:SlotCellTableModule:methods:getConfigValue"
title: "SlotCellTableModule.getConfigValue Method"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "methods", "getConfigValue"]
---

# 📖 `SlotCellTableModule.getConfigValue()`

---

## 1. Method Signature & Overview

```typescript
getConfigValue(): void
```

- **Primary Role**: Implements getConfigValue within the SlotCellTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected getConfigValue(): void {
		super.getConfigValue();
		this.SYMBOL_WIDTH = this.config.SYMBOL_WIDTH;
		this.SYMBOL_HEIGHT = this.config.SYMBOL_HEIGHT;
	}
```
