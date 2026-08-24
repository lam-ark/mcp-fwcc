---
id: "cc_slot_module:GameModeDirectorModule:method:showTransitionGameMode"
title: "GameModeDirectorModule._showTransitionGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showTransitionGameMode"]
---

# `GameModeDirectorModule._showTransitionGameMode(): Promise<void>`

---

## 1. Method Signature
```typescript
async _showTransitionGameMode(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Queries target mode: `const nextMode = this.dataStore.getNextGameMode()`.
2. Routes to matching cutscene/payline transition:
   * `GAME_MODE_ENUM.BONUS_GAME` ➔ `this._showTransitionBonusGame()`
   * `GAME_MODE_ENUM.FREE_GAME` ➔ `this._showTransitionFreeGame()`
   * `GAME_MODE_ENUM.FREE_OPTION_GAME` ➔ `this._showTransitionFreeGameOption()`

---

## 3. Un-truncated Source Code Implementation
```typescript
async _showTransitionGameMode(): Promise<void> {
    const nextMode = this.dataStore.getNextGameMode();
    if (nextMode === GAME_MODE_ENUM.BONUS_GAME) {
        return this._showTransitionBonusGame();
    }
    if (nextMode === GAME_MODE_ENUM.FREE_GAME) {
        return this._showTransitionFreeGame();
    }
    if (nextMode === GAME_MODE_ENUM.FREE_OPTION_GAME) {
        return this._showTransitionFreeGameOption();
    }
    return Promise.resolve();
}
```
