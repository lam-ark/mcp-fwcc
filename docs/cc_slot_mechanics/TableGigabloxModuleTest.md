# TableGigabloxModuleTest

> **Source Path**: `assets/cc-common/cc-slot-mechanics/Gigablox/scripts/TableGigabloxModuleTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`TableGigabloxModuleTest`** extends `Component`

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
import { SlotTableModule } from '../../../cc-slot-module/SlotModuleExport';
import { TableGigabloxData } from './TableGigabloxData';
const { ccclass, property } = _decorator;

@ccclass
export class TableGigabloxModuleTest extends Component {
    @property(SlotTableModule)
    table: SlotTableModule = null;
    
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
        const slotData = this.table.getComponent(TableGigabloxData);
        slotData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5].map(String);
		this.table.stopSpin();
	}
	
	fastStop(): void {
		this.table.fastStop();
	}
}


```
