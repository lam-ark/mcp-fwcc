# AutoSpinConfigv3

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/AutoSpinPanel/v3/AutoSpinConfigv3.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`AutoSpinConfigv3`** extends `cc`

## Source Implementation
```typescript

const { ccclass } = cc._decorator;

@ccclass
export class AutoSpinConfigv3 extends cc.Component {
	public readonly AUTO_SPIN_NUMBERS: number[] = [10, 30, 50, 80, 100, 999];
}


```
