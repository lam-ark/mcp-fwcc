# GameDirector

> **Source Path**: `assets/cc-common/cc-slot-module/Core/GameDirector.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`GameDirector`** extends `SlotBaseModule`

## CC Properties
- `gameModes`

## Key Methods
- `onLoadExtend(): void`
- `logNewBaseInfo(): void`
- `start(): void`
- `onJoinGameSuccess(): void`
- `setUpGameMode(): void`
- `onSwitchGameMode(): void`
- `onExitGameMode(): Promise<void>`
- `resumeNormalGameMode(): void`
- `registerUIEvents(): void`
- `onUIEventRequest(): void | Promise<void>`
- `getCurrentMode(): GameModeType`
- `onEventHide(): void`
- `onEventShow(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GAME_MODE_ENUM, GameModeType } from '../Components/Common/SlotEnum';
import { BaseGameMode } from '../GameMode/BaseGameMode';
import { GameLogicEventHandler } from '../GameMode/GameLogicEventHandler';
import { GameLogicEvents } from './GameLogicEvents';
import { SlotBaseModule } from './SlotBaseModule';
import { GameUIEvents } from './GameUIEvents';
import { GameConfig } from './GameConfig';
import { SlotGameSettings } from './SlotGameSettings';
import { GameDataStore } from './GameDataStore';
const { ccclass, property } = _decorator;
const { inject, Logger, MoneyTween } = eno;

@ccclass
export class GameDirector extends SlotBaseModule {
	@property(GameModeType)
	gameModes: GameModeType[] = [];

	currentModes: GameModeType[] = [];


	@inject(GameDataStore) dataStore: GameDataStore;
	@inject(Logger) logger;
	@inject(GameConfig) gameConfig: GameConfig;
	@inject(MoneyTween) moneyTween;
	@inject(SlotGameSettings) gameSettings: SlotGameSettings;

	appHide: boolean = false;
	_currentRunningTargets: any[] = [];

	onLoadExtend(): void {
		this.eventManager.on(GameUIEvents.GAME_MODE.SWITCH_GAME_MODE, this.onSwitchGameMode, this);
		this.eventManager.on(GameUIEvents.GAME_MODE.EXIT_GAME_MODE, this.onExitGameMode, this);
		this.eventManager.on(GameUIEvents.GAME_MODE.RESUME_NORMAL_GAME_MODE, this.resumeNormalGameMode, this);
		this.eventManager.on(GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS, this.onJoinGameSuccess, this);

		this.logNewBaseInfo();

		cc.game.on(cc.game.EVENT_HIDE, this.onEventHide, this);
		cc.game.on(cc.game.EVENT_SHOW, this.onEventShow, this);
	}

	private logNewBaseInfo(): void {
		this.logger.log('GAME USING NEW BASE');
	}

	start(): void {
		this.registerUIEvents();
		this.setUpGameMode();
		this.onSwitchGameMode(GAME_MODE_ENUM.NORMAL_GAME);
	}

	onJoinGameSuccess(data): void {
		this.gameSettings.isJoinGameSuccess = true;
		if (data.bigWinConfig) {
			this.gameSettings.bigWinConfig = [...data.bigWinConfig];
		}
		this.logger.log("[GameView]", "[Director]", "onJoinGameSuccess", data);
	}

	setUpGameMode(): void {
		this.gameModes.forEach(gameMode => {
			let root = gameMode.rootNode;
			if (!root) {
				this.logger.error("[GameView]", "[Director]", "Please setup GameMode in Director Node");
			};
			root && root.getComponent(BaseGameMode).init();
		});

		this.gameModes.forEach(gameMode => {
			let root = gameMode.rootNode;
			root && (root.active = false);
		});
	}

