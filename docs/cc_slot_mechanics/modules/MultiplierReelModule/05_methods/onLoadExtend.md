---
id: "cc_slot_mechanics:MultiplierReelModule:methods:onLoadExtend"
title: "MultiplierReelModule.onLoadExtend Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `MultiplierReelModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onLoadExtend(): void
```

- **Declaring Class**: `MultiplierReelModule` (`assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReelModule.ts`)
- **Source Code Location**: Lines 17 to 22
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onLoadExtend(): void {
		this._data = this.getComponent(MultiplierReelData);
		this._config = this.getComponent(MultiplierReelConfig);
        
		this.initReel();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **17** | `onLoadExtend(): void {` | Method entry signature declaring `onLoadExtend()` with return type `void`. |
| **18** | `this._data = this.getComponent(MultiplierReelData);` | Queries attached component instance from scene graph node. |
| **19** | `this._config = this.getComponent(MultiplierReelConfig);` | Queries attached component instance from scene graph node. |
| **20** | `` | Applies operational logic and state mutation. |
| **21** | `this.initReel();` | Applies operational logic and state mutation. |
| **22** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as MultiplierReelModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onLoadExtend()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
