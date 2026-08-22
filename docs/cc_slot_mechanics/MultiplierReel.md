# MultiplierReel

> **Source Path**: `assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReel.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`MultiplierReel`** extends `Component`

## CC Properties
- `lbMultiplier`

## Key Methods
- `onLoad(): void`
- `showMultiplier(): void`
- `resetMultiplier(): void`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class MultiplierReel extends Component {
	@property(cc.Label) lbMultiplier: cc.Label = null;
	onLoad(): void {
		this.node.on('SHOW_MULTIPLIER', this.showMultiplier, this);
		this.node.on('RESET_MULTIPLIER', this.resetMultiplier, this);
	}

	showMultiplier(multiplier: number, prefix: string = "x"): void {
		this.lbMultiplier.string = `${prefix}${multiplier}`;
	}

	resetMultiplier(): void {
		this.lbMultiplier.string = "";
	}
}
```
