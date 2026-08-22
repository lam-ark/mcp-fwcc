# BetHistoryRecord

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/BetHistory/BetHistoryRecord.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetHistoryRecord`** extends `SlotBaseModule`

## CC Properties
- `table`
- `cellPrefab`

## Key Methods
- `onLoadExtend(): void`
- `updateData(): void`
- `initCells(): void`
- `clearData(): void`

## Source Implementation
```typescript
const { _decorator, instantiate } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
const { ccclass, property } = _decorator;

@ccclass
export class BetHistoryRecord extends SlotBaseModule {
	@property(cc.Node)
	table: cc.Node = null;
	@property(cc.Prefab)
	cellPrefab: cc.Prefab = null;

	isInit: boolean = false;
	cellList: cc.Node[] = [];

	onLoadExtend(): void {
		this.node.on("UPDATE_DATA", this.updateData, this);
		this.node.on("CLEAR_DATA", this.clearData, this);
		this.cellList = [];
	}

	updateData(data: any, totalItem: number): void {
		if (!this.isInit) {
			this.initCells(totalItem);
		}
		if (!data) {
			this.clearData();
		}
		this.cellList.forEach((cell, index) => {
			if (index < data.length) {
				cell.active = true;
				cell.emit("UPDATE_DATA", data[index]);
			} else {
				cell.active = false;
			}
		});
	}

	initCells(totalItem: number): void {
		this.isInit = true;
		for (let i = 0; i < totalItem; ++i) {
			const cell = instantiate(this.cellPrefab);
			cell.parent = this.table;
			cell.active = false;
			this.cellList.push(cell);
		}
	}

	clearData(): void {
		this.cellList.forEach((cell) => (cell.active = false));
	}
}

```
