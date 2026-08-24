---
id: "cc_slot_module:ExtraBetModule:methods:playSfxIncreaseExtraBet"
title: "ExtraBetModule.playSfxIncreaseExtraBet Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "playSfxIncreaseExtraBet", "audio"]
---

# 📖 `ExtraBetModule.playSfxIncreaseExtraBet()`

---

## 1. Method Overview & Signature

Plays sound effect for extra bet increment.

```typescript
public playSfxIncreaseExtraBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxIncreaseExtraBet(): void {
    if (!this.soundPlayer) {
        return;
    }
    if (this.sfxIncreaseExtraBetId) {
        this.soundPlayer.playSfx(this.sfxIncreaseExtraBetId);
    } else {
        this.soundPlayer.playSFXClick();
    }
}
```
