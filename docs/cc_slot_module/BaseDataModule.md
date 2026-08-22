# BaseDataModule

> **Source Path**: `assets/cc-common/cc-slot-module/Core/BaseDataModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BaseDataModule`** extends `Component`

## Key Methods
- `onLoad(): void`
- `onloadExtend(): void`
- `start(): void`
- `onDataUpdate(): void`
- `clearDataWithKey(): void`
- `clearData(): void`
- `getData(): any`
- `isFreeMode(): boolean`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
import { SlotBaseModule } from "./SlotBaseModule";
import { GameDataStore } from "./GameDataStore";
import { GAME_MODE_ENUM } from "../Components/Common/SlotEnum";
const { ccclass } = _decorator;
const { inject, applyInjections } = eno;

@ccclass
export class BaseDataModule extends Component {
	baseMode: SlotBaseModule = null;
	gameMode: number;
	isRegistered: boolean = false;

	@inject(GameDataStore) dataStore: GameDataStore;

	onLoad(): void {
		this.baseMode = this.getComponent(SlotBaseModule);
		this.gameMode = this.baseMode.gameMode;
		applyInjections(this, this.baseMode.gameLogic.getGameId());
		this.onloadExtend();
	}

	onloadExtend(): void { };

	start(): void {
		this.dataStore.registerModule(this);
	}

	/**
	 * List of keys that the module wants to track.
	 */
	public registeredKeys: string[] = [];

	/**
	 * The function is called when there is updated data for the registered key.
	 * Override in subclass
	 */
	onDataUpdate(key: string, value: any): void {
		this[key] = value;
	}

	/**
	 * Clear data by key
	 * @param key - The key of the data
	 */
	clearDataWithKey(key: string): void {
		this[key] = null;
	}

	/**
	 * Clear all data
	 */
	clearData(): void {
		this.registeredKeys.forEach(key => {
			this[key] = null;
		});
	}

	/**
	 * Get data by key
	 * @param key - The key of the data
	 * @returns The data
	 */
	getData(key: string): any {
		return this[key];
	}


	/**
	 * Check if the game mode is free mode
	 * @returns True if the game mode is free mode, false otherwise
	 */
	isFreeMode(): boolean {
		switch (this.gameMode) {
			case GAME_MODE_ENUM.FREE_GAME:
			case GAME_MODE_ENUM.FREE_GAME_1:
			case GAME_MODE_ENUM.FREE_GAME_2:
			case GAME_MODE_ENUM.FREE_GAME_3:
			case GAME_MODE_ENUM.FREE_GAME_4:
				return true;
		}
		return false;
	}
}

```
