---
id: "cc_slot_mechanics:NudgeSceneTest:overview:architecture_and_role"
title: "NudgeSceneTest Architectural Role & Mechanics Overview"
category: "cc_slot_mechanics"
tags: ["NudgeSceneTest", "nudge_scene_test", "cc_slot_mechanics", "overview", "architecture", "mechanics"]
---

# 🏛️ NudgeSceneTest Architectural Role & Mechanics Overview

---

## 1. Architectural Mission

`NudgeSceneTest` is a core component of the `cc-slot-mechanics` package (`assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeSceneTest.ts`).
- **Inheritance Chain**: `NudgeSceneTest` ➔ `Component`
- **Primary Responsibility**: Provides specialized slot mechanics execution, coordinate mathematics, and state management for advanced slot games.

```mermaid
graph TD
    Parent[Component] --> Mod[NudgeSceneTest]
    Mod --> State[Internal State & Data Pipeline]
    Mod --> Render[Visual Presentation & Animations]
```

---

## 2. Key Responsibilities

1. **State & Physics Coordination**:
   - Implements game-specific algorithms and state mutations.
2. **Director & Writer Integration**:
   - Dispatches step completion callbacks to `ScriptExecutor` to maintain non-blocking async command queues.
