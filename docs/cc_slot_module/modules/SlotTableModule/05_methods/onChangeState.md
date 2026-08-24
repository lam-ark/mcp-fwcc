---
id: "cc_slot_module:SlotTableModule:method:onChangeState"
title: "SlotTableModule.onChangeState() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "onChangeState"]
---

# `SlotTableModule.onChangeState(state: TableSpinState): void`

---

## 1. Method Signature
```typescript
protected onChangeState(state: TableSpinState): void
```

---

## 2. Detailed Algorithmic Execution Logic
Sets `this.state = state` and forwards to `this.onChangeStateExtend(state)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected onChangeState(state: TableSpinState): void {
    this.state = state;
    this.onChangeStateExtend(state);
}
```
