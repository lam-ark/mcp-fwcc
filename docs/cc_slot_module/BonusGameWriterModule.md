# BonusGameWriterModule

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusGameWriterModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BonusGameWriterModule`** extends `GameModeWriterModule`

## Key Methods
- `makeScriptResumeGameMode(): any[]`
- `makeScriptShowResultEntry(): any[]`
- `makeScriptShowResultFinal(): any[]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GAME_MODE_ENUM } from "../../Components/Common/SlotEnum";
import { GameModeWriterModule } from "../GameModeWriterModule";
const { ccclass, property } = _decorator;

@ccclass
export class BonusGameWriterModule extends GameModeWriterModule {
	makeScriptResumeGameMode(): any[] {
		const listScript = [];
		listScript.push({
			command: "_blockBonusGame",
		});
		listScript.push({
			command: "_resumeOpenedBoxes",
		});
		listScript.push({
			command: "_unblockBonusGame",
		});
		listScript.push({
			command: "_startCountDown",
		});
		return listScript;
	}

	makeScriptShowResultEntry(): any[] {
		const { nextMode } = this.dataStore.playSession;
		let listScript = [];

		listScript.push({
			command: "_syncJackpot",
		});
		if (nextMode === GAME_MODE_ENUM.BONUS_GAME) {
			listScript.push({
				command: "_unblockBonusGame",
			});
			listScript.push({
				command: "_startCountDown",
			});
			listScript.push({
				command: "_openItem",
			});
		} else {
			listScript.push({
				command: "_blockBonusGame",
			});
		}
		return listScript;
	}

	makeScriptShowResultFinal(): any[] {
		const listScript = [];
		listScript.push({
			command: "_stopCountDown",
		});
		listScript.push({
			command: "_openFinalItem",
		});
		listScript.push({
			command: "_openAllItems",
		});
		listScript.push({
			command: "_playFinalResultEffect",
		});
		listScript.push({
			command: "_clearCurrentBonusGameData",
		});

		return listScript;
	}
}

```
