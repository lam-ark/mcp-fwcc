---
id: "cc_slot_module:PaylineInfoModule:methods:localizeText"
title: "PaylineInfoModule.localizeText Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "localizeText"]
---

# 📖 `PaylineInfoModule.localizeText()`

---

## 1. Method Overview & Signature

Fetches localized string translations for "LINE" and "WIN" keys.

```typescript
public localizeText(): void
```

---

## 2. Complete Source Code Implementation

```typescript
localizeText(): void {
    this.lineText = this.gameLogic.getGameText("LINE");
    this.winText = this.gameLogic.getGameText(this.getWinText());
}
```
