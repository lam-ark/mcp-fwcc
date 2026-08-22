# BaseGameDirector

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/Core/BaseGameDirector.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BaseGameDirector`** extends `SlotBaseModule`

## Key Methods
- `onLoad(): void`
- `init(): void`
- `onExtendedLoad(): void`
- `runAction(): Promise<void>`
- `executeNextScript(): void`
- `onResetScript(): Promise<void>`
- `onResetAllScripts(): void`
- `forceToExit(): void`
- `setGameSpeed(): void`
- `resetGameSpeed(): void`
- `getGameSpeed(): number`
- `getLastActionName(): string`
- `getLastCommandName(): string`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { ScriptExecutor } from "./ScriptExecutor";
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { GameDataStore } from "../../Core/GameDataStore";
import { SlotGameSettings } from "../../Core/SlotGameSettings";
const { ccclass } = _decorator;
const { inject, Logger } = eno;

export interface script {
	command: string;
	data: any;
}

@ccclass
export class BaseGameDirector extends SlotBaseModule {
	director: any = null;
	public writer: any = null;
	scripts: script[];
	forceToExitMode: boolean = false;
	callBackWhenHide: any = null;
	public executor: ScriptExecutor = null;
	@inject(GameDataStore) dataStore: GameDataStore;
	@inject(Logger) logger: eno.Logger;
	@inject(SlotGameSettings) gameSettings: SlotGameSettings;

	onLoad(): void {
		super.onLoad();
		this.onExtendedLoad();
	}

	init(): void {
		this.writer = this.node["writer"];
		this.director = this.node["director"];
		this.executor = new ScriptExecutor(this.writer, this.director, this.gameLogic, this.dataStore, this.gameSettings, this.node.name);
		this.executor.setLogger(this.logger);
	}

	onExtendedLoad(): void {}

	runAction(actionName: string, data?: any): Promise<void> {
		return this.executor.runAction(actionName, data);
	}

	executeNextScript(script: any): void {
		return this.executor.executeNextScript(script);
	}

	onResetScript(actionName: string): Promise<void> {
		return this.executor.onResetScript(actionName);
	}

	onResetAllScripts(): void {
		return this.executor.onResetAllScripts();
	}

	forceToExit(script): void {
		this.executor.forceToExit(script);
	}

	setGameSpeed(mode): void {
		this.executor.setGameSpeed(mode);
	}

	resetGameSpeed(): void {
		this.executor.resetGameSpeed();
	}

	getGameSpeed(): number {
		return this.executor.getGameSpeed();
	}

	getLastActionName(): string {
		return this.executor.getLastActionName();
	}

	getLastCommandName(): string {
		return this.executor.getLastCommandName();
	}

	protected onDestroy(): void {
		this.executor.destroy();
	}
}

```
