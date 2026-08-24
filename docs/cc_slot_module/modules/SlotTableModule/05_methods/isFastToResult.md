---
id: "cc_slot_module:SlotTableModule:method:isFastToResult"
title: "SlotTableModule.isFastToResult() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "isFastToResult"]
---

# `SlotTableModule.isFastToResult(): boolean`

---

## 1. Method Signature
```typescript
isFastToResult(): boolean
```

---

## 2. Detailed Algorithmic Execution Logic
Returns `true` if `this.state === TableSpinState.STOPPING_IMMEDIATELY`.

---

## 3. Un-truncated Source Code Implementation
```typescript
isFastToResult(): boolean {
    return this.state === TableSpinState.STOPPING_IMMEDIATELY;
}
```
