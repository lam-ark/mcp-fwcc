# SlotButtonSpine

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/SpinButton/SlotButtonSpine.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotButtonSpine`** extends `SlotBaseModule`

## CC Properties
- `spineBtnSpin`
- `spineHover`

## Key Methods
- `onLoadExtend(): void`
- `onStateChange(): void`
- `playAnimIdle(): void`
- `playAnimHover(): void`
- `stopAnimHover(): void`
- `playAnimSpinToStop(): void`

## Source Implementation
```typescript
const { _decorator, log } = cc;
import { SlotBaseModule } from '../../Core/SlotBaseModule';
import { SPIN_BUTTON_STATE_ENUM } from '../../Components/Common/SlotEnum';
import { GameDataStore } from '../../Core/GameDataStore';
const { ccclass, property } = _decorator;
const { inject } = eno;

@ccclass
export class SlotButtonSpine extends SlotBaseModule {
	@property animIdle: string = "Spin";
	@property animStop: string = "Stop";
	@property animHover: string = "Hover";
	@property animSpinToStop: string = "Spin_To_Stop";
	@property animHolder: string = "Hold";
	@property(sp.Skeleton)
	spineBtnSpin: sp.Skeleton = null;
	@property(sp.Skeleton)
	spineHover: sp.Skeleton = null;

	@inject(GameDataStore) dataStore: GameDataStore;
	
	isOnHover: boolean = false;
	isAutoSpin: boolean = false;
	lastState: number = SPIN_BUTTON_STATE_ENUM.NORMAL;

	onLoadExtend(): void {
		this.node.on('SPIN_BUTTON_STATE_CHANGE', this.onStateChange, this);
	};

	onStateChange(state, isAutoSpin: boolean = false): void {
		this.isAutoSpin = isAutoSpin;
		switch (state) {
			case SPIN_BUTTON_STATE_ENUM.NORMAL:
				this.playAnimIdle();
				break;
			case SPIN_BUTTON_STATE_ENUM.HOVER:
				this.playAnimHover();
				break;
			case SPIN_BUTTON_STATE_ENUM.SPINNING:
				this.playAnimSpinToStop();
				break;
			case SPIN_BUTTON_STATE_ENUM.STOPPABLE:
				break;
			case SPIN_BUTTON_STATE_ENUM.DISABLE:
				break;
			default:
				break;
		}
		if (state !== SPIN_BUTTON_STATE_ENUM.HOVER && this.isOnHover) {
			this.stopAnimHover();
		}
		this.lastState = state;
	}

	playAnimIdle(): void {
		if (this.spineBtnSpin && this.spineBtnSpin.findAnimation(this.animIdle)) {
			if (this.spineBtnSpin.animation !== this.animIdle) {
				this.spineBtnSpin.setAnimation(0, this.animIdle, true);
			}
		} else{ 
			log("[SlotButton] Not Found Animation: "+ this.animIdle);
		}
	}

	playAnimHover(): void {
		if (this.spineHover) {
			this.spineHover.node.active = true;
			this.spineHover.setAnimation(0, this.animHover, true);
		}
		this.isOnHover = true;
	}

	stopAnimHover(): void {
		if (this.spineHover) {
			this.spineHover.node.active = false;
		}
		this.isOnHover = false;
	}

	/**
	 * If the animation is in resume mode, just play the stop animation.
	 * Otherwise, play the spin to stop animation and add the stop animation.
	 */
	playAnimSpinToStop(): void {
		const { isResume } = this.dataStore.playSession;
		if (this.isAutoSpin || !this.spineBtnSpin) {
			return
		}
		const hasStopAnim = this.spineBtnSpin.findAnimation(this.animStop);
		const hasSpinToStopAnim = this.spineBtnSpin.findAnimation(this.animSpinToStop);
		
		if (hasStopAnim && isResume) {
			this.spineBtnSpin.setAnimation(0, this.animStop, true);
		} else if (hasSpinToStopAnim && hasStopAnim) {
			this.spineBtnSpin.setAnimation(0, this.animSpinToStop, false);
			this.spineBtnSpin.addAnimation(0, this.animStop, true);
		} else {
			log("[SlotButton] Not Found Animation: " + this.animSpinToStop);
		}
	}
}


```
