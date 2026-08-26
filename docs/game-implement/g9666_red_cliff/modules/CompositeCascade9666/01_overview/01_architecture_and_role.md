---
id: "game-implement:9666:module:CompositeCascade9666:overview"
title: "CompositeCascade9666 Architecture & Role Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CompositeCascade9666", "composite_cascade9666", "architecture", "overview"]
---

# 🏛️ `CompositeCascade9666` Architecture & Role Specification

- **Source File**: [`CompositeCascade9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/CompositeCascade9666.ts)
- **Class Hierarchy**: `CompositeCascade9666` ➔ `CompositeCascade`
- **Game ID**: `g9666` / `9666` (Red Cliff - Đại Chiến Xích Bích)

---

## 1. Architectural Mission

`CompositeCascade9666` is a specialized runtime component in the **Red Cliff (g9666)** slot engine.

```mermaid
graph TD
    SuperClass[CompositeCascade] --> TargetClass[CompositeCascade9666]
    TargetClass --> VarState[Variables & Properties]
    TargetClass --> MethodPipeline[Methods & Lifecycles]
    TargetClass --> EventBus[Event Manager / Module Event]
```

---

## 2. Core Responsibilities

1. **State & Lifecycle Management**:
   - Maintains 0 declared properties and variables with precise state transitions.
2. **Execution & Event Handling**:
   - Implements 2 custom and overridden methods interacting with Cocos Creator 2.4 and ARK Slot SDK.
