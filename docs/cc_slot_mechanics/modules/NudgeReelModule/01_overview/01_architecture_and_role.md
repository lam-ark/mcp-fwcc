---
id: "cc_slot_mechanics:NudgeReelModule:overview:architecture_and_role"
title: "NudgeReelModule Architectural Role & Mechanics Overview"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "overview", "architecture", "mechanics"]
---

# 🏛️ NudgeReelModule Architectural Role & Mechanics Overview

---

## 1. Architectural Mission

`NudgeReelModule` is a core component of the `cc-slot-mechanics` package (`assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeReelModule.ts`).
- **Inheritance Chain**: `NudgeReelModule` ➔ `SlotReelModule`
- **Primary Responsibility**: Provides specialized slot mechanics execution, coordinate mathematics, and state management for advanced slot games.

```mermaid
graph TD
    Parent[SlotReelModule] --> Mod[NudgeReelModule]
    Mod --> State[Internal State & Data Pipeline]
    Mod --> Render[Visual Presentation & Animations]
```

---

## 2. Key Responsibilities

1. **State & Physics Coordination**:
   - Implements game-specific algorithms and state mutations.
2. **Director & Writer Integration**:
   - Dispatches step completion callbacks to `ScriptExecutor` to maintain non-blocking async command queues.
