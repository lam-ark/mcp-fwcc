---
id: "cc_slot_module:TotalWinModule:methods:bindQuickShow"
title: "TotalWinModule.bindQuickShow Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "bindQuickShow"]
---

# 📖 `TotalWinModule.bindQuickShow()`

---

## 1. Method Overview & Signature

Enforces a 1-second interaction lock to prevent accidental instant skip clicks.

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
