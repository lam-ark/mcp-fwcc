# SlotBaseModule

> **Source Path**: `assets/cc-common/cc-slot-module/Core/SlotBaseModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotBaseModule`** extends `Component`

## Key Methods
- `onDestroy(): void`
- `onLoad(): void`
- `onLoadExtend(): void`
- `setupModule(): void`
- `registerEvents(): void`
- `unregisterEvents(): void`
- `resetAllEffectAndTasks(): void`

## Source Implementation
```typescript
const { _decorator, Component, error } = cc;
import { GameEventManager } from "./GameEventManager";
import { GameModuleEvent } from "../GameMode/GameModuleEvent";
import { SlotSoundPlayerModule } from "./SlotSound/SlotSoundPlayerModule";
const { inject, applyInjections, ObserverObject,NodeUtils } = eno;
const { ccclass } = _decorator;

/**
 * @description Base module for the game, game logic, event manager, 
 * observer, sound player, module event, game mode
 */
@ccclass
export class SlotBaseModule extends Component {
	/**
	 * Game Logic Instance
	 * @description
	 * Manages game state, network communication, and UI Models.
	 * Use `gameLogic.emit()` for UI Model interactions.
	 * 
	 * @example
	 * this.gameLogic.emit(GameLogicUIEvents.OPEN_SETTING_PANEL);
	 * @see {@link GameLogicUIEvents}
	 */
	@inject(eno.Game) gameLogic: any;
	/**
	 * @description Global event manager for the game
	 * @example
	 * this.eventManager.on('UPDATE_WALLET', this.onUpdateWallet, this);
	 * this.eventManager.emit('UPDATE_WALLET', { amount: 100 });
	 * 
	 * onDestroy(): void {
		this.eventManager.targetOff(this);
		}
	*/
	@inject(GameEventManager) eventManager: GameEventManager;
	/**
	 * ObserverObject class - Observer object for the game
	 * @description Observer object for the game, watch the change of the object and trigger the callback
	 * @example
	 * this.betModel = this.gameLogic.getDataModel().BetData;
	 * this.observer.watch(this.betModel, 'betValue', (updatedValue) => {
	 *     console.log(updatedValue);
	 * });
	*/
	@inject(ObserverObject) observer: any;
	@inject(SlotSoundPlayerModule) soundPlayer: SlotSoundPlayerModule;
	/**
	 * @description Manage the event of the game module, between modules in the same game mode
	 * @example
	 * this.moduleEvent.on('TABLE_STOPPED', this.onTableStopped, this);
	 * this.moduleEvent.emit('TABLE_STOPPED', { matrix: this.getMatrix(), winLines: this.getWinLines() });
	 */
	moduleEvent: GameModuleEvent = null;
	
	/**
	 * Game Mode - current module game mode (NORMAL_GAME, FREE_GAME, BONUS_GAME)
	 */
	gameMode = null;

	onLoad(): void {
		const gameId = NodeUtils.getGameIdFromNode(this.node);
		applyInjections(this, gameId);
		if (this.gameLogic) {
			this.gameLogic.on("RESET_ALL_EFFECT_AND_TASKS", this.resetAllEffectAndTasks, this);
		}
		
		this.onLoadExtend();
		this.registerEvents();
	}

	onLoadExtend(): void { }

	setupModule(moduleEvent: GameModuleEvent, gameMode): void {
		if (this.moduleEvent !== null) {
			error(`[ModuleRegistry] Module ${this.node.name} is registered to multiple GameMode. Please clone module or use GameEventManager to control event.`);
		}
		this.moduleEvent = moduleEvent;
		this.gameMode = gameMode;
	}

	protected registerEvents(): void {
		// Override in subclass
	}

	protected unregisterEvents(): void {
		// Override in subclass
	}

	protected resetAllEffectAndTasks(): void {
		// Override in subclass
	}
}

```
