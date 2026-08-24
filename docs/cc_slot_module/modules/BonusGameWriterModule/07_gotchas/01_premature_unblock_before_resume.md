---
id: "cc_slot_module:BonusGameWriterModule:gotcha:premature_unblock_before_resume"
title: "Gotcha: Premature Unblocking Before Reconnection Recovery"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "gotchas", "resume_order"]
---

# ⚠️ Gotcha: Premature Unblocking Before Reconnection Recovery

## 1. Defect Symptom
If `makeScriptResumeGameMode()` emits `_unblockBonusGame` before `_resumeOpenedBoxes`, the player can tap a chest while the prior session's opened boxes are still animating or rendering.

---

## 2. Recommended Resolution
Strictly maintain the 4-step resume sequence:
```typescript
makeScriptResumeGameMode(): any[] {
    return [
        { command: "_blockBonusGame" },       // 1. Lock touch first
        { command: "_resumeOpenedBoxes" },    // 2. Restore past picks visually
        { command: "_unblockBonusGame" },     // 3. Unlock untouched boxes
        { command: "_startCountDown" },       // 4. Resume 15s timer
    ];
}
```
