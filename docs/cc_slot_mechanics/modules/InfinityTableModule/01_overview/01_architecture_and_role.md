---
id: "cc_slot_mechanics:InfinityTableModule:overview:architecture_and_role"
title: "InfinityTableModule Architectural Role & Mechanics Overview"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "overview", "architecture", "mechanics"]
---

# 🏛️ InfinityTableModule Architectural Role & Mechanics Overview

---

## 1. Architectural Mission

`InfinityTableModule` is a core component of the `cc-slot-mechanics` package (`assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableModule.ts`).
- **Inheritance Chain**: `InfinityTableModule` ➔ `SlotTableModule`
- **Primary Responsibility**: Provides specialized slot mechanics execution, coordinate mathematics, and state management for advanced slot games.

```mermaid
graph TD
    Parent[SlotTableModule] --> Mod[InfinityTableModule]
    Mod --> State[Internal State & Data Pipeline]
    Mod --> Render[Visual Presentation & Animations]
```

---

## 2. Key Responsibilities

1. **State & Physics Coordination**:
   - Implements game-specific algorithms and state mutations.
2. **Director & Writer Integration**:
   - Dispatches step completion callbacks to `ScriptExecutor` to maintain non-blocking async command queues.
