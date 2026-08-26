---
id: "cc_slot_mechanics:HorizontalTableData:overview:architecture_and_role"
title: "HorizontalTableData Architectural Role & Mechanics Overview"
category: "cc_slot_mechanics"
tags: ["HorizontalTableData", "horizontal_table_data", "cc_slot_mechanics", "overview", "architecture", "mechanics"]
---

# 🏛️ HorizontalTableData Architectural Role & Mechanics Overview

---

## 1. Architectural Mission

`HorizontalTableData` is a core component of the `cc-slot-mechanics` package (`assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableData.ts`).
- **Inheritance Chain**: `HorizontalTableData` ➔ `SlotTableData`
- **Primary Responsibility**: Provides specialized slot mechanics execution, coordinate mathematics, and state management for advanced slot games.

```mermaid
graph TD
    Parent[SlotTableData] --> Mod[HorizontalTableData]
    Mod --> State[Internal State & Data Pipeline]
    Mod --> Render[Visual Presentation & Animations]
```

---

## 2. Key Responsibilities

1. **State & Physics Coordination**:
   - Implements game-specific algorithms and state mutations.
2. **Director & Writer Integration**:
   - Dispatches step completion callbacks to `ScriptExecutor` to maintain non-blocking async command queues.
