---
id: "cc_slot_module:GameModeDirectorModule:method:updateWinningAmount"
title: "GameModeDirectorModule._updateWinningAmount() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_updateWinningAmount"]
---

# `GameModeDirectorModule._updateWinningAmount(data: any): Promise<void>`

---

## 1. Method Signature
```typescript
_updateWinningAmount(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits global UI event `this.eventManager.emit(GameUIEvents.WIN_AMOUNT.UPDATE_WIN_AMOUNT, data)` to trigger number rolling animations.

---

## 3. Un-truncated Source Code Implementation
```typescript
_updateWinningAmount(data): Promise<void> {
    return this.eventManager.emit(GameUIEvents.WIN_AMOUNT.UPDATE_WIN_AMOUNT, data);
}
```
