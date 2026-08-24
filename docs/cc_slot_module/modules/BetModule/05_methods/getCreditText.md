---
id: "cc_slot_module:BetModule:methods:getCreditText"
title: "BetModule.getCreditText Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "getCreditText"]
---

# 📖 `BetModule.getCreditText()`

---

## 1. Method Overview & Signature

Retrieves localized string for credits from `GameLogic`.

```typescript
public getCreditText(): string
```

---

## 2. Complete Source Code Implementation

```typescript
getCreditText(): string {
    return ` ${this.gameLogic.getGameText("CREDITS")}`;
}
```
