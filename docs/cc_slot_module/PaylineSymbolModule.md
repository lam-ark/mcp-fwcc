# PaylineSymbolModule

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/scripts/PaylineSymbolModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`PaylineSymbolModule`** extends `BasePaylineComponent`

## CC Properties
- `protected`
- `protected`
- `protected`

## Key Methods
- `symbols(): cc.Node[]`
- `registerPaylineEvents(): void`
- `showIdleSymbols(): void`
- `setupPayLines(): void`
- `blinkAllPayLines(): void`
- `stopAllPayLines(): void`
- `dimAllPayLines(): void`
- `Set(): null`
- `showSinglePayLine(): void`
- `showJackpotLine(): void`
- `showSpecialSymbolById(): void`
- `clearAll(): void`
- `getSymbol(): cc.Node`
- `getAllWinSymbols(): cc.Node[]`
- `getWinSymbolsInPayLine(): cc.Node[]`

## Source Implementation
```typescript
const { _decorator, error, log, Node, warn } = cc;
import { SymbolOwnerType } from '../../../../Components/Common/SlotEnum';
import { PaylineEventTypes, PayLineInfo, PayWayInfo } from '../../PaylineCommon/PaylineTypes';
import PaylineUtils from '../../PaylineCommon/PaylineUtils';
import { SlotSymbolManager } from '../../../Table/SlotSymbol/SlotSymbolManager';
import { SlotSymbolModule } from '../../../Table/SlotSymbol/SlotSymbolModule';
import { BasePaylineComponent } from './BasePaylineComponent';
const { changeParent } = eno;
const { ccclass, property } = _decorator;

@ccclass
export class PaylineSymbolModule extends BasePaylineComponent {
	//#region Properties

	@property(cc.Node) protected container: cc.Node = null;
	@property(SlotSymbolManager) protected factory: SlotSymbolManager = null;
	@property(Node) protected disableHighlightContainer: cc.Node = null;

	protected mapTableSymbols: cc.Node[][] = [];
	protected matrix: string[][] = [];
	protected payLines: PayLineInfo[] = [];

	protected get symbols(): cc.Node[] {
		if (!this.mapTableSymbols || this.mapTableSymbols.length === 0) {
			this.mapSymbolToPayLine();
		}
		return eno.ArrayUtils.flatOnce(this.mapTableSymbols).filter(Boolean);
	}

	//#endregion

	//#region Event Handlers

	protected registerPaylineEvents(): void {
		if (this.payLineEmitter) {
			this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SET_DATA, this.setupPayLines, this);
			this.payLineEmitter.on(PaylineEventTypes.PAYLINE_BLINK_ALL, this.blinkAllPayLines, this);
			this.payLineEmitter.on(PaylineEventTypes.PAYLINE_STOP_ALL, this.stopAllPayLines, this);
			this.payLineEmitter.on(PaylineEventTypes.PAYLINE_DIM_ALL, this.dimAllPayLines, this);
			this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_LINE, this.showSinglePayLine, this);
			this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_SPECIAL_SYMBOL, this.showSpecialSymbolById, this);
			this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_JACKPOT_LINE, this.showJackpotLine, this);
			this.payLineEmitter.on(PaylineEventTypes.PAYLINE_CLEAR, this.clearAll, this);
		}

		if (this.moduleEvent) {
			this.moduleEvent.on("SHOW_IDLE_SYMBOLS", this.showIdleSymbols, this);
		}
	}

	protected showIdleSymbols(symbols: cc.Node[]): void {
		if (!symbols || symbols.length === 0) {
			symbols = this.symbols;
		}

		for (const symbol of symbols) {
			changeParent(symbol, this.container);
			symbol.emit('ENABLE_HIGHLIGHT');
			if (!SlotSymbolModule.getModuleComponent(symbol).getIsPlaying()) {
				symbol.emit('PLAY_ANIMATION_IDLE');
			}
		}
		this.updateSymbolSiblingIndex(symbols);
	}

	protected setupPayLines(data: { matrix: string[][], payLines: PayLineInfo[] }): void {
		if (this.paylineConfig.IS_DEBUG) {
			log("[PaylineSymbolModule] setupPaylines", data);
		}
		this.matrix = Array.from(data.matrix);
		this.payLines = Array.from(data.payLines);
	}

	protected blinkAllPayLines(data: { blinkDuration: number }): void {
		const symbolSet: cc.Node[] = this.getAllWinSymbols();
		this.showListWinSymbols(symbolSet, data.blinkDuration);
	}

	protected stopAllPayLines(): void {
		for (const symbol of this.symbols) {
			symbol.emit('STOP_ANIMATION');
			symbol.emit('ENABLE_HIGHLIGHT');
		}
		this.updateSymbolSiblingIndex();
	}

	protected dimAllPayLines(excludeSymbols: cc.Node[] = []): void {
		const excludeSet = (excludeSymbols && excludeSymbols.length > 0) ? new Set(excludeSymbols) : null;
		for (const symbol of this.symbols) {
			if (!excludeSet || !excludeSet.has(symbol)) {
				symbol.emit('SHOW_STATIC');
				symbol.emit('DISABLE_HIGHLIGHT');
			}
		}
	}

	protected showSinglePayLine(payLine: PayLineInfo | PayWayInfo, duration?: number): void {
		const symbolSet: cc.Node[] = this.getWinSymbolsInPayLine(payLine);
		this.showListWinSymbols(symbolSet, duration);
	}
	
	protected showJackpotLine(payLine: PayLineInfo | PayWayInfo, duration?: number): void {
		const symbolSet: cc.Node[] = this.getWinSymbolsInPayLine(payLine);
		this.showListWinSymbols(symbolSet, duration);
	}

	protected showSpecialSymbolById(symbolId: string, duration?: number): void {
		if (symbolId) {
			const symbolSet: cc.Node[] = this.symbols.filter(symbol => symbol["symbolCode"] === symbolId);
			this.showListWinSymbols(symbolSet, duration);
		}
	}

	protected clearAll(): void {
		const symbols = eno.ArrayUtils.flatOnce(this.mapTableSymbols).filter(Boolean);
		for (const symbol of symbols) {
				symbol.emit("ENABLE_HIGHLIGHT");
				this.factory.returnSymbol(symbol);
		}
		this.mapTableSymbols = [];
	}

	//#endregion

	//#region Internal Methods

	protected getSymbol(reel: number, row: number): cc.Node {
		if (!this.matrix || !this.matrix[reel] || !this.matrix[reel][row]) {
			return null;
		}

		let symbol = this.mapTableSymbols[reel] ? this.mapTableSymbols[reel][row] : null;
		if (!symbol) {
			const index = PaylineUtils.convertToIndex(this.matrix, reel, row);
			const symbolCode = this.matrix[reel][row];
			symbol = this.factory.getSymbolByIndex(index, SymbolOwnerType.PAYLINE);
			if (!symbol) {
				if (this.paylineConfig.IS_DEBUG) {
					error(`[PaylineSymbolModule] Symbol not found at reel ${reel}, row ${row}, index ${index}`);
				}
				return null;
			}
			if (symbolCode !== symbol["symbolName"]) {
				if (this.paylineConfig.IS_DEBUG) {
					warn(`[PaylineSymbolModule] Need to reinit symbol at reel ${reel}, row ${row}, index ${index}, current code is ${symbol["symbolName"]} and new code is ${symbolCode}`);
				}
			}
			symbol["reel"] = reel;
			symbol["row"] = row;
		}

		return symbol;
	}

	protected getAllWinSymbols(): cc.Node[] {
		this.mapSymbolToPayLine();
		const symbols = PaylineUtils.getAllWinSymbols(this.matrix, this.payLines);
		return symbols.map(symbol => this.getSymbol(symbol.reel, symbol.row)).filter(Boolean);
	}

	protected getWinSymbolsInPayLine(payLine: PayLineInfo | PayWayInfo): cc.Node[] {
		this.mapSymbolToPayLine();
		const symbols = PaylineUtils.getWinIndexesInPayLine(this.matrix, payLine);
		return symbols.map(symbol => this.getSymbol(symbol.reel, symbol.row)).filter(Boolean);
	}

	protected mapSymbolToPayLine(): void {
		if (!this.matrix) {
			return;
		}

		if (!this.mapTableSymbols) {
			this.mapTableSymbols = [];
		}

		for (let reel = 0; reel < this.matrix.length; reel++) {
			if (!this.mapTableSymbols[reel]) {
				this.mapTableSymbols[reel] = [];
			}
			for (let row = 0; row < this.matrix[reel].length; row++) {
				this.mapTableSymbols[reel][row] = this.getSymbol(reel, row);
			}
		}
	}

	protected updateSymbolSiblingIndex(symbols: cc.Node[] = []): void {
		if (!symbols || symbols.length === 0) {
			symbols = this.symbols;
		}

		if (this.disableHighlightContainer) {
			for (const symbol of symbols) {
				if (symbol['isHighlight'] === false) {
					changeParent(symbol, this.disableHighlightContainer);
				}
			}
		}

		this.factory.updateSymbolSiblingIndex(symbols);
	}

	protected showListWinSymbols(symbolSet: cc.Node[], duration?: number): void {
		if (symbolSet.length === 0) {
			return;
		}

		this.dimAllPayLines(symbolSet);

		for (const symbol of symbolSet) {
			this.playSymbolAnimation(symbol, duration);
		}

		this.updateSymbolSiblingIndex();
	}

	protected playSymbolAnimation(symbol: cc.Node, duration?: number): void {
		if (!symbol) {
			return;
		}

		changeParent(symbol, this.container);
		const loop = this.paylineConfig.PLAY_ANIMATION_LOOP || false;
		symbol.active = true;
		symbol.emit('ENABLE_HIGHLIGHT');
		symbol.emit('PLAY_ANIMATION_WIN', loop, duration);
		this.payLineEmitter.emit(PaylineEventTypes.SYMBOL_PLAY_ANIMATION_WIN, { symbol, loop, duration });
	}

	//#endregion
}
```
