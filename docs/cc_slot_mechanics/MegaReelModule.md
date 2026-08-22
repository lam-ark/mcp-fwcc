# MegaReelModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/MegaReel/scripts/MegaReelModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`MegaReelModule`** extends `SlotReelModule`

## Key Methods
- `showResult(): void`
- `updateMegaIndex(): void`
- `spawnReelSymbol(): cc.Node`
- `hideSmallSymbol(): void`
- `createMegaSymbol(): cc.Node`
- `addOffsetY(): void`
- `setUpStopCallback(): void`
- `spawnMegaSymbol(): cc.Node`
- `resetReel(): void`
- `runReelSpin(): void`
- `checkSymbolHidden(): boolean`
- `recycleSymbol(): void`

## Source Implementation
```typescript
const { _decorator, Vec2 } = cc;
import { HelpDocuments } from '../../../cc-slot-module/Components/Common/HelpDocuments';
import { ReelSpinState, SlotReelModule, SlotSymbolModule, SymbolIndexType, SymbolOwnerType } from '../../../cc-slot-module/SlotModuleExport';
const { ccclass, help } = _decorator;

@ccclass
@help(HelpDocuments.MEGA_REEL_MODULE)
export class MegaReelModule extends SlotReelModule {

    protected megaData: number[];
    protected megaIndex: number;
    protected megaSymbolList: cc.Node[] = [];

    /*
    * reelData { symbols, megaData, hasMulti}
    */
    showResult(reelData, reelStopCallback, reelPreStopCallback): void {
		this.resultSymbols = [];
        this.megaData = reelData.megaData;

        this.updateMegaIndex(reelData.hasMulti);
		this.updateReelResult(reelData.symbols);
		this.setUpStopCallback();
		this.reelStopCB = reelStopCallback;
		this.reelPreStopCB = reelPreStopCallback;
	}

    // check for mega symbol on this reel or another reel
    // if hasMulti => there are over 3 reels has mega symbol => all reels will stop with the same delay time
    protected updateMegaIndex(hasMulti:any): void {
        this.megaIndex = this.reelIndex;
        if (this.megaData.length) {
            this.megaData.forEach(data => {
                if (data["reel"] != this.reelIndex) {
                    this.megaIndex = Number(data["reel"]);
                }
            });
        }
        if (hasMulti) {
            this.megaIndex = 0;
        }
    }

    protected spawnReelSymbol(): cc.Node {
		let code = "", size = Vec2.ONE;
		let skip = false;
		let stop = 0;
		let indexSymbol = -1;
		let isBlurSymbol = false;

		if (this.reelManager.state === ReelSpinState.SHOWING_RESULT && this.data.length) {
			const symbolValue = this.data[this.reelManager.index];
			indexSymbol = this.getIndexSymbol(this.reelManager.index);

			if (symbolValue) {
				({ symbolCode: code, symbolSize: size, stop } = this.mapSymbolData(symbolValue));
				this.reelManager.stop += stop;
			} else {
				skip = true;
			}

			this.reelManager.index++;
		} else {
			isBlurSymbol = true;
			({ symbolCode: code, symbolSize: size } = this.getRandomSymbol());
		}

		if (!this.canPlaceSymbol() || skip) {
			return;
		}

		const symbol = this.spawnSymbol(code, size, isBlurSymbol);
        // if it's real symbol, check to hide it if it's below the mega symbol
        if (!isBlurSymbol) {
            // check to hide small symbols
            this.hideSmallSymbol(symbol, indexSymbol);
            // create mega symbol
            this.createMegaSymbol(indexSymbol);
        }

		if (indexSymbol != SymbolIndexType.UNUSED) {
			SlotSymbolModule.getModuleComponent(symbol).setIndex(indexSymbol);
			this.resultSymbols.push(symbol);
		}

		return symbol;
	}

    protected hideSmallSymbol(symbol:cc.Node, index:number): void {
        if (this.megaData && this.megaData.length) {
            this.megaData.forEach((data) => {
                if (data["indexes"].indexOf(index) >= 0) {
                    symbol.active = false;
                }
            });
        }
    }

    protected createMegaSymbol(index:number): cc.Node {
        let symbol:cc.Node = null;
        if (this.megaData && this.megaData.length) {
            this.megaData.forEach((data) => {
                if (Number(data["reel"] == this.reelIndex)) {
                    const indexes = data["indexes"];
                    // choose the bottom index to make mega symbol at its position
                    if (Number(indexes[indexes.length - 1]) == index) {
                        const total = this.reelManager.showSymbol;
                        const isLastRow = ((index % total) == total - 1 && indexes.length == 1);
                        symbol = this.spawnMegaSymbol(this.config.MEGA_SYMBOL_CODE);
                        this.addOffsetY(symbol, isLastRow ? -this.SYMBOL_HEIGHT : 0);
                    }
                }
            });
        }
        return symbol;
    }

    protected addOffsetY(symbol:cc.Node, dy:number):void {
        symbol.setPosition(new cc.Vec2(symbol.position.x, symbol.position.y + dy));
    }

    protected setUpStopCallback(): void {
		const cb = (): void => this.setStepToStop();
		this.stopCallback = cb;
		this.scheduleOnce(cb, this.megaIndex * this.currentMode.delayStop);
	}

    protected spawnMegaSymbol(code: string): cc.Node {
        const size = this.config.MEGA_SIZE;
		const offsetX = (size.x / 2 - 0.5) * this.SYMBOL_WIDTH;
        const offsetY = (size.y / 2 - 0.5) * this.SYMBOL_HEIGHT;

        let topY = 0;
        if (this.reelManager.state == ReelSpinState.SHOWING_RESULT) {
            topY = this.originalPosition.y + Math.abs(this.node.position.y) + this.reelManager.startY;
        }
        
		const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
		symbol.setPosition(offsetX, topY + offsetY);

		SlotSymbolModule.getModuleComponent(symbol).setIndex(SymbolIndexType.GIGABLOX);
		this.megaSymbolList.push(symbol);

        return symbol
    }

    resetReel(): void {
		const offset = Math.abs(this.node.position.y);
		this.megaSymbolList.forEach((s) => s.setPosition(s.position.x, s.position.y - offset));

        super.resetReel();
	}

    runReelSpin(mode): void {
        super.runReelSpin(mode);
        this.listSymbols.forEach((symbol) => {
			const indexSymbol = SlotSymbolModule.getModuleComponent(symbol).getIndex();
            const isHidden = this.checkSymbolHidden(symbol);
            if (isHidden) {
                // check to hide small symbols
                this.hideSmallSymbol(symbol, indexSymbol);
            }
		});
        this.megaData = [];
	}

    protected checkSymbolHidden(symbol:cc.Node):boolean {
        const indexSymbol = SlotSymbolModule.getModuleComponent(symbol).getIndex();
        return (indexSymbol >= 0);
    }

    protected recycleSymbol(): void {
		if (!this.listSymbols.length) {
			return;
		}

		if (this.megaSymbolList.length > 0) {
			//when megas symbol out of screen (compares with the bottom symbol), remove it from the list
			const megaSymbol = this.megaSymbolList[this.megaSymbolList.length - 1];
			const symbol = this.listSymbols[this.listSymbols.length - 1];
			if (megaSymbol.position.y < symbol.position.y) {
				this.symbolManager.removeSymbol(megaSymbol);
				this.megaSymbolList.pop();
			}
		}

		super.recycleSymbol();
	}
}


```
