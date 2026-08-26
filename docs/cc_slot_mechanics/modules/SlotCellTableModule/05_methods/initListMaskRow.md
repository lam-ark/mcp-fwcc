---
id: "cc_slot_mechanics:SlotCellTableModule:methods:initListMaskRow"
title: "SlotCellTableModule.initListMaskRow Method"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "methods", "initListMaskRow"]
---

# 📖 `SlotCellTableModule.initListMaskRow()`

---

## 1. Method Signature & Overview

```typescript
initListMaskRow(): void
```

- **Primary Role**: Implements initListMaskRow within the SlotCellTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected initListMaskRow(): void {
		this.START_X = -(this.TOTAL_COLS / 2 - 0.5) * this.SYMBOL_WIDTH;
		const totalRows = this.config.TABLE_FORMAT[0];
		const startY = (totalRows / 2 - 0.5) * this.SYMBOL_HEIGHT;
		for (let row = 0; row < totalRows; row++) {
			const node = new Node(`MaskRow_${row}`);
			node.setParent(this.table);
			node.setPosition( new cc.Vec2(0, startY - row * this.SYMBOL_HEIGHT));

			const maskSize = this.config.SYMBOL_MASK_SIZE;
			node.width = maskSize.width * this.TOTAL_COLS;
			node.height = maskSize.height;
			node.addComponent(Mask);
			// node.getComponent(Mask).type = Mask.Type.GRAPHICS_RECT;

			this.listMaskRow.push(node);
		}
	}
```
