---
id: "cc_slot_module:SlotTableNearWinModule:method:_getAnimNearWin"
title: "SlotTableNearWinModule._getAnimNearWin Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_getAnimNearWin"]
---

# 🚀 `SlotTableNearWinModule._getAnimNearWin(): void`

---

## 1. Method Signature

```typescript
private _getAnimNearWin(): void
```

---

## 2. Algorithmic Steps

Queries `this.nearWinEffect` node and caches either `sp.Skeleton` (if `this.useSpine` is true) or `cc.Animation` (if false).

---

## 3. Full Source Code

```typescript
_getAnimNearWin(): void {
    if (this.useSpine) {
        this._nearWinAnim = this.nearWinEffect.getComponent(sp.Skeleton);
    } else {
        this._nearWinAnim = this.nearWinEffect.getComponent(Animation);
    }
}
```
