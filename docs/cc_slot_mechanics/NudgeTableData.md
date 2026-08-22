# NudgeTableData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeTableData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`NudgeTableData`** extends `SlotTableData`

## Key Methods
- `onloadExtend(): void`
- `getNudgeData(): Array<`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotTableData } from "../../../cc-slot-module/SlotModuleExport";

const { ccclass } = _decorator;

@ccclass
export class NudgeTableData extends SlotTableData {
	/**
     * @key nud: nudge data with format index:step:direction
	 * @type string[]
	 * @example ["0:1:1", "1:2:1", "2:3:1"]
     */
	onloadExtend(): void {
		super.onloadExtend();
		this.registeredKeys.push("nud");
	}

	getNudgeData(): Array<{ index: number, step: number, direction: number }> {
		let data = [];
		const nudges = this["nud"];
		for (let i = 0; i < nudges.length; i++) {
			const nudgeData = nudges[i].split(':').map(Number);
			const step = nudgeData[1];
			data.push({ index: nudgeData[0], step: Math.abs(step), direction: nudgeData[2]});
		}
		return data;
	}
}
```
