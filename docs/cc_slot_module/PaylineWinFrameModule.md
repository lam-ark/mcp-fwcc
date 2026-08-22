# PaylineWinFrameModule

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/WinFrame/scripts/PaylineWinFrameModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`PaylineWinFrameModule`** extends `BasePaylineComponent`

## CC Properties
- `protected`
- `protected`

## Key Methods
- `registerPaylineEvents(): void`
- `playAnimation(): void`
- `hideAll(): void`
- `clearAll(): void`
- `getWinFrame(): cc.Node`
- `spawnFrame(): cc.Node`

## Source Implementation
```typescript
const { _decorator, instantiate, Node, NodePool, Prefab } = cc;
import { BasePaylineComponent } from '../../scripts/BasePaylineComponent';
import { PaylineEventTypes } from '../../../PaylineCommon/PaylineTypes';

const { ccclass, property } = _decorator;

@ccclass
export class PaylineWinFrameModule extends BasePaylineComponent {
	//#region Properties

	@property({ type: cc.Node, tooltip: 'Holder for win frames' })
	protected container: cc.Node = null;

	@property({ type: Prefab, tooltip: 'Template for win frames' })
	protected template: cc.Prefab = null;

	protected frames: cc.Node[][] = []; // frames[reel][row]
	protected winFramePool: cc.NodePool = new NodePool("PaylineWinFrame");

	//#endregion

	//#region Internal Methods

	protected registerPaylineEvents(): void {
		if (!this.payLineEmitter) {
			return;
		}

		this.payLineEmitter.on(PaylineEventTypes.SYMBOL_PLAY_ANIMATION_WIN, this.playAnimation, this);
		this.payLineEmitter.on(PaylineEventTypes.PAYLINE_STOP_ALL, this.hideAll, this);
		this.payLineEmitter.on(PaylineEventTypes.PAYLINE_CLEAR, this.clearAll, this);
	}

	protected playAnimation(data: { symbol: any, duration: number }): void {
		const { reel, row, position } = data.symbol;
		const winFrame = this.getWinFrame(reel, row, position);
		winFrame.emit('PLAY_ANIMATION', '', data.duration);
	}

	protected hideAll(): void {
		this.frames.forEach((reel) => {
			reel.forEach((frame) => {
				frame.emit('HIDE');
			});
		});
	}

	protected clearAll(): void {
		this.frames.forEach((reel) => {
			reel.forEach((frame) => {
				frame.emit('RESET');
				this.winFramePool.put(frame);
			});
		});
		this.frames = [];
	}

	protected getWinFrame(reel: number, row: number, position: cc.Vec3): cc.Node {
		if (!this.frames[reel]) {
			this.frames[reel] = [];
		}

		let winFrame = this.frames[reel][row];
		if (!winFrame) {
			winFrame = this.spawnFrame(reel, row, position);
		}
		return winFrame;
	}

	protected spawnFrame(reel: number, row: number, position: cc.Vec3): cc.Node {
		let node = this.winFramePool.get() || instantiate(this.template);
		node.setParent(this.container);
		node.setPosition(position);
		if (!this.frames[reel]) {
			this.frames[reel] = [];
		}
		this.frames[reel][row] = node;
		return node;
	}
	//#endregion
}

```
