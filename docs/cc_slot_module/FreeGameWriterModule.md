# FreeGameWriterModule

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/FreeGame/FreeGameWriterModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`FreeGameWriterModule`** extends `GameModeWriterModule`

## Key Methods
- `makeScriptResumeGameMode(): Object[]`
- `makeScriptSyncPlaySessionData(): Object[]`
- `makeScriptFreeSpinTrigger(): Object[]`
- `makeScriptShowResultFinal(): Object[]`
- `getFreeGameRemainScript(): Object[]`
- `getFreeGameEndScript(): Object[]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { CUTSCENE_TYPE_ENUM } from "../../Components/Common/SlotEnum";
import { GameModeWriterModule } from "../GameModeWriterModule";
const { ccclass } = _decorator;

@ccclass
export class FreeGameWriterModule extends GameModeWriterModule {
	makeScriptResumeGameMode(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_resumeFreeTable",
		});
		listScript.push({
			command: "_resumeWinAmount",
		});
		return listScript;
	}

	makeScriptSyncPlaySessionData(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_syncWinAmountPS",
		});
		return listScript;
	}

	makeScriptFreeSpinTrigger(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_beforeSpinStart",
		});
		listScript.push({
			command: "_syncPlaySessionData",
		});
		listScript.push({
			command: "_resetOnSpin",
		});
		listScript.push({
			command: "_resetTable",
		});
		listScript.push({
			command: "_decreaseFreeGameSpinTimes",
		});
		return listScript;
	}

	makeScriptShowResultFinal(): Object[] {
		const { freeGameRemain } = this.dataStore.playSession;
		if (freeGameRemain && freeGameRemain > 0) {
			return this.getFreeGameRemainScript();
		} else {
			return this.getFreeGameEndScript();
		}
	}

	getFreeGameRemainScript(): Object[] {
		const { freeGameRemain } = this.dataStore.playSession;
		let listScript = [];
		listScript.push({
			command: "_updateSpinTimes",
			data: freeGameRemain,
		});
		return listScript;
	}

	getFreeGameEndScript(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_showUnskippedCutscene",
			data: { cutsceneType: CUTSCENE_TYPE_ENUM.TOTAL_WIN, cutsceneData: {} },
		});
		listScript.push({
			command: "_gameExit",
		});
		return listScript;
	}
}

```
