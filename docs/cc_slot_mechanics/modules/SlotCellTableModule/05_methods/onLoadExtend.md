---
id: "cc_slot_mechanics:SlotCellTableModule:methods:onLoadExtend"
title: "SlotCellTableModule.onLoadExtend Method"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `SlotCellTableModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
onLoadExtend(): void
```

- **Primary Role**: Implements onLoadExtend within the SlotCellTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
		this.reelList = [];
		this.config = this.getComponent(CellTableConfig);
		if (!this.config) {
			warn('Config not add to this node');
			return;
		}
		this.getConfigValue();
		this._slotTableData = this.getComponent(CellTableData);

		if (!this.symbolManager) {
			this.symbolManager = this.getComponent(SlotSymbolManager);
		}

		this.symbolManager.setGameConfig(this.gameConfig);
	}
```
