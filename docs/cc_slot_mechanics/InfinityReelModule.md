# InfinityReelModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityReelModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`InfinityReelModule`** extends `SlotReelModule`

## Key Methods
- `initSymbol(): `
- `getRandomSymbol(): `
- `setUpExtendedCallback(): void`
- `fastStop(): void`
- `updateMode(): void`
- `runExtendedReelSpin(): void`
- `showExtendedResult(): void`
- `getIndexSymbol(): number`

## Source Implementation
```typescript
const { _decorator } = cc;
import { HelpDocuments } from '../../../cc-slot-module/Components/Common/HelpDocuments';
import { ReelSpinState, SlotReelModule } from '../../../cc-slot-module/SlotModuleExport';
const { ccclass, help } = _decorator;

@ccclass
@help(HelpDocuments.INFINITY_REEL_MODULE)
export class InfinityReelModule extends SlotReelModule {

	protected initSymbol(reelIndex: number): { visibleSymbol: number, totalSymbol: number } {
		const index: number = (reelIndex >= this.DEFAULT_FORMAT.length) ? 0 : reelIndex;
		const visibleSymbol = this.DEFAULT_FORMAT[index];
		const totalSymbol = visibleSymbol + this.config.BUFFER_TOP + this.config.BUFFER_BOT;

		return { visibleSymbol, totalSymbol };
	}

	protected getRandomSymbol(): { symbolCode: string, symbolSize: cc.Vec2 } {
		const reelIndex: number = (this.reelIndex >= this.DEFAULT_FORMAT.length) ? 0 : this.reelIndex;
		const randomSymbols = this.RANDOM_SYMBOLS_CODE[reelIndex];
		const totalSymbols = randomSymbols.length;
		const randomCode = randomSymbols[Math.floor(Math.random() * totalSymbols)];
		const { symbolCode, symbolSize } = this.mapSymbolData(randomCode);
		return { symbolCode, symbolSize };
	}

	protected setUpExtendedCallback(): void {
		this.stopCallback = () => {
			this.reelManager.step = this.currentMode.stepStop;
		};
		this.scheduleOnce(this.stopCallback, this.currentMode.delayStop);
	}

	fastStop(): void {
		this.stopCallback && this.unschedule(this.stopCallback);
		this.reelManager.state = ReelSpinState.SHOWING_RESULT;
		this.reelManager.speed = this.reelManager.speed / this.config.FAST_SPIN_RATE;
	}

	updateMode(mode): void {
		this.currentMode = mode;
	}

	runExtendedReelSpin(): void {
		this.node.active = true;
		this.reelManager.speed = this.currentMode.speed;
		this.reelManager.changeState(ReelSpinState.START);

		this.reelStopCB = null;
		this.tween && this.tween.stop();
		this.spinAction();
	}

	showExtendedResult(symbols, reelStopCallback, reelPreStopCallback): void {
		this.resultSymbols = [];
		this.updateReelResult(symbols);
		this.setUpExtendedCallback();
		this.reelStopCB = reelStopCallback;
		this.reelPreStopCB = reelPreStopCallback;
	}

	getIndexSymbol(indexData: number): number {
		let symbolsIndex = [];
		if (this.reelIndex > this.DEFAULT_FORMAT.length - 1) {
			const totalRows = this.DEFAULT_FORMAT[0];
			symbolsIndex = this.config.SYMBOL_INDEXES[0].map(index => index + this.reelIndex * totalRows).reverse();
		} else {
			symbolsIndex = [...this.config.SYMBOL_INDEXES[this.reelIndex]].reverse();
		}

		const bufferTop = Array(this.config.BUFFER_TOP).fill(-1);
		const bufferBot = Array(this.config.BUFFER_BOT).fill(-1);
		symbolsIndex.push(...bufferTop);
		symbolsIndex.unshift(...bufferBot);

		return symbolsIndex[indexData];
	}

}


```
