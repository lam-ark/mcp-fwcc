# ScriptExecutor

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/Core/ScriptExecutor.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`ScriptExecutor`**

## Key Methods
- `setLogger(): void`
- `runAction(): Promise<void>`
- `executeNextScript(): void`
- `runCommand(): void`
- `onFinishScript(): void`
- `onResetScript(): Promise<void>`
- `onResetAllScripts(): void`
- `isValidAction(): boolean`
- `convertAction(): string`
- `getCommandName(): string`
- `forceToExit(): void`
- `getDefaultGameSpeed(): number`
- `resetGameSpeed(): void`
- `setGameSpeed(): void`
- `getGameSpeed(): number`

## Source Implementation
```typescript
const { error, warn } = cc;
import { GAME_SPEED_ENUM } from "../../Components/Common/SlotEnum";
import { GameDataStore } from "../../Core/GameDataStore";
import { SlotGameSettings } from "../../Core/SlotGameSettings";

const BACK_TO_REAL_MODE_ERROR = "Handle Back To Real Mode";
export class ScriptExecutor {
	gameLogic: any = null;
	writer: any = null;
	director: any = null;
	scripts: any[] = [];
	exitScript: any[] = [];
	name: string = "";
	forceToExitMode: boolean = false;
	dataStore: GameDataStore = null;
	gameSettings: SlotGameSettings = null;
	gameSpeed: number = GAME_SPEED_ENUM.NORMAL;

	lastActionName: string = "";
	lastCommandName: string = "";

	protected logger: eno.Logger = null;

	constructor(writer, director, gameLogic, dataStore, gameSettings, name) {
		this.gameLogic = gameLogic;
		this.writer = writer;
		this.director = director;
		this.name = name;
		this.scripts = [];
		this.forceToExitMode = false;
		this.exitScript = [];
		this.dataStore = dataStore;
		this.gameSettings = gameSettings;
	}

	setLogger(logger): void {
		this.logger = logger;
		this.logger.addFilter(`[${this.name}]`);
		this.logger.setStyles({
			'[Event]': 'color: white; background-color: #6c5ce7; font-weight: bold; font-size: 12px;',
			'[Script]': 'color: white; background-color: #8854d0; font-weight: bold; font-size: 12px;',
			'[Action]': 'color: white; background-color: #8854d0; font-weight: bold; font-size: 12px;',
			'[Skipping]': 'color: white; background-color:  #ff6b6b; font-weight: normal; font-size: 12px;',
			'[Running]': 'color: white; background-color: #26de81; font-weight: normal; font-size: 12px;',
			'[Finish]': 'color: white; background-color: #636e72; font-weight: bold; font-size: 12px;'
		});
	}

	runAction(actionName: string, data?: any): Promise<void> {
		//@ts-ignore
		if (CC_DEBUG) {
			console.group(`Run Action: ${actionName}`);
		}
		
		return new Promise<void>((resolve, reject) => {
			if (!this.writer || typeof this.writer["makeScript" + actionName] !== "function") {
				error(`[GameView][${this.name}] makeScript${actionName} is not a valid action`);
				return;
			}

			const listScripts = this.writer["makeScript" + actionName](data);
			if (listScripts.length > 0) {
				// const listScriptMapping = listScripts.map(script => script.command);
				// this.logger && this.logger.log(`[${this.name}]`, '[Action]', `${actionName}`, `- Scripts: ${JSON.stringify(listScriptMapping)}`);
			} else {
				//@ts-ignore
				if (CC_DEBUG) {
					console.groupEnd();
				}
			}

			this.scripts[actionName] = [];
			this.scripts[actionName].actions = listScripts;
			this.scripts[actionName].onSkip = () => {
				this.scripts[actionName].onSkip = null;
				reject(new Error(BACK_TO_REAL_MODE_ERROR));
			};
			this.scripts[actionName].onFinish = () => {
				this.scripts[actionName].onSkip = null;
				resolve();
			};

			this.executeNextScript(actionName);
		}).catch((err) => {
			if (err && err.message == BACK_TO_REAL_MODE_ERROR) {
				warn(BACK_TO_REAL_MODE_ERROR);
			} else {
				//@ts-ignore
				if (CC_DEBUG) {
					console.groupEnd();
				}
				error(err);
			}
		});
	}

	executeNextScript(actionName: string, isResumeFromExtension: boolean = false): void {
		if (!this.scripts[actionName] || this.scripts[actionName].actions.length === 0) {
			this.onFinishScript(actionName);
			//@ts-ignore
			if (CC_DEBUG) {
				console.groupEnd();
			}
			return;
		}
		const action = this.scripts[actionName].actions.shift();
		if (!action) {
			return;
		}

		this.runCommand(actionName, action);
	}

	runCommand(actionName:string, action: any): void {
		const command = this.getCommandName(action.command);
		if (this.isValidAction(command)) {
			this.lastActionName = actionName;
			this.lastCommandName = command;
			this.logger && this.logger.log(`[${this.name}]`, command);
			
			this.director[command](action.data)
				.then(() => {
					this.executeNextScript(actionName);
				})
				.catch((err) => {
					//@ts-ignore
					if (CC_DEBUG) {
						console.groupEnd();
					}
					error(err);
				});
		} else {
			this.logger.log(`[${this.name}]`, `run command: ${action.command} is not a valid function`);
			error(`[GameView][${this.name}][${actionName}] run command: ${action.command} is not a valid function`);
		}
	}

	onFinishScript(actionName: string): void {
		if (this.scripts[actionName] && this.scripts[actionName].onFinish) {
			this.scripts[actionName].onFinish();
		} else if (this.scripts[actionName] && this.scripts[actionName].onSkip) {
			this.scripts[actionName].onSkip();
		}
		delete this.scripts[actionName];
	}

	onResetScript(actionName: string): Promise<void> {
		if (this.scripts[actionName] && this.scripts[actionName].onFinish) {

			const resetAction = this.convertAction("_reset", actionName);
			if (this.isValidAction(resetAction)) {
				this.director[resetAction]();
			} else {
				error(`[GameView][${this.name}][${actionName}] onResetScript: ${actionName} is not a valid function`);
			}

			return new Promise<void>((resolve, reject) => {
				let resetActions = [];
				this.scripts[actionName].actions.map((action) => {
					const { command, isSkippable = true } = action;
					const resetCommand = this.convertAction("_reset", command);
					if (isSkippable) {
						if (this.isValidAction(resetCommand)) {
							action.command = resetCommand;
							resetActions.push(action);
						}
					} else {
						resetActions.push(action);
					}
				});
				this.scripts[actionName].onSkip && this.scripts[actionName].onSkip();
				this.scripts[actionName].actions = resetActions;
				this.scripts[actionName].onFinish = () => {
					resolve();
				};
				this.scripts[actionName].onSkip = () => {
					reject();
				};
				this.executeNextScript(actionName);
			});
		}
		return Promise.resolve();
	}

	onResetAllScripts(): void {
		for (const actionName in this.scripts) {
			if (this.scripts[actionName] && this.scripts[actionName].onSkip) {
				this.scripts[actionName].onSkip();
			}
			delete this.scripts[actionName];
		}
	}

	isValidAction(command: string): boolean {
		return this.director[command] && typeof this.director[command] === "function";
	}

	convertAction(prefix = "", originalName = ""): string {
		return prefix + originalName.replace(/^_/, "").replace(/(?:^|_)(\w)/g, (_, c) => c.toUpperCase());
	}

	getCommandName(command: string): string {
		let gameSpeed = this.getGameSpeed();
		while (gameSpeed > 0) {
			const commandWithSpeed = command + "_" + gameSpeed;
			if (this.director[commandWithSpeed] && typeof this.director[commandWithSpeed] === "function") {
				return commandWithSpeed;
			}
			gameSpeed--;
		}
		return command;
	}

	forceToExit(script: any): void {
		this.forceToExitMode = true;
		this.exitScript = script;
	}

	getDefaultGameSpeed(): number {
		return this.gameSettings.isTurboActive ? GAME_SPEED_ENUM.TURBO : GAME_SPEED_ENUM.NORMAL;
	}

	resetGameSpeed(): void {
		this.gameSpeed = this.getDefaultGameSpeed();
		this.dataStore.setGameSpeed(this.gameSpeed);
		this.gameSettings.gameSpeed = this.gameSpeed;
	}

	setGameSpeed(gameSpeed: number): void {
		this.gameSpeed = gameSpeed || this.getDefaultGameSpeed();
		this.dataStore.setGameSpeed(this.gameSpeed);
		this.gameSettings.gameSpeed = this.gameSpeed;
	}

	getGameSpeed(): number {
		return this.gameSpeed || this.getDefaultGameSpeed();
	}

	isTurboMode(): boolean {
		return this.gameSpeed === GAME_SPEED_ENUM.TURBO;
	}

	getLastActionName(): string {
		return this.lastActionName;
	}

	getLastCommandName(): string {
		return this.lastCommandName;
	}

	destroy(): void {
		this.onResetAllScripts();
	}

}

```
