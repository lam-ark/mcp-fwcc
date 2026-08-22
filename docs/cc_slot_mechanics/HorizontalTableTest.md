# HorizontalTableTest

> **Source Path**: `assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`HorizontalTableTest`** extends `Component`

## CC Properties
- `table`

## Key Methods
- `start(): void`
- `startSpin(): void`
- `stopWithRandomMatrix(): void`
- `fastStop(): void`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
import { SlotTableData } from '../../../cc-slot-module/SlotModuleExport';
import { HorizontalTableModule } from './HorizontalTableModule';
const { ccclass, property } = _decorator;

@ccclass
export class HorizontalTableTest extends Component {
    @property(HorizontalTableModule)
    table: HorizontalTableModule = null;

    start(): void {
        this.table.initTable();
    }

    startSpin(): void {
		this.table.startSpin();
		this.scheduleOnce(() => {
			this.stopWithRandomMatrix();
		}, 0.3);
	}

    stopWithRandomMatrix(): void {
        const slotData = this.table.getComponent(SlotTableData);
        slotData["matrix"] = [2,3,3,2,3].map(String);
		this.table.stopSpin();
	}

    fastStop(): void {
		this.table.fastStop();
	}
}


```
