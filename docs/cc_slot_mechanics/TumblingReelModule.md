# TumblingReelModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/TumblingReel/scripts/TumblingReelModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`TumblingReelModule`** extends `SlotReelModule`

## Key Methods
- `spinAction(): void`
- `showResult(): void`
- `fastStop(): void`
- `changeToBlurSymbol(): void`
- `recycleSymbol(): void`
- `spawnReelSymbol(): cc.Node`
- `spawnSymbol(): cc.Node`
- `update(): void`
- `playStopAnimation(): void`
- `playFastStopAnimation(): void`
- `fallingSymbol(): void`
- `playSymbolAppearAnimation(): void`
- `getDelayTimeStopping(): number`
- `onStopFallingSymbol(): void`

## Source Implementation
```typescript
const { _decorator, Vec2, tween } = cc;
import { HelpDocuments } from "../../../cc-slot-module/Components/Common/HelpDocuments";
import { SlotReelModule } from "../../../cc-slot-module/SlotModuleExport";
import { SlotSymbolModule } from "../../../cc-slot-module/SlotModuleExport";
import { ReelSpinState } from "../../../cc-slot-module/SlotModuleExport";
import { SymbolIndexType } from "../../../cc-slot-module/SlotModuleExport";

const { ccclass, help } = _decorator;

@ccclass
@help(HelpDocuments.TUMBLING_REEL_MODULE)
export class TumblingReelModule extends SlotReelModule {

    protected isSpinningCompleted: boolean = false;
    protected isFastStopped: boolean = false;

    spinAction(): void {
        this.isSpinningCompleted = false;
        this.isFastStopped = false;

        const reverseSymbols = [...this.listSymbols].reverse();
        reverseSymbols.forEach((symbol, index) => {
            const position: cc.Vec2 = symbol.getPosition();
            symbol.setSiblingIndex(this.reelManager.totalSymbol - index - 1);

            const delayByReelIndex = index * this.config.DELAY_BETWEEN_SYMBOLS_SPINNING + this.reelIndex * this.config.DELAY_BETWEEN_REELS;
            let delayTime = (this.currentMode == this.config.MODES.TURBO) ? 0 : delayByReelIndex;
            
            tween(symbol)
                .delay(delayTime)
                .call(() => {
                    this.changeToBlurSymbol(symbol)
                })
                .to(this.reelManager.speed, { position: new Vec2(0, position.y - this.reelManager.totalSymbol * this.SYMBOL_HEIGHT - this.config.BUFFER_BOTTOM_Y) })
                .call(() => {
                    if (index == this.reelManager.totalSymbol - 1) {
                        this.isSpinningCompleted = true;
                        this.recycleSymbol();
                    }
                })
                .start();
        });
	}

    showResult(symbols, reelStopCallback, reelPreStopCallback): void {
        this.resultSymbols = [];
		this.updateReelResult(symbols);
		
		this.reelStopCB = reelStopCallback;
		this.reelPreStopCB = reelPreStopCallback;

        if (this.reelManager.state == ReelSpinState.START) {
            this.reelManager.changeState(ReelSpinState.SHOWING_RESULT);
        }
	}

    fastStop(): void {
        if (this.reelManager.state == ReelSpinState.START) {
			return;
		}
        this.isFastStopped = true;

        if (this.reelManager.state == ReelSpinState.SHOWING_RESULT) {
            this.reelManager.reset();
            this.recycleSymbol();
            for (let i = 0; i < this.reelManager.totalSymbol; i++) {
                const newSymbol = this.spawnReelSymbol();
                this.customizeNewSymbol(newSymbol);
            }
            this.reelManager.changeState(ReelSpinState.STOPPED);
        }

		this.reelManager.speed = this.reelManager.speed / this.config.FAST_SPIN_RATE;
		this.playFastStopAnimation();
	}

    protected changeToBlurSymbol(symbol: cc.Node): void {
        SlotSymbolModule.getModuleComponent(symbol).changeToBlurSymbol();
    }

    protected recycleSymbol(): void {
		if (!this.listSymbols.length) {
			return;
		}

        while (this.listSymbols.length) {
            const symbol = this.listSymbols.shift();
            this.symbolManager.removeSymbol(symbol);
        }
	}

    protected spawnReelSymbol(): cc.Node {
		let code = "", size = Vec2.ONE;
		let skip = false;
		let indexSymbol = -1;
        
		if (this.reelManager.state === ReelSpinState.SHOWING_RESULT && this.data.length) {
			const symbolValue = this.data[this.reelManager.index];
			indexSymbol = this.getIndexSymbol(this.reelManager.index);
			if (symbolValue) {
				({ symbolCode: code, symbolSize: size } = this.mapSymbolData(symbolValue));
			} else {
				skip = true;
			}
            this.reelManager.index++;
		} else {
			({ symbolCode: code, symbolSize: size } = this.getRandomSymbol());
		}

		if (skip) {
			return;
		}

		const symbol = this.spawnSymbol(code, size);
		if (indexSymbol != SymbolIndexType.UNUSED) {
			SlotSymbolModule.getModuleComponent(symbol).setIndex(indexSymbol);
			this.resultSymbols.push(symbol);
		}

		return symbol;
	}

    protected spawnSymbol(code: string, size: cc.Vec2): cc.Node {
        const symbol = super.spawnSymbol(code, size);
        const position = symbol.position;
        symbol.setPosition(position.x, position.y + this.config.BUFFER_TOP_Y + this.SYMBOL_HEIGHT);
		return symbol;
	}

    protected update(dt: number): void {
        if (this.reelManager.state === ReelSpinState.SHOWING_RESULT && this.isSpinningCompleted && !this.isFastStopped) {
            for (let i = 0; i < this.reelManager.totalSymbol; i++) {
                const newSymbol = this.spawnReelSymbol();
                this.customizeNewSymbol(newSymbol);
            }
            this.reelManager.changeState(ReelSpinState.STOPPED);
            this.playStopAnimation();
        } 
    }

    protected playStopAnimation(): void {
        this.listSymbols.forEach((symbol, index) => {
            const symbolSize = SlotSymbolModule.getModuleComponent(symbol).getSize();
            const reverseIndex = this.reelManager.totalSymbol - index - 1;
            const position = this.initPositionByType(index, symbolSize);
            const delayTime = (this.currentMode == this.config.MODES.TURBO) ? 0 : this.getDelayTimeStopping(reverseIndex);
            const isLastSymbol = (index == this.reelManager.totalSymbol - 1);
            
            symbol.setSiblingIndex(index);
            this.fallingSymbol(symbol, delayTime, new cc.Vec2(position.x, position.y), isLastSymbol);
        });
	}

    protected playFastStopAnimation(): void {
        this.listSymbols.forEach((symbol, index) => {
            const symbolSize = SlotSymbolModule.getModuleComponent(symbol).getSize();
            const position = this.initPositionByType(index, symbolSize);
            const isLastSymbol = index === 0;
            
            symbol.stopAllActions();
            symbol.setSiblingIndex(index);
            this.fallingSymbol(symbol, 0, new Vec2(position.x, position.y), isLastSymbol);
        });
    }

    protected fallingSymbol(symbol: cc.Node, delayTime: number, position: cc.Vec2, isLastSymbol: boolean): void {
        const spinSpeed = this.currentMode.easingTimeStop;
        const { positionStep1, positionStep2 } = this.getPositionStopStep();

        tween(symbol)
            .delay(delayTime)
            .to(this.reelManager.speed, { position })
            .call(() => {
                this.playSymbolAppearAnimation(symbol);
                this.onStopFallingSymbol(isLastSymbol);
                if (isLastSymbol) {
                    this.reelPreStopCB && this.reelPreStopCB(this.reelIndex);
                    this.reelPreStopCB = null;
                }
            })
            .by(spinSpeed, { position: positionStep2 })
            .by(spinSpeed, { position: positionStep1 })
            .call(() => {
                if (isLastSymbol) {
                    this.reelStopCB && this.reelStopCB(this.reelIndex);
                    this.reelStopCB = null;
                }
            })
            .start();
    }

    playSymbolAppearAnimation(symbol?: cc.Node): void {
        symbol.emit("PLAY_ANIMATION_APPEAR");
    }

    protected getDelayTimeStopping(index: number): number {
        return index * this.config.DELAY_BETWEEN_SYMBOLS_STOPPING + this.reelIndex * this.config.DELAY_BETWEEN_REELS;
    }

    protected onStopFallingSymbol(_isLastSymbol: boolean): void {
        
    }
}

```
