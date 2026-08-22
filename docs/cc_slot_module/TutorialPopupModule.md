# TutorialPopupModule

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/TrialMode/TutorialPopupModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`TutorialPopupModule`** extends `SlotBaseModule`

## CC Properties
- `buttonLayout`
- `lbMessage`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `updateMessage(): void`
- `updateState(): void`
- `updatePopupAction(): void`
- `showTutorialPopup(): void`
- `onClickConfirm(): void`
- `onClickCancel(): void`
- `onHidePopup(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, tween } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { TUTORIAL_STATE_ENUM } from "../../Components/Common/SlotEnum";
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
const { ccclass, property } = _decorator;

@ccclass
export class TutorialPopupModule extends SlotBaseModule {
	@property(cc.Node) buttonLayout: cc.Node = null;
	@property(cc.Label) lbMessage: cc.Label = null;

	waitForAction: boolean = false;
	tweenTutorialPopup: any = null;
	trialModel = null;
	currentState: number = TUTORIAL_STATE_ENUM.NOT_STARTED;
	
	onLoadExtend(): void {
		this.setupObserver();
		this.node.active = false;
		eno.setOpacity(this.node, 0);
		this.buttonLayout.active = false;
	}

	setupObserver(): void {
		this.trialModel = this.gameLogic.getDataModel().TrialModeData;

		this.observer.watch(this.trialModel, "tutorialPopupMessage", this.updateMessage.bind(this), this, { canTriggerSameValue: true });
		this.observer.watch(this.trialModel, "tutorialPopupAction", this.updatePopupAction.bind(this), this, { canTriggerSameValue: true });
		this.observer.watch(this.trialModel, "tutorialPopupActive", this.showTutorialPopup.bind(this), this, { canTriggerSameValue: true });
		this.observer.watch(this.trialModel, "currentState", this.updateState.bind(this), this);
	}

	updateMessage(message): void {
		this.lbMessage.string = message;
	}

	updateState(state): void {
		this.currentState = state;
	}

	updatePopupAction(hasAction): void {
		this.waitForAction = hasAction;
		this.buttonLayout.active = this.waitForAction;
	}

	showTutorialPopup(isActive): void {
		if (!isActive) {
			this.node.active = false;
			return;
		}

		this.node.active = true;
		eno.setOpacity(this.node, 255);

		if (!this.waitForAction) {
			this.tweenTutorialPopup = tween(this.node)
				.delay(3)
				.call(() => {
					this.gameLogic.emit(GameLogicUIEvents.CLOSE_TUTORIAL_POPUP);
					this.node.active = false;
					this.tweenTutorialPopup = null;
				})
				.start();
		}
	}

	onClickConfirm(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_TUTORIAL_POPUP);
		this.gameLogic.emit(GameLogicUIEvents.BACK_TO_REAL_MODE, true);
	}

	onClickCancel(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_TUTORIAL_POPUP);
	}

	onHidePopup(): void {
		if (this.waitForAction) {
			return;
		}
		this.tweenTutorialPopup && this.tweenTutorialPopup.stop();
		this.tweenTutorialPopup = null;
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_TUTORIAL_POPUP);
	}

	onDestroy(): void {
		this.tweenTutorialPopup && this.tweenTutorialPopup.stop();
		this.tweenTutorialPopup = null;
		this.observer.releaseAll(this.trialModel, this);
	}
}

```
