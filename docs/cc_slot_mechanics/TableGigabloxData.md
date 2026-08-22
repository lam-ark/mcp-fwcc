# TableGigabloxData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/Gigablox/scripts/TableGigabloxData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`TableGigabloxData`** extends `SlotTableData`

## Key Methods
- `onloadExtend(): void`
- `getCustomMatrix(): `
- `formatGigabloxData(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotTableData } from "../../../cc-slot-module/SlotModuleExport";
import { TableGigabloxConfig } from "./TableGigabloxConfig";

const { ccclass } = _decorator;

@ccclass
export class TableGigabloxData extends SlotTableData {
	config: TableGigabloxConfig = null;
	/**
     * @key matrix0: matrix for current game mode before transform
     * @key matrix: matrix for current game mode after transform
     * @key normalGameMatrix: matrix for normal game mode when resume game
     * @key freeGameMatrix: matrix for free game mode when resume game
	 * @example ["2","3","4","2","3","4","2","3","4","2","3","4","2","3","4"]
	 * @type string[]
     */
	onloadExtend(): void {
		this.config = this.getComponent(TableGigabloxConfig);
	}

	
	getCustomMatrix(): { result: string[][], blox: any[] } {
		let rawMatrix = this.getRawMatrix();
		let mx = eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT); 
		
		const blox1 = [
			{
				col: 1,
				rows: [1],
				size: 3,
				//symbols: ['K']
			}
		];
		const blox2 = [
			{
				col: 0,
				rows: [1],
				size: 3,
				//symbols: ['K']
			},
			{
				col: 3,
				rows: [2],
				size: 2,
				//symbols: ['K']
			}
		];

		return { result:mx, blox: blox1 };
	}

	formatGigabloxData(megaMatrix): void {
		const NORMAL_TABLE_FORMAT = [3, 3, 3, 3, 3];
		let bloxes = [];
		let blox = 1;
		for (let col = 0; col < NORMAL_TABLE_FORMAT.length; col++) {
			if (blox == 1) {
				for (let row = 0; row < NORMAL_TABLE_FORMAT[col]; row++) {
					if (megaMatrix[col][row].includes("-") && blox == 1) {
						blox = megaMatrix[col][row].split("-")[1];
						bloxes.push({ col, blox: blox });
					}
				}
			} else {
				blox--;
				continue;
			}
		}
		if (bloxes.length > 0) {
			for (let i = 0; i < bloxes.length; i++) {
				const { col } = bloxes[i];
				let symbols = [];
				let symbolStartRows = [];
				for (let row = 0; row < NORMAL_TABLE_FORMAT[col]; row++) {
					const symbol = megaMatrix[col][row]
					if (symbols.indexOf(symbol) < 0) {
						symbols.push(symbol);
						symbolStartRows.push(row);
					}
				}
				if (symbols.length > 0) {
					bloxes[i].symbols = symbols;
					bloxes[i].rows = symbolStartRows;
				}
			}
		}
		//log(bloxes);
	}

}


```
