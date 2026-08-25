---
id: "cc_slot_module:WalletModule:properties_and_state:injected_services"
title: "WalletModule Injected Services Deep Specification"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "properties", "injected_services", "inject", "applyInjections", "ioc"]
---

# 💉 WalletModule Injected Services Deep Specification

---

## 1. Injected Services Specification Matrix

| Token | Type | When Provided | Purpose in Module |
| :--- | :--- | :--- | :--- |
| `GameDataStore` | `GameDataStore` | `onLoad()` via `applyInjections` | Inspects `currentGameMode` to gate balance updates during Free Spins (`currentGameMode !== NORMAL_GAME`). |
| `SlotGameSettings` | `SlotGameSettings` | `onLoad()` via `applyInjections` | Evaluates `isTrialMode` to route events to `trialWallet` vs `realWallet`. |
| `GameEventManager` | `GameEventManager` | Inherited from `SlotBaseModule` (`onLoad`) | Subscribes to global HUD events: `PAUSE_WALLET`, `RESUME_WALLET`, `SYNC_WALLET`. |
| `ObserverObject` | `any` (`eno.ObserverObject`) | Inherited from `SlotBaseModule` (`onLoad`) | Binds reactive state watchers to `WalletData.wallets` and `UIManagerData`. |
| `eno.Game` | `any` (`eno.Game`) | Inherited from `SlotBaseModule` (`onLoad`) | Retrieves root reactive data models (`WalletData`, `UIManagerData`). |
| `SlotSoundPlayerModule` | `SlotSoundPlayerModule` | Inherited from `SlotBaseModule` (`onLoad`) | Plays wallet balance animation ticks or sound effects. |

---

## 2. In-Depth Service Interfacing Guide

### A. `GameDataStore`
* **Purpose**: Mode-gating guard.
* **Usage**:
  ```typescript
  resumeWallet(): void {
      // Prevents premature wallet balance display synchronization while Free Spins or Bonus Mode are active
      if (this.dataStore.currentGameMode !== GAME_MODE_ENUM.NORMAL_GAME) {
          return;
      }
      // Resume wallet based on trial mode flag
      if (this.gameSettings.isTrialMode) {
          this.trialWallet.emit("RESUME_WALLET");
      } else {
          this.realWallet.emit("RESUME_WALLET");
      }
  }
  ```

---

### B. `SlotGameSettings`
* **Purpose**: Determines active currency stream routing.
* **Usage**:
  ```typescript
  pauseWallet(): void {
      if (this.gameSettings.isTrialMode) {
          this.trialWallet.emit("PAUSE_WALLET");
      } else {
          this.realWallet.emit("PAUSE_WALLET");
      }
  }
  ```

---

### C. `ObserverObject`
* **Purpose**: Watches nested dictionary properties in `WalletData` and boolean toggles in `UIManagerData`.
* **Usage**:
  ```typescript
  setupObserver(): void {
      this.observer.watch(this.uiManagerData, 'isWalletActive', this.onWalletActive.bind(this), this, { fireImmediately: true });
      this.observer.watch(this.uiManagerData, 'isWalletTrialActive', this.onTrialWalletActive.bind(this), this, { fireImmediately: true });
      this.observer.watch(this.uiManagerData, "isTrialModeActive", this.onSwitchMode.bind(this), this);

      const { WALLET_TYPE } = this.walletModel;
      this.observer.watch(this.walletModel, `wallets.${WALLET_TYPE.NORMAL}`, this.onUpdateWallet.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
      this.observer.watch(this.walletModel, `wallets.${WALLET_TYPE.TRIAL}`, this.onUpdateTrialWallet.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
  }
  ```
