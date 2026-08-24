---
id: "cc_slot_module:GameEventManager:method:emit"
title: "GameEventManager.emit() Method Specification"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "method", "emit", "async", "promise_all"]
---

# `GameEventManager.emit(event: string, ...args: any[]): Promise<void>`

---

## 1. Method Signature
```typescript
public async emit(event: string, ...args: any[]): Promise<void>
```

---

## 2. When Is It Called & Trigger Source
* **Invoking Entity**: Any module or director notifying the game engine of a system event (e.g. `UPDATE_WALLET`, `RESET_MULTIPLIER`, `SPIN_START`).

---

## 3. Detailed Algorithmic Execution Logic
1. Checks `this.events[event]`. If empty, logs warning and returns immediately resolved Promise.
2. Maps each registered `{ listener, context }` entry into an execution promise:
   * Binds context: `context ? listener.bind(context) : listener`.
   * Invokes function with `...args`.
   * Wraps return value: if result is a `Promise`, returns it; otherwise returns `Promise.resolve()`.
   * Wraps each execution in `try / catch` to ensure one faulty listener does not break remaining subscribers.
3. Awaits `Promise.all(executions)` to complete all parallel async handlers.

---

## 4. Caller & Callee Call Graph
* **Callers**: `SlotBaseModule`, `BaseGameDirector`, `FreeGameDirectorModule`, `BetModule`, `WalletModule`.
* **Callees**: Subscribed callback functions across all listening modules.

---

## 5. Un-truncated Source Code Implementation
```typescript
async emit(event: string, ...args: any[]): Promise<void> {
    const listeners = this.events[event];
    if (!listeners || listeners.length === 0) {
        this._logger && this._logger.warn(this._logTag, 'No listeners for', event);
        return Promise.resolve();
    }

    const executions = listeners.map(({ listener, context }) => {
        const boundFn = context ? listener.bind(context) : listener;
        const ctxName = context && context.constructor && context.constructor.name || 'UnknownContext';
        this._logger && this._logger.log(this._logTag, 'Trigger', event, '→', ctxName);

        try {
            const result = boundFn(...args);
            return result instanceof Promise ? result : Promise.resolve();
        } catch (err) {
            error(err);
            this._logger && this._logger.error(this._logTag, 'Error in', event, 'listener', err);
            return Promise.resolve();
        }
    });

    await Promise.all(executions);
}
```
