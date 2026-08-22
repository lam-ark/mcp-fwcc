# GameModeDirectorModule

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/GameModeDirectorModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`GameModeDirectorModule`** extends `BaseGameDirector`

## CC Properties
- `gameMode`
- `moduleList`

## Key Methods
- `onExtendedLoad(): void`
- `setupModules(): void`
- `init(): void`
- `enter(): void`
- `playGameModeBGM(): void`
- `onJoinGameSuccess(): void`
- `onStateUpdate(): void`
- `onStateResume(): void`
- `onPreResumeGameMode(): Promise<void>`
- `onResumeGameMode(): Promise<void>`
- `onResumeNormalGame(): Promise<void>`
- `onBeforeSpinStart(): Promise<void>`
- `onStartSpinningTable(): Promise<void>`
- `onStartRespinningTable(): Promise<void>`
- `onPreStopSpinningTable(): Promise<void>`

## Source Implementation
```typescript
const { _decorator, Node, tween } = cc;
import { BaseGameDirector } from "./Core/BaseGameDirector";
import { CUTSCENE_TYPE_ENUM, GAME_MODE_ENUM, GAME_SPEED_ENUM, GAME_STATE_ENUM } from "../Components/Common/SlotEnum";
import { GameModuleEvent } from "./GameModuleEvent";
import { SlotBaseModule } from "../Core/SlotBaseModule";
import { GameUIEvents } from "../Core/GameUIEvents";
const { ccclass, property } = _decorator;

@ccclass
export class GameModeDirectorModule extends BaseGameDirector {
	@property({ type: GAME_MODE_ENUM })
	gameMode = GAME_MODE_ENUM.NORMAL_GAME;
	@property({ type: cc.Node })
	moduleList: cc.Node[] = [];

	spinTimes: cc.Node = null;
	slotButton: cc.Node = null;

	_tweenDelayTimeScript: any = null;
	_delayActionCB: Function = null;

	onExtendedLoad(): void {
		this.node["director"] = this;
		this.node.on("GAME_INIT", this.init, this);
		this.node.on("GAME_ENTER", this.enter, this);
		this.eventManager.on(GameUIEvents.SPIN_BUTTON.SET_UP_BUTTON, this.setUpSlotButton, this);
		this.eventManager.on(GameUIEvents.SPIN_TIMES.SET_UP_SPIN_TIMES, this.setUpSpinTimes, this);

		this.setupModules();
	}

	setupModules(): void {
		this.moduleEvent = new GameModuleEvent();
		this.moduleEvent.setLogger(this.logger, '[ModuleEvent]');
		this.moduleList.forEach(module => {
			module.getComponent(SlotBaseModule).setupModule(this.moduleEvent, this.gameMode);
		});
	}

	init(): void {
		super.init();
		this.moduleEvent.emit("TABLE_INIT");
		this.moduleEvent.emit("SHOW_BEAUTY_MATRIX");
	}

	enter(): void {
		this.playGameModeBGM();
	}

	playGameModeBGM(): void {
		// this.soundPlayer && this.soundPlayer.playMainBGM(this.dataStore.currentGameMode);
	}

	//#region Handle Game Logic Events

	/**
	 * @description onJoinGameSuccess is called when join game success in normal game
	 */
	onJoinGameSuccess(_data): void { }

	/**
	 * @description onStateUpdate is called when state update in current game mode
	 */
	onStateUpdate(data): void {
		this.dataStore.parseDataPS(data);
		this.dataStore.updateDataModules();
	}

	/**
	 * @description onStateResume is called when join game with remaining play session in normal game mode
	 */
	onStateResume(data): void {
		this.dataStore.parseDataPS(data);
		this.dataStore.updateDataModules();
	}

	/**
	 * @description onPreResumeGameMode is called before enter a new game mode in normal game
	 * @note can be used to play effect after enter a new game mode highlight scatter or bonus symbols, sync last win amount, etc...
	 */
	onPreResumeGameMode(): Promise<void> {
		return this.runAction("PreResumeGameMode");
	}

	/**
	 * @description onResumeGameMode is called after enter game mode, and start resume.
	 */
	onResumeGameMode(): Promise<void> {
		return this.runAction("ResumeGameMode");
	}

	/**
	 * @description onResumeNormalGame is called after exit other game mode, and start resume normal game action.
	 */
	onResumeNormalGame(): Promise<void> {
		return this.runAction("ResumeNormalGame");
	}

	/**
	 * @description onBeforeSpinStart is called before start spin.
	 */
	onBeforeSpinStart(): Promise<void> {
		return this.runAction("NormalSpinTrigger");
	}

	/**
	 * @description onStartSpinningTable is called to start spin.
	 */
	onStartSpinningTable(): Promise<void> {
		return this.runAction("StartSpinning");
	}

	/**
	 * @description onStartRespinningTable is called to start respin.
	 */
	onStartRespinningTable(): Promise<void> {
		return this.runAction("StartRespinning");
	}

	/**
	 * @description onPreStopSpinningTable is called before stop spin.
	 * @note can be used to play effect before stop spin as sure win, etc...
	 */
	onPreStopSpinningTable(): Promise<void> {
		return this.runAction("PreStopSpinningTable");
	}

	/**
	 * @description onStopSpinningTable is called to stop spin.
	 */
	onStopSpinningTable(): Promise<void> {
		return this.runAction("StopSpinningTable");
	}

	/**
	 * @description onStopRespinningTable is called to stop respin.
	 */
	onStopRespinningTable(): Promise<void> {
		return this.runAction("StopRespinningTable");
	}

	/**
	 * @description onShowResultEntry is called to show result before enter other game mode (JackpotWin, BigWin, etc...)
	 */
	onShowResultEntry(): Promise<void> {
		return this.runAction("ShowResultEntry");
	}

	/**
	 * @description onShowResultFinal is called to show result after exit game mode
	 */
	onShowResultFinal(): Promise<void> {
		return this.runAction("ShowResultFinal");
	}

	/**
	 * @description transitionGameMode is called to transition from current mode to other mode
	 * @param mode - Target game mode to transition to
	 */
	transitionGameMode(mode: number): Promise<void> {
		const { isResume } = this.dataStore.playSession;

		// Check if we should skip transition when resuming
		if (isResume) {
			return this.transitionToGameModeWhenResume(mode);
		} else {
			return this.runAction("TransitionGameMode");
		}
	}

	/**
	 * @description transitionToGameModeWhenResume is called when resuming game
	 * Default behavior: Skip transition for faster loading
	 * Override this method in specific game directors to add custom transition logic
	 * @param mode - Target game mode to transition to
	 */
	transitionToGameModeWhenResume(_mode: number): Promise<void> {
		return Promise.resolve();
	}

	/**
	 * @description enterGameMode is called to enter a new game mode
	 */
	enterGameMode(mode): Promise<void> {
		this.resetGameSpeed();
		return this.eventManager.emit(GameUIEvents.GAME_MODE.SWITCH_GAME_MODE, mode);
	}

	/**
	 * @description exitGameMode is called to exit a game mode
	 */
	exitGameMode(_mode: number): Promise<void> {
		this.resetGameSpeed();
		return this.eventManager.emit(GameUIEvents.GAME_MODE.EXIT_GAME_MODE);
	}

	/**
	 * @description onFastToResult is called to fast to result
	 * @note can be used to stop spin instantly, or skip some effects
	 */
	onFastToResult(_mode: number): void {
		this.setGameSpeed(GAME_SPEED_ENUM.INSTANTLY);
		this.moduleEvent.emit("TABLE_FAST_STOP");
	}

	/**
	 * @description forceStopCurrentGameMode is called to force stop current game mode
	 * @note can be used when having error in game mode
	 */
	forceStopCurrentGameMode(): Promise<void> {
		return this.runAction("StopCurrentGameMode");
	}

	//#endregion

	/**
	 * @description onBackToGameMode is called to back to a game mode
	 * @example function called in normal game after exit from free game.
	 */
	async onBackToGameMode(_fromMode: number): Promise<void> {
		this.playGameModeBGM();
		return Promise.resolve();
	}

	_resumeNormalTable(data): Promise<void> {
		return this.moduleEvent.emit("SYNC_TABLE", data, GAME_MODE_ENUM.NORMAL_GAME);
	}

	_resumeWinAmount(winAmount): Promise<void> {
		const resumeWinAmount = winAmount || this.dataStore.getResumeWinAmount();
		return this.eventManager.emit(GameUIEvents.WIN_AMOUNT.SYNC_WIN_AMOUNT, resumeWinAmount);
	}

	_setUpPaylines(data): Promise<void> {
		return this.moduleEvent.emit("SETUP_PAYLINES", data);
	}

	async _beforeSpinStart(): Promise<void> {
		this.resetGameSpeed();
		this.skipAllEffects();
		if (this.gameSettings.isAutoSpin) {
			await this.delayAutoSpin();
		}
		return Promise.resolve();
	}

	_syncPlaySessionData(): Promise<void> {
		return this.runAction("SyncPlaySessionData");
	}

	_syncWinAmountPS(): Promise<void> {
		return this.eventManager.emit(GameUIEvents.WIN_AMOUNT.SYNC_WIN_AMOUNT);
	}

	_syncWallet(): Promise<void> {
		return this.eventManager.emit(GameUIEvents.WALLET.SYNC_WALLET);
	}

	_resetOnSpin(): Promise<void> {
		return Promise.resolve();
	}

	/**
	 * @description skipAllEffects is called to skip all effects before start new spin
	 */
	skipAllEffects(): Promise<void> {
		this.clearDelayAction();
		return this.onResetScript("ShowResultFinal");
	}

	/**
	 * @description _resetShowResultFinal is called to reset show result final
	 */
	_resetShowResultFinal(): void {
		// skip all effects.
	}

	_clearWinAmount(): Promise<void> {
		return this.eventManager.emit(GameUIEvents.WIN_AMOUNT.FADE_OUT_NUMBER);
	}

	_resetTable(): Promise<void> {
		this.moduleEvent.emit("BEFORE_RESET_TABLE");
		this.moduleEvent.emit("CLEAR_PAYLINES");
		this.moduleEvent.emit("SYNC_TABLE");
		return Promise.resolve();
	}

	_clearPaylines(): Promise<void> {
		return this.moduleEvent.emit("CLEAR_PAYLINES");
	}

	clearDelayAction(): void {
		if (this._delayActionCB) {
			this.unschedule(this._delayActionCB);
			this._delayActionCB = null;
		}
	}

	_startSpinningTable(): Promise<void> {
		return this.moduleEvent.emit("TABLE_START_SPIN");
	}

	_playSureWinEffect(_data): Promise<void> {
		return Promise.resolve();
	}

	_playPreStopSpinningEffect(_data): Promise<void> {
		return this.runAction("PlayPreStopSpinningEffect");
	}

	_stopSpinningTable(data): Promise<void> {
		return this.moduleEvent.emit("TABLE_STOP_SPIN", data);
	}

	_beforeReSpinStart(): Promise<void> {
		this.resetGameSpeed();
		return Promise.resolve();
	}

	_startRespinningTable(data): Promise<void> {
		return this.moduleEvent.emit("TABLE_START_RESPIN", data);
	}

	_stopRespinningTable(data): Promise<void> {
		return this.moduleEvent.emit("TABLE_STOP_RESPIN", data);
	}

	async _showStartRespinEffect(): Promise<void> {
		if (this.dataStore.playSession.payLines) {
			await this._blinkAllPaylines();
			await this._clearPaylines();
		}
		return Promise.resolve();
	}

	async _showRespinResultEntry(): Promise<void> {
		return Promise.resolve();
	}

	async _showRespinResultFinal(): Promise<void> {
		return Promise.resolve();
	}

	/**
	 * @description _playJackpotWin is called to play jackpot win effect
	 */
	async _playJackpotWin(): Promise<void> {
		if (this.dataStore.playSession.jackpot) {
			const data = { cutsceneType: CUTSCENE_TYPE_ENUM.JACKPOT_WIN, cutsceneData: this.dataStore.getJackpotInfo() };
			await this._showJackpotPayLine(data);
			await this._showUnskippedCutscene(data);
			await this._resumeJackpot(true);
		}
		return Promise.resolve();
	}

	async _showTransitionGameMode(): Promise<void> {
		const nextMode = this.dataStore.getNextGameMode();
		if (nextMode === GAME_MODE_ENUM.BONUS_GAME) {
			return this._showTransitionBonusGame();
		}
		if (nextMode === GAME_MODE_ENUM.FREE_GAME) {
			return this._showTransitionFreeGame();
		}
		if (nextMode === GAME_MODE_ENUM.FREE_OPTION_GAME) {
			return this._showTransitionFreeGameOption();
		}
		return Promise.resolve();
	}

	async _showTransitionBonusGame(): Promise<void> {
		await this._showBonusPayLine();
		await this._showIntroGameCutscene({ cutsceneType: CUTSCENE_TYPE_ENUM.INTRO_BONUS_GAME });
		return Promise.resolve();
	}

	async _showTransitionFreeGame(): Promise<void> {
		await this._showScatterPayLine();
		await this._showIntroGameCutscene({ cutsceneType: CUTSCENE_TYPE_ENUM.INTRO_FREE_GAME });
		return Promise.resolve();
	}

	async _showTransitionFreeGameOption(): Promise<void> {
		await this._showScatterPayLine();
		await this._showIntroGameCutscene({ cutsceneType: CUTSCENE_TYPE_ENUM.INTRO_FREE_GAME });
		return Promise.resolve();
	}

	_showIntroGameCutscene(data): Promise<void> {
		return this.eventManager.emit(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, data);
	}

	_showResultEntry(): Promise<void> {
		const hasBigWin = this.dataStore.isBigWin();
		if (hasBigWin) {
			const data = { cutsceneData: this.dataStore.getBigWinData(), cutsceneType: CUTSCENE_TYPE_ENUM.BIG_WIN };
			return this._handleBigWin(data);
		}
		if (this.dataStore.playSession.payLines) {
			return this._showWinPayline(this.dataStore.getWinAmountInfo());
		}
		return Promise.resolve();
	}

	async _showWinPayline(data): Promise<void> {
		const { delayTime } = data;
		this._updateWinningAmount(data);
		this._blinkAllPaylines().then(() => {
			this._showAllPaylines();
		});
		if (!this.canPrepareNextSpin()) {
			await this.delayAction(delayTime);
		}
		return Promise.resolve();
	}

	_handleBigWin(data): Promise<void> {
		const gameSpeed = this.gameSettings.gameSpeed;
		if (gameSpeed === GAME_SPEED_ENUM.NORMAL) {
			return this._showBigWin(data);
		} else {
			return this._showFastBigWin(data);
		}
	}

	_showFastBigWin(data): Promise<void> {
		this._showCutscene(data);
		return this._showWinPayline(data.cutsceneData);
	}

	async _showBigWin(data): Promise<void> {
		const { cutsceneData } = data;
		if (this.canPrepareNextSpin()) {
			this._blinkAllPaylines().then(() => {
				this._showCutscene(data).then(() => {
					this._showAllPaylines();
					this._updateWinningAmount({ ...cutsceneData, time: 0, winLevel: 1 });
				});
			});
		} else {
			await this._blinkAllPaylines();
			await this._showCutscene(data);
			this._showAllPaylines();
			this._updateWinningAmount({ ...cutsceneData, time: 0, winLevel: 1 });
		}
		return Promise.resolve();
	}

	_blinkAllPaylines(): Promise<void> {
		return this.moduleEvent.emit("BLINK_ALL_PAYLINES");
	}

	_showAllPaylines(): Promise<void> {
		return this.moduleEvent.emit("SHOW_ALL_PAYLINES");
	}

	_showBonusPayLine(): Promise<void> {
		return this.moduleEvent.emit("SHOW_BONUS_PAYLINE");
	}

	_showScatterPayLine(): Promise<void> {
		return this.moduleEvent.emit("SHOW_SCATTER_PAYLINE");
	}

	_showJackpotPayLine(data): Promise<void> {
		return this.moduleEvent.emit("SHOW_JACKPOT_PAYLINE", data);
	}

	_showCutscene(data): Promise<void> {
		return this.eventManager.emit(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, data);
	}

	_showCutscene_2(data): Promise<void> {
		return Promise.resolve();
	}

	_showUnskippedCutscene(data): Promise<void> {
		return this.eventManager.emit(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, data);
	}

	_hideCutscene(data): Promise<void> {
		return this.eventManager.emit(GameUIEvents.CUTSCENES.CLOSE_CUTSCENE, data);
	}

	_updateSpinTimes(spineTimes): Promise<void> {
		this.spinTimes && this.spinTimes.emit("UPDATE_SPINTIMES", spineTimes);
		return Promise.resolve();
	}

	_resetSpinTimes(): Promise<void> {
		this.spinTimes && this.spinTimes.emit("RESET_SPINTIMES");
		return Promise.resolve();
	}

	_stopCurrentGameMode(): Promise<void> {
		this.eventManager.emit(GameUIEvents.WALLET.RESUME_WALLET);
		if (this.gameSettings.isTrialMode) {
			this.eventManager.emit(GameUIEvents.JACKPOT.RESUME_TRIAL_JACKPOT);
		} else {
			this.eventManager.emit(GameUIEvents.JACKPOT.RESUME_JACKPOT);
		}
		return this._stopSpinningTableWithRandomMatrix();
	}

	_stopSpinningTableWithRandomMatrix(): Promise<void> {
		return this.moduleEvent.emit("TABLE_STOP_SPIN_WITH_RANDOM_MATRIX");
	}

	_forceResetGameMode(): Promise<void> {
		// override code here
		this.gameLogic.updateCurrentWallet();
		this._resumeWallet(true); // force resume wallet
		this.resetGameState();
		this.dataStore.resetWinAmount();
		return Promise.resolve();
	}

	resetGameState(): void {
		this.gameSettings.currentGameState = GAME_STATE_ENUM.IDLE;
	}

	_updateWinningAmount(data): Promise<void> {
		return this.eventManager.emit(GameUIEvents.WIN_AMOUNT.UPDATE_WIN_AMOUNT, data);
	}

	_pauseWallet(): Promise<void> {
		this.eventManager.emit(GameUIEvents.WALLET.PAUSE_WALLET);
		return Promise.resolve();
	}

	_resumeWallet(force: boolean = false): Promise<void> {
		if (this.dataStore.playSession.isFinished || force) {
			this.eventManager.emit(GameUIEvents.WALLET.RESUME_WALLET);
		}
		return Promise.resolve();
	}

	pauseJackpot(): Promise<void> {
		if (this.gameSettings.isTrialMode) {
			this.eventManager.emit(GameUIEvents.JACKPOT.PAUSE_TRIAL_JACKPOT);
		} else {
			this.eventManager.emit(GameUIEvents.JACKPOT.PAUSE_JACKPOT);
		}
		return Promise.resolve();
	}

	_syncJackpot(): Promise<void> {
		const { jackpot } = this.dataStore.playSession;
		if (jackpot) {
			this.updateJackpotValue(this.dataStore.getJackpotInfo());
			this.pauseJackpot();
		}
		return Promise.resolve();
	}

	_resumeJackpot(isForce: boolean = false): Promise<void> {
		if (this.gameSettings.isTrialMode) {
			this.eventManager.emit(GameUIEvents.JACKPOT.RESUME_TRIAL_JACKPOT, isForce);
		} else {
			this.eventManager.emit(GameUIEvents.JACKPOT.RESUME_JACKPOT, isForce);
		}
		return Promise.resolve();
	}

	updateJackpotValue(data): Promise<void> {
		if (this.gameSettings.isTrialMode) {
			this.eventManager.emit(GameUIEvents.JACKPOT.UPDATE_TRIAL_JACKPOT_VALUE, data);
		} else {
			this.eventManager.emit(GameUIEvents.JACKPOT.UPDATE_JACKPOT_VALUE, data);
		}
		return Promise.resolve();
	}

	_delayTimeScript(time: number = 0): Promise<void> {
		if (time <= 0) {
			return Promise.resolve();
		}
		return new Promise((resolve) => {
			this._tweenDelayTimeScript && this._tweenDelayTimeScript.stop();
			this._tweenDelayTimeScript = tween(this.node)
				.delay(time)
				.call(() => {
					this._tweenDelayTimeScript = null;
					resolve();
				})
				.start();
		});
	};

	_showMultiplier(): Promise<void> {
		return this.moduleEvent.emit("SHOW_MULTIPLIER");
	}

	_resetMultiplier(): Promise<void> {
		return this.eventManager.emit("RESET_MULTIPLIER");
	}

	_showTransformSymbol(): Promise<void> {
		return this.moduleEvent.emit("SHOW_TRANSFORM_SYMBOL");
	}

	_updateMegaway(): Promise<void> {
		return this.moduleEvent.emit("UPDATE_MEGAWAY");
	}

	canPrepareNextSpin(): boolean {
		const { isFinished } = this.dataStore.playSession;
		return isFinished && !this.gameSettings.isAutoSpin && this.dataStore.currentGameMode === GAME_MODE_ENUM.NORMAL_GAME;
	}

	setUpSpinTimes(data): void {
		const { gameMode, node } = data;
		if (gameMode === this.gameMode) {
			this.spinTimes = node;
		}
	}

	setUpSlotButton(data): void {
		const { gameMode, node } = data;
		if (gameMode === this.gameMode) {
			this.slotButton = node;
		}
	}

	/**
	 * @note override in game mode director when calculate delay time for next spin
	 */
	delayAutoSpin(): Promise<void> {
		return this.delayAction(0.5);
	};

	delayAction(time: number = 0): Promise<void> {
		if (time <= 0) {
			return Promise.resolve();
		}
		return new Promise((resolve) => {
			this._delayActionCB = () => {
				this._delayActionCB = null;
				resolve();
			}

			this.scheduleOnce(this._delayActionCB, time);
		});
	};

	protected resetAllEffectAndTasks(): void {
		this.resetGameSpeed();
		this.onResetAllScripts();
		if (this.node.active && this.gameMode !== GAME_MODE_ENUM.NORMAL_GAME) {
			this.eventManager.emit(GameUIEvents.GAME_MODE.RESUME_NORMAL_GAME_MODE);
		}
	}

	onDestroy(): void {
		if (this.moduleEvent) {
			this.moduleEvent.destroy();
			this.moduleEvent = null;
		}
		this._tweenDelayTimeScript && this._tweenDelayTimeScript.stop();
		this._tweenDelayTimeScript = null;
		super.onDestroy();
	}
}

```
