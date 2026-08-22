# BonusTableConfig

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusTableConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BonusTableConfig`** extends `Component`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
const { ccclass } = _decorator;
export enum BonusType {
	RewardBox,
	JackpotBox,
	JackpotBox4L, // for 4L game series
}
@ccclass
export class BonusTableConfig extends Component {
	public readonly TOTAL_ITEM: number = 12;
	public readonly DELAY_OPEN_ALL_BOX: number = 3;
	public readonly MAX_OPEN_ITEM: number = 9;
	public readonly COL_NUMBER: number = 4;
	public readonly ROW_NUMBER: number = 3;
	public readonly WIDTH_STEP: number = 220;
	public readonly HEIGHT_STEP: number = 150;
	public readonly REWARD_BOX_VALUE = [
		{ value: 100, count: 7 },
		{ value: 200, count: 5 },
		{ value: 400, count: 3 },
	];
	public readonly JACKPOT_BOX_VALUE = [
		{ value: 1, count: 3 },
		{ value: 2, count: 3 },
		{ value: 33, count: 3 },
		{ value: 44, count: 3 },
	];
	public readonly JACKPOT_BOX_VALUE_2 = [
		{ value: 1, count: 3 },
		{ value: 2, count: 3 },
		{ value: 3, count: 3 },
		{ value: 4, count: 3 },
	];
	public readonly DEFAULT_BONUS_VALUE = 0;
	public bonusType: BonusType = BonusType.JackpotBox4L;
}

```
