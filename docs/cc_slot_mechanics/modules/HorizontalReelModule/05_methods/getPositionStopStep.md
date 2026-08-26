---
id: "cc_slot_mechanics:HorizontalReelModule:methods:getPositionStopStep"
title: "HorizontalReelModule.getPositionStopStep Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "getPositionStopStep"]
---

# 📖 `HorizontalReelModule.getPositionStopStep()`

---

## 1. Method Signature & Overview

```typescript
public getPositionStopStep(): 
```

- **Declaring Class**: `HorizontalReelModule` (`assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalReelModule.ts`)
- **Source Code Location**: Lines 79 to 85
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	getPositionStopStep(): { positionStep1: cc.Vec2, positionStep2: cc.Vec2 } {
		const stepDistance = this.currentMode.easingStop;
		const positionStep1 = new Vec2(-stepDistance, 0);
		const positionStep2 = new Vec2(stepDistance, 0);

		return { positionStep1, positionStep2 };
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **79** | `getPositionStopStep(): { positionStep1: cc.Vec2, positionStep2: cc.Vec2 } {` | Method entry signature declaring `getPositionStopStep()` with return type ``. |
| **80** | `const stepDistance = this.currentMode.easingStop;` | Local variable initialization allocating `stepDistance`. |
| **81** | `const positionStep1 = new Vec2(-stepDistance, 0);` | Local variable initialization allocating `positionStep1`. |
| **82** | `const positionStep2 = new Vec2(stepDistance, 0);` | Local variable initialization allocating `positionStep2`. |
| **83** | `` | Applies operational logic and state mutation. |
| **84** | `return { positionStep1, positionStep2 };` | Returns computed value / promise to caller. |
| **85** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as HorizontalReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke getPositionStopStep()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return 
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
