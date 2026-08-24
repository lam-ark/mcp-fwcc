---
id: "cc_slot_module:ExtraBetModule:methods:playSfxDecreaseExtraBet"
title: "ExtraBetModule.playSfxDecreaseExtraBet Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "playSfxDecreaseExtraBet", "audio"]
---

# 📖 `ExtraBetModule.playSfxDecreaseExtraBet()`

---

## 1. Method Overview & Signature

Plays sound effect for extra bet decrement.

```typescript
public playSfxDecreaseExtraBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxDecreaseExtraBet(): void {
    if (!this.soundPlayer) {
        return;
    }
    if (this.sfxDecreaseExtraBetId) {
        this.soundPlayer.playSfx(this.sfxDecreaseExtraBetId);
    } else {
        this.soundPlayer.playSFXClick();
    }
}
```
