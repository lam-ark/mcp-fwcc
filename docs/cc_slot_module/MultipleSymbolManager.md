# MultipleSymbolManager

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/MultipleSymbolManager.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`MultipleSymbolManager`** extends `SlotSymbolManager`

## CC Properties
- `specialSymbolTemplates`

## Key Methods
- `initSymbolPool(): void`
- `getSymbolFromPool(): cc.Node`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotSymbolManager } from "./SlotSymbolManager";
import { SlotCustomNodePool, SpecialSymbolTemplates } from "./SlotCustomNodePool";
const { ccclass, property } = _decorator;

@ccclass
export class MultipleSymbolManager extends SlotSymbolManager {
	@property(SpecialSymbolTemplates) specialSymbolTemplates: SpecialSymbolTemplates[] = [];

	symbolPool: SlotCustomNodePool = null;

	initSymbolPool(): void {
		this.symbolPool = new SlotCustomNodePool(this.template, this.initCount, this.specialSymbolTemplates);
		this.symbolPool.initSymbolPool();
	}

	getSymbolFromPool(code: string): cc.Node {
		return this.symbolPool.get(code);
	}
}

```
