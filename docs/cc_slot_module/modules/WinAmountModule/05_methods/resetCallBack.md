---
id: "cc_slot_module:WinAmountModule:methods:resetCallBack"
title: "WinAmountModule.resetCallBack Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "resetCallBack"]
---

# 📖 `WinAmountModule.resetCallBack()`

---

## 1. Method Overview & Signature

Resolves the active Promise completion callback and clears reference.

```typescript
public resetCallBack(): void
```

---

## 2. Complete Source Code Implementation

```typescript
resetCallBack(): void {
    this._callBackOnComplete && this._callBackOnComplete();
    this._callBackOnComplete = null;
}
```
