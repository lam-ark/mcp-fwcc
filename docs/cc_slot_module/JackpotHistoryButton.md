# JackpotHistoryButton

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/JackpotHistory/JackpotHistoryButton.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`JackpotHistoryButton`** extends `SlotBaseModule`

## Key Methods
- `onClick(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameLogicUIEvents } from '../../Core/GameLogicUIEvents';
import { SlotBaseModule } from '../../Core/SlotBaseModule';
const { ccclass, property } = _decorator;

@ccclass
export class JackpotHistoryButton extends SlotBaseModule {

	onClick(): void {
		this.soundPlayer && this.soundPlayer.playSFXClick();
		this.gameLogic.emit(GameLogicUIEvents.OPEN_JACKPOT_HISTORY_PANEL);
	}
}


```
