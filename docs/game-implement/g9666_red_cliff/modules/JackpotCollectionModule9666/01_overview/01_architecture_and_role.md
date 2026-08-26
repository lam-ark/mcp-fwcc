---
id: "game-implement:9666:module:JackpotCollectionModule9666:overview"
title: "JackpotCollectionModule9666 Architecture & Role Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "JackpotCollectionModule9666", "jackpot_collection_module9666", "architecture", "overview"]
---

# 🏛️ `JackpotCollectionModule9666` Architecture & Role Specification

- **Source File**: [`JackpotCollectionModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionModule9666.ts)
- **Class Hierarchy**: `JackpotCollectionModule9666` ➔ `SlotBaseModule`
- **Game ID**: `g9666` / `9666` (Red Cliff - Đại Chiến Xích Bích)

---

## 1. Architectural Mission

`JackpotCollectionModule9666` is a specialized runtime component in the **Red Cliff (g9666)** slot engine.

```mermaid
graph TD
    SuperClass[SlotBaseModule] --> TargetClass[JackpotCollectionModule9666]
    TargetClass --> VarState[Variables & Properties]
    TargetClass --> MethodPipeline[Methods & Lifecycles]
    TargetClass --> EventBus[Event Manager / Module Event]
```

---

## 2. Core Responsibilities

1. **State & Lifecycle Management**:
   - Maintains 4 declared properties and variables with precise state transitions.
2. **Execution & Event Handling**:
   - Implements 0 custom and overridden methods interacting with Cocos Creator 2.4 and ARK Slot SDK.
