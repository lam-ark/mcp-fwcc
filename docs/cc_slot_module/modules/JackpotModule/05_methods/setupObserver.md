---
id: "cc_slot_module:JackpotModule:methods:setupObserver"
title: "JackpotModule.setupObserver Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `JackpotModule.setupObserver()`

---

## 1. Method Overview & Signature

Watches bet `index`, nested jackpot pools, pause flags, and mode switching.

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
    this.observer.watch(this.jackpotData, "index", (index) => {
        this.currentData[index] = this.jackpotData.jackpots[index];

        this.observerJPIndex && this.observerJPIndex();
        this.observerJPIndex = this.observer.watch(this.jackpotData, `jackpots.${index}`, (data) => {
            this.currentData[index] = this.jackpotData.jackpots[index];
            this.renderAllJackpot(data, JACKPOT_PROGRESSIVE_TIME.PROGRESS);
        }, this, { fireImmediately: true, canTriggerSameValue: true });

        this.renderAllJackpot(this.jackpotData.jackpots[index]);
    }, this, { fireImmediately: true });

    this.observer.watch(this.jackpotData, "pauseUpdateJackpot", (isPause) => {
        this.isPauseJackpot = isPause;
    }, this, { fireImmediately: true });

    this.observer.watch(this.jackpotData, "jackpots", this.updateJackpotData.bind(this), this, { fireImmediately: true });
    this.observer.watch(this.uiManagerData, "isTrialModeActive", this.onSwitchMode.bind(this), this);
}
```
