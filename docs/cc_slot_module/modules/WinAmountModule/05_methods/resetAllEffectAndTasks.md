---
id: "cc_slot_module:WinAmountModule:methods:resetAllEffectAndTasks"
title: "WinAmountModule.resetAllEffectAndTasks Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "resetAllEffectAndTasks"]
---

# 📖 `WinAmountModule.resetAllEffectAndTasks()`

---

## 1. Method Overview & Signature

Protected cleanup routine invoked during scene or round resets.

```typescript
protected resetAllEffectAndTasks(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected resetAllEffectAndTasks(): void {
    this.clearWinAmount();
}
```
