---
id: "cc_slot_module:GameModeDirectorModule:method:syncJackpot"
title: "GameModeDirectorModule._syncJackpot() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_syncJackpot"]
---

# `GameModeDirectorModule._syncJackpot(): Promise<void>`

---

## 1. Method Signature
```typescript
_syncJackpot(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
If `this.dataStore.playSession.jackpot` is present, updates the UI values via `this.updateJackpotValue(this.dataStore.getJackpotInfo())` and pauses ticker motion.

---

## 3. Un-truncated Source Code Implementation
```typescript
_syncJackpot(): Promise<void> {
    const { jackpot } = this.dataStore.playSession;
    if (jackpot) {
        this.updateJackpotValue(this.dataStore.getJackpotInfo());
        this.pauseJackpot();
    }
    return Promise.resolve();
}
```
