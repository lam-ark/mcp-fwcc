# GameModeHistory

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/BetHistory/GameModeHistory.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`GameModeHistory`** extends `SlotBaseModule`

## CC Properties
- `gameModes`

## Key Methods
- `onLoadExtend(): void`
- `renderResult(): void`
- `getGameModeType(): number`
- `reset(): void`

## Source Implementation
```typescript
const { _decorator, error } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { GAME_MODE_ENUM, GameModeType, RESPIN_SUB_STATE_ENUM, RESPIN_SUB_STATE_HISOTY_ENUM } from "../../Components/Common/SlotEnum";
const { ccclass, property } = _decorator;

@ccclass
export class GameModeHistory extends SlotBaseModule {
	@property(GameModeType)
	gameModes: GameModeType[] = [];

	modelData = null;

	onLoadExtend(): void {
		this.node.on("RENDER_GAME_MODE_VIEW", this.renderResult, this);
		this.node.on("RESET_GAME_MODE_VIEW", this.reset, this);
	}

	renderResult(data: any): void {
		const { rawData } = data;
		const gameModeType = this.getGameModeType(rawData);
		this.gameModes.forEach((gameMode) => {
			const { rootNode, type } = gameMode;
			if (!rootNode) {
				error("Please setup GameMode in GameModeView Node");
			};
			if (gameModeType === type) {
				rootNode.active = true;
				rootNode.emit("RENDER_GAME_MODE", data);
			} else {
				rootNode.emit("RESET_GAME_MODE");
				rootNode.active = false;
			}
		});
	}
	getGameModeType(data: any): number {
		if (data.mode == "normal") {
			return GAME_MODE_ENUM.NORMAL_GAME;
		} else if (data.mode == "free") {
			if (data.selectedOption && Number(data.selectedOption) > 0) {
				if (data.selectedOption == 1) {
					return GAME_MODE_ENUM.FREE_GAME_1;
				} else {
					return GAME_MODE_ENUM.FREE_GAME_2;
				}
			} else {
				return GAME_MODE_ENUM.FREE_GAME;
			}
		} else if (data.mode == "bonus") {
			return GAME_MODE_ENUM.BONUS_GAME;
		} else if (data.mode == "respin") {
			const { result } = data;
			const subState = result && result.metaDataDetail && result.metaDataDetail.subState;
			if (subState == RESPIN_SUB_STATE_ENUM.RESPIN_NORMAL_GAME || subState == RESPIN_SUB_STATE_HISOTY_ENUM.RESPIN_NORMAL_GAME) {
				return GAME_MODE_ENUM.NORMAL_GAME;
			} else {
				return GAME_MODE_ENUM.FREE_GAME;
			}
		}
		return GAME_MODE_ENUM.NORMAL_GAME;
	}

	reset(): void {
		this.gameModes.forEach((gameMode) => {
			const { rootNode } = gameMode;
			rootNode.emit("RESET_GAME_MODE");
			rootNode.active = false;
		});
	}
}

```
