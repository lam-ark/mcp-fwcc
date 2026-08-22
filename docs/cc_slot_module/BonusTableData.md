# BonusTableData

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusTableData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BonusTableData`** extends `BaseDataModule`

## Key Methods
- `onloadExtend(): void`
- `getBonusGameMatrix(): any[]`
- `getJackpotData(): any`
- `getBonusGameRemain(): any`
- `getBonusValue(): any`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseDataModule } from '../../Core/BaseDataModule';
import { BonusTableConfig } from './BonusTableConfig';
const { ccclass, property } = _decorator;

@ccclass
export class BonusTableData extends BaseDataModule {
    registeredKeys = ['bonusGameMatrix', 'bonusValue', 'jackpot', 'bonusGameRemain'];
	_config: BonusTableConfig;

	onloadExtend(): void {
		this._config = this.getComponent(BonusTableConfig);
	}

	getBonusGameMatrix(): any[] {
		return this['bonusGameMatrix'];
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
