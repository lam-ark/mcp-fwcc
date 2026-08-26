---
id: "cc_slot_mechanics:MegaReelModule:methods:getRandomSymbol"
title: "MegaReelModule.getRandomSymbol Method Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "getRandomSymbol"]
---

# 📖 `MegaReelModule.getRandomSymbol()`

---

## 1. Method Signature

```typescript
getRandomSymbol()); } if (!this.canPlaceSymbol() || skip) { return; } const symbol = this.spawnSymbol(code, size, isBlurSymbol); // if it's real symbol, check to hide it if it's below the mega symbol if (!isBlurSymbol) { // check to hide small symbols this.hideSmallSymbol(symbol, indexSymbol); // create mega symbol this.createMegaSymbol(indexSymbol); } if (indexSymbol != SymbolIndexType.UNUSED) { SlotSymbolModule.getModuleComponent(symbol).setIndex(indexSymbol); this.resultSymbols.push(symbol); } return symbol; } protected hideSmallSymbol(symbol:cc.Node, index:number): void
```

- **Scope**: `MegaReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
getRandomSymbol());
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
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
