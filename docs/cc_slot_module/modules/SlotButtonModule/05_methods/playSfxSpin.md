---
id: "cc_slot_module:SlotButtonModule:methods:playSfxSpin"
title: "SlotButtonNormal.playSfxSpin Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "playSfxSpin", "audio"]
---

# 📖 `SlotButtonNormal.playSfxSpin()`

---

## 1. Method Overview & Signature

Plays spin SFX if allowed by current button state (`NORMAL` or `HOVER`) and `skipSound` is false.

```typescript
public playSfxSpin(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxSpin(): void {
    const allowStatePlay = this.state === SPIN_BUTTON_STATE_ENUM.NORMAL || this.state === SPIN_BUTTON_STATE_ENUM.HOVER;
    if (!this.soundPlayer || this.skipSound || !allowStatePlay) {
        return;
    }

    if (this.sfxSpinId) {
        this.soundPlayer.playSfx(this.sfxSpinId);
    } else {
        this.soundPlayer.playSFXClick();
    }
}
```
