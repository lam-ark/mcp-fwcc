---
id: "cc_slot_module:SlotTableModule:method:resetAllEffectAndTasks"
title: "SlotTableModule.resetAllEffectAndTasks() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "resetAllEffectAndTasks"]
---

# `SlotTableModule.resetAllEffectAndTasks(): void`

---

## 1. Method Signature
```typescript
protected resetAllEffectAndTasks(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Delegates directly to `this.stopSpinWithRandomMatrix()` to abort active spins upon game mode changes.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected resetAllEffectAndTasks(): void {
    this.stopSpinWithRandomMatrix();
}
```
