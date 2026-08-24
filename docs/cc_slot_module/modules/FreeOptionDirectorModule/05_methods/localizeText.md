---
id: "cc_slot_module:FreeOptionDirectorModule:method:localizeText"
title: "FreeOptionDirectorModule.localizeText() Method Specification"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "method", "localizeText", "i18n"]
---

# `FreeOptionDirectorModule.localizeText(): void`

---

## 1. Method Signature
```typescript
localizeText(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Retrieves localized string `"FREE_OPTION_GAME_REMIND"` from `this.gameLogic.getGameText()` and stores in `this.autoSelectText`.

---

## 3. Un-truncated Source Code Implementation
```typescript
localizeText(): void {
    this.autoSelectText = this.gameLogic.getGameText("FREE_OPTION_GAME_REMIND");
}
```
