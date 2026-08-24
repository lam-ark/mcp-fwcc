---
id: "cc_slot_module:IntroGameModule:methods:init"
title: "IntroGameModule.init Method"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "init"]
---

# 📖 `IntroGameModule.init()`

---

## 1. Method Overview & Signature

Initializes game ID, reads cached "Do not show again" preference from `sys.localStorage`, and applies initial visibility.

```typescript
public init(): void
```

---

## 2. Complete Source Code Implementation

```typescript
init(): void {
    this._gameId = this.gameConfig.GAME_ID || this.gameId;
    const cacheValue = JSON.parse(sys.localStorage.getItem("HideIntroGame")) || {};
    this._isHideIntroGame = !!cacheValue[this._gameId];
    this.node.active = !this._isHideIntroGame;
    if (!this._isHideIntroGame) {
        this.eventManager.emit(GameUIEvents.INTRO_GAME.SKIP_INTRO_GAME);
    }
    eno.setOpacity(this.node, 255);
    this.showButtonJoinGame(false);
}
```
