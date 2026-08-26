---
id: "cc_slot_mechanics:StickySymbolConfig:overview:architecture_and_role"
title: "StickySymbolConfig Architectural Role & Mechanics Overview"
category: "cc_slot_mechanics"
tags: ["StickySymbolConfig", "sticky_symbol_config", "cc_slot_mechanics", "overview", "architecture", "mechanics"]
---

# 🏛️ StickySymbolConfig Architectural Role & Mechanics Overview

---

## 1. Architectural Mission

`StickySymbolConfig` is a core component of the `cc-slot-mechanics` package (`assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolConfig.ts`).
- **Inheritance Chain**: `StickySymbolConfig` ➔ `Component`
- **Primary Responsibility**: Provides specialized slot mechanics execution, coordinate mathematics, and state management for advanced slot games.

```mermaid
graph TD
    Parent[Component] --> Mod[StickySymbolConfig]
    Mod --> State[Internal State & Data Pipeline]
    Mod --> Render[Visual Presentation & Animations]
```

---

## 2. Key Responsibilities

1. **State & Physics Coordination**:
   - Implements game-specific algorithms and state mutations.
2. **Director & Writer Integration**:
   - Dispatches step completion callbacks to `ScriptExecutor` to maintain non-blocking async command queues.
