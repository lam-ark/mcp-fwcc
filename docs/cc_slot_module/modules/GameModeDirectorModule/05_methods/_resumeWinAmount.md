---
id: "cc_slot_module:GameModeDirectorModule:method:resumeWinAmount"
title: "GameModeDirectorModule._resumeWinAmount() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_resumeWinAmount"]
---

# `GameModeDirectorModule._resumeWinAmount(winAmount?: number): Promise<void>`

---

## 1. Method Signature
```typescript
_resumeWinAmount(winAmount?: number): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits global UI event `this.eventManager.emit(GameUIEvents.WIN_AMOUNT.SYNC_WIN_AMOUNT, resumeWinAmount)` to restore the win display upon reconnection.

---

## 3. Un-truncated Source Code Implementation
```typescript
_resumeWinAmount(winAmount): Promise<void> {
    const resumeWinAmount = winAmount || this.dataStore.getResumeWinAmount();
    return this.eventManager.emit(GameUIEvents.WIN_AMOUNT.SYNC_WIN_AMOUNT, resumeWinAmount);
}
```
