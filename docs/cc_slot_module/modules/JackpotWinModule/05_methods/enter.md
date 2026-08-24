---
id: "cc_slot_module:JackpotWinModule:methods:enter"
title: "JackpotWinModule.enter Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "enter"]
---

# 📖 `JackpotWinModule.enter()`

---

## 1. Method Overview & Signature

Entry lifecycle hook initiating sound, initial values, coin particles, and number count-up.

```typescript
public enter(): void
```

---

## 2. Complete Source Code Implementation

```typescript
enter(): void {
    this.playSoundStart();
    this.initValue();
    this.startParticle();
    this.startUpdateWinAmount();
}
```
