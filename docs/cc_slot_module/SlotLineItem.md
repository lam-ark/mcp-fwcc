# SlotLineItem

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/LineDrawing/scripts/SlotLineItem.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotLineItem`** extends `Component`

## Key Methods
- `onLoad(): void`
- `onDestroy(): void`
- `reuse(): void`
- `unuse(): void`
- `init(): void`
- `show(): void`
- `hide(): void`
- `reset(): void`

## Source Implementation
```typescript
const { _decorator, Component, isValid } = cc;

const { ccclass } = _decorator;

@ccclass
export class SlotLineItem extends Component {
	//#region Properties

	protected payLineID: number = 0;

	//#endregion

	//#region Lifecycle

	protected onLoad(): void {
		this.node.on("INIT", this.init, this);
		this.node.on("SHOW", this.show, this);
		this.node.on("HIDE", this.hide, this);
		this.node.on("RESET", this.reset, this);
	}

	protected onDestroy(): void {
		if (isValid(this.node)) {
			this.node.targetOff(this);
		}
	}

	//#endregion

	//#region Public Methods

	public reuse(): void {
		this.node.active = true;
	}

	public unuse(): void {
		this.node.active = false;
	}

	public init(payLineID: number): void {
		this.payLineID = payLineID;
	}

	public show(): void {
		this.node.active = true;
	}

	public hide(): void {
		this.node.active = false;
	}

	public reset(): void {
		this.hide();
	}
	//#endregion
}
```
