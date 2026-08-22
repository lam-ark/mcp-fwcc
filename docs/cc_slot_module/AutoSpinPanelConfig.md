# AutoSpinPanelConfig

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/AutoSpinPanel/AutoSpinPanelConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`AutoSpinPanelConfig`** extends `Component`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
const { ccclass } = _decorator;

@ccclass
export class AutoSpinPanelConfig extends Component {
	public readonly AUTO_SPIN_NUMBERS: number[] = [10, 30, 50, 80, 100, Number.MAX_SAFE_INTEGER];
}


```
