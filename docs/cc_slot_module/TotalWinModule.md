# TotalWinModule

> **Source Path**: `assets/cc-common/cc-slot-module/CutScene/TotalWin/TotalWinModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`TotalWinModule`** extends `BaseCutscene`

## CC Properties
- `winAmount`
- `coinsEffect`

## Key Methods
- `onLoadExtend(): void`
- `enter(): void`
- `initValue(): void`
- `bindQuickShow(): void`
- `startUpdateWinAmount(): void`
- `getTotalWinAmount(): number`
- `startParticle(): void`
- `stopParticle(): void`
- `playSoundStart(): void`
- `playSoundEnd(): void`
- `playSoundSkip(): void`
- `playSoundCountingEnd(): void`
- `onClick(): void`
- `finish(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Label, ParticleSystem, tween } = cc;
import { BaseCutscene } from '../BaseCutscene';
const { ccclass, property } = _decorator;

@ccclass
export class TotalWinModule extends BaseCutscene {
	@property delayShowTime = 1;
	@property hideTime = 0.5;
	@property animDuration = 10;

	@property(cc.Node) winAmount: cc.Node = null;
	@property(cc.Node) coinsEffect: cc.Node = null;

	currentValue: number = 0;

	protected _totalWinAmount: number = 0;
	protected _lbWinAmount: cc.Label = null;
	protected _coinParticle: cc.ParticleSystem = null;
	protected _isUpdating: boolean = false;
	protected _skippable: boolean = false;
	protected _hasSkip: boolean = false;
	protected _tweenMoney: any = null;

	onLoadExtend(): void {
		this._lbWinAmount = this.winAmount && this.winAmount.getComponent(Label);
		this._coinParticle = this.coinsEffect && this.coinsEffect.getComponent(ParticleSystem);
	}

	enter(): void {
		this.initValue();
		this.startParticle();
		this.startUpdateWinAmount();
		this.playSoundStart();
	}

	initValue(): void {
		this.currentValue = 0;
		this._lbWinAmount.string = '';
		this._isUpdating = true;
		this._skippable = false;
		this._hasSkip = false;
		this._totalWinAmount = this.getTotalWinAmount();
		this.bindQuickShow();
	}

	bindQuickShow(): void {
		this._skippable = false;
		tween(this.node).delay(this.delayShowTime).call(() => {
			this._skippable = true;
		}).start();
	}

	startUpdateWinAmount(): void {
		this._tweenMoney = this.moneyTween.runNumber(this._lbWinAmount.node, this.animDuration, this._totalWinAmount, {
			onComplete: () => {
				this._tweenMoney = null;
				this._skippable = false;
				this.playSoundCountingEnd();
				this.finish();
			}
		});
	}

	getTotalWinAmount(): number {
		const { winAmount } = this.content;
		const winAmountPS = this.dataStore.getWinAmountPS();
		return Number(winAmount || winAmountPS || 0);
	};

	startParticle(): void {
		this._coinParticle && this._coinParticle.resetSystem();
	}

	stopParticle(): void {
		this._coinParticle && this._coinParticle.stopSystem();
	}

	playSoundStart(): void { }
	playSoundEnd(): void { }
	playSoundSkip(): void { }
	playSoundCountingEnd(): void { }

	onClick(): void {
		if (!this._isUpdating || !this._skippable || this._hasSkip) {
			return;
		}
		this._hasSkip = true;

		this.playSoundSkip();

		if (this._tweenMoney) {
			this._tweenMoney.stop();
			this._tweenMoney = null;
		}

		this._tweenMoney = this.moneyTween.runNumber(this._lbWinAmount.node, 1, this._totalWinAmount, {
			onComplete: () => {
				this._tweenMoney = null;
				this.finish();
			}
		});
	}

	finish(): void {
		this._lbWinAmount.string = this.moneyFormatter.formatMoney(this._totalWinAmount);
		this.playSoundEnd();
		this._isUpdating = false;
		this.stopParticle();
		tween(this.node)
			.delay(this.hideTime)
			.call(() => {
				this._lbWinAmount.string = '';
				this.exit();
			}).start();
	}

	onDestroy(): void {
		if (this._tweenMoney) {
			this._tweenMoney.stop();
			this._tweenMoney = null;
		}
		this.node.stopAllActions();
	}
}


```
