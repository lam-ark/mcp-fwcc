# FortuneWheelModuleConfig

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/FortuneWheelGame/Scripts/Table/FortuneWheelModuleConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`FortuneWheelModuleConfig`** extends `Component`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
const { ccclass } = _decorator;

@ccclass
export class FortuneWheelModuleConfig extends Component {
	public readonly TOTAL_ITEM: number = 12;
	public readonly RADIUS: number = 180;
	public readonly DEFAULT_BONUS_VALUE = 0;
	// public bonusType: BonusType = BonusType.JackpotBox4L;
	public readonly IDLE_SPEED = 0;
	public readonly MAX_SPEED = 200;
	public readonly BOUNCE_RATIO = 2;
	public readonly ARROW_RATIO = 2;
	public readonly MAX_BOUNCE_ANGLE = 50;
	public readonly MIN_BOUNCE_ANGLE = 20;

	public readonly DOT_RADIUS = 10;

	public readonly FAST_STOP_TIME = 1;
	public readonly WHEEL_MODES: any = {
		NORMAL: {
			TIME_TO_MAX_SPEED: 4,
			TIME_TO_RESULT: 10,
		},
		TURBO: {
			TIME_TO_MAX_SPEED: 2,
			TIME_TO_RESULT: 5,
		}
	}
}

```
