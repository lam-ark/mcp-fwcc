# SettingButton

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/Setting/SettingButton.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SettingButton`** extends `SlotBaseModule`

## Key Methods
- `showGameSettings(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
import { SlotBaseModule } from "../../Core/SlotBaseModule";
const { ccclass } = _decorator;

@ccclass
export class SettingButton extends SlotBaseModule {

	showGameSettings(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.OPEN_SETTINGS_PANEL);
	}
}

```
