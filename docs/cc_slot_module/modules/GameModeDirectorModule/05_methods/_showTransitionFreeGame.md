---
id: "cc_slot_module:GameModeDirectorModule:method:showTransitionFreeGame"
title: "GameModeDirectorModule._showTransitionFreeGame() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showTransitionFreeGame"]
---

# `GameModeDirectorModule._showTransitionFreeGame(): Promise<void>`

---

## 1. Method Signature
```typescript
async _showTransitionFreeGame(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Awaits `this._showScatterPayLine()`.
2. Awaits `this._showIntroGameCutscene({ cutsceneType: CUTSCENE_TYPE_ENUM.INTRO_FREE_GAME })`.
3. Resolves Promise.

---

## 3. Un-truncated Source Code Implementation
```typescript
async _showTransitionFreeGame(): Promise<void> {
    await this._showScatterPayLine();
    await this._showIntroGameCutscene({ cutsceneType: CUTSCENE_TYPE_ENUM.INTRO_FREE_GAME });
    return Promise.resolve();
}
```
