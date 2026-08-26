---
id: "game-implement:9666:module:UIManagerModule9666:overview"
title: "UIManagerModule9666 Architecture & Role Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "UIManagerModule9666", "uimanager_module9666", "architecture", "overview"]
---

# 🏛️ `UIManagerModule9666` Architecture & Role Specification

- **Source File**: [`UIManagerModule9666.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/UIManagerModule9666.ts)
- **Class Hierarchy**: `UIManagerModule9666` ➔ `UIManagerModule`
- **Game ID**: `g9666` / `9666` (Red Cliff - Đại Chiến Xích Bích)

---

## 1. Architectural Mission

`UIManagerModule9666` is a specialized runtime component in the **Red Cliff (g9666)** slot engine.

```mermaid
graph TD
    SuperClass[UIManagerModule] --> TargetClass[UIManagerModule9666]
    TargetClass --> VarState[Variables & Properties]
    TargetClass --> MethodPipeline[Methods & Lifecycles]
    TargetClass --> EventBus[Event Manager / Module Event]
```

---

## 2. Core Responsibilities

1. **State & Lifecycle Management**:
   - Maintains 1 declared properties and variables with precise state transitions.
2. **Execution & Event Handling**:
   - Implements 4 custom and overridden methods interacting with Cocos Creator 2.4 and ARK Slot SDK.
