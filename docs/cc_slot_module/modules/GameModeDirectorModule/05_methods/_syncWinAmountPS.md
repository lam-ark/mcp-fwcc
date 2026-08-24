---
id: "cc_slot_module:GameModeDirectorModule:method:syncWinAmountPS"
title: "GameModeDirectorModule._syncWinAmountPS() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_syncWinAmountPS"]
---

# `GameModeDirectorModule._syncWinAmountPS(): Promise<void>`

---

## 1. Method Signature
```typescript
_syncWinAmountPS(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits global UI event `this.eventManager.emit(GameUIEvents.WIN_AMOUNT.SYNC_WIN_AMOUNT)` to synchronize win labels with `playSession` data.

---

## 3. Un-truncated Source Code Implementation
```typescript
_syncWinAmountPS(): Promise<void> {
    return this.eventManager.emit(GameUIEvents.WIN_AMOUNT.SYNC_WIN_AMOUNT);
}
```
