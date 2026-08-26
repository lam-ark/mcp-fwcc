---
id: "cc_slot_mechanics:GigabloxReelModule:methods:spawnReelSymbol"
title: "GigabloxReelModule.spawnReelSymbol Method"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "methods", "spawnReelSymbol"]
---

# 📖 `GigabloxReelModule.spawnReelSymbol()`

---

## 1. Method Signature & Overview

```typescript
spawnReelSymbol(): cc.Node
```

- **Primary Role**: Implements spawnReelSymbol within the GigabloxReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
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
```
