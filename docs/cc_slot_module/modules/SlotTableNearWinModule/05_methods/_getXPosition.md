---
id: "cc_slot_module:SlotTableNearWinModule:method:_getXPosition"
title: "SlotTableNearWinModule._getXPosition Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_getXPosition"]
---

# 🚀 `SlotTableNearWinModule._getXPosition(col): number`

---

## 1. Method Signature

```typescript
private _getXPosition(col: number): number
```

---

## 2. Algorithmic Steps

Calculates X coordinate for placing the anticipation overlay centered over column index `col`:
$$X = \text{\_startX} + \text{config.SYMBOL\_WIDTH} \times \text{col}$$

---

## 3. Full Source Code

```typescript
_getXPosition(col: number): number {
    return this._startX + this.config.SYMBOL_WIDTH * col;
}
```
