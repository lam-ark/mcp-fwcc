# TableModuleTest

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/TableModuleTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`TableModuleTest`** extends `Component`

## CC Properties
- `tableManager`

## Key Methods
- `onLoad(): void`
- `start(): void`
- `startSpin(): void`
- `stopWithRandomMatrix(): void`
- `fastStop(): void`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
import { SlotTableModule } from "./SlotTableModule";
const { ccclass, property } = _decorator;

@ccclass
export class TableModuleTest extends Component {
	@property(SlotTableModule)
	tableManager: SlotTableModule = null;
	onLoad(): void {
		this.tableManager = this.getComponentInChildren(SlotTableModule);
	}

	protected start(): void {
		this.tableManager.initTable();
	}

	startSpin(): void {
		this.tableManager.startSpin();
		this.scheduleOnce(() => {
			this.stopWithRandomMatrix();
		}, 0.3);
	}

	stopWithRandomMatrix(): void {
		this.tableManager.stopSpin(
			[
				["A", "A", "A"],
				["2", "3", "4"],
				["2", "3", "4"],
				["2", "3", "4"],
				["2", "3", "4"],
			]
		);
	}
	
	fastStop(): void {
		this.tableManager.fastStop();
	}
}

```
