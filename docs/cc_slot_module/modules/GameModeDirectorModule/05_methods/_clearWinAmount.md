---
id: "cc_slot_module:GameModeDirectorModule:method:clearWinAmount"
title: "GameModeDirectorModule._clearWinAmount() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_clearWinAmount"]
---

# `GameModeDirectorModule._clearWinAmount(): Promise<void>`

---

## 1. Method Signature
```typescript
_clearWinAmount(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits global UI event `this.eventManager.emit(GameUIEvents.WIN_AMOUNT.FADE_OUT_NUMBER)` to fade out the previous round's winning numbers.

---

## 3. Un-truncated Source Code Implementation
```typescript
_clearWinAmount(): Promise<void> {
    return this.eventManager.emit(GameUIEvents.WIN_AMOUNT.FADE_OUT_NUMBER);
}
```
