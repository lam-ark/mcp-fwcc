---
id: "cc_slot_module:TurboButton:methods:playSfxTurbo"
title: "TurboButton.playSfxTurbo Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "playSfxTurbo"]
---

# 📖 `TurboButton.playSfxTurbo()`

---

## 1. Method Overview & Signature

Plays either dedicated `sfxTurboOn`/`sfxTurboOff` sound clips or fallback generic button click SFX.

```typescript
public playSfxTurbo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxTurbo(): void {
    if (!this.soundPlayer) {
        return;
    }
    const active = this.turboModel.active;
    if (this.sfxTurboOn && this.sfxTurboOff) {
        this.soundPlayer.playSfx(active ? this.sfxTurboOff : this.sfxTurboOn);
    } else {
        this.soundPlayer.playSFXClick();
    }
}
```
