# InfoButton

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/Info/InfoButton.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`InfoButton`** extends `SlotBaseModule`

## Key Methods
- `showGameInfo(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameLogicUIEvents } from '../../Core/GameLogicUIEvents';
import { SlotBaseModule } from '../../Core/SlotBaseModule';
const { ccclass } = _decorator;

@ccclass
export class InfoButton extends SlotBaseModule {

	showGameInfo(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.OPEN_INFO_PANEL);
	}
}


```
