---
id: "cc_slot_mechanics:NudgeTableData:overview:architecture_and_role"
title: "NudgeTableData Architectural Role & Mechanics Overview"
category: "cc_slot_mechanics"
tags: ["NudgeTableData", "nudge_table_data", "cc_slot_mechanics", "overview", "architecture", "mechanics"]
---

# 🏛️ NudgeTableData Architectural Role & Mechanics Overview

---

## 1. Architectural Mission

`NudgeTableData` is a core component of the `cc-slot-mechanics` package (`assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeTableData.ts`).
- **Inheritance Chain**: `NudgeTableData` ➔ `SlotTableData`
- **Primary Responsibility**: Provides specialized slot mechanics execution, coordinate mathematics, and state management for advanced slot games.

```mermaid
graph TD
    Parent[SlotTableData] --> Mod[NudgeTableData]
    Mod --> State[Internal State & Data Pipeline]
    Mod --> Render[Visual Presentation & Animations]
```

---

## 2. Key Responsibilities

1. **State & Physics Coordination**:
   - Implements game-specific algorithms and state mutations.
2. **Director & Writer Integration**:
   - Dispatches step completion callbacks to `ScriptExecutor` to maintain non-blocking async command queues.
