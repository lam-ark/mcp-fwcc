---
id: "cc_slot_module:SlotTableNearWinModule:method:_canWinBonus"
title: "SlotTableNearWinModule._canWinBonus Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_canWinBonus"]
---

# 🚀 `SlotTableNearWinModule._canWinBonus(col): boolean`

---

## 1. Method Signature

```typescript
private _canWinBonus(col: number): boolean
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `setupNearWin()` during matrix column iteration to determine if sufficient Bonus symbols remain achievable.

---

## 3. Algorithmic Steps

1. `col === 2 && _countBonus < 1` ➔ returns `false`.
2. `col === 3 && _countBonus < 2` ➔ returns `false`.
3. `col === 4 && _countBonus < 3` ➔ returns `false`.
4. Otherwise returns `true`.

---

## 4. Full Source Code

```typescript
_canWinBonus(col: number): boolean {
    if (col === 2 && this._countBonus < 1) {
        return false;
    }
    if (col === 3 && this._countBonus < 2) {
        return false;
    }
    if (col === 4 && this._countBonus < 3) {
        return false;
    }
    return true;
}
```
