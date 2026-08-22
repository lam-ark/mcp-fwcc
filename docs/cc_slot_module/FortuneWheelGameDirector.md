# FortuneWheelGameDirector

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/FortuneWheelGame/Scripts/Director/FortuneWheelGameDirector.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`FortuneWheelGameDirector`** extends `BonusGameDirectorModule`

## Key Methods
- `onExtendedLoad(): void`
- `onSpinWheel(): void`
- `_showWheelResult(): Promise<void>`
- `_fastStopWheel(): Promise<void>`
- `_runAutoTrigger(): void`
- `playAutoClick(): void`
- `resetBonusGame(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BonusGameDirectorModule } from "../../../BonusGame/BonusGameDirectorModule";
import { GameLogicUIEvents } from "../../../../Core/GameLogicUIEvents";
const { ccclass } = _decorator;

@ccclass
export class FortuneWheelGameDirector extends BonusGameDirectorModule {

	onExtendedLoad(): void {
		super.onExtendedLoad();
		this.moduleEvent.on("ON_SPIN_WHEEL", this.onSpinWheel, this);
	}

	onSpinWheel(): void {
		this.gameLogic.emit(GameLogicUIEvents.SEND_BONUS_GAME_REQUEST, 0);
		this.moduleEvent.emit("START_SPIN_WHEEL", this.gameSettings.isTurboActive);
		this.blockBonusGame();
		this.stopCountDown();
	}

	_showWheelResult(bonusValue: number): Promise<void> {
		return this.moduleEvent.emit("STOP_SPIN_WHEEL", bonusValue);
	}
	
	_fastStopWheel(): Promise<void> {
		return this.moduleEvent.emit("FAST_STOP_WHEEL");
	}

	_runAutoTrigger(): void {
		this.stopCountDown();
		this.setAutoOpen(true);
		this.playAutoClick();
	}

	playAutoClick(): void {
		this.onSpinWheel();
	}

	resetBonusGame(): void {
		super.resetBonusGame();
		this.moduleEvent.emit("RESET_WHEEL");
	}
}

```
