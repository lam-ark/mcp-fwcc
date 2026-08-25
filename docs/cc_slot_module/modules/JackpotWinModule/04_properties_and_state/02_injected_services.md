---
id: "cc_slot_module:JackpotWinModule:properties_and_state:injected_services"
title: "JackpotWinModule Injected Services Deep Specification"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "properties", "injected_services", "inject", "applyInjections", "ioc"]
---

# 💉 JackpotWinModule Injected Services Deep Specification

---

## 1. Injected Services Specification Matrix

| Token | Type | When Provided | Purpose in Module |
| :--- | :--- | :--- | :--- |
| `eno.MoneyTween` | `any` (`eno.MoneyTween`) | Inherited from `BaseCutscene` (`onLoad`) | Interpolates rolling numeric count-up animations for the jackpot reward value (`moneyTween.runNumber`). |
| `eno.MoneyFormatter` | `any` (`eno.MoneyFormatter`) | Inherited from `BaseCutscene` (`onLoad`) | Formats final jackpot integer values into localized currency strings upon completion (`moneyFormatter.formatMoney`). |
| `GameDataStore` | `GameDataStore` | Inherited from `BaseCutscene` (`onLoad`) | Reads jackpot metadata and currency codes. |
| `SlotGameSettings` | `SlotGameSettings` | Inherited from `BaseCutscene` (`onLoad`) | Evaluates turbo/fast play settings and speed multipliers. |
| `GameEventManager` | `GameEventManager` | Inherited from `SlotBaseModule` (`onLoad`) | Subscribes to global cutscene lifecycle events. |
| `SlotSoundPlayerModule` | `SlotSoundPlayerModule` | Inherited from `SlotBaseModule` (`onLoad`) | Controls celebration fanfare audio and sound ducking. |

---

## 2. In-Depth Guide for Injected Tween & Formatter Services

### A. `moneyTween` (`eno.MoneyTween`)
* **Role**: Runs smooth rolling number interpolations from 0 up to `jackpotValue`.
* **Standard 10s Presentation vs 1s Accelerated Skip**:
  ```typescript
  // 1. Natural 10-second count-up
  startUpdateWinAmount(): void {
      this._tweenMoney = this.moneyTween.runNumber(
          this._lbWinAmount.node, 
          this.animDuration, // default: 10s
          this.jackpotValue, 
          {
              onComplete: () => {
                  this.playSoundCountingEnd();
                  this._skippable = false;
                  this.finish();
              }
          }
      );
  }

  // 2. Fast-forwarded 1-second accelerated finish on user click
  onClick(): void {
      if (!this._isUpdating || !this._skippable || this._hasClicked) return;
      this._hasClicked = true;
      this.playSoundSkip();

      if (this._tweenMoney) {
          this._tweenMoney.stop();
          this._tweenMoney = null;
      }

      this._tweenMoney = this.moneyTween.runNumber(
          this._lbWinAmount.node, 
          1.0, // 1-second fast-forward
          this.jackpotValue, 
          {
              onComplete: () => {
                  this.playSoundCountingEnd();
                  this.finish();
              }
          }
      );
  }
  ```

---

### B. `moneyFormatter` (`eno.MoneyFormatter`)
* **Role**: Snaps the label text to the formatted currency string in `finish()`:
  ```typescript
  finish(): void {
      this._lbWinAmount.string = this.moneyFormatter.formatMoney(this.jackpotValue);
      this.playSoundEnd();
      this._isUpdating = false;
      this.stopParticle();
      
      tween(this.node)
          .delay(this.delayHideTime)
          .call(() => {
              this._lbWinAmount.string = '';
              this.exit();
          }).start();
  }
  ```
