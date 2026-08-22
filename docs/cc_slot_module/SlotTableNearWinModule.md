# SlotTableNearWinModule

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableNearWinModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotTableNearWinModule`** extends `SlotBaseModule`

## CC Properties
- `nearWinEffect`

## Key Methods
- `onLoadExtend(): void`
- `start(): void`
- `initNearWinValue(): void`
- `extendInit(): void`
- `setupNearWin(): void`
- `reelPreStopNearWin(): void`
- `reelStopNearWin(): void`
- `resetNearWin(): void`
- `_getMatrix(): string[][]`
- `_canWinBonus(): boolean`
- `_canWinFree(): boolean`
- `_canWinJP(): boolean`
- `_getXPosition(): number`
- `_getAnimNearWin(): void`
- `_setDataNearWin(): void`

## Source Implementation
```typescript
const { _decorator, Animation } = cc;
import { SlotBaseModule } from "../../../../Core/SlotBaseModule";
import { TableModuleConfig } from "./TableModuleConfig";
const { ccclass, property } = _decorator;

@ccclass
export class SlotTableNearWinModule extends SlotBaseModule {
	@property({ type: cc.Node }) nearWinEffect: cc.Node = null;
	@property useSpine: boolean = true;
	@property animationName: string = "animation";
	@property startAtScatterCount: number = 2;
	@property stopAtScatterCount: number = 5;
	@property startAtBonusCount: number = 2;
	@property stopAtBonusCount: number = 5;
	@property startAtJackpotCount: number = 4;
	@property stopAtJackpotCount: number = 5;
	@property isSkipNearWinTurbo: boolean = true;
	@property  soundNearWinId: string = "NEAR_WIN";

	_isSkipEffect: boolean = false;
	config: TableModuleConfig;
	_startX: number = 0;
	_countScatter: number = 0;
	_countBonus: number = 0;
	_countJp: number = 0;
	_nearWinData = [];
	_nearWinAnim: any = null;
	_nearWinSymbols: cc.Node[] = [];

	onLoadExtend(): void {
		this.config = this.getComponent(TableModuleConfig);
		this.initNearWinValue();
		this._getAnimNearWin();
		this.extendInit();
	}

	start(): void {
		this.node.on("SETUP_NEARWIN", this.setupNearWin, this);
		this.node.on("REEL_STOP_NEARWIN", this.reelStopNearWin, this);
		this.node.on("PRE_REEL_STOP_NEARWIN", this.reelPreStopNearWin, this);
		this.node.on("RESET_NEARWIN", this.resetNearWin, this);
	}

	initNearWinValue(): void {
		const { TABLE_FORMAT, SYMBOL_WIDTH } = this.config;
		this._startX = -(TABLE_FORMAT.length / 2 - 0.5) * SYMBOL_WIDTH;
		this._nearWinSymbols = [];
		this._countScatter = 0;
		this._countBonus = 0;
		this._countJp = 0;
		this._nearWinData = [];
		this._nearWinAnim = null;
	}

	extendInit(): void {
		// TODO
	}

	/**
	 * @API
	 */
	setupNearWin({ isTurboActive, matrix: originalMatrix, context }): void {
		const matrix = this._getMatrix(originalMatrix);
		this._isSkipEffect = this.isSkipNearWinTurbo && isTurboActive;

		const { SCATTER_SYMBOL, BONUS_SYMBOL, JACKPOT_SYMBOL } = this.config;
		let foundNearWin = false;
		for (let col = 0; col < matrix.length; col++) {
			this._setDataNearWin(col);
			const { isNearWin } = this._nearWinData[col] || {};
			foundNearWin = foundNearWin || isNearWin;
			if (foundNearWin && !this._isSkipEffect) {
				context.reels[col].extendTimeToStop(isNearWin, col === context.reels.length - 1);
			}

			for (let symbolName, row = 0; row < matrix[col].length; row++) {
				symbolName = matrix[col][row];
				if (symbolName === BONUS_SYMBOL) {
					this._countBonus++;
				}
				if (symbolName === SCATTER_SYMBOL) {
					this._countScatter++;
				}
				if (symbolName === JACKPOT_SYMBOL) {
					this._countJp++;
				}
			}
			this._nearWinData[col].canWinBonus = this._canWinBonus(col);
			this._nearWinData[col].canWinFree = this._canWinFree(col);
			this._nearWinData[col].canWinJP = this._canWinJP(col);
		}
	}

