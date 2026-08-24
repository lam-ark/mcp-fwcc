---
id: "cc_slot_module:SlotTableNearWinModule:method:_playNearWinAnim"
title: "SlotTableNearWinModule._playNearWinAnim Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_playNearWinAnim"]
---

# 🚀 `SlotTableNearWinModule._playNearWinAnim(): void`

---

## 1. Method Signature

```typescript
private _playNearWinAnim(): void
```

---

## 2. Algorithmic Steps

1. If `!this._nearWinAnim`, exits.
2. If `this.useSpine` is true, calls `this._nearWinAnim.setAnimation(0, this.animationName, true)`.
3. Otherwise calls `this._nearWinAnim.play()`.

---

## 3. Full Source Code

```typescript
_playNearWinAnim(): void {
    if (!this._nearWinAnim) {
        return;
    }
    if (this.useSpine) {
        this._nearWinAnim.setAnimation(0, this.animationName, true);
    } else {
        this._nearWinAnim.play();
    }
}
```
