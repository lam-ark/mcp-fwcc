# BetHistoryConfig

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/BetHistory/BetHistoryConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetHistoryConfig`** extends `Component`

## Source Implementation
```typescript
const { _decorator, Component, Vec2 } = cc;
const { ccclass } = _decorator;

@ccclass
export class BetHistoryConfig extends Component {
	public SYMBOL_WIDTH = 150;
	public SYMBOL_HEIGHT = 150;
	public DEFAULT_SYMBOL_SIZE = Vec2.ONE;
	public WIN_FREE_GAME = {
		SYMBOL_CODE: "A",
		SYMBOL_COUNT: 3,
	}
	public WIN_BONUS_GAME = {
		SYMBOL_CODE: "A",
		SYMBOL_COUNT: 3,
	}
	public WIN_JACKPOT = {
		SYMBOL_CODE: "JP",
		SYMBOL_COUNT: 3,
	}
	public WILD_SYMBOL = "K";

	public PAY_LINE_MATRIX = {
		"1": [0, 0, 0, 0, 0],
		"2": [0, 0, 0, 1, 2],
		"3": [0, 0, 1, 0, 0],
		"4": [0, 0, 1, 2, 3],
		"5": [0, 1, 0, 1, 0],
		"6": [0, 1, 1, 1, 0],
		"7": [0, 1, 1, 2, 3],
		"8": [0, 1, 2, 2, 3],
		"9": [0, 1, 2, 3, 2],
		"10": [0, 1, 2, 3, 3],
		"11": [1, 0, 0, 0, 1],
		"12": [1, 0, 0, 1, 2],
		"13": [1, 0, 1, 2, 1],
		"14": [1, 0, 1, 2, 3],
		"15": [1, 1, 0, 1, 1],
		"16": [1, 1, 1, 1, 1],
		"17": [1, 1, 2, 3, 3],
		"18": [1, 2, 1, 0, 1],
		"19": [1, 2, 2, 2, 3],
		"20": [1, 2, 3, 2, 1],
	}
}

```
