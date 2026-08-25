---
id: "cc_slot_module:JackpotModule:properties_and_state:injected_services"
title: "JackpotModule Injected Services Deep Specification"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "properties", "injected_services", "inject", "applyInjections", "ioc"]
---

# 💉 JackpotModule Injected Services Deep Specification

---

## 1. Injected Services Specification Matrix

| Token | Type | When Provided | Purpose in Module |
| :--- | :--- | :--- | :--- |
| `eno.Game` | `any` (`eno.Game`) | Inherited from `SlotBaseModule` (`onLoad`) | Retrieves `JackpotData` model (`index`, `jackpots`, `pauseUpdateJackpot`) and `UIManagerData` (`isJackpotActive`, `isTrialModeActive`). |
| `ObserverObject` | `any` (`eno.ObserverObject`) | Inherited from `SlotBaseModule` (`onLoad`) | Deep property watcher tracking reactive state mutations on `JackpotData.jackpots.${index}`. |
| `GameEventManager` | `GameEventManager` | Inherited from `SlotBaseModule` (`onLoad`) | Listens to global jackpot control events (`PAUSE_JACKPOT`, `RESUME_JACKPOT`, `UPDATE_JACKPOT_VALUE`). |
| `SlotSoundPlayerModule` | `SlotSoundPlayerModule` | Inherited from `SlotBaseModule` (`onLoad`) | Audio playback engine for jackpot tick and alert SFX. |

---

## 2. In-Depth Service Interfacing Guide

### A. `observer` (`ObserverObject`)
* **Dynamic Index Re-binding**: `JackpotModule` uses a dynamic observer subscription pattern:
  ```typescript
  setupObserver(): void {
      this.observer.watch(this.jackpotData, "index", (index: number) => {
          this.currentData[index] = this.jackpotData.jackpots[index];

          // Unbind previous index observer before binding new index
          this.observerJPIndex && this.observerJPIndex();
          this.observerJPIndex = this.observer.watch(
              this.jackpotData, 
              `jackpots.${index}`, 
              (data: any) => {
                  this.currentData[index] = this.jackpotData.jackpots[index];
                  this.renderAllJackpot(data, JACKPOT_PROGRESSIVE_TIME.PROGRESS);
              }, 
              this, 
              { fireImmediately: true, canTriggerSameValue: true }
          );

          this.renderAllJackpot(this.jackpotData.jackpots[index]);
      }, this, { fireImmediately: true });
  }
  ```

---

### B. `eventManager` (`GameEventManager`)
* **Usage in `onLoadExtend()`**:
  ```typescript
  onLoadExtend(): void {
      this.eventManager.on(GameUIEvents.JACKPOT.PAUSE_JACKPOT, this.pauseJackpot, this);
      this.eventManager.on(GameUIEvents.JACKPOT.RESUME_JACKPOT, this.resumeJackpot, this);
      this.eventManager.on(GameUIEvents.JACKPOT.UPDATE_JACKPOT_VALUE, this.updateJackpotValue, this);
  }
  ```
