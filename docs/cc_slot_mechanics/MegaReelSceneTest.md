# MegaReelSceneTest

> **Source Path**: `assets/cc-common/cc-slot-mechanics/MegaReel/scripts/MegaReelSceneTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`MegaReelSceneTest`** extends `cc`

## CC Properties
- `table`

## Key Methods
- `start(): void`
- `startSpin(): void`
- `stopWithRandomMatrix(): void`
- `fastStop(): void`

## Source Implementation
```typescript
import { SlotTableData } from '../../../cc-slot-module/SlotModuleExport';
import { SlotTableMegaModule } from './SlotTableMegaModule';

const {ccclass, property} = cc._decorator;

@ccclass
export default class MegaReelSceneTest extends cc.Component {

    @property(SlotTableMegaModule)
    table: SlotTableMegaModule = null;

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
