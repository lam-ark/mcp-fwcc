---
id: "cc_slot_module:IntroGameModule:methods:onLoadExtend"
title: "IntroGameModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `IntroGameModule.onLoadExtend()`

---

## 1. Method Overview & Signature

Subscribes to `JOIN_GAME_SUCCESS` and calls `this.init()`.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.on(GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS, this.joinGameSuccess, this);
    this.init();
}
```
