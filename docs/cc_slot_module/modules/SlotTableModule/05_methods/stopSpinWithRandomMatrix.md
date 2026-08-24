---
id: "cc_slot_module:SlotTableModule:method:stopSpinWithRandomMatrix"
title: "SlotTableModule.stopSpinWithRandomMatrix() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "stopSpinWithRandomMatrix", "fallback"]
---

# `SlotTableModule.stopSpinWithRandomMatrix(): Promise<void>`

---

## 1. Method Signature
```typescript
public stopSpinWithRandomMatrix(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. If already `TableSpinState.SHOWING_RESULT`, triggers `this.fastStop()` and returns a Promise awaiting `_tableStopCB`.
2. If state is not `TableSpinState.START`, resolves immediately.
3. Retrieves random matrix: `let randomMatrix = [...this.config.getRandomMatrix()];`.
4. Dispatches `this.stopSpin(randomMatrix, true)` followed by `this.fastStop()`, ensuring instant settling upon disconnects.

---

## 3. Un-truncated Source Code Implementation
```typescript
stopSpinWithRandomMatrix(): Promise<void> {
    if (this.state === TableSpinState.SHOWING_RESULT) {
        return new Promise((resolve) => {
            this.fastStop();
            this._tableStopCB = resolve;
        });
    }
    if (this.state !== TableSpinState.START) {
        return Promise.resolve();
    }
    let randomMatrix = [...this.config.getRandomMatrix()];
    return new Promise((resolve) => {
        this.stopSpin(randomMatrix, true).then(() => {
            resolve() 
        });
        this.fastStop();
    });
}
```
