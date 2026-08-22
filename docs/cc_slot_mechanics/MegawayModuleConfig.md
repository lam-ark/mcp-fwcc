# MegawayModuleConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/Megaway/scripts/MegawayModuleConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`MegawayModuleConfig`** extends `Component`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
const { ccclass } = _decorator;

@ccclass
export class MegawayModuleConfig extends Component {
	readonly TABLE_FORMAT: number[] = [4, 5, 5, 5, 5, 4];
}
```
