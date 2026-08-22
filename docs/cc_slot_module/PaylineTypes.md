# PaylineTypes

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineCommon/PaylineTypes.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Source Implementation
```typescript
export enum PaylineEventTypes {
	PAYLINE_SET_DATA = 'PAYLINE_SET_DATA',
	PAYLINE_BLINK_ALL = 'PAYLINE_BLINK_ALL',
	PAYLINE_SHOW_LINE = 'PAYLINE_SHOW_LINE',
	PAYLINE_STOP_ALL = 'PAYLINE_STOP_ALL',
	PAYLINE_DIM_ALL = 'PAYLINE_DIM_ALL',
	PAYLINE_SHOW_SPECIAL_SYMBOL = 'PAYLINE_SHOW_SPECIAL_SYMBOL',
	PAYLINE_SHOW_JACKPOT_LINE = 'PAYLINE_SHOW_JACKPOT_LINE',
	PAYLINE_CLEAR = 'PAYLINE_CLEAR',

	SYMBOL_PLAY_ANIMATION_WIN = 'SYMBOL_PLAY_ANIMATION_WIN',
}

export interface PayLineInfo {
	multiplier: string;
	payLineID: string;
	payLineWinAmount: string;
	payLineWinNumbers: number;
	symbolId: string;
}

export interface PayWayInfo {
	symbolId: string;
	payLineWinAmount: number;
	reelCount: number;
	combination: string;
	payableSymbol: string;
	multiplier: number;
}

export interface TableConfig {
	format: number[];
	cellSize: cc.Vec2;
	positions: cc.Vec2[];
}

export enum PAYLINE_TYPE {
	Lines = "Lines",
	AllWays = "AllWays",
	Cluster = "Cluster",
	ScatterPay = "ScatterPay"
}
```
