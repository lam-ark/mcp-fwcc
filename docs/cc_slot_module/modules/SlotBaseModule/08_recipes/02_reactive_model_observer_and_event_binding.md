---
id: "cc_slot_module:SlotBaseModule:recipes:reactive_model_observer_and_event_binding"
title: "Recipe: Combining ObserverObject & GameEventManager with Safe Cleanup"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "recipes", "observer_eventManager"]
---

# 💡 Recipe: Combining ObserverObject & GameEventManager with Safe Cleanup

---

## 1. Pattern Implementation

```typescript
export class MultiModelModule extends SlotBaseModule {
    private _walletModel: any;
    private _betModel: any;

    onLoadExtend(): void {
        this._walletModel = this.gameLogic.getDataModel().WalletData;
        this._betModel = this.gameLogic.getDataModel().BetData;

        this.observer.watch(this._walletModel, "walletAmount", this.onWalletChange.bind(this), this, { fireImmediately: true });
        this.observer.watch(this._betModel, "betValue", this.onBetChange.bind(this), this, { fireImmediately: true });
        
        this.eventManager.on("ON_JACKPOT_WIN", this.onJackpotWin, this);
    }

    onDestroy(): void {
        this.observer.releaseAll(this._walletModel, this);
        this.observer.releaseAll(this._betModel, this);
        this.eventManager.targetOff(this);
    }
}
```
