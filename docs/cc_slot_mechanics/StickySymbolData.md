# StickySymbolData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`StickySymbolData`** extends `BaseDataModule`

## Key Methods
- `onloadExtend(): void`
- `cleanStickyIndexes(): void`
- `isFinishSticky(): boolean`
- `getStickyIndexes(): number[]`
- `getStickyDataFromProperty(): number[]`
- `getStickyDataFromMatrix(): number[]`
- `getMatrix(): string[][]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseDataModule } from '../../../cc-slot-module/SlotModuleExport';
import { GAME_MODE_ENUM } from '../../../cc-slot-module/SlotModuleExport';
import { StickySymbolConfig } from './StickySymbolConfig';

const { ccclass, property } = _decorator;

@ccclass
export class StickySymbolData extends BaseDataModule {
	@property customStickyProperty: string = "";

	protected config: StickySymbolConfig = null;
	protected stickyIndexes: number[] = [];
	protected isFinished: boolean = true;

	/**
     * @key matrix0: matrix for current game mode before transform
     * @key matrix: matrix for current game mode after transform
     * @key normalGameMatrix: matrix for normal game mode when resume game
     * @key freeGameMatrix: matrix for free game mode when resume game
	 * @type string[]
	 * @example ["2","3","4","2","3","4","2","3","4","2","3","4","2","3","4"]
	 * @key isFinished: whether the sticky symbol feature has finished executing
	 * @type boolean
	 * @example true
     */
	override registeredKeys: string[] = ["matrix0", "matrix", "normalGameMatrix", "freeGameMatrix", "isFinished"];

	onloadExtend(): void {
		this.config = this.getComponent(StickySymbolConfig);
		if (this.customStickyProperty) {
			this.registeredKeys.push(this.customStickyProperty);
		}
	}

	cleanStickyIndexes(): void {
		this.stickyIndexes = [];
	}

	/**
	 * Check if the sticky symbol feature has finished executing
	 * This function should be implemented by each individual game
	 * @returns {boolean} True if sticky symbol feature is finished, false otherwise
	 * @note returns false for testing purposes
	 */
	isFinishSticky(): boolean {
		// fake data for test here
		// return false;
		return this.isFinished;
	}

	/**
	 * Get all indexes of symbols that should stick on the slot table
	 * This function should be handled by each individual game
	 * @returns {number[]} Array of indexes where sticky symbols are located
	 */
	getStickyIndexes(): number[] {
		if (this.customStickyProperty) {
			return this.getStickyDataFromProperty();
		}
		return this.getStickyDataFromMatrix();
	}

	getStickyDataFromProperty(): number[] {
		const stickyData = this[this.customStickyProperty];
		if (!stickyData) {
			return [];
		}
		if (typeof stickyData == 'string') {
			const arr = stickyData.split(",");
			return arr.map(i => Number(i));
		}

		return stickyData;
	}

	getStickyDataFromMatrix(): number[] {
		const matrix = this.getMatrix();
		const flatMatrix = matrix.reduce((acc, row) => acc.concat(row), [] as string[]);
		flatMatrix.forEach((symbol, index) => {
			if (this.config.LIST_SYMBOL_FORCE_STICKY.indexOf(symbol) !== -1 && this.stickyIndexes.indexOf(index) === -1) {
				this.stickyIndexes.push(index);
			}
		});
		return Array.from(this.stickyIndexes);
	}

	getMatrix(): string[][] {
		let rawMatrix = [];
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				rawMatrix = this["normalGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
			case GAME_MODE_ENUM.FREE_GAME:
				rawMatrix = this["freeGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
		}
		return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT);
	}

}
```
