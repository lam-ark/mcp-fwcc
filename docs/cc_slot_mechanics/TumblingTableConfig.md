# TumblingTableConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/TumblingReel/scripts/TumblingTableConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`TumblingTableConfig`** extends `TableModuleConfig`

## Source Implementation
```typescript
const { _decorator } = cc;
import { TableModuleConfig } from '../../../cc-slot-module/SlotModuleExport';

const { ccclass } = _decorator;

@ccclass
export class TumblingTableConfig extends TableModuleConfig {
	public readonly SYMBOL_WIDTH: number = 180;
	public readonly SYMBOL_HEIGHT: number = 160;

	public readonly BUFFER_TOP: number = 0;
	public readonly BUFFER_BOT: number = 0;

    public readonly BUFFER_BOTTOM_Y: number = 20;
    public readonly BUFFER_TOP_Y: number = 20;

    public readonly DELAY_BETWEEN_SYMBOLS_SPINNING: number = 0.03;
    public readonly DELAY_BETWEEN_SYMBOLS_STOPPING: number = 0.08;
    public readonly DELAY_BETWEEN_REELS: number = 0.05;

    public readonly MODES = {
		NORMAL: {
			speed: 0.2,
			easingStop: 15,
			easingTimeStop: 0.2,
			delayStop: 0.5,
			isTurbo: false,
			stepStop: 12,
		},
		TURBO: {
			speed: 0.2,
			easingStop: 10,
			easingTimeStop: 0.15,
			delayStop: 0,
			isTurbo: true,
			stepStop: 6,
		},
	};
}
```