	onSwitchGameMode(mode): void {
		const currentMode = this.currentModes[this.currentModes.length - 1];
		if (currentMode && currentMode.type === mode) {
			this.logger.warn('[GameView]', '[Director]', 'Switching to the same game mode', mode);
			return;
		}

		let newMode = this.gameModes.find(gameMode => gameMode.type === mode);
		if (newMode) {
			this.currentModes.push(newMode);
			newMode.rootNode.active = true;

			if (currentMode) {
				currentMode.rootNode.active = false;
			}
			this.dataStore.currentGameMode = mode;
			newMode.rootNode.getComponent(BaseGameMode).enter();
			this.eventManager.emit(GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI, mode);
		} else {
			this.logger.error('[GameView]', '[Director]', 'Game mode is not implemented:', mode);
		}
	}

	async onExitGameMode(): Promise<void> {
		const lastMode = this.currentModes[this.currentModes.length - 2];
		const currentMode = this.currentModes[this.currentModes.length - 1];
		if (!lastMode || !currentMode) {
			this.logger.warn('[GameView]', '[Director]', 'Do not have last game mode to resume');
			return Promise.resolve();
		}

		if (lastMode.type !== currentMode.type) {
			this.currentModes.pop();
			if (currentMode) {
				currentMode.rootNode.getComponent(BaseGameMode).exit();
			}
			this.dataStore.currentGameMode = lastMode.type;
			lastMode.rootNode.active = true;
			this.eventManager.emit(GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI, lastMode.type);
			await lastMode.rootNode.getComponent(BaseGameMode).onBackToGameMode(currentMode.type);
		}
		return Promise.resolve();
	}

	// support back to real mode
	resumeNormalGameMode(): void {
		this.scheduleOnce(() => {
			this.gameModes.forEach(gameMode => {
				if (gameMode.type !== GAME_MODE_ENUM.NORMAL_GAME) {
					let root = gameMode.rootNode;
					root && (root.active = false);
				}
			});
			this.currentModes = [];
			this.onSwitchGameMode(GAME_MODE_ENUM.NORMAL_GAME);
			this.eventManager.emit(GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI, GAME_MODE_ENUM.NORMAL_GAME);
		}, this.gameConfig.BACK_TO_REAL_MODE_DELAY_TIME || 1);
	}

	registerUIEvents(): void {
		let ids = Object.keys(GameLogicEvents);
		this.gameLogic.registerUIEvents(ids, this.onUIEventRequest.bind(this));
	}

	onUIEventRequest(event, data): void | Promise<void> {
		let invoker = this.getCurrentMode() && this.getCurrentMode().rootNode.getComponent(GameLogicEventHandler);
		return invoker && invoker.onLogicEventRequest(event, data);
	}

	getCurrentMode(): GameModeType {
		return this.currentModes[this.currentModes.length - 1];
	}

	onEventHide(): void {
		cc.log("GAME_HIDE");
		this.appHide = true;
		if (this.gameLogic && this.gameSettings.isJoinGameSuccess) {
			this.gameLogic.gameOnPause();
		}

		this.pauseRunningActions();
	}

	onEventShow(): void {
		cc.log("GAME_SHOW");
		this.appHide = false;
		if (this.gameLogic && this.gameSettings.isJoinGameSuccess) {
			this.gameLogic.gameOnResume();
		}

		this.unschedule(this.resumeRunningActions);
		this.scheduleOnce(this.resumeRunningActions, 0.2);
	}

	pauseRunningActions() {
		if (this._currentRunningTargets && this._currentRunningTargets.length > 0) {
			return;
		}

		this._currentRunningTargets = cc.director.getActionManager().pauseAllRunningActions();
	}

	resumeRunningActions() {
		if (!this._currentRunningTargets || this._currentRunningTargets.length == 0) {
			return;
		}

		cc.director.getActionManager().resumeTargets(this._currentRunningTargets);
		this._currentRunningTargets = [];
	}

	onDestroy(): void {
		if (this.moneyTween) {
			this.moneyTween.stopAllMoneyTweens();
			this.moneyTween = null;
		}

		cc.game.targetOff(this);
	}
}


```
