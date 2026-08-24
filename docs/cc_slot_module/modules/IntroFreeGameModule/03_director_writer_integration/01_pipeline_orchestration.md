---
id: "cc_slot_module:IntroFreeGameModule:director_writer:pipeline_orchestration"
title: "IntroFreeGameModule Writer Pipeline Integration"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 IntroFreeGameModule Writer Pipeline Integration

---

## 1. Writer Command Trigger

Dispatched when free game trigger condition is verified:
```typescript
script.push({
    command: "SHOW_INTRO_FREE_GAME",
    data: { freeSpinCount: 10, multiplier: 2 }
});
```
`ScriptExecutor` dispatches `PLAY_CUTSCENE` targeting `CUTSCENE_TYPE_ENUM.INTRO_FREE_GAME`.
