---
id: "cc_slot_module:SlotBaseModule:methods:registerEvents"
title: "SlotBaseModule.registerEvents Method Deep Specification"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "methods", "registerEvents", "eventManager", "observer"]
---

# 📖 `SlotBaseModule.registerEvents()` Deep Specification

---

## 1. Method Overview & Signature

`registerEvents` is a protected lifecycle hook called automatically at the conclusion of `SlotBaseModule.onLoad()`, immediately after all Dependency Injection bindings (`applyInjections(this, gameId)`) have been resolved.

Subclasses override this method to bind:
1. Global event listeners on `this.eventManager` (`GameEventManager`).
2. Model observers on `this.observer` (`ObserverObject`).
3. Local Node UI interactions (`this.node.on(...)`).

```typescript
protected registerEvents(): void
```

---

## 2. When Is It Called & Trigger Source

* **Trigger Moment**: Step 4 of `SlotBaseModule.onLoad()` execution pipeline.
* **Caller**: Invoked internally by `SlotBaseModule.onLoad()`.
* **Execution Frequency**: Exactly once per component lifecycle upon node load.

---

## 3. Detailed Algorithmic Logic

1. Executed immediately after `applyInjections(this, gameId)` and `this.onLoadExtend()`.
2. Serves as a polymorphic virtual hook for subclasses to attach subscriptions.
3. Base implementation is a no-op virtual method.

---

## 4. Service Readiness Matrix

| Service / Property | State during `registerEvents()` | Usage Recommendation |
| :--- | :--- | :--- |
| `this.eventManager` | ✅ **Ready** | Ideal location for `this.eventManager.on(...)`. |
| `this.observer` | ✅ **Ready** | Ideal location for `this.observer.watch(...)`. |
| `this.gameLogic` | ✅ **Ready** | Available for accessing Data Models and Data Stores. |
| `this.soundPlayer` | ✅ **Ready** | Available for audio configuration. |
| `this.moduleEvent` | ❌ **NOT AVAILABLE (`null`)** | Do NOT invoke `this.moduleEvent.on(...)` here. Use `setupModule()`. |
| `this.gameMode` | ❌ **NOT AVAILABLE (`null`)** | Unassigned at this point. |

---

## 5. Complete Source Code Implementation

```typescript
protected registerEvents(): void {
    // Override in subclass
}
```

---

## 6. Subclass Implementation Pattern

```typescript
import { SlotBaseModule } from "cc-slot-module/Core/SlotBaseModule";
import { GameUIEvents } from "cc-slot-module/Core/GameUIEvents";

const { ccclass } = cc._decorator;

@ccclass
export class CustomWinAmountModule extends SlotBaseModule {

    protected registerEvents(): void {
        // 1. Global event manager subscriptions
        this.eventManager.on(GameUIEvents.WIN_AMOUNT.UPDATE_WIN_AMOUNT, this.onUpdateWinAmount, this);
        this.eventManager.on(GameUIEvents.WIN_AMOUNT.SYNC_WIN_AMOUNT, this.onSyncWinAmount, this);
        this.eventManager.on(GameUIEvents.WIN_AMOUNT.FADE_OUT_NUMBER, this.onFadeOutWinAmount, this);

        // 2. Reactive model observers
        const betModel = this.gameLogic.getDataModel().BetData;
        if (betModel) {
            this.observer.watch(betModel, "betValue", this.onBetValueChanged, this);
        }

        // 3. Local node events
        this.node.on(cc.Node.EventType.TOUCH_END, this.onNodeClicked, this);
    }

    private onUpdateWinAmount(data: any): void {
        // Win presentation logic
    }

    private onSyncWinAmount(winAmount: number): void {
        // Instant label update
    }

    private onFadeOutWinAmount(): void {
        // Label fade out
    }

    private onBetValueChanged(newVal: number): void {
        // Reset label on bet change
    }

    private onNodeClicked(): void {
        // Fast skip animation on tap
    }
}
```
