---
id: "cc_slot_module:SlotTableNearWinModule:method:_stopNearWinEffect"
title: "SlotTableNearWinModule._stopNearWinEffect Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_stopNearWinEffect"]
---

# 🚀 `SlotTableNearWinModule._stopNearWinEffect(): void`

---

## 1. Method Signature

```typescript
private _stopNearWinEffect(): void
```

---

## 2. Algorithmic Steps

1. If `!this._nearWinAnim`, exits.
2. If `!this.useSpine`, stops `cc.Animation`.
3. Hides overlay node via `this.nearWinEffect.active = false`.

---

## 3. Full Source Code

```typescript
_stopNearWinEffect(): void {
    if (!this._nearWinAnim) {
        return;
    }
    if (!this.useSpine) {
        this._nearWinAnim.stop();
    }
    this.nearWinEffect.active = false;
}
```
