---
id: "cc_slot_module:IntroGameModule:methods:onClickJoinGame"
title: "IntroGameModule.onClickJoinGame Method"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "onClickJoinGame"]
---

# 📖 `IntroGameModule.onClickJoinGame()`

---

## 1. Method Overview & Signature

Handles player tap on Join Game, persists preference, fades out modal, and broadcasts `HIDE_INTRO_GAME`.

```typescript
public onClickJoinGame(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onClickJoinGame(): void {
    this.playSfxClick();
    this.eventManager.emit(GameUIEvents.INTRO_GAME.ON_CLICK_JOIN_GAME);
    this.cacheHideIntroGame();
    tween(this.node)
        .call(() => eno.fadeOut(this.node, 0.2))
        .delay(0.2)
        .call(() => {
            this.node.active = false;
            this.eventManager.emit(GameUIEvents.INTRO_GAME.HIDE_INTRO_GAME, false);
        })
        .start();
}
```
