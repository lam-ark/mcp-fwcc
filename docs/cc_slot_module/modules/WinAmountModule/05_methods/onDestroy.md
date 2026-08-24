---
id: "cc_slot_module:WinAmountModule:methods:onDestroy"
title: "WinAmountModule.onDestroy Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `WinAmountModule.onDestroy()`

---

## 1. Method Overview & Signature

Stops running numeric count-up and fade-out tweens upon node destruction.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.stopTweenFade();
    this.stopTweenValue();
}
```
