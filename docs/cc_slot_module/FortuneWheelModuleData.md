# FortuneWheelModuleData

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/FortuneWheelGame/Scripts/Table/FortuneWheelModuleData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`FortuneWheelModuleData`** extends `BaseDataModule`

## Key Methods
- `onloadExtend(): void`
- `getJackpotData(): any`
- `getBonusGameRemain(): any`
- `getBonusValue(): any`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseDataModule } from '../../../../Core/BaseDataModule';
import { FortuneWheelModuleConfig } from './FortuneWheelModuleConfig';
const { ccclass } = _decorator;

@ccclass
export class FortuneWheelModuleData extends BaseDataModule {
	registeredKeys = ['bonusValue', 'jackpot', 'bonusGameRemain'];
	_config: FortuneWheelModuleConfig;
	_bonusGameMatrix:any[] = []

	onloadExtend(): void {
		this._config = this.getComponent(FortuneWheelModuleConfig);
	}

	getJackpotData(): any {
		return this['jackpot'];
	}

	getBonusGameRemain(): any {
		return this['bonusGameRemain'];
	}

	getBonusValue(): any {
		return this['bonusValue'];
	}
}


```
