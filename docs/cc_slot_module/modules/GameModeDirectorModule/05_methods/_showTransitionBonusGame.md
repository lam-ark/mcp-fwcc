---
id: "cc_slot_module:GameModeDirectorModule:method:showTransitionBonusGame"
title: "GameModeDirectorModule._showTransitionBonusGame() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showTransitionBonusGame"]
---

# `GameModeDirectorModule._showTransitionBonusGame(): Promise<void>`

---

## 1. Method Signature
```typescript
async _showTransitionBonusGame(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Awaits `this._showBonusPayLine()`.
2. Awaits `this._showIntroGameCutscene({ cutsceneType: CUTSCENE_TYPE_ENUM.INTRO_BONUS_GAME })`.
3. Resolves Promise.

---

## 3. Un-truncated Source Code Implementation
```typescript
async _showTransitionBonusGame(): Promise<void> {
    await this._showBonusPayLine();
    await this._showIntroGameCutscene({ cutsceneType: CUTSCENE_TYPE_ENUM.INTRO_BONUS_GAME });
    return Promise.resolve();
}
```
