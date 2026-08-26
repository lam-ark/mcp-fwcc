---
id: "cc_slot_mechanics:NudgeSceneTest:pipeline:pipeline_orchestration"
title: "NudgeSceneTest Pipeline Orchestration & Writer Commands"
category: "cc_slot_mechanics"
tags: ["NudgeSceneTest", "nudge_scene_test", "cc_slot_mechanics", "pipeline", "orchestration"]
---

# 🎛️ NudgeSceneTest Pipeline Orchestration & Writer Commands

---

## 1. Script Writer Integration
Interacts with the Director's `ScriptExecutor` queue by generating step descriptors:

```typescript
makeScriptExecuteNudgeSceneTest(data: any) {
    return [
        {
            command: "_scriptNudgeSceneTestAction",
            data: data
        }
    ];
}
```
