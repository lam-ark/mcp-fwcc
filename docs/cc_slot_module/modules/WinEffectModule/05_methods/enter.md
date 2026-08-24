---
id: "cc_slot_module:WinEffectModule:methods:enter"
title: "WinEffectModule.enter Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "enter"]
---

# 📖 `WinEffectModule.enter()`

---

## 1. Method Overview & Signature

Selects between normal celebratory count-up and Turbo / Fast-To-Result fast particle burst.

```typescript
public enter(): void
```

---

## 2. Complete Source Code Implementation

```typescript
enter(): void {
    this.node.stopAllActions();

    const isTurboActive = this.gameSettings.isTurboActive;
    const isFastToResult = this.gameSettings.isFastToResult;

    const winType: string = this.content.winType;
    if (winType) {
        this._winEffectLevel = WinEffectLevelEnum[winType];
    }

    if (isTurboActive || isFastToResult) {
        this.showFastEffectWin();
    } else {
        this.showEffectWin();
    }
}
```
