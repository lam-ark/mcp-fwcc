# JackpotWinModule

> **Source Path**: `assets/cc-common/cc-slot-module/CutScene/JackpotWin/JackpotWinModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`JackpotWinModule`** extends `BaseCutscene`

## CC Properties
- `winAmount`
- `title`
- `coinsEffect`

## Key Methods
- `onLoadExtend(): void`
- `enter(): void`
- `initValue(): void`
- `bindQuickShow(): void`
- `startUpdateWinAmount(): void`
- `startParticle(): void`
- `stopParticle(): void`
- `playSoundStart(): void`
- `playSoundCountingEnd(): void`
- `playSoundSkip(): void`
- `playSoundEnd(): void`
- `onClick(): void`
- `resumeMainBGM(): void`
- `finish(): void`
- `exit(): void`

## Source Implementation
```typescript
const { _decorator, Label, ParticleSystem, tween } = cc;
import { BaseCutscene } from '../BaseCutscene';
const { ccclass, property } = _decorator;

@ccclass
export class JackpotWinModule extends BaseCutscene {
	@property delayShowTime = 2;
	@property delayHideTime = 1;
	@property animDuration = 10;

	@property(cc.Node)
	winAmount: cc.Node = null;

	@property(cc.Node)
	title: cc.Node = null;

	@property(cc.Node)
	coinsEffect: cc.Node = null;

	currentValue: number = 0;
	public _lbWinAmount: cc.Label = null;
	public _coinParticle: cc.ParticleSystem = null;
	public _isUpdating: boolean = false;
	public _skippable: boolean = false;
	public _tweenMoney: any = null;
	protected _hasClicked: boolean = false;

	jackpotType: string = "";
	jackpotValue: number = 0;

	onLoadExtend(): void {
		this._lbWinAmount = this.winAmount && this.winAmount.getComponent(Label);
		this._coinParticle = this.coinsEffect && this.coinsEffect.getComponent(ParticleSystem);      
	}

	enter(): void {
		this.playSoundStart();
		this.initValue();
		this.startParticle();
		this.startUpdateWinAmount();
	}

	initValue(): void {
		this.jackpotType = this.content.jackpotType || "GRAND";
		this.jackpotValue = this.content.jackpotValue || 0;
		this.currentValue = 0;
		this._lbWinAmount.string = '';
		this._isUpdating = true;
		this._skippable = false;
		this._hasClicked = false;
		this.bindQuickShow();
	}

	bindQuickShow(): void {
		this._skippable = false;
		tween(this.node).delay(this.delayShowTime).call(() => {
			this._skippable = true;
		}).start();
	}

	startUpdateWinAmount(): void {
		this._tweenMoney = tween(this);
		this._tweenMoney = this.moneyTween.runNumber(this._lbWinAmount.node, this.animDuration, this.jackpotValue, {
			onComplete: () => {
				this.playSoundCountingEnd();
				this._skippable = false;
				this.finish();
			}
		});
	}

	startParticle(): void {
		this._coinParticle && this._coinParticle.resetSystem();
	}

	stopParticle(): void {
		this._coinParticle && this._coinParticle.stopSystem();
	}

	playSoundStart(): void { }
	playSoundCountingEnd(): void { }
	playSoundSkip(): void { }
	playSoundEnd(): void { }

	onClick(): void {
		if (!this._isUpdating) {
			return;
		}
		if (!this._skippable) {
			return;
		}
		if (!this._hasClicked) {
			this._hasClicked = true;
		} else {
			return;
		}
		
		this.playSoundSkip();

		if (this._tweenMoney) {
			this._tweenMoney.stop();
			this._tweenMoney = null;
		}

		this._tweenMoney = this.moneyTween.runNumber(this._lbWinAmount.node, 1, this.jackpotValue, {
			onComplete: () => {
				this.playSoundCountingEnd();
				this.finish();
			}
		});
	}

	resumeMainBGM(): void { }

	finish(): void {
		this._lbWinAmount.string = this.moneyFormatter.formatMoney(this.jackpotValue);

		this.playSoundEnd();
		this._isUpdating = false;
		this.stopParticle();
		tween(this.node)
			.delay(this.delayHideTime)
			.call(() => {
				this._lbWinAmount.string = '';
				this.exit();
			}).start();
	}

	exit(): void {
		this.resumeMainBGM();
		super.exit();
	}
}


```
