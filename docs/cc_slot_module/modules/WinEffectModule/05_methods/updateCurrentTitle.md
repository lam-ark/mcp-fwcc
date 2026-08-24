---
id: "cc_slot_module:WinEffectModule:methods:updateCurrentTitle"
title: "WinEffectModule.updateCurrentTitle Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "updateCurrentTitle"]
---

# 📖 `WinEffectModule.updateCurrentTitle()`

---

## 1. Method Overview & Signature

Monitors active numeric rolling total and promotes title to MEGA or SUPER win tiers.

```typescript
public updateCurrentTitle(): void
```

---

## 2. Complete Source Code Implementation

```typescript
updateCurrentTitle(): void {
    if (this.currentValue >= this._superWinAmount) {
        if (this._currentTitle !== WinEffectLevelEnum.SUPER) {
            this.changeTitle(WinEffectLevelEnum.SUPER);
        }
    } else if (this.currentValue >= this._megaWinAmount) {
        if (this._currentTitle !== WinEffectLevelEnum.MEGA) {
            this.changeTitle(WinEffectLevelEnum.MEGA);
        }
    }
}
```
