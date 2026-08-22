# PaylineNumberModule

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/LineNumber/scripts/PaylineNumberModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`PaylineNumberModule`** extends `BasePaylineComponent`

## CC Properties
- `protected`

## Key Methods
- `onLoadExtend(): void`
- `registerPaylineEvents(): void`
- `setupPaylines(): void`
- `blinkAllPayLines(): void`
- `hideAll(): void`
- `showPayLine(): void`
- `showNumber(): void`
- `hideNumber(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BasePaylineComponent } from '../../PaylineModule/scripts/BasePaylineComponent';
import { PaylineEventTypes, PayLineInfo } from '../../PaylineCommon/PaylineTypes';
import { PaylineNumberItem } from './PaylineNumberItem';

const { ccclass, property } = _decorator;

@ccclass
export class PaylineNumberModule extends BasePaylineComponent {
	//#region Properties

	@property({ type: [cc.Node] })
	protected container: cc.Node[] = [];

	protected numbers: PaylineNumberItem[] = [];
	protected payLines: PayLineInfo[] = [];
	protected mapNumberToItem: Map<string, PaylineNumberItem[]> = new Map();

	//#endregion

	//#region Internal Methods

	onLoadExtend(): void {
		this.numbers = [];
		this.container.forEach(child => {
			this.numbers.push(...child.getComponentsInChildren(PaylineNumberItem));
		});
		this.numbers.forEach(item => {
			const list = this.mapNumberToItem.get(item.numberID) || [];
			list.push(item);
			this.mapNumberToItem.set(item.numberID, list);
		});
		this.hideAll();
	}

	protected registerPaylineEvents(): void {
		if (!this.payLineEmitter) {
			return;
		}

		this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SET_DATA, this.setupPaylines, this);
		this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_LINE, this.showPayLine, this);
		this.payLineEmitter.on(PaylineEventTypes.PAYLINE_BLINK_ALL, this.blinkAllPayLines, this);
		this.payLineEmitter.on(PaylineEventTypes.PAYLINE_STOP_ALL, this.hideAll, this);
		this.payLineEmitter.on(PaylineEventTypes.PAYLINE_CLEAR, this.hideAll, this);
	}

	protected setupPaylines(data: { matrix: string[][], payLines: PayLineInfo[] }): void {
		this.payLines = data.payLines;
	}

	protected blinkAllPayLines(): void {
		this.payLines.forEach(payline => {
			this.showNumber(payline.payLineID);
		});
	}

	protected hideAll(): void {
		this.numbers.forEach(item => {
			item.hide();
		});
	}

	protected showPayLine(payline: PayLineInfo): void {
		this.hideAll();
		this.showNumber(payline.payLineID);
	}

	protected showNumber(paylineID: string): void {
		const items = this.mapNumberToItem.get(paylineID);
		items && items.forEach(item => {
			item.show();
		});
	}

	protected hideNumber(paylineID: string): void {
		const items = this.mapNumberToItem.get(paylineID);
		items && items.forEach(item => {
			item.hide();
		});
	}

	//#endregion
}
```
