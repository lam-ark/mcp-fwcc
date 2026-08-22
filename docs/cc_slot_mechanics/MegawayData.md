# MegawayData

> **Source Path**: `assets/cc-common/cc-slot-mechanics/Megaway/scripts/MegawayData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`MegawayData`** extends `BaseDataModule`

## Key Methods
- `onloadExtend(): void`
- `onDataUpdate(): void`
- `getTotalWayCol(): number`
- `getTotalWay(): number`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseDataModule } from '../../../cc-slot-module/SlotModuleExport';
import { MegawayModuleConfig } from './MegawayModuleConfig';
const { ccclass } = _decorator;

@ccclass
export class MegawayData extends BaseDataModule {
	minCol: number = 2; // need to be at least 2 columns to calculate total ways
	
	/**
     * @key formatMatrix: format matrix
     * @key normalFormatMatrix: format matrix for normal game mode when resume game
     * @key freeFormatMatrix: format matrix for free game mode when resume game
	 * @type string[]
	 * @example ["111", "111", "111", "111", "111"]
     */
	public registeredKeys: string[] = ['formatMatrix','normalFormatMatrix','freeFormatMatrix'];
	_tableFormat: number[] = [];

	_config: any;

	onloadExtend(): void {
		this._config = this.getComponent(MegawayModuleConfig);
	}

	onDataUpdate(key: string, value: any): void {
		this[key] = value;
		this._tableFormat = value.map(item => item.split("").length);
	}

	getTotalWayCol(col: number): number {
		const tableFormat = this._tableFormat.length > 0 ? this._tableFormat : this._config.TABLE_FORMAT;

		if (col < this.minCol || !tableFormat || tableFormat.length < col) {
			return 0;
		}

		let totalWay = 1;
		for (let i = 0; i <= col; i++) {
			totalWay *= tableFormat[i];
		}

		return totalWay;
	}

	getTotalWay(): number {
		const tableFormat = this._tableFormat.length > 0 ? this._tableFormat : this._config.TABLE_FORMAT;
		let totalWay = 1;

		for (let i = 0; i < tableFormat.length; i++) {
			totalWay *= tableFormat[i];
		}

		return totalWay;
	}
}


```
