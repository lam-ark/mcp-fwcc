---
id: "cc_slot_module:IntroGameModule:methods:cacheHideIntroGame"
title: "IntroGameModule.cacheHideIntroGame Method"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "cacheHideIntroGame"]
---

# 📖 `IntroGameModule.cacheHideIntroGame()`

---

## 1. Method Overview & Signature

Serializes user preference into `sys.localStorage`.

```typescript
public cacheHideIntroGame(): void
```

---

## 2. Complete Source Code Implementation

```typescript
cacheHideIntroGame(): void {
    const cacheValue = {};
    cacheValue[this._gameId] = this._isHideIntroGame;
    sys.localStorage.setItem("HideIntroGame", JSON.stringify(cacheValue));
}
```
