---
id: "cc_slot_module:TrialModeManager:director_writer:pipeline_orchestration"
title: "TrialModeManager Pipeline Integration"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 TrialModeManager Pipeline Integration

---

## 1. Event Orchestration

Emits startup initialization event:
```typescript
this.gameLogic.emit(GameLogicUIEvents.INIT_TRIAL_MODE, this.trialModeData);
```
Dispatches user selection events:
- `GameLogicUIEvents.PLAY_TUTORIAL_OPTION`
- `GameLogicUIEvents.SKIP_TRIAL_DATA`
