---
id: "cc_slot_module:GameModeDirectorModule:method:stopCurrentGameMode"
title: "GameModeDirectorModule._stopCurrentGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_stopCurrentGameMode"]
---

# `GameModeDirectorModule._stopCurrentGameMode(): Promise<void>`

---

## 1. Method Signature
```typescript
_stopCurrentGameMode(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Resumes the wallet display.
2. Resumes Jackpot ticker.
3. Stops reels with a fallback beauty/random matrix via `this._stopSpinningTableWithRandomMatrix()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_stopCurrentGameMode(): Promise<void> {
    this.eventManager.emit(GameUIEvents.WALLET.RESUME_WALLET);
    if (this.gameSettings.isTrialMode) {
        this.eventManager.emit(GameUIEvents.JACKPOT.RESUME_TRIAL_JACKPOT);
    } else {
        this.eventManager.emit(GameUIEvents.JACKPOT.RESUME_JACKPOT);
    }
    return this._stopSpinningTableWithRandomMatrix();
}
```
