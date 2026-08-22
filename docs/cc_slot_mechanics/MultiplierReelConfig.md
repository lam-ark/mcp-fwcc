# MultiplierReelConfig

> **Source Path**: `assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReelConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`MultiplierReelConfig`** extends `Component`

## Source Implementation
```typescript
const { _decorator, Component, v2 } = cc;
const { ccclass } = _decorator;

@ccclass
export class MultiplierReelConfig extends Component {
	readonly TOTAL_MULTIPLIER_REEL: number = 5;
	readonly MULTIPLIER_PREFIX: string = "x";
	readonly MULTIPLIER_REEL_POSITION: cc.Vec2[] = [
		v2(-280, 0),
		v2(-140, 0),
		v2(0, 0),
		v2(140, 0),
		v2(280, 0)
	]
}
```
