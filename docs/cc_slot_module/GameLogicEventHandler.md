# GameLogicEventHandler

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/GameLogicEventHandler.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`GameLogicEventHandler`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `onLogicEventRequest(): void | Promise<void>`
- `handleTrialMode(): void`
- `changeGameState(): void`
- `resetAllEffectAndTasks(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameModeDirectorModule } from "./GameModeDirectorModule";
import { GameLogicEvents } from "../Core/GameLogicEvents";
import { SlotBaseModule } from "../Core/SlotBaseModule";
import { GameDataStore } from "../Core/GameDataStore";
import { SlotGameSettings } from "../Core/SlotGameSettings";
import { GAME_STATE_ENUM } from "../Components/Common/SlotEnum";
import { GameConfig } from "../Core/GameConfig";
const { ccclass } = _decorator;
const { inject, Logger } = eno;

@ccclass
export class GameLogicEventHandler extends SlotBaseModule {
	director: GameModeDirectorModule = null;
	@inject(GameDataStore) dataStore: GameDataStore;
	@inject(GameConfig) gameConfig: GameConfig;
	@inject(SlotGameSettings) gameSettings: SlotGameSettings;
	@inject(Logger) logger: eno.Logger;

	onLoadExtend(): void {
		this.director = this.node.getComponent(GameModeDirectorModule);
		this.logger && this.logger.addFilter('[GameLogicEvent]');
	}

	onLogicEventRequest(request: string, data: any): void | Promise<void> {
		// this.logger && this.logger.log('[GameLogicEvent]', request);
		if (this.gameSettings.isTrialMode) {
			this.handleTrialMode(request);
		}
		this.changeGameState(request);
		switch (request) {
			// update data
			case GameLogicEvents.JOIN_GAME_SUCCESS:
				return this.director.onJoinGameSuccess(data);

			case GameLogicEvents.STATE_UPDATE:
				return this.director.onStateUpdate(data);

			case GameLogicEvents.STATE_RESUME:
				return this.director.onStateResume(data);

			// resume game
			case GameLogicEvents.PRE_RESUME_GAME_MODE:
				return this.director.onPreResumeGameMode();

			case GameLogicEvents.RESUME_NORMAL_GAME:
				return this.director.onResumeNormalGame();

			case GameLogicEvents.RESUME_GAME_MODE:
				return this.director.onResumeGameMode();

			// spin trigger
			case GameLogicEvents.BEFORE_SPIN_START:
				return this.director.onBeforeSpinStart();

			case GameLogicEvents.START_SPINNING_TABLE:
				return this.director.onStartSpinningTable();

			case GameLogicEvents.START_RESPINNING_TABLE:
				return this.director.onStartRespinningTable();

			// result receive
			case GameLogicEvents.PRE_STOP_SPINNING_TABLE:
				return this.director.onPreStopSpinningTable();

			case GameLogicEvents.STOP_SPINNING_TABLE:
				return this.director.onStopSpinningTable();

			case GameLogicEvents.STOP_RESPINNING_TABLE:
				return this.director.onStopRespinningTable();

			// show result
			case GameLogicEvents.SHOW_RESULT_ENTRY:
				return this.director.onShowResultEntry();

			case GameLogicEvents.SHOW_RESULT_FINAL:
				return this.director.onShowResultFinal();

			// game mode
			case GameLogicEvents.TRANSITION_GAME_MODE:
				return this.director.transitionGameMode(data);

			case GameLogicEvents.ENTER_GAME_MODE:
				return this.director.enterGameMode(data);

			case GameLogicEvents.EXIT_GAME_MODE:
				return this.director.exitGameMode(data);

			// update game speed
			case GameLogicEvents.FAST_TO_RESULT:
				return this.director.onFastToResult(data);

			// handle error
			case GameLogicEvents.FORCE_STOP_CURRENT_GAME_MODE:
				return this.director.forceStopCurrentGameMode();
		}
	}

	handleTrialMode(request: string): void {
		switch (request) {
			case GameLogicEvents.STATE_UPDATE:
				this.eventManager.emit('SET_ENABLE_BUTTON_BACK_TO_REAL', true);
				break;
			case GameLogicEvents.BEFORE_SPIN_START:
			case GameLogicEvents.START_SPINNING_TABLE:
			case GameLogicEvents.START_RESPINNING_TABLE:
			case GameLogicEvents.TRANSITION_GAME_MODE:
				this.eventManager.emit('SET_ENABLE_BUTTON_BACK_TO_REAL', false);
				break;
		}
	}

	changeGameState(request: string): void {
		switch (request) {
			case GameLogicEvents.RESUME_GAME_MODE:
				this.gameSettings.currentGameState = GAME_STATE_ENUM.RESUME;
				break;
			case GameLogicEvents.BEFORE_SPIN_START:
				this.gameSettings.currentGameState = GAME_STATE_ENUM.WAIT_FOR_RESULT;
				break;
			case GameLogicEvents.PRE_STOP_SPINNING_TABLE:
				this.gameSettings.currentGameState = GAME_STATE_ENUM.RESULT_RECEIVED;
				break;
			case GameLogicEvents.SHOW_RESULT_ENTRY:
				this.gameSettings.currentGameState = GAME_STATE_ENUM.SHOW_RESULT;
				break;
			case GameLogicEvents.SHOW_RESULT_FINAL:
				this.gameSettings.currentGameState = GAME_STATE_ENUM.IDLE;
				break;
		}
	}

	protected resetAllEffectAndTasks(): void {
		this.scheduleOnce(() => {
			this.gameSettings.currentGameState = GAME_STATE_ENUM.IDLE;
		}, this.gameConfig.BACK_TO_REAL_MODE_DELAY_TIME || 1);
	}
}

```
