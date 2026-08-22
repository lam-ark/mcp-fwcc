# BuyFeatureButton

> **Source Path**: `assets/cc-common/cc-slot-mechanics/BuyFeature/scripts/BuyFeatureButton.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`BuyFeatureButton`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `registerEvents(): void`
- `onBtnBuyFeature(): void`
- `onTriggerDisableUserInteraction(): void`
- `onTriggerEnableUserInteraction(): void`

## Source Implementation
```typescript
const { _decorator, Button, error } = cc;
import { GameConfig, SlotBaseModule } from "../../../cc-slot-module/SlotModuleExport";
import { GameLogicUIEvents } from "../../../cc-slot-module/Core/GameLogicUIEvents";
const { inject } = eno;
const { ccclass, property } = _decorator;

@ccclass
export class BuyFeatureButton extends SlotBaseModule {
	@inject(GameConfig) gameConfig: GameConfig = null;
	protected _buttonBuyFeature: cc.Button = null;

	onLoadExtend(): void {
		this._buttonBuyFeature = this.node.getComponent(Button);
		this.onTriggerDisableUserInteraction();
	}

	protected registerEvents(): void {
		this.gameLogic.on('ON_GAME_READY', this.onTriggerEnableUserInteraction, this);
		this.gameLogic.on('TRIGGER_DISABLE_USER_INTERACTION', this.onTriggerDisableUserInteraction, this);
		this.gameLogic.on('TRIGGER_ENABLE_USER_INTERACTION', this.onTriggerEnableUserInteraction, this);
	}

	onBtnBuyFeature(): void {
		if (!this.gameConfig.HAS_BUY_FEATURE) {
			error('Buy feature is not enabled');
			return;
		}
		this.soundPlayer && this.soundPlayer.playSFXClick()
		this.gameLogic.emit(GameLogicUIEvents.OPEN_BUY_FEATURE_PANEL);
	}

	onTriggerDisableUserInteraction(): void {
		this._buttonBuyFeature.interactable = false;
	}

	onTriggerEnableUserInteraction(): void {
		this._buttonBuyFeature.interactable = true;
	}
}


```
