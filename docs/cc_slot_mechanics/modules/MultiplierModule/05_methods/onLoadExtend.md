---
id: "cc_slot_mechanics:MultiplierModule:methods:onLoadExtend"
title: "MultiplierModule.onLoadExtend Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `MultiplierModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onLoadExtend(): void
```

- **Declaring Class**: `MultiplierModule` (`assets/cc-common/cc-slot-mechanics/Multiplier/scripts/MultiplierModule.ts`)
- **Source Code Location**: Lines 18 to 20
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onLoadExtend(): void {
		this._multiplierData = this.getComponent(MultiplierData);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **18** | `onLoadExtend(): void {` | Method entry signature declaring `onLoadExtend()` with return type `void`. |
| **19** | `this._multiplierData = this.getComponent(MultiplierData);` | Queries attached component instance from scene graph node. |
| **20** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as MultiplierModule
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
