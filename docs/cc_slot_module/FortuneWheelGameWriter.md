# FortuneWheelGameWriter

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/FortuneWheelGame/Scripts/Director/FortuneWheelGameWriter.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`FortuneWheelGameWriter`** extends `GameModeWriterModule`

## Key Methods
- `makeScriptResumeGameMode(): any[]`
- `makeScriptShowResultEntry(): any[]`
- `makeScriptShowResultFinal(): any[]`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameModeWriterModule } from "../../../GameModeWriterModule";
const { ccclass, property } = _decorator;

@ccclass
export class FortuneWheelGameWriter extends GameModeWriterModule {
	makeScriptResumeGameMode(): any[] {
		const listScript = [];

		listScript.push({
			command: "_startCountDown",
		});

		return listScript;
	}

	makeScriptShowResultEntry(): any[] {
		let listScript = [];

		listScript.push({
			command: "_syncJackpot",
		});
		listScript.push({
			command: "_blockBonusGame",
		});
		return listScript;
	}

	makeScriptShowResultFinal(): any[] {
		const listScript = [];
		listScript.push({
			command: "_showWheelResult",
		});
		listScript.push({
			command: "_playFinalResultEffect",
		});
		return listScript;
	}
}

```
