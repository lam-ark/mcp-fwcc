---
id: "cc_slot_module:GameModeDirectorModule:method:pauseJackpot"
title: "GameModeDirectorModule.pauseJackpot() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "pauseJackpot"]
---

# `GameModeDirectorModule.pauseJackpot(): Promise<void>`

---

## 1. Method Signature
```typescript
pauseJackpot(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits `GameUIEvents.JACKPOT.PAUSE_TRIAL_JACKPOT` (in trial mode) or `GameUIEvents.JACKPOT.PAUSE_JACKPOT` to freeze incremental jackpot ticker animations during spin evaluation.

---

## 3. Un-truncated Source Code Implementation
```typescript
pauseJackpot(): Promise<void> {
    if (this.gameSettings.isTrialMode) {
        this.eventManager.emit(GameUIEvents.JACKPOT.PAUSE_TRIAL_JACKPOT);
    } else {
        this.eventManager.emit(GameUIEvents.JACKPOT.PAUSE_JACKPOT);
    }
    return Promise.resolve();
}
```
