# WinEffectModule

> **Source Path**: `assets/cc-common/cc-slot-module/CutScene/WinEffect/WinEffectModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`WinEffectModule`** extends `BaseCutscene`

## CC Properties
- `winInfo`
- `winAmount`
- `overlayNode`
- `fastParticle`
- `coinsEffect`
- `title`

## Key Methods
- `onLoadExtend(): void`
- `play(): void`
- `showFastEffectWin(): void`
- `showEffectWin(): void`
- `showWinAmount(): void`
- `showTitle(): void`
- `initValue(): void`
- `bindQuickShow(): void`
- `enter(): void`
- `startUpdateWinAmount(): void`
- `changeTitle(): void`
- `startParticle(): void`
- `stopParticle(): void`
- `playSoundStart(): void`
- `playSoundCounting(): void`

## Source Implementation
```typescript
const { _decorator, tween, Label,  ParticleSystem, Sprite } = cc;
import { BaseCutscene } from '../BaseCutscene';
import { WinEffectLevelEnum } from '../../Components/Common/SlotEnum';
const { ccclass, property } = _decorator;

@ccclass
export class WinEffectModule extends BaseCutscene {
	@property superRate: number = 25;
	@property megaRate: number = 40;
	@property delayShowTime: number = 1;
	@property delayHideTime: number = 1;
	@property animDuration: number = 9;
	@property(cc.Node)
	winInfo: cc.Node = null;

	@property(cc.Node)
	winAmount: cc.Node = null;

	@property(cc.Node)
	overlayNode: cc.Node = null;

	@property(cc.Node)
	fastParticle: cc.Node = null;

	@property(cc.Node)
	coinsEffect: cc.Node = null;

	@property(cc.Node)
	title: cc.Node = null;

	@property({ type: cc.SpriteFrame, visible: function (this: WinEffectModule) {
		return this.title !== null 
	} })
	titleFrame: cc.SpriteFrame[] = [];


	currentValue: number = 0;
	public _bigWinConfig: any = null;
	public _isShowFastEffect: boolean = false;
	public _isShowNormalEffect: boolean = false;
	public _isUpdating: boolean = false;
	public _speedUp: boolean = false;
	public _currentTitle: number = 0;
	public _skippable: boolean = false;
	public _tweenMoney: any = null;
	public _sprTitle: cc.Sprite = null;
	public _lbWinAmount: cc.Label = null;
	public _fastEffectAction: any = null;
	public _fastParticle: cc.ParticleSystem = null;
	public _superWinAmount: number = 0;
	public _megaWinAmount: number = 0;
	public _winEffectLevel: number = WinEffectLevelEnum.BIG;

	_tweenFinish: any = null;

	onLoadExtend(): void {
		this._sprTitle = this.title && this.title.getComponent(Sprite);
		this._lbWinAmount = this.winAmount && this.winAmount.getComponent(Label);
		this._fastParticle = this.fastParticle && this.fastParticle.getComponent(ParticleSystem);
	}

	play(...params: any[]): void {
		this.fullDisplay = !(this.gameSettings.isTurboActive || this.gameSettings.isFastToResult);
		if (!this._bigWinConfig && this.gameSettings.bigWinConfig) {
			this._bigWinConfig = this.gameSettings.bigWinConfig;
			this.megaRate = this._bigWinConfig[1] || this.megaRate;
			this.superRate = this._bigWinConfig[2] || this.superRate;
		}
		super.play(...params);
	}


	showFastEffectWin(): void {
		if (this._isShowFastEffect) {
			this.callback && this.callback();
			this.callback = null;
			return;
		}

		if (this.overlayNode) {
			this.overlayNode.active = false;
		}
		this.winInfo.active = false;
		this._isShowFastEffect = true;

		this.playSfxFastBigWin();
		this.fastParticle.stopAllActions();
		this.startParticle();
		this.callback && this.callback();
		this.callback = null;

		if (this._fastEffectAction) {
			this._fastEffectAction.stop();
			this._fastEffectAction = null;
		}
		this._fastEffectAction = tween(this.node)
			.delay(1)
			.call(() => {
				this.stopParticle();
			})
			.delay(2)
			.call(() => {
				this.exit();
			})
			.start();
	}

	showEffectWin(): void {
		this._isShowNormalEffect = true;
		this.winInfo.active = true;
		if (this.overlayNode) {
			this.overlayNode.active = true;
		}

		this.playSoundStart();
		this.showWinAmount();
		this.showTitle();

		this.initValue();
		this.startParticle();
		this.startUpdateWinAmount();
	}

	showWinAmount(): void {
		const scaleTime = 0.2;
		this.winAmount.stopAllActions();

		tween(this.winAmount)
			.to(scaleTime, { scale: 1.2 })
			.to(scaleTime, { scale: 1 })
			.union()
			.repeatForever()
			.start();
	}

	showTitle(): void {
		const scaleTime = 0.2;
		if (this.title) {
			this.title.stopAllActions();
			tween(this.title)
				.to(scaleTime, { scale: 1.2 })
				.to(scaleTime, { scale: 1 })
				.union()
				.repeatForever()
				.start();
		}
	}

