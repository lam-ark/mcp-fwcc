---
id: "cc_slot_module:ExtraBetModule:methods:disableExtraBet"
title: "ExtraBetModule.disableExtraBet Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "disableExtraBet"]
---

# 📖 `ExtraBetModule.disableExtraBet()`

---

## 1. Method Overview & Signature

Disables both increment and decrement buttons on the Ante-Bet HUD.

```typescript
public disableExtraBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
disableExtraBet(): void {
    this.increaseExtraBet.interactable = false;
    this.decreaseExtraBet.interactable = false;
}
```
