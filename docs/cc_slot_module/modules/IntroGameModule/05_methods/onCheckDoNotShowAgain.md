---
id: "cc_slot_module:IntroGameModule:methods:onCheckDoNotShowAgain"
title: "IntroGameModule.onCheckDoNotShowAgain Method"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "onCheckDoNotShowAgain"]
---

# 📖 `IntroGameModule.onCheckDoNotShowAgain()`

---

## 1. Method Overview & Signature

Toggles `_isHideIntroGame` state and plays button click SFX.

```typescript
public onCheckDoNotShowAgain(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onCheckDoNotShowAgain(): void {
    this.playSfxClick();
    this._isHideIntroGame = !this._isHideIntroGame;
}
```
