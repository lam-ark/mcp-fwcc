# NudgeReelModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeReelModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`NudgeReelModule`** extends `SlotReelModule`

## Key Methods
- `setupNudge(): void`
- `prepareNudge(): void`
- `startNudge(): void`
- `nudgeSpinning(): void`
- `recycleNudgeSymbol(): void`
- `spawnNudgeSymbol(): cc.Node`
- `spawnBottomSymbol(): cc.Node`
- `getRandomSymbol(): `
- `addNudgeSymbols(): void`
- `changeBufferSymbol(): cc.Node`
- `addRemainNudgeSymbols(): void`
- `addBufferSymbol(): void`
- `updateIndexSymbols(): void`
- `resetNudgeReel(): void`
- `resetAllEffectAndTasks(): void`

## Source Implementation
```typescript
const { _decorator, tween, Vec2 } = cc;
import { HelpDocuments } from "../../../cc-slot-module/Components/Common/HelpDocuments";
import { SlotReelModule } from "../../../cc-slot-module/SlotModuleExport";
import { SlotSymbolModule } from "../../../cc-slot-module/SlotModuleExport";
import { SymbolIndexType, SymbolOwnerType } from "../../../cc-slot-module/SlotModuleExport";

const { ccclass, help } = _decorator;

const enum NudgeDirection {
	NUDGE_UP = -1,
	NUDGE_DOWN = 1,
}

const SYMBOL_NUDGE = 'K';
const SYMBOL_NUDGE_SIZE = Vec2.ONE;
const NUDGE_SPEED = 0.5;

@ccclass
@help(HelpDocuments.NUDGE_REEL_MODULE)
export class NudgeReelModule extends SlotReelModule {

	protected _nudgeStep: number = 0;
	protected _totalNudgeStep: number = 0;
	protected _direction: NudgeDirection;

	setupNudge({index, step, direction}): void {
		this._totalNudgeStep = step;
		this._nudgeStep = this._totalNudgeStep;
		this._direction = direction;
	}
    
	prepareNudge(): void {
		const currentPosition = this.node.position.clone();
		const newPosition: cc.Vec2 = new Vec2(0, 30 * this._direction);
		this.tween = tween(this.node)
			.delay(0.4)
			.by(this.currentMode.speed, { position: newPosition })
			.delay(0.2)
			.to(this.currentMode.speed, { position: currentPosition })
			.call(() => {
				this.tween = null;
				this.startNudge();
			})
			.start();
	}

	protected startNudge(): void {
		//add all symbols before nudging
		this.addNudgeSymbols();
        
		this.nudgeSpinning();
	}

	protected nudgeSpinning(): void {
		if (this._nudgeStep <= 0) {
			this.resetNudgeReel();
			this.updateIndexSymbols();
			return;
		}

		const newPosition: cc.Vec2 = new Vec2(0, -this.SYMBOL_HEIGHT * this._direction);
		this.tween = tween(this.node)
			.by(NUDGE_SPEED, { position: newPosition })
			.call(() => {
				this.tween = null;
				this.recycleNudgeSymbol();
				this.nudgeSpinning();
			})
			.start();   
	}

	protected recycleNudgeSymbol(): void {
		if (!this.listSymbols.length) {
			return;
		}

		const length = this.listSymbols.length;
		const bufferIndex = (this._direction == NudgeDirection.NUDGE_DOWN) ? length - 1 : 0;
		const symbol = this.listSymbols[bufferIndex];
		const comp = SlotSymbolModule.getModuleComponent(symbol);

		if (!comp.getSize().equals(this.DEFAULT_SIZE) && comp.sizeCount > 1) {
			comp.sizeCount--;
		} else {
			this.symbolManager.removeSymbol(symbol);
			if (this._direction == NudgeDirection.NUDGE_UP) {
				this.listSymbols.shift();
			} else {
				this.listSymbols.pop();
			}
		}

		this._nudgeStep--;
	}

	protected spawnNudgeSymbol(code: string, size: cc.Vec2): cc.Node {
		if (this._direction == NudgeDirection.NUDGE_UP) {
			return this.spawnBottomSymbol(code, size);
		} else {
			return super.spawnSymbol(code, size);
		}
	}

	protected spawnBottomSymbol(code: string, size: cc.Vec2): cc.Node {
		const offsetX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;
		const offsetY = size.y * this.SYMBOL_HEIGHT;
		const topY = this.originalPosition.y + Math.abs(this.node.position.y) - this.reelManager.showSymbol * this.SYMBOL_HEIGHT;

		const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
		symbol.setPosition(offsetX, topY - offsetY);

		this.listSymbols.push(symbol);
		return symbol;
	}

	protected getRandomSymbol(): { symbolCode: string, symbolSize: cc.Vec2 } {
		// check if this reel has nudge and nudge direction is UP
		// random NUDGE symbol at the bottom for preparing nudge up
		if (this._totalNudgeStep > 0 && this._direction == NudgeDirection.NUDGE_UP) {
			const minStep = this.reelManager.totalSymbol - 1;
			const maxStep = minStep + this._totalNudgeStep - 1;
			if (this.reelManager.step >= minStep && this.reelManager.step <= maxStep) {
				return { symbolCode: SYMBOL_NUDGE, symbolSize: this.config.DEFAULT_SIZE};
			}
		}

		const randomSymbols = this.RANDOM_SYMBOLS_CODE[this.reelIndex];
		const totalSymbols = randomSymbols.length;
		const randomCode = randomSymbols[Math.floor(Math.random() * totalSymbols)];
		const { symbolCode, symbolSize } = this.mapSymbolData(randomCode);
		return { symbolCode, symbolSize };
	}

	protected addNudgeSymbols(): void {
		let offsetY = 0;

		//update buffer symbol to nudge symbol
		//direction is UP -> index = 0 (top) in list symbols
		//direction is DOWN -> index = length - 1 (bottom) in list symbols
		const bufferIndex = (this._direction == NudgeDirection.NUDGE_UP) ? this.listSymbols.length - 1 : 0;
		const bufferSymbol = this.changeBufferSymbol(bufferIndex);
		offsetY = bufferSymbol.position.y;

		// add remain nudge symbols
		this.addRemainNudgeSymbols(offsetY);

		// add buffer symbol
		offsetY = offsetY + (this._totalNudgeStep - 1) * this._direction * this.SYMBOL_HEIGHT;
		this.addBufferSymbol(offsetY);
	}

	protected changeBufferSymbol(index: number): cc.Node {
		const symbol = this.listSymbols[index];
		SlotSymbolModule.getModuleComponent(symbol).changeToSymbol(SYMBOL_NUDGE);
		return symbol;
	}

	protected addRemainNudgeSymbols(positionY: number): void {
		let offsetY = positionY;
		for (let i = 0; i < this._totalNudgeStep; i++) {
			const symbol = this.spawnNudgeSymbol(SYMBOL_NUDGE, SYMBOL_NUDGE_SIZE);
			SlotSymbolModule.getModuleComponent(symbol).setIndex(SymbolIndexType.UNUSED);
			symbol.setPosition(new Vec2(symbol.position.x, offsetY));
			offsetY = offsetY + this._direction * this.SYMBOL_HEIGHT;
		}
	}

	protected addBufferSymbol(positionY: number): void {
		const { symbolCode, symbolSize } = this.getRandomSymbol();
		const bufferSymbol = this.spawnNudgeSymbol(symbolCode, symbolSize);
		bufferSymbol.setPosition(new Vec2(bufferSymbol.position.x, positionY + this._direction * this.SYMBOL_HEIGHT));
	}

	protected updateIndexSymbols(): void {
		this.resultSymbols = [];
        
		const startIndex = this.config.BUFFER_TOP;
		const endIndex = this.reelManager.totalSymbol - this.config.BUFFER_BOT;
		const symbolsIndex = [...this.config.SYMBOL_INDEXES[this.reelIndex]].reverse();
		let index = 0;
		for (let i = endIndex - 1; i >= startIndex; i--) {
			const symbol = this.listSymbols[i];
			SlotSymbolModule.getModuleComponent(symbol).setIndex(symbolsIndex[index++]);
			this.resultSymbols.push(symbol);
		}
	}

	protected resetNudgeReel(): void {
		const offset = Math.abs(this.node.position.y);
		this.listSymbols.forEach((s) => s.setPosition(s.position.x, s.position.y - this._direction * offset));
		this.listSymbols.sort((a, b) => b.position.y - a.position.y);
		this.node.setPosition(this.originalPosition);

		this._nudgeStep = 0;
		this._totalNudgeStep = 0;
	}

	resetAllEffectAndTasks(): void {
		this.resetNudgeReel();
	}

}
```
