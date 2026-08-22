# GameLogicUIEvents

> **Source Path**: `assets/cc-common/cc-slot-module/Core/GameLogicUIEvents.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Source Implementation
```typescript
/**
 * Supported GameLogic UI Events - Centralized event constants
 *
 * @description
 * This file contains all UI-related events that are emitted via `gameLogic.emit()`.
 * These events are used for communication between UI components and the core logic layer.
 */
export const GameLogicUIEvents = {
	/**
	 * Update the current bet selection.
	 * @param betId number - New bet key/id to apply
	 */
	UPDATE_BET_ID: "UPDATE_BET_ID",

	/**
	 * Increase bet to the next available level.
	 * No payload.
	 */
	INCREASE_BET: "ON_BET_INCREASED",

	/**
	 * Decrease bet to the previous available level.
	 * No payload.
	 */
	DECREASE_BET: "ON_BET_DECREASED",

	/**
	 * Increase extra bet value.
	 * No payload.
	 */
	INCREASE_EXTRA_BET: "ON_EXTRA_BET_INCREASED",

	/**
	 * Decrease extra bet value.
	 * No payload.
	 */
	DECREASE_EXTRA_BET: "ON_EXTRA_BET_DECREASED",

	/**
	 * User clicks the normal spin button.
	 * No payload.
	 */
	NORMAL_SPIN_CLICKED: "ON_NORMAL_GAME_SPIN_CLICKED",

	/**
	 * Pointer enters the normal spin button.
	 * No payload.
	 */
	NORMAL_SPIN_HOVERED: "ON_NORMAL_GAME_SPIN_HOVERED",

	/**
	 * Pointer leaves the normal spin button.
	 * No payload.
	 */
	NORMAL_SPIN_CANCEL_HOVERED: "ON_NORMAL_GAME_SPIN_CANCEL_HOVERED",

	/**
	 * User clicks the stop button during spinning.
	 * No payload.
	 */
	STOP_BUTTON_NORMAL_CLICKED: "ON_STOP_BUTTON_NORMAL_CLICK",

	/**
	 * Space key trigger for spin/stop, depending on state.
	 * No payload.
	 */
	TRIGGER_SPACE_BUTTON: "ON_SPIN_SPACE_TRIGGERED",

	/**
	 * User holds the spin button long enough to start auto-spin.
	 * No payload.
	 */
	START_AUTO_SPIN: "ON_NORMAL_GAME_SPIN_HOLD",

	/**
	 * User clicks the free game spin button.
	 * No payload.
	 */
	FREE_SPIN_CLICKED: "ON_FREE_GAME_SPIN_CLICKED",

	/**
	 * User clicks the lightning game spin button.
	 * No payload.
	 */
	LIGHTNING_SPIN_CLICKED: "ON_LIGHTNING_GAME_SPIN_CLICKED",

	/**
	 * Request to perform a bonus game action.
	 * @param itemId number - Selected item/index for bonus game (e.g., pick box)
	 * . If only send once, itemId will be 0
	 */
	SEND_BONUS_GAME_REQUEST: "ON_BONUS_GAME_REQUEST",

	/**
	 * Submit selected free option.
	 * @param optionId number - Selected option id
	 */
	SEND_FREE_OPTION_REQUEST: "ON_SELECT_FREE_OPTION",

	/**
	 * Request to buy feature and start a spin.
	 * @param betKey number - Current bet key
	 * @param extraBetPrefix string - Extra bet prefix for the feature
	 */
	SEND_BUY_FEATURE_SPIN_REQUEST: "ON_BUY_FEATURE_SPIN_REQUEST",

	/** Open the settings panel. No payload. */
	OPEN_SETTINGS_PANEL: "ON_GAME_SETTINGS_OPEN",

	/** Close the settings panel. No payload. */
	CLOSE_SETTINGS_PANEL: "ON_GAME_SETTINGS_CLOSE",

	/** Open the info panel. No payload. */
	OPEN_INFO_PANEL: "ON_GAME_INFO_OPEN",

	/** Close the info panel. No payload. */
	CLOSE_INFO_PANEL: "ON_GAME_INFO_CLOSE",

	/** Open bet selection panel. No payload. */
	OPEN_BET_SELECTION_PANEL: "ON_BET_SELECTION_PANEL_OPEN",

	/** Close bet selection panel. No payload. */
	CLOSE_BET_SELECTION_PANEL: "ON_BET_SELECTION_PANEL_CLOSE",

	/** Open buy feature panel. No payload. */
	OPEN_BUY_FEATURE_PANEL: "ON_BUY_FEATURE_PANEL_OPEN",

	/** Close buy feature panel. No payload. */
	CLOSE_BUY_FEATURE_PANEL: "ON_BUY_FEATURE_PANEL_CLOSE",

	/** Open jackpot history panel. No payload. */
	OPEN_JACKPOT_HISTORY_PANEL: "ON_JACKPOT_HISTORY_PANEL_OPEN",

	/** Close jackpot history panel. No payload. */
	CLOSE_JACKPOT_HISTORY_PANEL: "ON_JACKPOT_HISTORY_PANEL_CLOSE",

	/** Open menu panel. No payload. */
	OPEN_MENU_PANEL: "ON_MENU_PANEL_OPEN",

	/** Close menu panel. No payload. */
	CLOSE_MENU_PANEL: "ON_MENU_PANEL_CLOSE",

	/** Open auto-spin panel. No payload. */
	OPEN_AUTO_SPIN_PANEL: "ON_AUTO_SPIN_PANEL_OPEN",

	/** Close auto-spin panel. No payload. */
	CLOSE_AUTO_SPIN_PANEL: "ON_AUTO_SPIN_PANEL_CLOSE",

	/** Open pay-table panel. No payload. */
	OPEN_PAY_TABLE_PANEL: "ON_PAY_TABLE_PANEL_OPEN",

	/** Close pay-table panel. No payload. */
	CLOSE_PAY_TABLE_PANEL: "ON_PAY_TABLE_PANEL_CLOSE",

	/**
	 * Initialize jackpot history list.
	 * @param data = { itemPerPage: number, jpList: string[] }
	 */
	INIT_JACKPOT_HISTORY: "ON_INIT_JACKPOT_HISTORY",

	/** Request next page of jackpot history. No payload. */
	REQUEST_JACKPOT_NEXT_PAGE: "JACKPOT_HISTORY_NEXT_PAGE",

	/** Request previous page of jackpot history. No payload. */
	REQUEST_JACKPOT_PREVIOUS_PAGE: "JACKPOT_HISTORY_PREV_PAGE",

	/**
	 * Initialize bet history view.
	 * @param data = { itemPerPage: number, ... }
	 */
	INIT_BET_HISTORY: "ON_INIT_BET_HISTORY",

	/**
	 * Initialize bet history detail view.
	 * @param data any - Detail data payload (session, token, etc.)
	 * @param type? number - Optional detail type (e.g., RESPIN portrait)
	 */
	INIT_BET_DETAIL: "ON_INIT_BET_DETAIL",

	/** Bet history next page. No payload. */
	BET_HISTORY_NEXT_PAGE: "BET_HISTORY_NEXT_PAGE",

	/** Bet history previous page. No payload. */
	BET_HISTORY_PREVIOUS_PAGE: "BET_HISTORY_PREV_PAGE",

	/** Bet detail next page. No payload. */
	BET_DETAIL_NEXT_PAGE: "ON_REQUEST_BET_DETAIL_NEXT_PAGE",

	/** Bet detail previous page. No payload. */
	BET_DETAIL_PREVIOUS_PAGE: "ON_REQUEST_BET_DETAIL_PREV_PAGE",

	/** Bet detail respin previous page. No payload. */
	BET_DETAIL_RESPIN_PREVIOUS_PAGE: "ON_REQUEST_BET_DETAIL_REPIN_PREV_PAGE",

	/**
	 * Request specific bet detail page index.
	 * @param index number - Target page index (0-based or 1-based per UI)
	 */
	REQUEST_BET_DETAIL_DATA_PAGE: "ON_REQUEST_BET_DETAIL_DATA_PAGE",

	/** Bet detail respin next page. No payload. */
	BET_DETAIL_RESPIN_NEXT_PAGE: "ON_REQUEST_BET_DETAIL_REPIN_NEXT_PAGE",

	OPEN_BET_HISTORY_PANEL: "ON_BET_HISTORY_PANEL_OPEN",

	CLOSE_BET_HISTORY_PANEL: "ON_BET_HISTORY_PANEL_CLOSE",

	OPEN_BET_HISTORY_DETAIL_PANEL: "ON_BET_HISTORY_DETAIL_OPEN",

	CLOSE_BET_HISTORY_DETAIL_PANEL: "ON_BET_HISTORY_DETAIL_CLOSE",

	REQUEST_BET_HISTORY: "ON_REQUEST_BET_HISTORY",

	/** Check whether to show Turbo intro popup. No payload. */
	CHECK_TURBO_MODE_SUGGESTION_POPUP: "CHECK_TURBO_MODE_SUGGESTION_POPUP",

	/** User enabled turbo mode from intro. No payload. */
	ON_ACTIVE_FROM_TURBO_INTRO: "ON_ACTIVE_FROM_TURBO_INTRO",

	/** Toggle background music. No payload. */
	TOGGLE_BGM: "TOGGLE_BGM",

	/** Toggle sound effects. No payload. */
	TOGGLE_SFX: "TOGGLE_SFX",

	/** Navigate back to lobby. No payload. */
	BACK_TO_LOBBY: "ON_BACK_TO_LOBBY",

	/**
	 * Initialize trial mode data.
	 * @param data any - Trial mode initialization payload
	 */
	INIT_TRIAL_MODE: "ON_INIT_TRIAL_MODE_DATA",

	/**
	 * Play selected tutorial option.
	 * @param optionId number - Tutorial option identifier
	 */
	PLAY_TUTORIAL_OPTION: "PLAY_TUTORIAL_OPTION",

	/** Skip trial data/tutorial. No payload. */
	SKIP_TRIAL_DATA: "SKIP_TRIAL_DATA",

	/** Close tutorial popup. No payload. */
	CLOSE_TUTORIAL_POPUP: "ON_TUTORIAL_POPUP_CLOSE",

	/** Switch back to real mode. No payload. */
	BACK_TO_REAL_MODE: "ON_BACK_TO_REAL_MODE",

	/** Request to start trial play. No payload. */
	REQUEST_PLAY_TRIAL: "REQUEST_PLAY_TRIAL",

	/**
	 * Toggle force get last state.
	 * @param enabled boolean - Whether get last state is enabled
	 */
	ENABLE_FORCE_GET_LAST_STATE: "SET_ENABLE_FORCE_GLT",

	/**
	 * Cutscene closed event.
	 * @param cutsceneType any - Identifier/type of the cutscene
	 */
	ON_CUTSCENE_CLOSE: "ON_CUTSCENE_CLOSE",

	/** Generic OK action signal. No payload. */
	ON_ACTION_OK: "ON_ACTION_OK",

	/** Generic Cancel action signal. No payload. */
	ON_ACTION_CANCEL: "ON_ACTION_CANCEL",

	/** Close all popups. No payload. */
	CLOSE_ALL_POPUPS: "ON_POPUPS_CLOSE",
	
	/** Turbo button hover. No payload. */
	TURBO_BUTTON_HOVER: "ON_TURBO_HOVER",

	/** Turbo button exit hover. No payload. */
	TURBO_BUTTON_EXIT_HOVER: "ON_TURBO_EXIT_HOVER",
	
	/** Turbo button clicked. No payload. */
	TURBO_BUTTON_CLICK: "ON_TURBO_CLICK",
	
	/** Turbo button long-pressed. No payload. */
	TURBO_BUTTON_PRESSED: "ON_TURBO_PRESSED",
	
	/** Turbo button press canceled. No payload. */
	TURBO_BUTTON_CANCEL: "ON_TURBO_CANCEL",
};

```
