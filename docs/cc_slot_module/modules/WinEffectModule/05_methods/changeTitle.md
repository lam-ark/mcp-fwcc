---
id: "cc_slot_module:WinEffectModule:methods:changeTitle"
title: "WinEffectModule.changeTitle Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "changeTitle", "title_scale"]
---

# 📖 `WinEffectModule.changeTitle()`

---

## 1. Method Overview & Signature

Performs $2.0\times$ scale tween and switches title sprite frame to the new win level.

```typescript
public changeTitle(index: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
changeTitle(index): void {
    this._currentTitle = index;
    if (!this.title) {
        return;
    }

    this.playSfxChangeTitle(index);
    this.title.stopAllActions();
    tween(this.title)
        .to(0.3, { scale: 2 })
        .call(() => {
            this._sprTitle.spriteFrame = this.titleFrame[index];
        })
        .to(0.3, { scale: 1 })
        .call(() => {
            this.showTitle();
        })
        .start();
}
```
