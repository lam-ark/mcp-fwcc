# AutoSpinNumber

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/AutoSpinPanel/AutoSpinNumber.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`AutoSpinNumber`** extends `Component`

## CC Properties
- `public`

## Key Methods
- `init(): void`
- `updateSpinTimes(): void`
- `setHighlight(): void`
- `Color(): new Color(255, 255, 255, 255)`
- `onSelected(): void`

## Source Implementation
```typescript
const { _decorator, Color, Component } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class AutoSpinNumber extends Component {
	@property(cc.Label)
	public numberLabel: cc.Label = null;

	selectOptionCB: Function = () => {};
	spinTimes: number = 0;
	isHighlight: boolean = false;

	init(spinTimes: number, selectOptionCB): void {
		this.spinTimes = spinTimes;
		this.selectOptionCB = selectOptionCB;
		this.updateSpinTimes();
	}

	updateSpinTimes(): void {
		this.numberLabel.string = `${this.spinTimes === Number.MAX_SAFE_INTEGER ? '∞' : this.spinTimes}`;
	}

	setHighlight(isHighlight: boolean): void {
		this.isHighlight = isHighlight;
		this.numberLabel.node.color = isHighlight ? new Color(255, 0, 0, 255) : new Color(255, 255, 255, 255);
	}

	onSelected(): void {
		if (this.isHighlight) {
			return;
		}
		this.selectOptionCB();
	}
}


```
