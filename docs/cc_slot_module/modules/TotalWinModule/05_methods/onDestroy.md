---
id: "cc_slot_module:TotalWinModule:methods:onDestroy"
title: "TotalWinModule.onDestroy Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `TotalWinModule.onDestroy()`

---

## 1. Method Overview & Signature

Stops active money tween and cancels all scheduled node actions.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    if (this._tweenMoney) {
        this._tweenMoney.stop();
        this._tweenMoney = null;
    }
    this.node.stopAllActions();
}
```
