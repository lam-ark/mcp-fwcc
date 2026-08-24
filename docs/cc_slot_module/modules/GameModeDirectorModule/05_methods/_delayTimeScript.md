---
id: "cc_slot_module:GameModeDirectorModule:method:delayTimeScript"
title: "GameModeDirectorModule._delayTimeScript() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_delayTimeScript"]
---

# `GameModeDirectorModule._delayTimeScript(time: number): Promise<void>`

---

## 1. Method Signature
```typescript
_delayTimeScript(time: number = 0): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Creates a tween-based delay action on `this.node` to asynchronously pause script execution for `time` seconds.

---

## 3. Un-truncated Source Code Implementation
```typescript
_delayTimeScript(time: number = 0): Promise<void> {
    if (time <= 0) {
        return Promise.resolve();
    }
    return new Promise((resolve) => {
        this._tweenDelayTimeScript && this._tweenDelayTimeScript.stop();
        this._tweenDelayTimeScript = tween(this.node)
            .delay(time)
            .call(() => {
                this._tweenDelayTimeScript = null;
                resolve();
            })
            .start();
    });
};
```
