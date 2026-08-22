# TransformSymbolConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/TransformSymbol/scripts/TransformSymbolConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`TransformSymbolConfig`** extends `Component`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
const { ccclass } = _decorator;

@ccclass
export class TransformSymbolConfig extends Component {
	public readonly TRANSFORM_DURATION: number = 2;
	public readonly DELAY_CHANGE_SYMBOL: number = 0.5;
}
```
