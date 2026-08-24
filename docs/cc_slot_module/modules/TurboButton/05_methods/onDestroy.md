---
id: "cc_slot_module:TurboButton:methods:onDestroy"
title: "TurboButton.onDestroy Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `TurboButton.onDestroy()`

---

## 1. Method Overview & Signature

Releases reactive observers registered against `turboModel`.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.turboModel, this);
}
```
