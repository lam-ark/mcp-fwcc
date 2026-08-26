---
id: "cc_slot_mechanics:RemovedSymbolModule:methods:initLayout"
title: "RemovedSymbolModule.initLayout Method"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolModule", "removed_symbol_module", "cc_slot_mechanics", "methods", "initLayout"]
---

# 📖 `RemovedSymbolModule.initLayout()`

---

## 1. Method Signature & Overview

```typescript
initLayout(): void
```

- **Primary Role**: Implements initLayout within the RemovedSymbolModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected initLayout(): void {
		this.tableConfig = this.getConfig().TABLE_CONFIG;

		let positions: cc.Vec2[][] = [];
		const cellSize = this.tableConfig.cellSize;
		for (let col = 0; col < this.tableConfig.format.length; col++) {
			positions[col] = [];
			for (let row = 0; row < this.tableConfig.format[col]; row++) {
				const tableWidth = this.tableConfig.format.length * cellSize.x;
				const tableHeight = this.tableConfig.format[col] * cellSize.y;
				const offsetX = - tableWidth / 2 + cellSize.x / 2;
				const offsetY = tableHeight / 2 - cellSize.y / 2;
				const x = offsetX + col * cellSize.x;
				const y = offsetY - row * cellSize.y;
				positions[col][row] = new cc.Vec2(x, y);
			}
		}
		this.tableConfig.positions = positions;
	}
```
