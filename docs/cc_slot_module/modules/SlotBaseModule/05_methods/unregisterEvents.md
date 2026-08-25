---
id: "cc_slot_module:SlotBaseModule:methods:unregisterEvents"
title: "SlotBaseModule.unregisterEvents Method Deep Specification"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "methods", "unregisterEvents", "lifecycle", "targetOff", "cleanup"]
---

# 📖 `SlotBaseModule.unregisterEvents()` Deep Specification

---

## 1. Method Overview & Signature

`unregisterEvents` is a protected lifecycle cleanup hook designed for sub-classes to release event listener subscriptions, reactive model observers, and node event handlers before component destruction.

```typescript
protected unregisterEvents(): void
```

---

## 2. When Is It Called & Trigger Source

* **Trigger Moment**: Invoked during component teardown or scene transitions within `onDestroy()`.
* **Caller**: Subclasses invoking `this.unregisterEvents()` in their `onDestroy()` implementation.

---

## 3. Detailed Algorithmic Logic

1. Purges all global event subscriptions on `this.eventManager` bound to `this` context via `targetOff(this)`.
2. Purges all mode-scoped event subscriptions on `this.moduleEvent` bound to `this` context via `targetOff(this)`.
3. Releases reactive observers attached via `this.observer.releaseAll(...)`.
4. Removes local node touch and custom event listeners via `this.node.targetOff(this)`.

---

## 4. Complete Source Code Implementation

```typescript
protected unregisterEvents(): void {
    // Override in subclass
}
```

---

## 5. Subclass Implementation Pattern

```typescript
import { SlotBaseModule } from "cc-slot-module/Core/SlotBaseModule";

const { ccclass } = cc._decorator;

@ccclass
export class CustomFeatureModule extends SlotBaseModule {

    protected unregisterEvents(): void {
        // 1. Release all global event listeners
        if (this.eventManager) {
            this.eventManager.targetOff(this);
        }

        // 2. Release all mode-scoped event listeners
        if (this.moduleEvent) {
            this.moduleEvent.targetOff(this);
        }

        // 3. Release reactive model observers
        if (this.observer && this.gameLogic) {
            const dataModel = this.gameLogic.getDataModel();
            if (dataModel && dataModel.WalletData) {
                this.observer.releaseAll(dataModel.WalletData, this);
            }
        }

        // 4. Release node events
        this.node.targetOff(this);
    }

    onDestroy(): void {
        this.unregisterEvents();
        super.onDestroy && super.onDestroy();
    }
}
```

---

## 6. Cleanup Commands Comparison Table

| Cleanup Method | Scope & Effect | Mandatory Context |
| :--- | :--- | :--- |
| `this.eventManager.targetOff(this)` | Removes **all** global event subscriptions registered by `this` context | Mandatory in `onDestroy()`. |
| `this.eventManager.off(event, fn, this)`| Unregisters a single specific listener function | Used for temporary runtime unbinding. |
| `this.moduleEvent.targetOff(this)` | Removes **all** mode-scoped event subscriptions registered by `this` context | Mandatory in `onDestroy()`. |
| `this.observer.releaseAll(model, this)` | Releases all reactive property watchers attached by `this` | Mandatory for observed data models. |
