---
id: "cc_slot_module:IntroGameModule:methods:joinGameSuccess"
title: "IntroGameModule.joinGameSuccess Method"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "joinGameSuccess"]
---

# 📖 `IntroGameModule.joinGameSuccess()`

---

## 1. Method Overview & Signature

Checks whether player is reconnecting or has promotion data to automatically skip the intro modal.

```typescript
public joinGameSuccess({ joinGameData }): void
```

---

## 2. Complete Source Code Implementation

```typescript
joinGameSuccess({ joinGameData }): void {
    const hasSkipIntroGame = joinGameData.isResume || joinGameData.promotionData;
    if (hasSkipIntroGame) {
        this.node.active = false;
        this.eventManager.emit(GameUIEvents.INTRO_GAME.SKIP_INTRO_GAME);
    } else {
        this.showButtonJoinGame(true);
    }
}
```
