---
id: "cc_slot_module:JackpotModule:methods:showJackpot"
title: "JackpotModule.showJackpot Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "showJackpot"]
---

# 📖 `JackpotModule.showJackpot()`

---

## 1. Method Overview & Signature

Toggles visibility of the jackpot container node.

```typescript
public showJackpot(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showJackpot(isActive: boolean): void {
    this.node.active = isActive;
}
```
