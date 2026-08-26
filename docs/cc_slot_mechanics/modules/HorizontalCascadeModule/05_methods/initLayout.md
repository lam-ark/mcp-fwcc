---
id: "cc_slot_mechanics:HorizontalCascadeModule:methods:initLayout"
title: "HorizontalCascadeModule.initLayout Method"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "methods", "initLayout"]
---

# 📖 `HorizontalCascadeModule.initLayout()`

---

## 1. Method Signature & Overview

```typescript
initLayout(): void
```

- **Primary Role**: Implements initLayout within the HorizontalCascadeModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected initLayout(): void {
		this.tableConfig = this.getConfig().CASCADE_TABLE_CONFIG;

		let positions: cc.Vec2[][] = [];
		positions[0] = [];
		const cellSize = this.tableConfig.cellSize;
		for (let col = 0; col < this.tableConfig.format.length; col++) {
			const tableWidth = this.tableConfig.format.length * cellSize.x;
			//const tableHeight = this.tableConfig.format[col] * cellSize.y;
			const offsetX = - tableWidth / 2 + cellSize.x / 2;
			const x = offsetX + col * cellSize.x;
			positions[0][col] = new cc.Vec2(x, 0);
		}
		this.tableConfig.positions = positions;
	}
```
