---
id: "cc_slot_mechanics:HorizontalReelModule:methods:initPositionByType"
title: "HorizontalReelModule.initPositionByType Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "initPositionByType"]
---

# 📖 `HorizontalReelModule.initPositionByType()`

---

## 1. Method Signature & Overview

```typescript
public initPositionByType(index: number, size: cc.Vec2): cc.Vec2
```

- **Declaring Class**: `HorizontalReelModule` (`assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalReelModule.ts`)
- **Source Code Location**: Lines 16 to 22
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	protected initPositionByType(index: number, size: cc.Vec2): cc.Vec2 {
		const { startX } = this.reelManager;
		const x = index * this.SYMBOL_WIDTH - startX;
		const y = 0;

		return v2(x, y);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **16** | `protected initPositionByType(index: number, size: cc.Vec2): cc.Vec2 {` | Method entry signature declaring `initPositionByType(index: number, size: cc.Vec2)` with return type `cc.Vec2`. |
| **17** | `const { startX } = this.reelManager;` | Local variable initialization allocating `{ startX }`. |
| **18** | `const x = index * this.SYMBOL_WIDTH - startX;` | Local variable initialization allocating `x`. |
| **19** | `const y = 0;` | Local variable initialization allocating `y`. |
| **20** | `` | Applies operational logic and state mutation. |
| **21** | `return v2(x, y);` | Returns computed value / promise to caller. |
| **22** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as HorizontalReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke initPositionByType(index: number, size: cc.Vec2)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return cc.Vec2
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
