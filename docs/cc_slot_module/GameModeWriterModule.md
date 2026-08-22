# GameModeWriterModule

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/GameModeWriterModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`GameModeWriterModule`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `makeScriptResumeGameMode(): Object[]`
- `makeScriptPreStopSpinningTable(): Object[]`
- `makeScriptPlayPreStopSpinningEffect(): Object[]`
- `makeScriptStopCurrentGameMode(): Object[]`
- `makeScriptStartSpinning(): Object[]`
- `makeScriptStopSpinningTable(): Object[]`
- `makeScriptStartRespinning(): Object[]`
- `makeScriptStopRespinningTable(): Object[]`
- `makeScriptTransitionGameMode(): Object[]`
- `makeScriptShowResultEntry(): Object[]`
- `makeScriptShowResultFinal(): Object[]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from "../Core/SlotBaseModule";
import { GameDataStore } from "../Core/GameDataStore";
import { SlotGameSettings } from "../Core/SlotGameSettings";
const { ccclass } = _decorator;
const { inject } = eno;

@ccclass
export class GameModeWriterModule extends SlotBaseModule {
	@inject(GameDataStore) dataStore: GameDataStore;
	@inject(SlotGameSettings) gameSettings: SlotGameSettings;
	
	onLoadExtend(): void {
		this.node["writer"] = this;
	}

	makeScriptResumeGameMode(): Object[] {
		let listScript = [];
		return listScript;
	}

	makeScriptPreStopSpinningTable(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_syncJackpot",
		});
		listScript.push({
			command: "_playSureWinEffect",
		});
		listScript.push({
			command: "_playPreStopSpinningEffect",
		});
		return listScript;
	};

	makeScriptPlayPreStopSpinningEffect(): Object[] {
		let listScript = [];
		return listScript;
	};

	makeScriptStopCurrentGameMode(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_stopCurrentGameMode",
		});
		listScript.push({
			command: "_forceResetGameMode",
		});
		return listScript;
	};

	makeScriptStartSpinning(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_startSpinningTable",
		});
		return listScript;
	};

	makeScriptStopSpinningTable(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_stopSpinningTable",
		});
		listScript.push({
			command: "_setUpPaylines",
		});
		return listScript;
	};


	makeScriptStartRespinning(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_beforeReSpinStart",
		});
		listScript.push({
			command: "_showStartRespinEffect",
		});
		listScript.push({
			command: "_startRespinningTable",
		});
		return listScript;
	};

	makeScriptStopRespinningTable(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_showRespinResultEntry",
		});
		listScript.push({
			command: "_stopRespinningTable",
		});
		listScript.push({
			command: "_setUpPaylines",
		});
		listScript.push({
			command: "_showRespinResultFinal",
		});
		return listScript;
	};

	makeScriptTransitionGameMode(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_showTransitionGameMode",
		});
		return listScript;
	}

	makeScriptShowResultEntry(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_playJackpotWin",
		});
		listScript.push({
			command: "_showTransformSymbol",
		});
		listScript.push({
			command: "_showResultEntry",
		});
		return listScript;
	};

	// override in game mode writer
	makeScriptShowResultFinal(): Object[] {
		let listScript = [];
		return listScript;
	};

}

```
