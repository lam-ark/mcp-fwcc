---
id: "cc_slot_module:SlotTableNearWinModule:method:resetNearWin"
title: "SlotTableNearWinModule.resetNearWin Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "resetNearWin"]
---

# 🚀 `SlotTableNearWinModule.resetNearWin(): void`

---

## 1. Method Signature

```typescript
public resetNearWin(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Triggered via `this.node.emit("RESET_NEARWIN")` by `SlotTableModule` or when all reels finish stopping.

---

## 3. Algorithmic Steps

1. Resets counters `_countScatter`, `_countBonus`, `_countJp` to 0.
2. Clears `_nearWinData.length = 0`.
3. Calls `_stopNearWinEffect()` to hide and halt overlay animation.
4. Calls `_stopSoundNearWin()` to stop tension sound effect.

---

## 4. Full Source Code

```typescript
resetNearWin(): void {
    this._countScatter = 0;
    this._countBonus = 0;
    this._countJp = 0;
    this._nearWinData.length = 0;
    this._stopNearWinEffect();
    this._stopSoundNearWin();
}
```
