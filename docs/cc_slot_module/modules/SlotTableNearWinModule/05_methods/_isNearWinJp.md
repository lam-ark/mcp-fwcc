---
id: "cc_slot_module:SlotTableNearWinModule:method:_isNearWinJp"
title: "SlotTableNearWinModule._isNearWinJp Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_isNearWinJp"]
---

# 🚀 `SlotTableNearWinModule._isNearWinJp(): boolean`

---

## 1. Method Signature

```typescript
private _isNearWinJp(): boolean
```

---

## 2. Algorithmic Steps

1. If `_isSkipEffect` is true, returns `false`.
2. Returns `true` if `_countJp >= startAtJackpotCount && _countJp < stopAtJackpotCount`.

---

## 3. Full Source Code

```typescript
_isNearWinJp(): boolean {
    if (this._isSkipEffect) {
        return false;
    }
    return this._countJp >= this.startAtJackpotCount && this._countJp < this.stopAtJackpotCount;
}
```
