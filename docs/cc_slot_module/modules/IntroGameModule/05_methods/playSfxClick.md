---
id: "cc_slot_module:IntroGameModule:methods:playSfxClick"
title: "IntroGameModule.playSfxClick Method"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "playSfxClick"]
---

# 📖 `IntroGameModule.playSfxClick()`

---

## 1. Method Overview & Signature

Plays button click sound effect through injected `soundPlayer`.

```typescript
public playSfxClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxClick(): void {
    this.soundPlayer && this.soundPlayer.playSFXClick();
}
```
