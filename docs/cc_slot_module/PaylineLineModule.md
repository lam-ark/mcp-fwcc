# PaylineLineModule

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/LineDrawing/scripts/PaylineLineModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`PaylineLineModule`** extends `BasePaylineComponent`

## CC Properties
- `protected`
- `protected`

## Key Methods
- `registerPaylineEvents(): void`
- `onDestroy(): void`
- `setupPaylines(): void`
- `blinkAllPayLines(): void`
- `showPayLine(): void`
- `showLineNumber(): void`
- `hideAll(): void`
- `clearAll(): void`
- `getLine(): cc.Node`

## Source Implementation
```typescript
const { _decorator, instantiate, NodePool, Prefab } = cc;
import { BasePaylineComponent } from '../../PaylineModule/scripts/BasePaylineComponent';
import { PaylineEventTypes, PayLineInfo } from '../../PaylineCommon/PaylineTypes';

const { ccclass, property } = _decorator;

@ccclass
export class PaylineLineModule extends BasePaylineComponent {
	//#region Properties

	@property({ type: cc.Node, tooltip: 'Holder for lines' })
	protected container: cc.Node = null;

	@property({ tooltip: 'Use prefab for lines' })
	protected usePrefab: boolean = true;

	@property({ type: cc.Node, tooltip: 'Array of lines', visible: function () {
		return !this.usePrefab;
	} })
	protected lines: cc.Node[] = [];

	@property({ type: Prefab, visible: function () {
		return this.usePrefab;
	} })
	protected template: cc.Prefab = null;

	protected linePool: cc.NodePool = new NodePool("SlotLineItem");
	protected payLines: PayLineInfo[] = [];

	//#endregion

	//#region Internal Methods

	protected registerPaylineEvents(): void {
		if (!this.payLineEmitter) {
			return;
		}

		this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SET_DATA, this.setupPaylines, this);
		this.payLineEmitter.on(PaylineEventTypes.PAYLINE_BLINK_ALL, this.blinkAllPayLines, this);
		this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_LINE, this.showPayLine, this);
		this.payLineEmitter.on(PaylineEventTypes.PAYLINE_STOP_ALL, this.hideAll, this);
		this.payLineEmitter.on(PaylineEventTypes.PAYLINE_CLEAR, this.clearAll, this);
	}

	protected onDestroy(): void {
		this.unregisterPaylineEvents();
	}

	protected setupPaylines(data: { matrix: string[][], payLines: PayLineInfo[] }): void {
		this.payLines = data.payLines;
	}

	protected blinkAllPayLines(): void {
		this.clearAll();
		this.payLines.forEach(payLine => {
			this.showPayLine(payLine, false);
		});
	}

	protected showPayLine(payLine: PayLineInfo, hideAll: boolean = true): void {
		if (hideAll) {
			this.hideAll();
		}

		if (!payLine.payLineID) {
			return;
		}

		this.showLineNumber(payLine.payLineID);
	}

	protected showLineNumber(lineID: any): void {
		let line = this.lines[lineID];
		if (!line) {
			line = this.getLine();
			line.setParent(this.container);
			line.emit("INIT", lineID);
			this.lines[lineID] = line;
		}
		line.emit("SHOW");
	}

	protected hideAll(): void {
		this.lines.forEach(line => {
			line.emit("HIDE");
		});
	}

	protected clearAll(): void {
		this.lines.forEach(line => {
			line.emit("RESET");
			this.linePool.put(line);
		});
		this.lines.length = 0;
	}

	protected getLine(): cc.Node {
		if (this.linePool.size() > 0) {
			return this.linePool.get();
		}
		return instantiate(this.template);
	}
	//#endregion
}
```