	reelPreStopNearWin(): void {
		// before reel easing stop
	}

	reelStopNearWin({ reelCount, context }): void {
		if (reelCount >= context.reels.length) {
			return this.resetNearWin();
		}
		if (context.isFastToResult()) {
			return;
		}
		this._playNearWinEffect(reelCount);
	}

	resetNearWin(): void {
		this._countScatter = 0;
		this._countBonus = 0;
		this._countJp = 0;
		this._nearWinData.length = 0;
		this._stopNearWinEffect();
		this._stopSoundNearWin();
	}

	/** @private */
	_getMatrix(data: string[][]): string[][] {
		return [...data];
	}

	//* logic play symbol
	_canWinBonus(col: number): boolean {
		if (col === 2 && this._countBonus < 1) {
			return false;
		}
		if (col === 3 && this._countBonus < 2) {
			return false;
		}
		if (col === 4 && this._countBonus < 3) {
			return false;
		}
		return true;
	}

	_canWinFree(col: number): boolean {
		if (col === 2 && this._countScatter < 1) {
			return false;
		} // _|_|_|
		if (col === 3 && this._countScatter < 2) {
			return false;
		} // A|_|_|_|
		if (col === 4 && this._countScatter < 3) {
			return false;
		} // A|_|_|_|A
		return true;
	}

	_canWinJP(col: number): boolean {
		return this._countJp === col + 1;
	}

	_getXPosition(col: number): number {
		return this._startX + this.config.SYMBOL_WIDTH * col;
	}

	//* logic play effect
	_getAnimNearWin(): void {
		if (this.useSpine) {
			this._nearWinAnim = this.nearWinEffect.getComponent(sp.Skeleton);
		} else {
			this._nearWinAnim = this.nearWinEffect.getComponent(Animation);
		}
	}

	_setDataNearWin(col: number): void {
		const isNearWinBonus = this._isNearWinBonus();
		const isNearWinScatter = this._isNearWinScatter();
		const isNearWinJp = this._isNearWinJp();
		const isNearWin = isNearWinBonus || isNearWinScatter || isNearWinJp;
		this._nearWinData[col] = { isNearWin, isNearWinBonus, isNearWinScatter, isNearWinJp };
	}

	_isNearWinBonus(): boolean {
		if (this._isSkipEffect) {
			return false;
		}
		return this._countBonus >= this.startAtBonusCount && this._countBonus < this.stopAtBonusCount;
	}

	_isNearWinScatter(): boolean {
		if (this._isSkipEffect) {
			return false;
		}
		return this._countScatter >= this.startAtScatterCount && this._countScatter < this.stopAtScatterCount;
	}

	_isNearWinJp(): boolean {
		if (this._isSkipEffect) {
			return false;
		}

		return this._countJp >= this.startAtJackpotCount && this._countJp < this.stopAtJackpotCount;
	}

	_playNearWinEffect(col: number): void {
		const { isNearWin } = this._nearWinData[col] || {};
		if (!isNearWin) {
			return this._stopNearWinEffect();
		}

		if (!this.nearWinEffect.active) {
			this.nearWinEffect.active = true;
			this._playNearWinAnim();
			this._playSoundNearWin();
		}
		this.nearWinEffect.setPosition(this._getXPosition(col), this.nearWinEffect.position.y);
	}

	_playNearWinAnim(): void {
		if (!this._nearWinAnim) {
			return;
		}
		if (this.useSpine) {
			this._nearWinAnim.setAnimation(0, this.animationName, true);
		} else {
			this._nearWinAnim.play();
		}
	}

	_stopNearWinEffect(): void {
		if (!this._nearWinAnim) {
			return;
		}
		if (!this.useSpine) {
			this._nearWinAnim.stop();
		}
		this.nearWinEffect.active = false;
	}

	_playSoundNearWin(): void {
		this.soundPlayer && this.soundPlayer.playSfx(this.soundNearWinId);
	}

	_stopSoundNearWin(): void {
		this.soundPlayer && this.soundPlayer.stopSfx(this.soundNearWinId);
	}
}

```
