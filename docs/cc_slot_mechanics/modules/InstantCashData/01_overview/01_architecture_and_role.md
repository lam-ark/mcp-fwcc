---
id: "cc_slot_mechanics:InstantCashData:overview:architecture_and_role"
title: "InstantCashData Architectural Role & Mechanics Overview"
category: "cc_slot_mechanics"
tags: ["InstantCashData", "instant_cash_data", "cc_slot_mechanics", "overview", "architecture", "mechanics"]
---

# 🏛️ InstantCashData Architectural Role & Mechanics Overview

---

## 1. Architectural Mission

`InstantCashData` is a core component of the `cc-slot-mechanics` package (`assets/cc-common/cc-slot-mechanics/InstantCash/scripts/InstantCashData.ts`).
- **Inheritance Chain**: `InstantCashData` ➔ `BaseDataModule`
- **Primary Responsibility**: Provides specialized slot mechanics execution, coordinate mathematics, and state management for advanced slot games.

```mermaid
graph TD
    Parent[BaseDataModule] --> Mod[InstantCashData]
    Mod --> State[Internal State & Data Pipeline]
    Mod --> Render[Visual Presentation & Animations]
```

---

## 2. Key Responsibilities

1. **State & Physics Coordination**:
   - Implements game-specific algorithms and state mutations.
2. **Director & Writer Integration**:
   - Dispatches step completion callbacks to `ScriptExecutor` to maintain non-blocking async command queues.
