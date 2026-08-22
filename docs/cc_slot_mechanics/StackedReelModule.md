# StackedReelModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/StackedReel/StackedReelModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`StackedReelModule`** extends `SlotReelModule`

## Key Methods
- `initReel(): void`
- `runReelSpin(): void`
- `generateStackedSymbol(): string[]`
- `spawnReelSymbol(): cc.Node | undefined`
- `getRandomStackedSymbol(): `
- `updateReelResult(): void`

## Source Implementation
```typescript
const { _decorator, Vec2 } = cc;
import { HelpDocuments } from '../../cc-slot-module/Components/Common/HelpDocuments';
import { SlotReelModule } from '../../cc-slot-module/SlotModuleExport';
import { SlotSymbolModule } from '../../cc-slot-module/SlotModuleExport';
import { ReelSpinState } from '../../cc-slot-module/SlotModuleExport';
import { SymbolIndexType } from '../../cc-slot-module/SlotModuleExport';
import { StackedConfig, StackedReelConfig } from './StackedReelConfig';
const { NodeUtils } = eno;

const { ccclass, help } = _decorator;

@ccclass
@help(HelpDocuments.STACKED_REEL_MODULE)
export class StackedReelModule extends SlotReelModule {
	_stackedConfig: StackedConfig;
	_listRandomSymbols = [];
	_showNumber: number = 3;

	initReel({ reelIndex, config, pool }): void {
		const stackedReelConfig = NodeUtils.getOrAddComponent(this.node, 'StackedReelConfig') as StackedReelConfig;
		this._stackedConfig = stackedReelConfig.getStackedConfig(reelIndex);
		const maxCount = Math.max(...this._stackedConfig.stackedCount, config.BUFFER_BOT);
		config.BUFFER_BOT = maxCount;
		this._showNumber = config.TABLE_FORMAT[reelIndex];

		super.initReel({ reelIndex, config, pool });
	}

	runReelSpin(mode): void {
		this._listRandomSymbols = this.generateStackedSymbol(true);
		super.runReelSpin(mode);
	}

	generateStackedSymbol(isRefill: boolean = false): string[] {
		const { stackedCount, stackedSymbols } = this._stackedConfig;

		const randomSymbols = [];
		const totalRandomSymbol = this._showNumber + this.config.BUFFER_BOT;
		if (stackedSymbols.length > 0) {
			if (isRefill && this.resultSymbols.length > 0) {
				const resultSymbols = this.resultSymbols.map(symbol => SlotSymbolModule.getModuleComponent(symbol));
				const topSymbol = resultSymbols[0];
				const indexTopSymbol = stackedSymbols.indexOf(topSymbol.symbolCode);
				if (indexTopSymbol == -1) {
					const symbolCount = resultSymbols.filter(symbol => symbol.symbolCode == topSymbol.symbolCode).length;
					const countStacked = stackedCount[indexTopSymbol] - symbolCount;
					randomSymbols.push(...Array(countStacked).fill(topSymbol.symbolCode))
				}
			}

			const isRandomStack = Math.random() >= 0.5;

			if (isRandomStack) {
				const randomIndex = Math.floor(Math.random() * stackedSymbols.length);
				const symbolName = stackedSymbols[randomIndex];
				const count = stackedCount[randomIndex];
				randomSymbols.push(...Array(count).fill(symbolName));
			}
		}

		for (let index = randomSymbols.length - 1; index < totalRandomSymbol; index++) {
			randomSymbols.push(this.getRandomSymbolWithException().symbolCode);
		}

		return randomSymbols;
	}

	protected spawnReelSymbol(): cc.Node | undefined {
		let symbolCode = "";
		let symbolSize = Vec2.ONE;
		let skip = false;
		let stop = 0;
		let indexSymbol = -1;

		if (this.reelManager.state === ReelSpinState.SHOWING_RESULT && this.data.length) {
			const symbolValue = this.data[this.reelManager.index];
			indexSymbol = this.getIndexSymbol(this.reelManager.index);

			if (symbolValue) {
				({ symbolCode, symbolSize, stop } = this.mapSymbolData(symbolValue));
				this.reelManager.stop += stop;
			} else {
				skip = true;
			}

			this.reelManager.index++;
		} else {
			if (this._listRandomSymbols.length == 0) {
				this._listRandomSymbols = this.generateStackedSymbol();
			}

			({ symbolCode, symbolSize } = this.getRandomStackedSymbol());
		}

		if (!this.canPlaceSymbol() || skip) {
			return;
		}

		const symbol = this.spawnSymbol(symbolCode, symbolSize);

		if (indexSymbol != SymbolIndexType.UNUSED) {
			SlotSymbolModule.getModuleComponent(symbol).setIndex(indexSymbol);
			this.resultSymbols.push(symbol);
		}

		return symbol;
	}

	protected getRandomStackedSymbol(): { symbolCode: string, symbolSize: cc.Vec2 } {
		if (this._listRandomSymbols.length > 0) {
			const symbol = this._listRandomSymbols.shift();
			const { symbolCode, symbolSize } = this.mapSymbolData(symbol);
			return { symbolCode, symbolSize };
		}

		const randomSymbols = this.RANDOM_SYMBOLS_CODE[this.reelIndex];
		const totalSymbols = randomSymbols.length;
		const randomCode = randomSymbols[Math.floor(Math.random() * totalSymbols)];
		const { symbolCode, symbolSize } = this.mapSymbolData(randomCode);
		return { symbolCode, symbolSize };
	}

	updateReelResult(symbols: string[]): void {
		this.data = [...symbols].reverse();

		const { stackedCount, stackedSymbols } = this._stackedConfig;
		const botSymbol = symbols[0];
		let countFillStack = 0;

		if (stackedSymbols.indexOf(botSymbol) != -1) {
			const countBotSymbol = this.data.filter(symbol => symbol == botSymbol).length;
			const indexBotSymbol = stackedSymbols.indexOf(botSymbol);
			countFillStack = stackedCount[indexBotSymbol] - countBotSymbol
		}

		for (let index = 0; index < this.config.BUFFER_BOT; index++) {
			if (countFillStack > 0) {
				this.data.unshift(botSymbol);
				countFillStack--;
			} else {
				this.data.unshift(this.getRandomSymbolWithException().symbolCode);
			}
		}

		for (let index = 0; index < this.config.BUFFER_TOP; index++) {
			this.data.push(this.getRandomSymbolWithException().symbolCode);
		}
	}
}
```
