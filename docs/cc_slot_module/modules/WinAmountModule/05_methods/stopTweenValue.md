---
id: "cc_slot_module:WinAmountModule:methods:stopTweenValue"
title: "WinAmountModule.stopTweenValue Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "stopTweenValue"]
---

# 📖 `WinAmountModule.stopTweenValue()`

---

## 1. Method Overview & Signature

Stops active numeric count-up tween handle and clears reference.

```typescript
public stopTweenValue(): void
```

---

## 2. Complete Source Code Implementation

```typescript
stopTweenValue(): void {
    this._tweenValue && this._tweenValue.stop();
    this._tweenValue = null;
}
```
