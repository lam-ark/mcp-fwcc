# RemovedSymbolConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/RemovedSymbol/RemovedSymbolConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`RemovedSymbolConfig`** extends `Component`

## Key Methods
- `SYMBOL_INDEXES(): number[][]`

## Source Implementation
```typescript
const { _decorator, Component, Vec2 } = cc;

const { ccclass } = _decorator;

@ccclass
export class RemovedSymbolConfig extends Component {
    
	public readonly TABLE_CONFIG = {
		format: [4, 4, 4, 4, 4, 4],
		cellSize: new Vec2(140, 110),
		positions: [],
	}

	private _symbolIndexes: number[][] | null = null;
	
	public get SYMBOL_INDEXES(): number[][] {
		if (this._symbolIndexes === null) {
			this._symbolIndexes = eno.SlotUtils.generateSymbolIndexes(this.TABLE_CONFIG.format);
		}
		return this._symbolIndexes;
	}
}
```
