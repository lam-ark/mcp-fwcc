---
id: "cc_slot_module:BetModule:properties_and_state:injected_services"
title: "BetModule Injected Services Deep Specification"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "properties", "injected_services", "inject", "applyInjections", "ioc"]
---

# 💉 BetModule Injected Services Deep Specification

---

## 1. Injected Services Specification Matrix

| Token | Type | When Provided | Purpose in Module |
| :--- | :--- | :--- | :--- |
| `eno.Game` | `any` (`eno.Game`) | Inherited from `SlotBaseModule` (`onLoad`) | Retrieves `BetData` model (`betDenom`, `totalBet`, `betLineNumber`, `totalCredit`) and dispatches `INCREASE_BET` / `DECREASE_BET` UI commands. |
| `ObserverObject` | `any` (`eno.ObserverObject`) | Inherited from `SlotBaseModule` (`onLoad`) | Deep property watcher tracking reactive state mutations on `BetData`. |
| `SlotSoundPlayerModule` | `SlotSoundPlayerModule` | Inherited from `SlotBaseModule` (`onLoad`) | Plays customized betting audio feedback (`BTN_BET_INCREASE`, `BTN_BET_DECREASE`). |
| `GameEventManager` | `GameEventManager` | Inherited from `SlotBaseModule` (`onLoad`) | Receives game-wide events such as bet locking and mode transitions. |

---

## 2. In-Depth Guide for Each Injected Service

### A. `gameLogic` (`eno.Game`)
* **Purpose**: Fetches betting data models, credit localization strings, and dispatches wager commands to backend controllers.
* **Usage**:
  ```typescript
  // Retrieving BetData Model in start()
  this.betModel = this.gameLogic.getDataModel().BetData;

  // Emitting Betting Commands
  onIncreaseBet(): void {
      this.playSfxIncreaseBet();
      this.gameLogic.emit(GameLogicUIEvents.INCREASE_BET);
  }

  onDecreaseBet(): void {
      this.playSfxDecreaseBet();
      this.gameLogic.emit(GameLogicUIEvents.DECREASE_BET);
  }

  // Credit Localization
  getCreditText(): string {
      return ` ${this.gameLogic.getGameText("CREDITS")}`;
  }
  ```

---

### B. `observer` (`ObserverObject`)
* **Purpose**: Binds reactive listeners to numeric betting fields and button interactivity toggles.
* **Usage**:
  ```typescript
  setupObserver(): void {
      this.observer.watch(this.betModel, "betDenom", this.onUpdateBetDenom.bind(this), this);
      this.observer.watch(this.betModel, "totalBet", this.onUpdateTotalBet.bind(this), this);
      this.observer.watch(this.betModel, "betLineNumber", this.onUpdateBetLineNumber.bind(this), this);
      this.observer.watch(this.betModel, "totalCredit", this.onUpdateTotalCredit.bind(this), this);
      this.observer.watch(this.betModel, "minBetEnable", this.onMinBetEnable.bind(this), this, { canTriggerSameValue: true });
      this.observer.watch(this.betModel, "maxBetEnable", this.onMaxBetEnable.bind(this), this, { canTriggerSameValue: true });
  }
  ```

---

### C. `soundPlayer` (`SlotSoundPlayerModule`)
* **Purpose**: Plays dedicated audio feedback when adjusting bet values with fallback to standard click SFX.
* **Usage**:
  ```typescript
  playSfxIncreaseBet(): void {
      if (!this.soundPlayer) return;
      if (this.sfxIncreaseBetId) {
          this.soundPlayer.playSfx(this.sfxIncreaseBetId);
      } else {
          this.soundPlayer.playSFXClick();
      }
  }
  ```
