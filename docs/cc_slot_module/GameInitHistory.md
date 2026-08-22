# GameInitHistory

> **Source Path**: `assets/cc-common/cc-slot-module/Core/GameInitHistory.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`GameInitHistory`** extends `Component`

## Key Methods
- `onLoad(): void`
- `init(): void`
- `initializeConfigAndDataStore(): void`
- `initializeGameLogic(): void`
- `setupMoneyFormatter(): void`
- `setupEventManager(): void`
- `setupNetwork(): void`
- `setupDependencyInjection(): void`
- `getGameConfig(): GameConfig`
- `getDataStore(): GameDataStore`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
const { ccclass } = _decorator;
import { GameConfig } from './GameConfig';
import { GameDataStore } from './GameDataStore';
import { SlotSoundPlayerModule } from './SlotSound/SlotSoundPlayerModule';
import { GameEventManager } from './GameEventManager';
const network = globalThis.GameNetwork || require('../../cc-network/game-network.js');
const { Game, MoneyFormatter, MoneyTween, observer, ObserverObject, provide, clearGameDependencies, connectNetwork } = eno;

@ccclass
export class GameInitHistory extends Component {
	_gameLogic: eno.Game;
	_dataStore: GameDataStore;
	_gameConfig: GameConfig;
	_eventManager: GameEventManager;
	_moneyFormatter: eno.MoneyFormatter;
	_moneyTween: eno.MoneyTween;

	onLoad(): void {
		this.init();
	}

	init(): void {
		this.initializeConfigAndDataStore();
		this.initializeGameLogic();
		this.setupMoneyFormatter();
		this.setupEventManager();
		this.setupNetwork();
		this.setupDependencyInjection();
	}

	initializeConfigAndDataStore(): void {
		this._gameConfig = this.getGameConfig();
		this._dataStore = this.getDataStore();
		this._dataStore.setConfig(this._gameConfig);
	}

	initializeGameLogic(): void {
		this._gameLogic = new Game(this._gameConfig);
		const language = eno.getLanguageCode(this._gameConfig.DEFAULT_LANGUAGE);
		this._gameLogic.setLanguage(language);

		if (this._gameConfig.EXTEND_GAME_TEXT) {
			this._gameLogic.setExtendGameText();
		}
	}

	setupMoneyFormatter(): void {
		this._moneyFormatter = new MoneyFormatter();
		this._gameLogic.setMoneyFormatter(this._moneyFormatter);
		this._moneyTween = new MoneyTween(this._moneyFormatter);
	}

	setupEventManager(): void {
		this._eventManager = new GameEventManager();
	}

	setupNetwork(): void {
		connectNetwork.setGameNetwork(network);
	}

	setupDependencyInjection(): void {
		const slotSoundPlayer = this.getComponentInChildren(SlotSoundPlayerModule);

		provide(Game, this._gameLogic);
		provide(MoneyFormatter, this._moneyFormatter);
		provide(MoneyTween, this._moneyTween);
		provide(GameDataStore, this._dataStore);
		provide(GameConfig, this._gameConfig);
		provide(GameEventManager, this._eventManager);
		provide(SlotSoundPlayerModule, slotSoundPlayer);
		provide(ObserverObject, observer);
	}

	getGameConfig(): GameConfig {
		return this.getComponent(GameConfig);
	}

	getDataStore(): GameDataStore {
		return this.getComponent(GameDataStore);
	}

	onDestroy(): void {
		if (this._gameLogic) {
			this._gameLogic.destroy();
		}

		clearGameDependencies(this._gameConfig.GAME_ID);
	}
}


```
