---
id: "game-implement:9666:module:MockRuntime:overview"
title: "MockRuntime Architecture & Role Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "MockRuntime", "mock_runtime", "architecture", "overview"]
---

# 🏛️ `MockRuntime` Architecture & Role Specification

- **Source File**: [`MockRuntime.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Mock/Framework/MockRuntime.ts)
- **Class Hierarchy**: `MockRuntime` ➔ `cc.Component`
- **Game ID**: `g9666` / `9666` (Red Cliff - Đại Chiến Xích Bích)

---

## 1. Architectural Mission

`MockRuntime` is a specialized runtime component in the **Red Cliff (g9666)** slot engine.

```mermaid
graph TD
    SuperClass[cc.Component] --> TargetClass[MockRuntime]
    TargetClass --> VarState[Variables & Properties]
    TargetClass --> MethodPipeline[Methods & Lifecycles]
    TargetClass --> EventBus[Event Manager / Module Event]
```

---

## 2. Core Responsibilities

1. **State & Lifecycle Management**:
   - Maintains 2 declared properties and variables with precise state transitions.
2. **Execution & Event Handling**:
   - Implements 6 custom and overridden methods interacting with Cocos Creator 2.4 and ARK Slot SDK.
