---
id: "cc_slot_module:TotalWinModule:methods:finish"
title: "TotalWinModule.finish Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "finish"]
---

# 📖 `TotalWinModule.finish()`

---

## 1. Method Overview & Signature

Formats final tally string, halts particle systems, and schedules modal exit.

```typescript
public finish(): void
```

---

## 2. Complete Source Code Implementation

```typescript
finish(): void {
    this._lbWinAmount.string = this.moneyFormatter.formatMoney(this._totalWinAmount);
    this.playSoundEnd();
    this._isUpdating = false;
    this.stopParticle();
    tween(this.node)
        .delay(this.hideTime)
        .call(() => {
            this._lbWinAmount.string = '';
            this.exit();
        }).start();
}
```
