# TrialJackpotModule

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/Jackpot/TrialJackpotModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`TrialJackpotModule`** extends `JackpotModule`

## Key Methods
- `onLoadExtend(): void`
- `setupJackpotObserver(): void`
- `showTrialJackpot(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { JackpotModule } from './JackpotModule';
import { GameUIEvents } from '../../Core/GameUIEvents';
const { ccclass } = _decorator;

@ccclass
export class TrialJackpotModule extends JackpotModule {

	onLoadExtend(): void {
		this.modelName = "JackpotTrialData";
		this.eventManager.on(GameUIEvents.JACKPOT.PAUSE_TRIAL_JACKPOT, this.pauseJackpot, this);
		this.eventManager.on(GameUIEvents.JACKPOT.RESUME_TRIAL_JACKPOT, this.resumeJackpot, this);
		this.eventManager.on(GameUIEvents.JACKPOT.UPDATE_TRIAL_JACKPOT_VALUE, this.updateJackpotValue, this);
		super.onLoadExtend();
	}

	setupJackpotObserver(): void {
		this.observer.watch(this.uiManagerData, "isJackpotTrialActive", this.showTrialJackpot.bind(this), this, { fireImmediately: true });
	}

	showTrialJackpot(isActive: boolean): void {
		this.node.active = isActive;
	}
}


```
