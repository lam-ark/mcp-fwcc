# SpinePaylineLineItem

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/LineDrawing/scripts/SpinePaylineLineItem.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SpinePaylineLineItem`** extends `SlotLineItem`

## CC Properties
- `protected`

## Key Methods
- `init(): void`
- `show(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotLineItem } from './SlotLineItem';

const { ccclass, property } = _decorator;

@ccclass
export class SpinePaylineLineItem extends SlotLineItem {
	//#region Properties

	@property(sp.Skeleton) protected spineComponent = null;
	@property protected animationPrefix: string = '';
	@property protected haveZeroPaddingLeft: boolean = false;
	@property protected loop: boolean = false;

	protected animationName: string = '';

	//#endregion

	//#region Public Methods

	public init(payLineID: number, prefix: string = this.animationPrefix): void {
		super.init(payLineID);

		if (!this.spineComponent) {
			this.spineComponent = this.getComponent(sp.Skeleton);
		}

		if (!this.spineComponent) {
			return;
		}

		if (payLineID < 10) {
			this.animationName = prefix + (this.haveZeroPaddingLeft ? `0${payLineID}` : payLineID);
		} else {
			this.animationName = prefix + payLineID;
		}
	}

	public show(): void {
		super.show();
		if (this.spineComponent) {
			this.spineComponent.setAnimation(0, this.animationName, this.loop);
		}
	}

	//#endregion
}
```
