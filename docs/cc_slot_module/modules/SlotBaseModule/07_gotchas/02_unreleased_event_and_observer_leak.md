---
id: "cc_slot_module:SlotBaseModule:gotchas:unreleased_event_and_observer_leak"
title: "Gotcha: Memory Leaks & Phantom Callbacks from Unreleased Observers & Events"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "gotchas", "memory_leak", "cleanup", "eventManager", "moduleEvent", "observer"]
---

# ⚠️ Gotcha: Memory Leaks & Phantom Callbacks from Unreleased Observers & Events

---

## 1. Problem Description & Symptoms

In slot game execution, services like `eventManager` (Global Singleton), `moduleEvent` (Mode-Scoped Bus), and `observer` (Reactive Model Watcher) retain callback references bound to the component instance via `context: this`.

If a Node or Component is destroyed (`node.destroy()`, scene transition, return to lobby) without explicitly unbinding these subscriptions:
1. **Memory Leak**: The JavaScript Garbage Collector (GC) cannot reclaim the Component or its associated Cocos Node hierarchy because `GameEventManager.events` holds active strong references to `context: this`.
2. **Phantom Callbacks (Zombie Execution)**: Future spin events (e.g. `SPIN_START`, `UPDATE_WIN_AMOUNT`) continue triggering callbacks on destroyed instances.
3. **Fatal Runtime Crashes**:
   ```text
   TypeError: Cannot read properties of null (reading '_renderFlag')
   TypeError: Cannot read property 'active' of null
   ```

---

## 2. Root Cause Analysis

`GameEventManager` registers listeners in an internal dictionary:
```typescript
this.events[event].push({ listener, context });
```
When a node is destroyed in Cocos Creator, Cocos cleans up engine internals, but third-party and custom event managers maintain their internal arrays unless explicitly instructed to purge them.

---

## 3. Standard Code Solution & Prevention

Every subclass inheriting from `SlotBaseModule` must implement thorough context purging in `onDestroy()`:

```typescript
import { SlotBaseModule } from "cc-slot-module/Core/SlotBaseModule";

export class CustomSlotComponent extends SlotBaseModule {

    onDestroy(): void {
        // 1. Purge all Global Event Bus subscriptions (GameEventManager)
        if (this.eventManager) {
            this.eventManager.targetOff(this);
        }

        // 2. Purge all Mode-Scoped Event Bus subscriptions (GameModuleEvent)
        if (this.moduleEvent) {
            this.moduleEvent.targetOff(this);
        }

        // 3. Release all Reactive Model observers
        if (this.observer && this.gameLogic) {
            const dataModel = this.gameLogic.getDataModel();
            if (dataModel) {
                if (dataModel.WalletData) this.observer.releaseAll(dataModel.WalletData, this);
                if (dataModel.BetData) this.observer.releaseAll(dataModel.BetData, this);
                if (dataModel.JackpotData) this.observer.releaseAll(dataModel.JackpotData, this);
            }
        }

        // 4. Remove GameLogic event listeners
        if (this.gameLogic) {
            this.gameLogic.targetOff(this);
        }

        // 5. Remove Node UI event listeners
        this.node.targetOff(this);

        super.onDestroy && super.onDestroy();
    }
}
```

---

## 4. Pre-Release Verification Checklist

- [ ] Does the subclass register `this.eventManager.on(...)`? If yes, is `this.eventManager.targetOff(this)` present in `onDestroy()`?
- [ ] Does the subclass register `this.moduleEvent.on(...)`? If yes, is `this.moduleEvent.targetOff(this)` present in `onDestroy()`?
- [ ] Are all observed data models cleaned up via `this.observer.releaseAll(...)`?
- [ ] Are active async promises guarded with `cc.isValid(this.node)` checks after `await` calls?
