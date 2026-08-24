---
id: "cc_slot_module:PaylineInfoModule:methods:getWinText"
title: "PaylineInfoModule.getWinText Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "getWinText"]
---

# 📖 `PaylineInfoModule.getWinText()`

---

## 1. Method Overview & Signature

Returns the appropriate localization key based on math system (`WIN_TEXT_1` vs `WIN`).

```typescript
public getWinText(): string
```

---

## 2. Complete Source Code Implementation

```typescript
getWinText(): string {
    return this.gameConfig.PAY_SYSTEM === PAY_SYSTEM_TYPE_ENUM.LINES ? "WIN_TEXT_1" : "WIN";
}
```
