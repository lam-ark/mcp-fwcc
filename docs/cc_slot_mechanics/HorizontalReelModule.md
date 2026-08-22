# HorizontalReelModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalReelModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`HorizontalReelModule`** extends `SlotReelModule`

## Key Methods
- `isRealSymbol(): boolean`
- `initPositionByType(): cc.Vec2`
- `spinAction(): void`
- `updateReelResult(): void`
- `recycleSymbol(): void`
- `getPositionStopStep(): `
- `mapSymbolData(): `
- `v2(): this.config.DEFAULT_SIZE`
- `spawnSymbol(): cc.Node`
- `getIndexSymbol(): number`
- `resetReel(): void`
- `resumeReel(): void`

## Source Implementation
```typescript
const { _decorator, Node, tween, v2, Vec2 } = cc;
import { HelpDocuments } from '../../../cc-slot-module/Components/Common/HelpDocuments';
import { SlotReelModule } from '../../../cc-slot-module/SlotModuleExport';
import { ReelSpinState } from '../../../cc-slot-module/SlotModuleExport';
import { SlotSymbolModule } from '../../../cc-slot-module/SlotModuleExport';
import { SymbolOwnerType } from '../../../cc-slot-module/SlotModuleExport';
const { ccclass, help } = _decorator;

@ccclass
@help(HelpDocuments.HORIZONTAL_REEL_MODULE)
export class HorizontalReelModule extends SlotReelModule {
	protected isRealSymbol(index: number): boolean {
		return index >= this.config.BUFFER_LEFT && index < this.reelManager.totalSymbol - this.config.BUFFER_RIGHT;
	}

	protected initPositionByType(index: number, size: cc.Vec2): cc.Vec2 {
		const { startX } = this.reelManager;
		const x = index * this.SYMBOL_WIDTH - startX;
		const y = 0;

		return v2(x, y);
	}

	spinAction(): void {
		if (this.reelManager.state === ReelSpinState.STOPPED) {
			this.playStopAnimation();
			return;
		}

		const newPosition: cc.Vec2 = new Vec2(-this.SYMBOL_WIDTH, 0);
		this.tween = tween(this.node)
			.by(this.currentMode.speed, { position: newPosition })
			.call(() => {
				this.tween = null;
				this.recycleSymbol();
				this.spinAction();
			})
			.start();
	}

	updateReelResult(symbols: string[]): void {
		this.data = [...symbols];
		for (let index = 0; index < this.config.BUFFER_BOT; index++) {
			this.data.unshift(this.getRandomSymbolWithException().symbolCode);
		}

		for (let index = 0; index < this.config.BUFFER_TOP; index++) {
			this.data.push(this.getRandomSymbolWithException().symbolCode);
		}
	}

	protected recycleSymbol(): void {
		if (!this.listSymbols.length) {
			return;
		}

		const symbol = this.listSymbols[0];
		const comp = SlotSymbolModule.getModuleComponent(symbol);

		if (!comp.getSize().equals(this.DEFAULT_SIZE) && comp.sizeCount > 1) {
			comp.sizeCount--;
		} else {
			this.symbolManager.removeSymbol(symbol);
			this.listSymbols.shift();
		}

		this.reelManager.step--;
		if (this.reelManager.step < this.reelManager.totalSymbol) {
			this.reelManager.changeState(ReelSpinState.SHOWING_RESULT);
		}

		this.spawnReelSymbol();

		if (this.reelManager.stop >= this.reelManager.totalSymbol) {
			this.reelManager.changeState(ReelSpinState.STOPPED);
		}
	}

	getPositionStopStep(): { positionStep1: cc.Vec2, positionStep2: cc.Vec2 } {
		const stepDistance = this.currentMode.easingStop;
		const positionStep1 = new Vec2(-stepDistance, 0);
		const positionStep2 = new Vec2(stepDistance, 0);

		return { positionStep1, positionStep2 };
	}

	mapSymbolData(value: string): { symbolCode: string, symbolSize: cc.Vec2, stop: number } {
		if (value.indexOf('_') >= 0) {
			const resultList = value.split("_");
			const [symbolCode, sizeX, sizeY] = resultList;
			const symbolSize = sizeX && sizeY ? v2(+sizeX, +sizeY) : this.config.DEFAULT_SIZE;
			return { symbolCode, symbolSize, stop: symbolSize.x };
		} else {
			return { symbolCode: value, symbolSize: this.config.DEFAULT_SIZE, stop: this.config.DEFAULT_SIZE.x };
		}
	}

	protected spawnSymbol(code: string, size: cc.Vec2): cc.Node {
		const offsetX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;
		const offsetY = size.y > this.DEFAULT_SIZE.y ? (size.y / 2 - 0.5) * this.SYMBOL_HEIGHT : 0;
		const rightX = Math.abs(this.node.position.x) + this.reelManager.startX;
		const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
		symbol.setPosition(rightX + offsetX, offsetY);

		this.listSymbols.push(symbol);
		return symbol;
	}

	getIndexSymbol(indexData: number): number {
		const symbolsIndex = [...this.config.SYMBOL_INDEXES[this.reelIndex]];

		const bufferTop = Array(this.config.BUFFER_TOP).fill(-1);
		const bufferBot = Array(this.config.BUFFER_BOT).fill(-1);
		symbolsIndex.push(...bufferTop);
		symbolsIndex.unshift(...bufferBot);

		return symbolsIndex[indexData];
	}

	resetReel(): void {
		const offset = Math.abs(this.node.position.x);
		this.listSymbols.forEach((s) => s.setPosition(s.position.x - offset, s.position.y));
		this.listSymbols.sort((a, b) => b.position.x - a.position.x);
		this.node.setPosition(0, this.node.position.y);
	}

	resumeReel(symbols): void {
		this.data = [...symbols];

		for (let index = 0; index < this.config.BUFFER_RIGHT; index++) {
			this.data.push(this.getRandomSymbolWithException().symbolCode);
		}

		for (let index = 0; index < this.config.BUFFER_LEFT; index++) {
			this.data.unshift(this.getRandomSymbolWithException().symbolCode);
		}

		this.data.forEach((symbolValue, index) => {
			if (symbolValue) {
				const { symbolCode: code, symbolSize: size } = this.mapSymbolData(symbolValue);
				const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
				SlotSymbolModule.getModuleComponent(symbol).setIndex(this.getIndexSymbol(index));
				const position = this.initPositionByType(index, size);
				symbol.setPosition(position.x, position.y);
				this.listSymbols.push(symbol);
			}
		});
		this.symbolManager.updateSymbolSiblingIndex(this.listSymbols);
	}
}
```
