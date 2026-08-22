# CellReelModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/CellReelModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`CellReelModule`** extends `SlotReelModule`

## Key Methods
- `initReel(): void`
- `initReelManager(): void`
- `resumeReel(): void`
- `getIndexSymbol(): number`

## Source Implementation
```typescript
const { _decorator } = cc;
import { ReelManager, SlotReelModule, SlotSymbolModule, SymbolOwnerType } from "../../../cc-slot-module/SlotModuleExport";

const { ccclass } = _decorator;

@ccclass
export class CellReelModule extends SlotReelModule {
	reelRow: number;

	initReel({ reelIndex, config, pool, reelRow }): void {
		super.initReel({ reelIndex, config, pool });
		this.reelRow = reelRow;
	}

	initReelManager(): void {
		const visibleSymbol = 1;
		const totalSymbol = visibleSymbol + this.config.BUFFER_TOP + this.config.BUFFER_BOT;
		const startX = 0;
		const startY = (visibleSymbol / 2 + this.config.BUFFER_TOP - 0.5) * this.config.SYMBOL_HEIGHT;

		this.reelManager = new ReelManager(totalSymbol, visibleSymbol);
		this.reelManager.startX = startX;
		this.reelManager.startY = startY;
	}

	resumeReel(symbols: string[]): void {
		this.updateReelResult(symbols);

		this.data.forEach((symbolValue: string, index: number) => {
			if (symbolValue) {
				const revertIndex = this.data.length - index - 1;
				const { symbolCode: code, symbolSize: size } = this.mapSymbolData(symbolValue);
				const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
				SlotSymbolModule.getModuleComponent(symbol).setIndex(this.getIndexSymbol(revertIndex));
				const position = this.initPositionByType(index, size);
				symbol.setPosition(position.x, position.y);
				eno.setOpacity(symbol, 255);
				this.listSymbols.push(symbol);
			}
		});

		this.symbolManager.updateSymbolSiblingIndex(this.listSymbols);
	}

	getIndexSymbol(indexData: number): number {
		const indexConfig = this.config.SYMBOL_INDEXES[this.reelIndex];
		const symbolsIndex = [indexConfig[this.reelRow]];

		const bufferTop = Array(this.config.BUFFER_TOP).fill(-1);
		const bufferBot = Array(this.config.BUFFER_BOT).fill(-1);
		symbolsIndex.push(...bufferTop);
		symbolsIndex.unshift(...bufferBot);

		return symbolsIndex[indexData];
	}
}
```
