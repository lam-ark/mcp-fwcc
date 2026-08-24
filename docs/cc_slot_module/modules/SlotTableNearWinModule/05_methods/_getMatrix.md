---
id: "cc_slot_module:SlotTableNearWinModule:method:_getMatrix"
title: "SlotTableNearWinModule._getMatrix Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_getMatrix"]
---

# 🚀 `SlotTableNearWinModule._getMatrix(data): string[][]`

---

## 1. Method Signature

```typescript
private _getMatrix(data: string[][]): string[][]
```

---

## 2. Algorithmic Steps

Performs a shallow spread copy of the 2D string matrix to prevent inadvertent in-place mutation.

---

## 3. Full Source Code

```typescript
_getMatrix(data: string[][]): string[][] {
    return [...data];
}
```
