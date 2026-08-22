# GigabloxReelModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/Gigablox/scripts/GigabloxReelModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`GigabloxReelModule`** extends `SlotReelModule`

## Key Methods
- `spawnReelSymbol(): cc.Node`
- `setUpStopCallback(): void`
- `spawnSymbol(): cc.Node`
- `runReelSpin(): void`
- `resetReel(): void`
- `setupGigaBlox(): void`
- `calculatePositionY(): number`

## Source Implementation
```typescript
const { _decorator, Vec2 } = cc;
import { SlotReelModule } from '../../../cc-slot-module/SlotModuleExport';
import { ReelSpinState } from '../../../cc-slot-module/SlotModuleExport';
import { SlotSymbolModule } from '../../../cc-slot-module/SlotModuleExport';
import { SymbolIndexType, SymbolOwnerType } from '../../../cc-slot-module/SlotModuleExport';

const { ccclass } = _decorator;

@ccclass
export class GigabloxReelModule extends SlotReelModule {

	public gigabloxDelay: number;

	protected listGigaSymbols: cc.Node[] = [];

	protected _isGigablox:boolean = false;
	protected _gigabloxIndex: number;
	protected _gigabloxSize: number;
	protected _gigabloxStep: number;
	protected _topGigaSymbol: number = 0;
	protected _isBeginHidingSymbol: boolean = false;
	//protected _symbolBlox: string[];

	protected spawnReelSymbol(): cc.Node {
		let code = "", size = Vec2.ONE;
		let skip = false;
		let stop = 0;
		let indexSymbol = -1;
		let isHideSymbol = false;
        
		if (this.reelManager.state === ReelSpinState.SHOWING_RESULT && this.data.length) {
			//show result
			let symbolValue = this.data[this.reelManager.index];
			indexSymbol = this.getIndexSymbol(this.reelManager.index);
		
			if (this._isGigablox) {
				if (this._gigabloxStep == 0) {
					this._isBeginHidingSymbol = true;

					//save the top gigasymbol position
					const gigaSize = new Vec2(this._gigabloxSize, this._gigabloxSize);
					this._topGigaSymbol = this.calculatePositionY(gigaSize);
					
					if (this.reelIndex == this._gigabloxIndex) {
						//TODO: for testing
						if (this._gigabloxSize == 2) {
							code = 'K';
						} else if (this._gigabloxSize == 3) {
							code = 'K2';
						}
						const gigaSymbol = this.spawnSymbol(code, gigaSize, true);
						SlotSymbolModule.getModuleComponent(gigaSymbol).setIndex(SymbolIndexType.GIGABLOX);
						gigaSymbol.active = true;
					}
					this._gigabloxStep = this._gigabloxSize - 1;
				} else {
					this._gigabloxStep--;
				}
				if (!symbolValue) {
					this.reelManager.stop++;
				}
				isHideSymbol = this._isBeginHidingSymbol;
			}
            
			if (symbolValue) {
				({ symbolCode: code, symbolSize: size, stop } = this.mapSymbolData(symbolValue));
				this.reelManager.stop += stop;
			} else {
				skip = true;
			}
			this.reelManager.index++;
		} else {
			({ symbolCode: code, symbolSize: size } = this.getRandomSymbol());
		}
        
		if (!this.canPlaceSymbol() || skip) {
			return;
		}

		const symbol = this.spawnSymbol(code, size);
		if (this.reelManager.state === ReelSpinState.START) {
			symbol.active = true;
			// hide symbol if the symbol overlap the gigasymbol when scrolling
			if (this._topGigaSymbol) {
				if (symbol.position.y > 0 && symbol.position.y < this._topGigaSymbol + this._gigabloxSize * this.config.SYMBOL_HEIGHT) {
					symbol.active = false;
				}
			}
		} else if (this.reelManager.state === ReelSpinState.SHOWING_RESULT) {
			symbol.active = !isHideSymbol;
		}
        
		if (indexSymbol != -1) {
			SlotSymbolModule.getModuleComponent(symbol).setIndex(indexSymbol);
			this.resultSymbols.push(symbol);
		}

		return symbol;
	}

	protected setUpStopCallback(): void {
		const cb = (): void => this.setStepToStop();
		this.stopCallback = cb;
		this.scheduleOnce(cb, this.gigabloxDelay * this.currentMode.delayStop);
	}

	protected spawnSymbol(code: string, size: cc.Vec2, isGigaSymbol = false): cc.Node {
		const positionX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;
		const positionY = this.calculatePositionY(size);
		const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
		symbol.setPosition(positionX, positionY);

		if (isGigaSymbol) {
			this.listGigaSymbols.push(symbol);
		} else {
			this.listSymbols.unshift(symbol);
		}
		return symbol;
	}

	runReelSpin(mode: any): void {
		super.runReelSpin(mode);
		this.reelManager.totalSymbol = this.config.BUFFER_TOP + this.reelManager.showSymbol + this.config.BUFFER_BOT;
		this.listSymbols.forEach((s) => s.active = !this._isGigablox);
		this._isGigablox = false; // reset gigablox state
		this._gigabloxIndex = -1;
		this._isBeginHidingSymbol = false;
	}

	resetReel(): void {
		const offset = Math.abs(this.node.position.y);
		this._topGigaSymbol -= offset;
		
		if (this.listGigaSymbols.length > 1) {
			this.listGigaSymbols.forEach((s) => s.setPosition(s.position.x, s.position.y - offset));
			this.listGigaSymbols.sort((a, b) => b.position.y - a.position.y);
		}
		super.resetReel();

		let i = 0;
		while (i < this.listGigaSymbols.length) {
			const gigaSymbol = this.listGigaSymbols[i];
			if (gigaSymbol.position.y < this.node.position.y - this.reelManager.totalSymbol * this.config.SYMBOL_HEIGHT / 2) {
				this.symbolManager.removeSymbol(gigaSymbol);
				this.listGigaSymbols.splice(i, 1);
			} else {
				i++;
			}
		}
	}

	setupGigaBlox(blox: any): void {
		this._isGigablox = true;
		this._gigabloxIndex = blox.col;
		this._gigabloxSize = blox.size;
		//this._symbolBlox = blox.symbols;
		this._gigabloxStep = (this._gigabloxSize - blox.rows[0]) % this._gigabloxSize;
	}

	protected calculatePositionY(size: cc.Vec2):number {
		const offsetY = size.y > this.DEFAULT_SIZE.y ? (size.y / 2 - 0.5) * this.SYMBOL_HEIGHT : 0;
		const topY = this.originalPosition.y + Math.abs(this.node.position.y) + this.reelManager.startY;
		return topY + offsetY;
	}
}
```
