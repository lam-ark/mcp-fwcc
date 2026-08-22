# NormalGameWriterModule

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/NormalGame/NormalGameWriterModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`NormalGameWriterModule`** extends `GameModeWriterModule`

## Key Methods
- `makeScriptPreResumeGameMode(): Object[]`
- `makeScriptResumeNormalGame(): Object[]`
- `makeScriptSyncPlaySessionData(): Object[]`
- `makeScriptNormalSpinTrigger(): Object[]`
- `makeScriptShowResultFinal(): Object[]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameModeWriterModule } from "../GameModeWriterModule";
const { ccclass } = _decorator;

@ccclass
export class NormalGameWriterModule extends GameModeWriterModule {
	makeScriptPreResumeGameMode(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_pauseWallet",
		});
		listScript.push({
			command: "_resumeNormalTable",
		});
		listScript.push({
			command: "_setUpPaylines",
		});
		listScript.push({
			command: "_resumeWinAmount",
		});
		return listScript;
	}

	makeScriptResumeNormalGame(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_showAllPaylines",
		});
		return listScript;
	}

	makeScriptSyncPlaySessionData(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_syncWinAmountPS",
		});
		listScript.push({
			command: "_syncWallet",
		});
		return listScript;
	}

	makeScriptNormalSpinTrigger(): Object[] {
		let listScript = [];
		listScript.push({
			command: "_beforeSpinStart",
		});
		listScript.push({
			command: "_syncPlaySessionData",
		});
		listScript.push({
			command: "_pauseWallet",
		});
		listScript.push({
			command: "_resetOnSpin",
		});
		listScript.push({
			command: "_clearWinAmount",
		});
		listScript.push({
			command: "_resetTable",
		});
		return listScript;
	}

	makeScriptShowResultFinal(): Object[] {
		let listScript = [];

		listScript.push({
			command: "_resumeWallet",
		});
		return listScript;
	}
}

```
