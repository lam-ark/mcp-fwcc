# JackpotHistoryTable

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/JackpotHistory/JackpotHistoryTable.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`JackpotHistoryTable`** extends `Component`

## CC Properties
- `table`
- `cell`

## Key Methods
- `onLoad(): void`
- `updateData(): void`
- `initCells(): void`
- `clearData(): void`

## Source Implementation
```typescript
const { _decorator, Component, instantiate } = cc;
import { JackpotHistoryCell } from './JackpotHistoryCell';
const { ccclass, property } = _decorator;

@ccclass
export class JackpotHistoryTable extends Component {
	@property(cc.Node) table: cc.Node = null;
	@property(cc.Prefab) cell: cc.Prefab = null;

	listCell: JackpotHistoryCell[] = [];
	initialized = false;

	onLoad(): void {
		this.node.on("UPDATE_DATA", this.updateData, this);
		this.node.on("CLEAR_DATA", this.clearData, this);
	}

	updateData(data: any, totalItem: number): void {
		if (!this.initialized) {
			this.initCells(totalItem);
		}
		if (!data) {
			return this.clearData();
		}

		this.listCell.forEach((child, index) => {
			if (index < data.length) {
				child.node.active = true;
				child.updateData(data[index]);
				// child.opacity = 255;
			} else {
				child.node.active = false;
			}
		});
	}

	initCells(totalItem: number): void {
		this.initialized = true;
		for (let i = 0; i < totalItem; ++i) {
			const node = instantiate(this.cell);
			node.parent = this.table;
			node.active = false;
			const cell = node.getComponent(JackpotHistoryCell)
			this.listCell.push(cell);
		}
	}

	clearData(): void {
		this.listCell.forEach(cell => cell.node.active = false);
	}
}


```
