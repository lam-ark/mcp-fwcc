# StickySymbolConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`StickySymbolConfig`** extends `Component`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
const { ccclass } = _decorator;

@ccclass
export class StickySymbolConfig extends Component {
	public readonly STICKY_SYMBOL_INDEX = -2;
	public readonly TABLE_FORMAT = [3, 3, 3, 3, 3];
	public readonly LIST_SYMBOL_FORCE_STICKY = ["K", "A"];
}
```
