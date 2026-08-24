---
id: "cc_slot_module:SpinTimesModule:methods:onDestroy"
title: "SpinTimesModule.onDestroy Method"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `SpinTimesModule.onDestroy()`

---

## 1. Method Overview & Signature

Releases reactive observers registered on `buttonNormalData`.

```typescript
protected onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected onDestroy(): void {
    this.observer.releaseAll(this.buttonNormalData, this);
}
```
