---
id: "cc_slot_module:GameModeDirectorModule:method:forceResetGameMode"
title: "GameModeDirectorModule._forceResetGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_forceResetGameMode"]
---

# `GameModeDirectorModule._forceResetGameMode(): Promise<void>`

---

## 1. Method Signature
```typescript
_forceResetGameMode(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Updates wallet balance from server snapshot.
2. Force resumes the wallet.
3. Resets game state to IDLE (`this.resetGameState()`).
4. Clears win amount tracking (`this.dataStore.resetWinAmount()`).

---

## 3. Un-truncated Source Code Implementation
```typescript
_forceResetGameMode(): Promise<void> {
    // override code here
    this.gameLogic.updateCurrentWallet();
    this._resumeWallet(true); // force resume wallet
    this.resetGameState();
    this.dataStore.resetWinAmount();
    return Promise.resolve();
}
```
