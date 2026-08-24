---
id: "cc_slot_module:GameModeDirectorModule:method:updateJackpotValue"
title: "GameModeDirectorModule.updateJackpotValue() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "updateJackpotValue"]
---

# `GameModeDirectorModule.updateJackpotValue(data: any): Promise<void>`

---

## 1. Method Signature
```typescript
updateJackpotValue(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits `UPDATE_TRIAL_JACKPOT_VALUE` or `UPDATE_JACKPOT_VALUE` with `data` payload to adjust UI values.

---

## 3. Un-truncated Source Code Implementation
```typescript
updateJackpotValue(data): Promise<void> {
    if (this.gameSettings.isTrialMode) {
        this.eventManager.emit(GameUIEvents.JACKPOT.UPDATE_TRIAL_JACKPOT_VALUE, data);
    } else {
        this.eventManager.emit(GameUIEvents.JACKPOT.UPDATE_JACKPOT_VALUE, data);
    }
    return Promise.resolve();
}
```
