---
id: "cc_slot_module:JackpotWinModule:methods:bindQuickShow"
title: "JackpotWinModule.bindQuickShow Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "bindQuickShow"]
---

# 📖 `JackpotWinModule.bindQuickShow()`

---

## 1. Method Overview & Signature

Enforces a 2-second interaction lock to prevent accidental instant skip clicks.

```typescript
public bindQuickShow(): void
```

---

## 2. Complete Source Code Implementation

```typescript
bindQuickShow(): void {
    this._skippable = false;
    tween(this.node).delay(this.delayShowTime).call(() => {
        this._skippable = true;
    }).start();
}
```
