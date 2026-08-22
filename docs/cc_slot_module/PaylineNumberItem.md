# PaylineNumberItem

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/LineNumber/scripts/PaylineNumberItem.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`PaylineNumberItem`** extends `Component`

## Key Methods
- `onLoad(): void`
- `onDestroy(): void`
- `show(): void`
- `hide(): void`

## Source Implementation
```typescript
const { Component, _decorator, isValid } = cc;

const { ccclass, property, executeInEditMode } = _decorator;

@ccclass
@executeInEditMode
export class PaylineNumberItem extends Component {
	//#region Properties

	@property
	public numberID: string = '';

	//#endregion

	//#region Lifecycle

	protected onLoad(): void {
		if (this.numberID === '') {
			const arr = this.node.name.split('_');
			this.numberID = arr[arr.length - 1];
		}
		this.node.on("SHOW", this.show, this);
		this.node.on("HIDE", this.hide, this);
	}

	protected onDestroy(): void {
		if (isValid(this.node)) {
			this.node.targetOff(this);
		}
	}

	//#endregion

	//#region Public Methods

	public show(): void {
		this.node.active = true;
	}

	public hide(): void {
		this.node.active = false;
	}

	//#endregion
}
```
