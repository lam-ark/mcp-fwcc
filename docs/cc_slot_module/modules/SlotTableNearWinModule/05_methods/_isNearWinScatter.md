---
id: "cc_slot_module:SlotTableNearWinModule:method:_isNearWinScatter"
title: "SlotTableNearWinModule._isNearWinScatter Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_isNearWinScatter"]
---

# 🚀 `SlotTableNearWinModule._isNearWinScatter(): boolean`

---

## 1. Method Signature

```typescript
private _isNearWinScatter(): boolean
```

---

## 2. Algorithmic Steps

1. If `_isSkipEffect` is true, returns `false`.
2. Returns `true` if `_countScatter >= startAtScatterCount && _countScatter < stopAtScatterCount`.

---

## 3. Full Source Code

```typescript
_isNearWinScatter(): boolean {
    if (this._isSkipEffect) {
        return false;
    }
    return this._countScatter >= this.startAtScatterCount && this._countScatter < this.stopAtScatterCount;
}
```
