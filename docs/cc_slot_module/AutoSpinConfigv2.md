# AutoSpinConfigv2

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/AutoSpinPanel/v2/AutoSpinConfigv2.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`AutoSpinConfigv2`** extends `cc`

## Source Implementation
```typescript

const { ccclass } = cc._decorator;

@ccclass
export class AutoSpinConfigv2 extends cc.Component {
	public readonly AUTO_SPIN_NUMBERS: number[] = [10, 30, 50, 80, 100, Number.MAX_SAFE_INTEGER];
	public readonly DEFAULT_SELECTED_INDEX: number = 0;
}


```
