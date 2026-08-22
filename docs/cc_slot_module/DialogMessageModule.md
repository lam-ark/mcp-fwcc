# DialogMessageModule

> **Source Path**: `assets/cc-common/cc-slot-module/DialogMessage/DialogMessageModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`DialogMessageModule`** extends `SlotBaseModule`

## CC Properties
- `lbMessage`
- `buttonHolder`
- `buttonOK`
- `buttonCancel`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `showDialog(): void`
- `updateMessage(): void`
- `showButtonOK(): void`
- `showButtonCancel(): void`
- `onConfirmPressed(): void`
- `onCancelPressed(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameLogicUIEvents } from '../Core/GameLogicUIEvents';
import { SlotBaseModule } from '../Core/SlotBaseModule';

const { ccclass, property } = _decorator;
@ccclass
export class DialogMessageModule extends SlotBaseModule {
	@property(cc.Label)
	lbMessage: cc.Label = null;
	@property(cc.Node)
	buttonHolder: cc.Node = null;
	@property(cc.Button)
	buttonOK: cc.Button = null;
	@property(cc.Button)
	buttonCancel: cc.Button = null;
	dialogData: eno.DialogData;

	onLoadExtend(): void {
		this.dialogData = this.gameLogic.getDataModel().DialogData;
		this.setupObserver();
	}

	setupObserver(): void {
		this.observer.watch(this.dialogData, "active", this.showDialog.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
		this.observer.watch(this.dialogData, "message", this.updateMessage.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
		this.observer.watch(this.dialogData, "isOkBtnActive", this.showButtonOK.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
		this.observer.watch(this.dialogData, "isCancelBtnActive", this.showButtonCancel.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
	}

	showDialog(active: boolean): void {
		this.node.active = active;
		eno.setOpacity(this.node, active ? 255 : 0);
		if (this.buttonHolder) {
			const isActive = active && (this.dialogData.isOkBtnActive || this.dialogData.isCancelBtnActive);
			this.buttonHolder.active = isActive;
		}
	}

	updateMessage(message: string): void {
		this.lbMessage.string = message;
	}

	showButtonOK(active: boolean): void {
		this.buttonOK.node.active = active;
	}

	showButtonCancel(active: boolean): void {
		this.buttonCancel.node.active = active;
	}

	onConfirmPressed(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.ON_ACTION_OK);
	}

	onCancelPressed(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.ON_ACTION_CANCEL);
	}

	onDestroy(): void {
		this.observer.releaseAll(this.dialogData, this);
	}
}
```
