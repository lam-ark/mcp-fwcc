---
id: "cc_slot_module:BetModule:methods:playSfxIncreaseBet"
title: "BetModule.playSfxIncreaseBet Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "playSfxIncreaseBet", "audio"]
---

# 📖 `BetModule.playSfxIncreaseBet()`

---

## 1. Method Overview & Signature

Plays bet increment sound effect or falls back to generic click SFX.

```typescript
public playSfxIncreaseBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxIncreaseBet(): void {
    if (!this.soundPlayer) {
        return;
    }
    if (this.sfxIncreaseBetId) {
        this.soundPlayer.playSfx(this.sfxIncreaseBetId);
    } else {
        this.soundPlayer.playSFXClick();
    }
}
```
