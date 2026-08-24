---
id: "cc_slot_module:WinAmountModule:methods:stopTweenFade"
title: "WinAmountModule.stopTweenFade Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "stopTweenFade"]
---

# 📖 `WinAmountModule.stopTweenFade()`

---

## 1. Method Overview & Signature

Stops active fade-out tween handle and clears reference.

```typescript
public stopTweenFade(): void
```

---

## 2. Complete Source Code Implementation

```typescript
stopTweenFade(): void {
    this._tweenFade && this._tweenFade.stop();
    this._tweenFade = null;
}
```
