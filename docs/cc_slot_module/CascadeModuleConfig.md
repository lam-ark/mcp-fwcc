# CascadeModuleConfig

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/CascadeModule/scripts/CascadeModuleConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`CascadeModuleConfig`** extends `Component`

## Key Methods
- `SYMBOL_INDEXES(): number[][]`

## Source Implementation
```typescript
const { _decorator, Component, Vec2 } = cc;

const { ccclass } = _decorator;

@ccclass
export class CascadeModuleConfig extends Component {
    
	public readonly CASCADE_TABLE_CONFIG = {
		format: [3, 3, 3, 3, 3],
		cellSize: new Vec2(180, 160),
		positions: [],
	}

	public readonly DROP_SYMBOL_CODE: string = '-1';
	public readonly SYMBOL_SIZE: number = 1;

	protected _symbolIndexes: number[][] | null = null;
	
	public get SYMBOL_INDEXES(): number[][] {
		if (this._symbolIndexes === null) {
			this._symbolIndexes = eno.SlotUtils.generateSymbolIndexes(this.CASCADE_TABLE_CONFIG.format);
		}
		return this._symbolIndexes;
	}
	
	public readonly FALLING_TIME: number = 0.2;
	public readonly DELAY_FALLING_TIME: number = 0.2;
	public readonly CASCADING_TIME_COMPLETED: number = 1.5;
}

export interface CASCADE_TABLE_CONFIG {
	format: number[];
	cellSize: cc.Vec2;
	positions: cc.Vec2[][];
}
```
