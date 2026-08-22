# SlotCellSceneTest

> **Source Path**: `assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/SlotCellSceneTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`SlotCellSceneTest`** extends `Component`

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
import { SlotCellTableModule } from './SlotCellTableModule';
import { CellTableData } from './CellTableData';
const { ccclass, property } = _decorator;

@ccclass
export class SlotCellSceneTest extends Component {
    @property(SlotCellTableModule)
    table: SlotCellTableModule = null;
    
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
        const slotData = this.table.getComponent(CellTableData);
        slotData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5].map(String);
		this.table.stopSpin();
	}
	
	fastStop(): void {
		this.table.fastStop();
	}
}


```
