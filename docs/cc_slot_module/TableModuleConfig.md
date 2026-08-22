# TableModuleConfig

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/TableModuleConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`TableModuleConfig`** extends `Component`

## Key Methods
- `SYMBOL_INDEXES(): number[][]`
- `getRandomBeautyMatrix(): string[][]`
- `getRandomMatrix(): string[][]`

## Source Implementation
```typescript
const { _decorator, Component, Vec2 } = cc;
const { ccclass } = _decorator;
@ccclass
export class TableModuleConfig extends Component {
	public SYMBOL_WIDTH: number = 180;
	public SYMBOL_HEIGHT: number = 160;
	public BUFFER_TOP: number = 1;
	public BUFFER_BOT: number = 1; // increase buffer when having mega symbol
	public TABLE_FORMAT: number[] = [3, 3, 3, 3, 3];
	public RANDOM_SYMBOLS_CODE = [
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
		["2", "3", "4", "5"],
	];
	
	private _symbolIndexes: number[][] | null = null;
	
	public get SYMBOL_INDEXES(): number[][] {
		if (this._symbolIndexes === null) {
			this._symbolIndexes = eno.SlotUtils.generateSymbolIndexes(this.TABLE_FORMAT);
		}
		return this._symbolIndexes;
	}
	
	public EXCEPTION_SYMBOLS: string[] = ["A", "R", "K"];
	public SPECIAL_SYMBOLS: string[] = ["A", "R", "K"];
	public FAST_SPIN_RATE: number = 3;
	public DEFAULT_SIZE = Vec2.ONE;
	public MODES: any = {
		NORMAL: {
			speed: 0.06,
			easingStop: 15,
			easingTimeStop: 0.2,
			delayStop: 0.5,
			isTurbo: false,
			stepStop: 12,
			slowdownFactor: 4,
		},
		TURBO: {
			speed: 0.05,
			easingStop: 10,
			easingTimeStop: 0.15,
			delayStop: 0,
			isTurbo: true,
			stepStop: 6,
			slowdownFactor: 8,
		},
	};
	public SCATTER_SYMBOL: string = "A";
	public BONUS_SYMBOL: string = "R";
	public JACKPOT_SYMBOL: string = "JP";
	public WILD_SYMBOL: string = "K";
	public NEAR_WIN_DELAY_STOP: number = 0;
	public NEAR_WIN_DELAY_TIME: number = 1;
	public NEAR_WIN_DELAY_TIME_LAST_REEL: number = 2;
	public RANDOM_MATRIX = [];
	public BEAUTY_MATRIX = [];
	public getRandomBeautyMatrix(): string[][] {
		const randomIndex = Math.floor(Math.random() * this.BEAUTY_MATRIX.length);
		return this.BEAUTY_MATRIX[randomIndex];
	}
	public getRandomMatrix(): string[][] {
		let matrix = [];
		if (this.RANDOM_MATRIX.length) {
			const randomIndex = Math.floor(Math.random() * this.RANDOM_MATRIX.length);
			return this.RANDOM_MATRIX[randomIndex];
		} else {
			for (let i = 0; i < this.TABLE_FORMAT.length; i++) {
				matrix[i] = [];
				const symbols = this.RANDOM_SYMBOLS_CODE[i];
				for (let j = 0; j < this.TABLE_FORMAT[i]; j++) {
					const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
					matrix[i][j] = randomSymbol;
				}
			}
			return matrix;
		}
	}
}

```
