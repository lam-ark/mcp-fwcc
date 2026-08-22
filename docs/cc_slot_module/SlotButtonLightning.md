# SlotButtonLightning

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/SpinButton/SlotButtonLightning.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotButtonLightning`** extends `SlotButtonModule`

## Key Methods
- `onLoadExtend(): void`
- `addEventListeners(): void`
- `removeEventListeners(): void`
- `onTouchStart(): void`
- `setupObserver(): void`
- `onChangeButtonState(): void`

## Source Implementation
```typescript
const { _decorator, log, Node } = cc;
import { GameLogicUIEvents } from '../../Core/GameLogicUIEvents';
import { SlotButtonModule } from './SlotButtonModule';
const { ccclass } = _decorator;

@ccclass
export class SlotButtonLightning extends SlotButtonModule {
	onLoadExtend(): void {
		this.modelName = 'SlotButtonLightning';
		super.onLoadExtend();
	}

	addEventListeners(): void {
		super.addEventListeners();
		this.touchNode.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
	}

	removeEventListeners(): void {
		super.removeEventListeners();
		this.touchNode.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
	}

	onTouchStart(): void {
		this.gameLogic.emit(GameLogicUIEvents.LIGHTNING_SPIN_CLICKED);
	}

	setupObserver(): void {
		this.observer.watch(this.buttonModel, 'state', this.onChangeButtonState.bind(this), this);
	}

	onChangeButtonState(state): void {
		log('SpinButtonV2 state:', state);
		this.display.emit('SPIN_BUTTON_STATE_CHANGE', state, true);
	}
}
```