	initValue(): void {
		this.currentValue = 0;
		this._currentTitle = 0;
		this._lbWinAmount.string = "";
		if (this.title) {
			this._sprTitle.spriteFrame = this.titleFrame[WinEffectLevelEnum.BIG];
		}

		this._megaWinAmount = this.content.totalBet * this.megaRate;
		this._superWinAmount = this.content.totalBet * this.superRate;

		this._isUpdating = true;
		this._speedUp = false;
		this.bindQuickShow();
	}

	bindQuickShow(): void {
		this._skippable = false;
		this.node.stopAllActions();
		tween(this.node)
			.delay(this.delayShowTime)
			.call(() => {
				this._skippable = true;
			})
			.delay(this.animDuration - this.delayHideTime)
			.call(() => {
				this._skippable = false;
			})
			.start();
	}

	enter(): void {
		this.node.stopAllActions();

		const isTurboActive = this.gameSettings.isTurboActive;
		const isFastToResult = this.gameSettings.isFastToResult;

		const winType: string = this.content.winType;
		if (winType) {
			this._winEffectLevel = WinEffectLevelEnum[winType];
		}

		if (isTurboActive || isFastToResult) {
			this.showFastEffectWin();
		} else {
			this.showEffectWin();
		}
	}

	startUpdateWinAmount(): void {
		const winAmount = this.content.winAmount;
		this.playSoundCounting();
		this._tweenMoney = this.moneyTween.runBigWinNumber(this._lbWinAmount.node, this.animDuration, winAmount, { onUpdate: ({ value }: { value: number }) => {
			this.currentValue = value;
		}, onComplete: () => {
			this.currentValue = winAmount;
			this.playSoundCountingEnd();
			this._tweenMoney = null;
			this.finish();
		}});
	}

	changeTitle(index): void {
		this._currentTitle = index;
		if (!this.title) {
			return;
		}

		this.playSfxChangeTitle(index);
		this.title.stopAllActions();
		tween(this.title)
			.to(0.3, { scale: 2 })
			.call(() => {
				this._sprTitle.spriteFrame = this.titleFrame[index];
			})
			.to(0.3, { scale: 1 })
			.call(() => {
				this.showTitle();
			})
			.start();
	}

	startParticle(): void {
		if (this._isShowNormalEffect) {
			this.coinsEffect.emit("SHOW_COINS_EFFECT");
		}

		if (this._isShowFastEffect) {
			this._fastParticle && this._fastParticle.resetSystem();
		}
	}

	stopParticle(): void {
		if (this._isShowNormalEffect) {
			this.coinsEffect.emit("HIDE_COINS_EFFECT");
		}

		if (this._isShowFastEffect) {
			this._fastParticle && this._fastParticle.stopSystem();
		}
	}
	playSoundStart(): void { }
	playSoundCounting(): void { }
	playSoundCountingEnd(): void { }
	playSoundSkip(): void { }
	playSfxFastBigWin(): void { }
	playSfxChangeTitle(_index: number): void { }
	playSoundEnd(): void { }
	resumeMainBGM(): void { }

	onClick(): void {
		if (!this._isUpdating || this._speedUp) {
			return;
		}
		if (!this._skippable) {
			return;
		}
		this.playSoundSkip();

		this._speedUp = true;
		this._skippable = false;
		this.winAmount.stopAllActions();
		this.node.stopAllActions();

		if (this._tweenMoney) {
			this._tweenMoney.stop();
			this._tweenMoney = null;
		}

		this.playSoundCountingEnd();
		this.currentValue = this.content.winAmount;
		this.finish();
	}

	update(dt: number): void {
		if (!this._isUpdating) {
			return;
		}
		this.updateCurrentTitle();
	}

	updateCurrentTitle(): void {
		if (this.currentValue >= this._superWinAmount) {
			if (this._currentTitle !== WinEffectLevelEnum.SUPER) {
				this.changeTitle(WinEffectLevelEnum.SUPER);
			}
		} else if (this.currentValue >= this._megaWinAmount) {
			if (this._currentTitle !== WinEffectLevelEnum.MEGA) {
				this.changeTitle(WinEffectLevelEnum.MEGA);
			}
		}
	}

	finish(): void {
		this.playSoundEnd();
		this._skippable = false;
		this._isUpdating = false;
		this.currentValue = this.content.winAmount;
		this.updateCurrentTitle();
		this._lbWinAmount.string = this.moneyFormatter.formatMoney(this.content.winAmount);

		this.winAmount.stopAllActions();
		this.stopParticle();

		if (this._tweenFinish) {
			this._tweenFinish.stop();
			this._tweenFinish = null;
		}

		this._tweenFinish = tween(this.node)
			.delay(this.delayHideTime)
			.call(() => {
				this.exit();
			})
			.start();
	}

	exit(): void {
		this._isShowFastEffect = false;
		this._isShowNormalEffect = false;
		this.resumeMainBGM();
		super.exit();
	}

	onDestroy(): void {
		if (this._tweenMoney) {
			this._tweenMoney.stop();
			this._tweenMoney = null;
		}
		if (this._tweenFinish) {
			this._tweenFinish.stop();
			this._tweenFinish = null;
		}
		this.node && this.node.stopAllActions();
		if (this.winAmount) {
			this.winAmount.stopAllActions();
		}
		super.onDestroy && super.onDestroy();
	}
}
```
