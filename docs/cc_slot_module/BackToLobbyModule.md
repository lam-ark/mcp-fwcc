# BackToLobbyModule

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/BackToLobby/BackToLobbyModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BackToLobbyModule`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `trigger(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
import { SlotBaseModule } from "../../Core/SlotBaseModule";
const { ccclass, property } = _decorator;
const { gameCommonUtils } = eno;

@ccclass
export class BackToLobbyModule extends SlotBaseModule {
	@property delaySoundClick: number = 0.3;
	
	_backToLobbyCallback: Function = () => {};

	onLoadExtend(): void {
		const { LOGIN_IFRAME } = eno.environment.getConfig();
		if (LOGIN_IFRAME) {
			const isEnableBtn = gameCommonUtils && gameCommonUtils.checkConditionCloseGameIframe();
			if (!isEnableBtn) {
				this.node.active = false;
			}
		}
	}

	trigger(): void {
		this.gameLogic.emit(GameLogicUIEvents.BACK_TO_LOBBY);
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this._backToLobbyCallback = () => {
			this._backToLobbyCallback = null;
			this.soundPlayer && this.soundPlayer.stopAllAudio();
			gameCommonUtils.handleCloseGameIframe();
		};

		this.scheduleOnce(this._backToLobbyCallback, this.delaySoundClick);
	}
}

```
