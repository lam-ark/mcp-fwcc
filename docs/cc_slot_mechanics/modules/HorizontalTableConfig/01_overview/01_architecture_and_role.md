---
id: "cc_slot_mechanics:HorizontalTableConfig:overview:architecture_and_role"
title: "HorizontalTableConfig Architectural Role & Mechanics Overview"
category: "cc_slot_mechanics"
tags: ["HorizontalTableConfig", "horizontal_table_config", "cc_slot_mechanics", "overview", "architecture", "mechanics"]
---

# 🏛️ HorizontalTableConfig Architectural Role & Mechanics Overview

---

## 1. Architectural Mission

`HorizontalTableConfig` is a core component of the `cc-slot-mechanics` package (`assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableConfig.ts`).
- **Inheritance Chain**: `HorizontalTableConfig` ➔ `TableModuleConfig`
- **Primary Responsibility**: Provides specialized slot mechanics execution, coordinate mathematics, and state management for advanced slot games.

```mermaid
graph TD
    Parent[TableModuleConfig] --> Mod[HorizontalTableConfig]
    Mod --> State[Internal State & Data Pipeline]
    Mod --> Render[Visual Presentation & Animations]
```

---

## 2. Key Responsibilities

1. **State & Physics Coordination**:
   - Implements game-specific algorithms and state mutations.
2. **Director & Writer Integration**:
   - Dispatches step completion callbacks to `ScriptExecutor` to maintain non-blocking async command queues.
