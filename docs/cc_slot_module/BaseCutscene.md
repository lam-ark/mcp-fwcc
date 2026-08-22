# BaseCutscene

> **Source Path**: `assets/cc-common/cc-slot-module/CutScene/BaseCutscene.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BaseCutscene`** extends `SlotBaseModule`

## CC Properties
- `cutsceneType`

## Key Methods
- `init(): void`
- `play(): void`
- `show(): void`
- `enter(): void`
- `exit(): void`
- `fireCutsceneClose(): void`
- `skip(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../Core/SlotBaseModule';
import { CUTSCENE_TYPE_ENUM } from '../Components/Common/SlotEnum';
import { GameDataStore } from '../Core/GameDataStore';
import { SlotGameSettings } from '../Core/SlotGameSettings';
import { GameUIEvents } from '../Core/GameUIEvents';
import { GameLogicUIEvents } from '../Core/GameLogicUIEvents';
const { inject } = eno;
const { ccclass, property } = _decorator;

@ccclass
export class BaseCutscene extends SlotBaseModule {
	@property({ type: CUTSCENE_TYPE_ENUM })
	cutsceneType = CUTSCENE_TYPE_ENUM.NONE;

	content: any;
	callback: Function = null;
	fullDisplay: boolean = true;
	@inject(GameDataStore) dataStore: GameDataStore;
	@inject(eno.MoneyFormatter) moneyFormatter: eno.MoneyFormatter;
	@inject(eno.MoneyTween) moneyTween: eno.MoneyTween;
	@inject(SlotGameSettings) gameSettings: SlotGameSettings;

	init(): void {
		this.node.on('PLAY', this.play, this);
		this.node.on('HIDE', this.exit, this);
		this.node.on('INIT', this.init, this);
		this.node.on('SKIP', this.skip, this);

		this.node.active = false;

		// @ts-ignore
		if (CC_PREVIEW) {
			globalThis[this.node.name] = this;
		}
	}

	play(content?: any, callback?: Function): void {
		if (this.fullDisplay) {
			// delay a frame to ensure the game logic flow is finished
			this.scheduleOnce(() => {
				this.eventManager.emit(GameUIEvents.CUTSCENES.SHOW_FULL_DISPLAY_CUTSCENE, content);
			});
		}
		this.content = content;
		this.callback = callback;
		this.show();
		this.enter();
	}

	show(): void {
		this.node.active = true;
	}

	enter(): void {
		//Overwrite this when extends
	}

	exit(_data?: any, _callback?: Function): void {
		this.callback && this.callback();
		this.callback = null;

		this.fireCutsceneClose();
		this.node.emit("STOP");
		this.node.active = false;
	}

	fireCutsceneClose(): void {
		if (this.fullDisplay) {
			this.eventManager.emit(GameUIEvents.CUTSCENES.HIDE_FULL_DISPLAY_CUTSCENE);
		}
		this.gameLogic.emit(GameLogicUIEvents.ON_CUTSCENE_CLOSE, this.cutsceneType);
	}

	skip(): void {

	}

}


```
