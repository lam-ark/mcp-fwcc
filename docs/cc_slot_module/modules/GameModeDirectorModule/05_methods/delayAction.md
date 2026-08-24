---
id: "cc_slot_module:GameModeDirectorModule:method:delayAction"
title: "GameModeDirectorModule.delayAction() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "delayAction"]
---

# `GameModeDirectorModule.delayAction(time: number): Promise<void>`

---

## 1. Method Signature
```typescript
delayAction(time: number = 0): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. If `time <= 0`, resolves immediately.
2. Registers a cancellable callback `this._delayActionCB` using `this.scheduleOnce()`.
3. Clears callback reference upon trigger and resolves Promise.

---

## 3. Un-truncated Source Code Implementation
```typescript
delayAction(time: number = 0): Promise<void> {
    if (time <= 0) {
        return Promise.resolve();
    }
    return new Promise((resolve) => {
        this._delayActionCB = () => {
            this._delayActionCB = null;
            resolve();
        }

        this.scheduleOnce(this._delayActionCB, time);
    });
};
```
