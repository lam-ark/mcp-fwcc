# SlotSymbolPayout

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/SymbolPaytable/SlotSymbolPayout.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`SymbolPayoutSf`**
- **`export`**
- **`SlotSymbolPayout`** extends `SlotSymbolModule`

## CC Properties
- `symbolCode`
- `symbolSf`

## Key Methods
- `onLoadExtend(): void`
- `showSymbolPayout(): void`
- `playSymbolPayoutAnim(): void`
- `resetSymbolPayout(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotSymbolModule } from "../../BaseModule/Table/SlotSymbol/SlotSymbolModule";

const { ccclass, property } = _decorator;

@ccclass("SymbolPayoutSf")
export class SymbolPayoutSf {
	@property() symbolCode: string = '';
	@property(cc.SpriteFrame) symbolSf: cc.SpriteFrame = null;
}

@ccclass
export class SlotSymbolPayout extends SlotSymbolModule {
	showSymbolPayoutCB: Function = () => {};
	symbolCol: number = 0;
	symbolRow: number = 0;

	onLoadExtend(): void {
		this.resetSymbolPayout();
	}

	showSymbolPayout(symbolCode: string): void {
		this.symbolCode = symbolCode;
		const skeletonData = this.resourceManager.getSymbolSkeleton(this.symbolCode);
		const symbolFrame = this.resourceManager.getSymbolFrame(this.symbolCode);

		if (skeletonData) {
			this.spine.node.active = true;
			this.sprite.node.active = false;
			this.spine.skeletonData = skeletonData;
			this.playSymbolPayoutAnim();
		} else {
			this.spine.node.active = false;
			this.sprite.node.active = true;
			this.sprite.spriteFrame = symbolFrame;
		}
	}

	playSymbolPayoutAnim(): void {
		// to do;
	}

	resetSymbolPayout(): void {
		this.spine.node.active = false;
		this.sprite.node.active = false;
	}
}

```
