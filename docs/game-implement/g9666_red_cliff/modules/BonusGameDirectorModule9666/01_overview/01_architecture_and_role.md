---
id: "game-implement:9666:module:BonusGameDirectorModule9666:overview"
title: "BonusGameDirectorModule9666 Architecture & Role Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "BonusGameDirectorModule9666", "bonus_game_director_module9666", "architecture", "overview"]
---

# 🏛️ `BonusGameDirectorModule9666` Architecture & Role Specification

- **Source File**: [`BonusGameDirectorModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/BonusGameDirectorModule9666.ts)
- **Class Hierarchy**: `BonusGameDirectorModule9666` ➔ `BonusGameDirectorModule`
- **Game ID**: `g9666` / `9666` (Red Cliff - Đại Chiến Xích Bích)

---

## 1. Architectural Mission

`BonusGameDirectorModule9666` is a specialized runtime component in the **Red Cliff (g9666)** slot engine.

```mermaid
graph TD
    SuperClass[BonusGameDirectorModule] --> TargetClass[BonusGameDirectorModule9666]
    TargetClass --> VarState[Variables & Properties]
    TargetClass --> MethodPipeline[Methods & Lifecycles]
    TargetClass --> EventBus[Event Manager / Module Event]
```

---

## 2. Core Responsibilities

1. **State & Lifecycle Management**:
   - Maintains 0 declared properties and variables with precise state transitions.
2. **Execution & Event Handling**:
   - Implements 0 custom and overridden methods interacting with Cocos Creator 2.4 and ARK Slot SDK.
