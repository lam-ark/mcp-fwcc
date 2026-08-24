---
id: "cc_slot_module:ExtraBetModule:gotchas:stale_extra_bet_label_sync"
title: "Gotcha: Null Reference on Unassigned extraBetLabel"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "gotchas", "null_pointer"]
---

# ⚠️ Gotcha: Null Reference on Unassigned `extraBetLabel`

---

## 1. Problem Description

`onUpdateTotalBet()` writes `this.extraBetLabel.string = this.betModel.extraBetValue.toString()`. If `extraBetLabel` is null, games with optional Ante-Bet features throw a runtime exception.

---

## 2. Prevention

Always guard with null check:
```typescript
onUpdateTotalBet(): void {
    if (this.extraBetLabel && this.betModel) {
        this.extraBetLabel.string = (this.betModel.extraBetValue || 0).toString();
    }
}
```
