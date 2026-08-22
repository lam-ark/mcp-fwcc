# BuyFeatureConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/BuyFeature/scripts/BuyFeatureConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`BuyFeatureConfig`** extends `Component`

## Source Implementation
```typescript
const { _decorator, Component } = cc;

const { ccclass, property } = _decorator;

@ccclass
export class BuyFeatureConfig extends Component {
	readonly PREFIX_EXTRA_BET: string = "1";
	readonly CONTEXT_TEXT: string = "FREE SPINS";
}
```
