---
id: "cc_slot_module:BetModule:methods:playSfxDecreaseBet"
title: "BetModule.playSfxDecreaseBet Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "playSfxDecreaseBet", "audio"]
---

# 📖 `BetModule.playSfxDecreaseBet()`

---

## 1. Method Overview & Signature

Plays bet decrement sound effect or falls back to generic click SFX.

```typescript
public playSfxDecreaseBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxDecreaseBet(): void {
    if (!this.soundPlayer) {
        return;
    }
    if (this.sfxDecreaseBetId) {
        this.soundPlayer.playSfx(this.sfxDecreaseBetId);
    } else {
        this.soundPlayer.playSFXClick();
    }
}
```
