# PaylineConfig

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/scripts/PaylineConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`PaylineConfig`** extends `Component`

## Key Methods
- `SYMBOL_INDEXES(): number[][]`

## Source Implementation
```typescript
const { Component, Vec2, _decorator } = cc;
import { PAYLINE_TYPE } from "../../PaylineCommon/PaylineTypes";

const { ccclass, property } = _decorator;

@ccclass
export class PaylineConfig extends Component {
	@property IS_DEBUG: boolean = false;

	public readonly PAYLINE_TYPE: PAYLINE_TYPE = PAYLINE_TYPE.AllWays;
	public readonly PLAY_ANIMATION_LOOP: boolean = false;

	public readonly TABLE_CONFIG: any = {
		format: [3, 3, 3, 3, 3],
		cellSize: new Vec2(180, 160),
		positions: [],
	}
	private _symbolIndexes: number[][] | null = null;
	
	public get SYMBOL_INDEXES(): number[][] {
		if (this._symbolIndexes === null) {
			this._symbolIndexes = eno.SlotUtils.generateSymbolIndexes(this.TABLE_CONFIG.format);
		}
		return this._symbolIndexes;
	}

	public readonly TIMELINE_CONFIG: number = 2;

	public readonly PAY_LINE_MATRIX: any = {
		"1": [1, 1, 1, 1, 1],
		"2": [0, 0, 0, 0, 0],
		"3": [2, 2, 2, 2, 2],
		"4": [0, 1, 2, 1, 0],
		"5": [2, 1, 0, 1, 2],
		"6": [1, 0, 0, 0, 1],
		"7": [1, 2, 2, 2, 1],
		"8": [0, 0, 1, 2, 2],
		"9": [2, 2, 1, 0, 0],
		"10": [1, 2, 1, 0, 1],
		"11": [1, 0, 1, 2, 1],
		"12": [0, 1, 1, 1, 0],
		"13": [2, 1, 1, 1, 2],
		"14": [0, 1, 0, 1, 0],
		"15": [2, 1, 2, 1, 2],
		"16": [1, 1, 0, 1, 1],
		"17": [1, 1, 2, 1, 1],
		"18": [0, 0, 2, 0, 0],
		"19": [2, 2, 0, 2, 2],
		"20": [0, 2, 2, 2, 0],
	};

	public readonly WILD_CODE_CONFIG: string[] = ["K", "K1"];
}
```
