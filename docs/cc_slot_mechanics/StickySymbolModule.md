# StickySymbolModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`StickySymbolModule`** extends `SlotBaseModule`

## CC Properties
- `stickyLayer`
- `stickyPool`

## Key Methods
- `onLoadExtend(): void`
- `registerGameEvents(): void`
- `setupStickySymbols(): void`
- `onReelStopped(): void`
- `hideStickyLayer(): void`
- `showStickyLayer(): void`
- `showStickySymbols(): void`
- `clearStickySymbols(): void`
- `updateSymbolIndex(): void`
- `getSymbolIndex(): number`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../../../cc-slot-module/SlotModuleExport';
import { SlotSymbolManager } from '../../../cc-slot-module/SlotModuleExport';
import { StickySymbolConfig } from './StickySymbolConfig';
import { StickySymbolData } from './StickySymbolData';
import { SlotSymbolModule } from '../../../cc-slot-module/SlotModuleExport';
import { SymbolIndexType } from '../../../cc-slot-module/SlotModuleExport';
import { HelpDocuments } from '../../../cc-slot-module/Components/Common/HelpDocuments';

const { ccclass, property, help } = _decorator;

@ccclass
@help(HelpDocuments.STICKY_SYMBOL_MODULE)
export class StickySymbolModule extends SlotBaseModule {
	@property(cc.Node) stickyLayer: cc.Node = null;
	@property(SlotSymbolManager) stickyPool: SlotSymbolManager = null;

	protected config: StickySymbolConfig = null;
	protected data: StickySymbolData;
	protected stickySymbols: Map<number, cc.Node> = new Map();

	onLoadExtend(): void {
		this.config = this.getComponent(StickySymbolConfig);
		this.data = this.getComponent(StickySymbolData);
		this.registerGameEvents();
	}

	registerGameEvents(): void {
		if (this.moduleEvent) {
			this.moduleEvent.on('REEL_STOPPED', this.onReelStopped, this);
			this.moduleEvent.on('BEFORE_RESET_TABLE', this.setupStickySymbols, this);
			this.moduleEvent.on('TABLE_START_RESPIN', this.setupStickySymbols, this);
		}
	}

	setupStickySymbols(): void {
		if (this.data.isFinishSticky()) {
			this.clearStickySymbols();
		} else {
			this.showStickySymbols();
		}
	}

	onReelStopped(reel: number, resultSymbols: cc.Node[]): void {
		const stickyIndexes = this.data.getStickyIndexes();
		const matrix = this.data.getMatrix();
		for (let index = 0; index < resultSymbols.length; index++) {
			const symbol = resultSymbols[index];
			const symbolIndex = this.getSymbolIndex(symbol);
			if (stickyIndexes.indexOf(symbolIndex) !== -1 && !this.stickySymbols.has(symbolIndex)) {
				this.stickySymbols.set(symbolIndex, symbol);
			}
		}

		if (reel == matrix.length - 1) {
			if (this.data.isFinishSticky()) {
				this.clearStickySymbols();
			}
		}
	}

	hideStickyLayer(): void {
		this.stickyLayer.active = false;
	}

	showStickyLayer(): void {
		this.stickyLayer.active = true;
	}

	showStickySymbols(): void {
		this.showStickyLayer();
		this.stickySymbols.forEach((symbol) => {
			if (symbol && symbol.isValid) {
				symbol.active = true;
				symbol.emit("ENABLE_HIGHLIGHT");
				this.updateSymbolIndex(symbol, this.config.STICKY_SYMBOL_INDEX);
				eno.changeParent(symbol, this.stickyLayer);
			}
		});
	}

	clearStickySymbols(): void {
		this.hideStickyLayer();
		this.stickySymbols.forEach((symbol) => {
			if (symbol && symbol.isValid) {
				this.updateSymbolIndex(symbol, -1);
				this.stickyPool.removeSymbol(symbol);
			}
		});
		this.stickySymbols.clear();
		this.data.cleanStickyIndexes();
	}

	updateSymbolIndex(symbol: cc.Node, index: number): void {
		const symbolModule: SlotSymbolModule = SlotSymbolModule.getModuleComponent(symbol);
		if (symbolModule) {
			symbolModule.setIndex(index);
		}
	}

	getSymbolIndex(symbol: cc.Node): number {
		const symbolModule: SlotSymbolModule = SlotSymbolModule.getModuleComponent(symbol);
		if (symbolModule) {
			return symbolModule.getIndex();
		}
		return SymbolIndexType.UNUSED;
	}

	onDestroy(): void {
		if (this.moduleEvent) {
			this.moduleEvent.targetOff(this);
		}
	}
}

```
