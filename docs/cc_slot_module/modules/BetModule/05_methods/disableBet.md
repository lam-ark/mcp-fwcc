---
id: "cc_slot_module:BetModule:methods:disableBet"
title: "BetModule.disableBet Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "disableBet"]
---

# 📖 `BetModule.disableBet()`

---

## 1. Method Overview & Signature

Disables interaction on both `increaseBet` and `decreaseBet` buttons.

```typescript
public disableBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
disableBet(): void {
    this.decreaseBet.interactable = false;
    this.increaseBet.interactable = false;
}
```
