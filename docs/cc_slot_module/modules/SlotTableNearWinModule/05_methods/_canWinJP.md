---
id: "cc_slot_module:SlotTableNearWinModule:method:_canWinJP"
title: "SlotTableNearWinModule._canWinJP Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_canWinJP"]
---

# 🚀 `SlotTableNearWinModule._canWinJP(col): boolean`

---

## 1. Method Signature

```typescript
private _canWinJP(col: number): boolean
```

---

## 2. Algorithmic Steps

Checks whether the current Jackpot count strictly matches `col + 1` (consecutive contiguous Jackpot symbols across reels from left to right).

---

## 3. Full Source Code

```typescript
_canWinJP(col: number): boolean {
    return this._countJp === col + 1;
}
```
