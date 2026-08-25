---
id: "cc_slot_module:SlotBaseModule:properties_and_state:injected_services"
title: "SlotBaseModule Injected Services Deep Specification"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "properties", "injected_services", "inject", "applyInjections", "ioc"]
---

# 💉 SlotBaseModule Injected Services Deep Specification

---

## 1. Injected Services Specification Matrix

| Token | Type | When Provided | Purpose in Module |
| :--- | :--- | :--- | :--- |
| `eno.Game` | `any` (`eno.Game`) | `onLoad()` via `applyInjections` | Accesses data models, data store, network actions, and UI command dispatching. |
| `GameEventManager` | `GameEventManager` | `onLoad()` via `applyInjections` | Global cross-subsystem event bus for HUD, balance, cutscenes, and mode switching. |
| `ObserverObject` | `any` (`eno.ObserverObject`) | `onLoad()` via `applyInjections` | Deep reactive state observation engine watching mutations on data models. |
| `SlotSoundPlayerModule` | `SlotSoundPlayerModule` | `onLoad()` via `applyInjections` | Global sound effect and background music playback engine. |
| `GameModuleEvent` | `GameModuleEvent` | Injected via `setupModule()` | Mode-scoped isolated event bus preventing event cross-talk across game modes. |
| `gameMode` | `any` (`GAME_MODE_ENUM`) | Injected via `setupModule()` | Identifies active game mode (`NORMAL_GAME`, `FREE_GAME`, `BONUS_GAME`). |

---

## 2. In-Depth Guide for Each Service

### A. `eventManager` (`GameEventManager`)
* **Scope**: Game Singleton (resolved by `gameId`).
* **Purpose**: Cross-subsystem messaging connecting Director, HUD, Wallet, Jackpot, and Cutscenes.
* **Usage**:
  ```typescript
  // Subscription in registerEvents()
  this.eventManager.on(GameUIEvents.WIN_AMOUNT.UPDATE_WIN_AMOUNT, this.onUpdateWinAmount, this);

  // Emission with Promise concurrency
  await this.eventManager.emit(GameUIEvents.WALLET.SYNC_WALLET);

  // Teardown in onDestroy()
  onDestroy(): void {
      this.eventManager.targetOff(this);
  }
  ```

---

### B. `moduleEvent` (`GameModuleEvent`)
* **Scope**: Mode-Scoped (created per `GameModeDirectorModule`).
* **Purpose**: Intra-mode communication strictly isolated to the owning GameMode (Table, Reels, Paylines).
* **Usage**:
  ```typescript
  // Subscription in setupModule()
  setupModule(moduleEvent: GameModuleEvent, gameMode: any): void {
      super.setupModule(moduleEvent, gameMode);
      this.moduleEvent.on("TABLE_START_SPIN", this.onStartSpin, this);
      this.moduleEvent.on("TABLE_STOP_SPIN", this.onStopSpin, this);
  }

  // Teardown in onDestroy()
  onDestroy(): void {
      if (this.moduleEvent) {
          this.moduleEvent.targetOff(this);
      }
  }
  ```

---

### C. `observer` (`ObserverObject`)
* **Scope**: Reactive Data Layer.
* **Purpose**: Observes model properties and triggers reactive UI redraws automatically upon mutation without polling.
* **Usage**:
  ```typescript
  this.walletModel = this.gameLogic.getDataModel().WalletData;
  this.observer.watch(
      this.walletModel, 
      "walletAmount", 
      (newVal: number, oldVal: number) => {
          this.updateWalletLabel(newVal);
      }, 
      this, 
      { fireImmediately: true, canTriggerSameValue: false }
  );

  onDestroy(): void {
      if (this.observer && this.walletModel) {
          this.observer.releaseAll(this.walletModel, this);
      }
  }
  ```

---

### D. `gameLogic` (`eno.Game`)
* **Scope**: Game Singleton.
* **Purpose**: Accesses data layer models, localization strings, and global game state.
* **Usage**:
  ```typescript
  const betModel = this.gameLogic.getDataModel().BetData;
  const currency = this.gameLogic.getDataStore().getCurrency();
  const labelText = this.gameLogic.getGameText("WIN_LABEL");
  ```

---

### E. `soundPlayer` (`SlotSoundPlayerModule`)
* **Scope**: Audio Singleton.
* **Purpose**: Plays sound effects, clicks, reel spins, and ambient/feature BGM.
* **Usage**:
  ```typescript
  this.soundPlayer.playSFXClick();
  this.soundPlayer.playSFXSpin();
  this.soundPlayer.playBGM("bgm_free_game");
  ```
