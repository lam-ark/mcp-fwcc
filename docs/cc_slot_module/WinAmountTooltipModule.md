# WinAmountTooltipModule

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/WinAmountTooltip/WinAmountTooltipModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`CustomFeatureText`**
- **`export`**
- **`WinAmountTooltipModule`** extends `WinAmountModule`

## CC Properties
- `featureSf`
- `width`
- `featureSprite`
- `featureSfs`
- `winTextSprite`
- `winTextSpriteFrame`
- `totalWinTextSpriteFrame`

## Key Methods
- `onLoadExtend(): void`
- `onJoinGameSuccess(): void`
- `showWinAmount(): void`
- `showTotalWinAmount(): void`
- `hideWinAmount(): void`
- `showText(): void`
- `showWinText(): void`
- `hideText(): void`
- `hideTooltip(): void`
- `stopAllTweens(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, tween } = cc;
import { GameUIEvents } from '../../Core/GameUIEvents';
import { WinAmountModule } from '../../GUI/WinAmount/WinAmountModule';
const { ccclass, property } = _decorator;

@ccclass("CustomFeatureText")
export class CustomFeatureText {
	@property(cc.SpriteFrame)
	featureSf: cc.SpriteFrame = null;
	@property()
	width: number = 700;
}

const TOOL_TIP_TYPE = {
	WIN_AMOUNT: 1,
	TEXT: 2,
	IDLE: 3,
};

@ccclass
export class WinAmountTooltipModule extends WinAmountModule {
	@property(cc.Sprite)
	featureSprite: cc.Sprite = null;
	@property(CustomFeatureText)
	featureSfs: CustomFeatureText[] = [];
	@property(cc.Sprite)
	winTextSprite: cc.Sprite = null;
	@property(cc.SpriteFrame)
	winTextSpriteFrame: cc.SpriteFrame = null;
	@property(cc.SpriteFrame)
	totalWinTextSpriteFrame: cc.SpriteFrame = null;
	@property
	fadeTime: number = 0.5;
	@property
	delayTime: number = 1.5;
	@property
	movingTime: number = 5;

	protected _currentIndex: number = 0;
	protected _currentTween: any = null;
	protected _currentType: number = TOOL_TIP_TYPE.TEXT;

	onLoadExtend(): void {
		this.eventManager.on(GameUIEvents.WIN_AMOUNT_TOOLTIP.SHOW_TOOLTIP_WIN_AMOUNT, this.showWinAmount, this);
		this.eventManager.on(GameUIEvents.WIN_AMOUNT_TOOLTIP.SHOW_TOOLTIP_TOTAL_WIN_AMOUNT, this.showTotalWinAmount, this);
		this.eventManager.on(GameUIEvents.WIN_AMOUNT_TOOLTIP.SHOW_TOOLTIP_TEXT, this.showText, this);
		this.eventManager.on(GameUIEvents.WIN_AMOUNT_TOOLTIP.HIDE_TOOLTIP, this.hideTooltip, this);
		this.eventManager.on(GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS, this.onJoinGameSuccess, this);

		this.hideWinAmount();
		this.hideText();
	}

	onJoinGameSuccess(data: any): void {
		const joinGameData = (data && data.joinGameData) || {};
		if (joinGameData.isResume && joinGameData.winAmount) {
			this.showWinAmount({ winAmount: joinGameData.winAmount, time: 0 });
		} else {
			this.showText();
		}
	}

	showWinAmount({ winAmount, time, winLevel }: any): void {
		this.stopAllTweens();
		this.hideText();

		this._currentType = TOOL_TIP_TYPE.WIN_AMOUNT;
		this.labelWinAmount.node.active = true;
		this.showWinText(false);
		this.updateWinAmount({ winAmount, time, winLevel });
	}

	showTotalWinAmount({ winAmount, time, winLevel }: any): void {
		this.stopAllTweens();
		this.hideText();

		this._currentType = TOOL_TIP_TYPE.WIN_AMOUNT;
		this.labelWinAmount.node.active = true;
		this.showWinText(true);
		this.updateWinAmount({ winAmount, time, winLevel });
	}

	hideWinAmount(): void {
		this.clearWinAmount();
		this.winTextSprite.node.active = false;
		this.labelWinAmount.node.active = false;
	}

	showText(): void {
		if (this._currentType === TOOL_TIP_TYPE.WIN_AMOUNT) {
			return;
		}
		this._currentType = TOOL_TIP_TYPE.TEXT;
		this.stopAllTweens();
		this.hideWinAmount();
		this.featureSprite.node.active = true;

		const featureText = this.featureSfs[this._currentIndex];
		const spriteFrame = featureText.featureSf;
		const endX = -featureText.width;

		this.featureSprite.spriteFrame = spriteFrame;
		this._currentIndex = (this._currentIndex + 1) % this.featureSfs.length;

		const tip = this.featureSprite.node;
		tip.setPosition(cc.Vec3.ZERO);
		eno.setOpacity(tip, 0);
		this._currentTween = tween(tip)
			.call(() => {
				this._tweenFade = eno.fadeIn(tip, this.fadeTime);
			})
			.delay(this.delayTime)
			.to(this.movingTime, { position: new cc.Vec2(endX, 0) })
			.call(() => {
				eno.setOpacity(tip, 255);

				this._tweenFade = null;
				this._currentTween = null;
				this.showText();
			})
			.start();
	}

	showWinText(isTotalWin: boolean): void {
		this.winTextSprite.node.active = true;
		this.winTextSprite.spriteFrame = isTotalWin ? this.totalWinTextSpriteFrame : this.winTextSpriteFrame;
	}

	hideText(): void {
		this.winTextSprite.node.active = false;
		this.featureSprite.node.active = false;
	}

	hideTooltip(): void {
		this.hideWinAmount();
		this._currentType = TOOL_TIP_TYPE.IDLE;
		this.showText();
	}

	stopAllTweens(): void {
		this._currentTween && this._currentTween.stop();
		this._currentTween = null;
		this._tweenFade && this._tweenFade.stop();
		this._tweenFade = null;
	}

	onDestroy(): void {
		this.stopAllTweens();
		super.onDestroy();
	}
}


```
