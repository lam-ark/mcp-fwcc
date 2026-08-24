---
id: "cc_slot_module:GameModeDirectorModule:method:showStartRespinEffect"
title: "GameModeDirectorModule._showStartRespinEffect() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showStartRespinEffect"]
---

# `GameModeDirectorModule._showStartRespinEffect(): Promise<void>`

---

## 1. Method Signature
```typescript
async _showStartRespinEffect(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
If `this.dataStore.playSession.payLines` exists, blinks winning lines via `this._blinkAllPaylines()` and clears them with `this._clearPaylines()` before initiating the respin.

---

## 3. Un-truncated Source Code Implementation
```typescript
async _showStartRespinEffect(): Promise<void> {
    if (this.dataStore.playSession.payLines) {
        await this._blinkAllPaylines();
        await this._clearPaylines();
    }
    return Promise.resolve();
}
```
