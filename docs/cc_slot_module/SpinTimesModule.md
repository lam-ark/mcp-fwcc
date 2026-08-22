# SpinTimesModule

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/SpinTimes/SpinTimesModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SpinTimesModule`** extends `SlotBaseModule`

## CC Properties
- `gameMode`
- `spinTimesLabel`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `updateState(): void`
- `updateSpinTimes(): void`
- `resetSpinTimes(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../../Core/SlotBaseModule';
import { BUTTON_STATE_ENUM, GAME_MODE_ENUM } from '../../Components/Common/SlotEnum';
import { GameUIEvents } from '../../Core/GameUIEvents';
const { ccclass, property } = _decorator;

@ccclass
export class SpinTimesModule extends SlotBaseModule {
	@property({type:GAME_MODE_ENUM})
	gameMode = GAME_MODE_ENUM.NORMAL_GAME;

	@property(cc.Label)
	spinTimesLabel: cc.Label = null!;

	buttonNormalData = null;
    
	onLoadExtend(): void {
		this.node.on('UPDATE_SPINTIMES', this.updateSpinTimes, this);
		this.node.on('RESET_SPINTIMES', this.resetSpinTimes, this);
		this.node.active = false;

		this.eventManager.emit(GameUIEvents.SPIN_TIMES.SET_UP_SPIN_TIMES, { gameMode: this.gameMode, node: this.node });

		if (this.gameMode === GAME_MODE_ENUM.NORMAL_GAME) {
			this.setupObserver();
		}
	}

	setupObserver(): void {
		this.buttonNormalData = this.gameLogic.getDataModel().SpinButtonNormal;
		this.observer.watch(this.buttonNormalData, "autoSpinCount", this.updateSpinTimes.bind(this), this, { fireImmediately: true });
		this.observer.watch(this.buttonNormalData, "state", this.updateState.bind(this), this, { fireImmediately: true });
	}

	updateState(state): void {
		if (state === BUTTON_STATE_ENUM.NORMAL) {
			this.resetSpinTimes();
		}
	}

	updateSpinTimes(spinTimes: number = 0): void {
		if (spinTimes < 0) {
			return this.resetSpinTimes();
		}
		this.node.active = true;
		if (spinTimes > 100000) {
			this.spinTimesLabel.string = '∞';       
		} else {
			this.spinTimesLabel.string = spinTimes.toString();
		}
	}

	resetSpinTimes(): void {
		this.spinTimesLabel.string = '';
		this.node.active = false;
	}

	protected onDestroy(): void {
		this.observer.releaseAll(this.buttonNormalData, this);
	}
}

```
