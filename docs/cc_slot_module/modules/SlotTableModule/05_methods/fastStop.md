---
id: "cc_slot_module:SlotTableModule:method:fastStop"
title: "SlotTableModule.fastStop() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "fastStop", "quick_stop"]
---

# `SlotTableModule.fastStop(): void`

---

## 1. Method Signature
```typescript
public fastStop(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks that current state is `TableSpinState.SHOWING_RESULT` and not already `STOPPING_IMMEDIATELY`.
2. Sets `this.onChangeState(TableSpinState.STOPPING_IMMEDIATELY)`.
3. Loops through `this.reels` and triggers `reelComponent.fastStop()`, snapping columns instantly to target symbol rows.

---

## 3. Un-truncated Source Code Implementation
```typescript
fastStop(): void {
    if (this.state === TableSpinState.STOPPING_IMMEDIATELY || this.state !== TableSpinState.SHOWING_RESULT) {
        return;
    }

    this.onChangeState(TableSpinState.STOPPING_IMMEDIATELY);
    this.reels.forEach((reelComponent) => {
        reelComponent.fastStop();
    });
}
```
