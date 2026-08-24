---
id: "cc_slot_module:WinEffectModule:methods:showEffectWin"
title: "WinEffectModule.showEffectWin Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "showEffectWin"]
---

# 📖 `WinEffectModule.showEffectWin()`

---

## 1. Method Overview & Signature

Initializes normal celebratory modal presentation, pulsing label tweens, coin particles, and begins number count-up.

```typescript
public showEffectWin(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showEffectWin(): void {
    this._isShowNormalEffect = true;
    this.winInfo.active = true;
    if (this.overlayNode) {
        this.overlayNode.active = true;
    }

    this.playSoundStart();
    this.showWinAmount();
    this.showTitle();

    this.initValue();
    this.startParticle();
    this.startUpdateWinAmount();
}
```
