---
id: "cc_slot_module:SlotTableNearWinModule:method:_canWinFree"
title: "SlotTableNearWinModule._canWinFree Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_canWinFree"]
---

# 🚀 `SlotTableNearWinModule._canWinFree(col): boolean`

---

## 1. Method Signature

```typescript
private _canWinFree(col: number): boolean
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `setupNearWin()` to determine if a Free Game feature trigger is mathematically possible.

---

## 3. Algorithmic Steps

Evaluates if minimum Scatter counts have landed up to column `col`:
- `col === 2 && _countScatter < 1` ➔ `false`
- `col === 3 && _countScatter < 2` ➔ `false`
- `col === 4 && _countScatter < 3` ➔ `false`
- Otherwise returns `true`.

---

## 4. Full Source Code

```typescript
_canWinFree(col: number): boolean {
    if (col === 2 && this._countScatter < 1) {
        return false;
    } // _|_|_|
    if (col === 3 && this._countScatter < 2) {
        return false;
    } // A|_|_|_|
    if (col === 4 && this._countScatter < 3) {
        return false;
    } // A|_|_|_|A
    return true;
}
```
