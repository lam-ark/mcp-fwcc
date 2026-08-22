# GameInit

> **Source Path**: `assets/cc-common/cc-slot-module/Core/GameInit.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`GameInit`** extends `Component`

## Key Methods
- `onLoad(): void`
- `start(): void`
- `setupTest(): void`
- `initializeConfigAndDataStore(): void`
- `initializeGameLogic(): void`
- `setupLogger(): void`
- `setupScheduler(): void`
- `setupMoneyFormatter(): void`
- `setupEventManager(): void`
- `setupDependencyInjection(): void`
- `setupGameText(): void`
- `getGameConfig(): GameConfig`
- `getDataStore(): GameDataStore`
- `connect(): void`
- `setUpGame(): void`

## Source Implementation
```typescript
const { _decorator, Component, log, warn, error } = cc;
import { GameDataStore } from './GameDataStore';
import { GameConfig } from './GameConfig';
import { GameEventManager } from './GameEventManager';
import { SetupModuleTest } from './SetupModuleTest';
import { SlotGameSettings } from './SlotGameSettings';
import { SlotSoundPlayerModule } from './SlotSound/SlotSoundPlayerModule';
import { UIManagerModule } from './UIManagerModule';
const network = globalThis.GameNetwork || require('../../cc-network/game-network.js');

const { ccclass, property } = _decorator;
const { Game, MoneyFormatter, MoneyTween, observer, connectNetwork, provide, Logger, ObserverObject, Scheduler, clearGameDependencies } = eno;

@ccclass
export class GameInit extends Component {
	@property
	isConsoleTest: boolean = false;
	@property
	isModuleTest: boolean = false;

	_gameLogic: eno.Game;
	_dataStore: GameDataStore;
	_gameConfig: GameConfig;
	_eventManager: GameEventManager;

	_logger: eno.Logger;
	_scheduler: eno.Scheduler;
	_moneyFormatter: eno.MoneyFormatter;
	_moneyTween: eno.MoneyTween;

	onLoad(): void {
		this.setupTest();
		this.initializeConfigAndDataStore();
		this.initializeGameLogic();
		this.setupLogger();
		this.setupScheduler();
		this.setupMoneyFormatter();
		this.setupEventManager();
		this.setupDependencyInjection();
		this.setupGameText();
	}

	start(): void {
		this.connect();
	}

	setupTest(): void {
		if (this.isModuleTest) {
			this.setupModuleTest();
		}
	}

	initializeConfigAndDataStore(): void {
		this._gameConfig = this.getGameConfig();
		this._dataStore = this.getDataStore();
		this._dataStore.setConfig(this._gameConfig);
	}

	initializeGameLogic(): void {
		this._gameLogic = new Game(this._gameConfig);

		const language = eno.gameCommonUtils.getLanguageCode(this._gameConfig.DEFAULT_LANGUAGE);
		this._gameLogic.setLanguage(language);

		if (this._gameConfig.EXTEND_GAME_TEXT) {
			this._gameLogic.setExtendGameText();
		}
	}

	setupLogger(): void {
		//@ts-ignore
		const isDebug = CC_DEBUG;
		this._logger = globalThis.eno.logger;
		this._logger.updateLogger({ log, warn, error });
		this._logger.addStyle('[GameView]', 'color: white; background-color: #007BFF; font-weight: bold; font-size: 12.5px;');
		this._logger.isDebug = isDebug;
		this._logger.log('[GameView]', 'GameInit', 'onLoad');
	}

	setupScheduler(): void {
		this._scheduler = new eno.Scheduler(this._gameConfig.GAME_ID);
		this._gameLogic.setScheduler(this._scheduler);
	}

	setupMoneyFormatter(): void {
		const moneyFormatter = new MoneyFormatter();
		this._gameLogic.setMoneyFormatter(moneyFormatter);
		const moneyTween = new MoneyTween(moneyFormatter);
		
		this._moneyFormatter = moneyFormatter;
		this._moneyTween = moneyTween;
	}

	setupEventManager(): void {
		this._eventManager = new GameEventManager();
		this._eventManager.setLogger(this._logger, '[EventManager]');
	}

	setupDependencyInjection(): void {
		const gameId = this._gameConfig.GAME_ID;
		this.node['__GAME_ID__'] = gameId;

		const gameSettings = new SlotGameSettings();
		const slotSoundPlayer = this.getComponentInChildren(SlotSoundPlayerModule);
		const uiManager = this.getComponentInChildren(UIManagerModule);

		provide(Game, this._gameLogic, gameId);
		provide(MoneyFormatter, this._moneyFormatter, gameId);
		provide(MoneyTween, this._moneyTween, gameId);
		provide(Logger, this._logger, gameId);
		provide(GameDataStore, this._dataStore, gameId);
		provide(GameConfig, this._gameConfig, gameId);
		provide(UIManagerModule, uiManager, gameId);
		provide(GameEventManager, this._eventManager, gameId);
		provide(SlotSoundPlayerModule, slotSoundPlayer, gameId);
		provide(Scheduler, this._scheduler, gameId);
		provide(ObserverObject, observer, gameId);
		provide(SlotGameSettings, gameSettings, gameId);
	}

	setupGameText(): void {
		if (this._gameConfig && this._gameConfig.GAME_TEXT) {
			this._gameLogic.updateSlotGameText(this._gameConfig.GAME_TEXT);
		}

		if (this._gameConfig && this._gameConfig.EXTEND_GAME_TEXT) {
			this._gameLogic.setExtendGameText();
		}
	}

	getGameConfig(): GameConfig {
		return this.getComponent(GameConfig) || this.node.addComponent(GameConfig);
	}

	getDataStore(): GameDataStore {
		return this.getComponent(GameDataStore) || this.node.addComponent(GameDataStore);
	}

	connect(): void {
		connectNetwork.setGameNetwork(network);
		connectNetwork.loginScene({
			callback: this.setUpGame.bind(this),
			gameId: this._gameConfig.GAME_ID,
			callbackAuthFailed: this.loginFailed.bind(this)
		});
	}

	setUpGame(): void {
		log("login success");
		this._gameLogic.initNetwork(network);
		if (this.isConsoleTest) {
			this._gameLogic.switchToConsoleTest();
		}
	}

	setupModuleTest(): void {
		const moduleTest = this.node.addComponent(SetupModuleTest);
		moduleTest.init(this._logger);
	}

	loginFailed(): void {
		this._gameLogic.showMessageAuthFailed();
	}

	onDestroy(): void {
		if (this._gameLogic) {
			this._gameLogic.destroy();
		}
		if (this._eventManager) {
			this._eventManager.destroy();
			this._eventManager = null;
		}

		clearGameDependencies(this._gameConfig.GAME_ID);
	}
}


```
