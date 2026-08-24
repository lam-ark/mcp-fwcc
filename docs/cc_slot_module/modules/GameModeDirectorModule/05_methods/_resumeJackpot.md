---
id: "cc_slot_module:GameModeDirectorModule:method:resumeJackpot"
title: "GameModeDirectorModule._resumeJackpot() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_resumeJackpot"]
---

# `GameModeDirectorModule._resumeJackpot(isForce: boolean): Promise<void>`

---

## 1. Method Signature
```typescript
_resumeJackpot(isForce: boolean = false): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits `GameUIEvents.JACKPOT.RESUME_TRIAL_JACKPOT` or `GameUIEvents.JACKPOT.RESUME_JACKPOT` with `isForce` flag to restore ticker scrolling after celebrations finish.

---

## 3. Un-truncated Source Code Implementation
```typescript
_resumeJackpot(isForce: boolean = false): Promise<void> {
    if (this.gameSettings.isTrialMode) {
        this.eventManager.emit(GameUIEvents.JACKPOT.RESUME_TRIAL_JACKPOT, isForce);
    } else {
        this.eventManager.emit(GameUIEvents.JACKPOT.RESUME_JACKPOT, isForce);
    }
    return Promise.resolve();
}
```
