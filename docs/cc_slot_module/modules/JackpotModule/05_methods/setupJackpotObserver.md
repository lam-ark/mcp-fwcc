---
id: "cc_slot_module:JackpotModule:methods:setupJackpotObserver"
title: "JackpotModule.setupJackpotObserver Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "setupJackpotObserver"]
---

# 📖 `JackpotModule.setupJackpotObserver()`

---

## 1. Method Overview & Signature

Watches `uiManagerData.isJackpotActive` to toggle jackpot HUD visibility.

```typescript
public setupJackpotObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupJackpotObserver(): void {
    this.observer.watch(this.uiManagerData, "isJackpotActive", this.showJackpot.bind(this), this, { fireImmediately: true });
}
```
