---
id: "cc_slot_mechanics:MegawayModule:methods:onReelStopped"
title: "MegawayModule.onReelStopped Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "methods", "onReelStopped"]
---

# 📖 `MegawayModule.onReelStopped()`

---

## 1. Method Signature & Overview

```typescript
public onReelStopped(col: number): void
```

- **Declaring Class**: `MegawayModule` (`assets/cc-common/cc-slot-mechanics/Megaway/scripts/MegawayModule.ts`)
- **Source Code Location**: Lines 23 to 30
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onReelStopped(col: number): void {
		if(this._data.minCol > col) {
			return;
		}
		
		const ways = this._data.getTotalWayCol(col);
		this.updateMegawayString(ways);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **23** | `onReelStopped(col: number): void {` | Method entry signature declaring `onReelStopped(col: number)` with return type `void`. |
| **24** | `if(this._data.minCol > col) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **25** | `return;` | Applies operational logic and state mutation. |
| **26** | `}` | Method exit boundary, closing block scope. |
| **27** | `` | Applies operational logic and state mutation. |
| **28** | `const ways = this._data.getTotalWayCol(col);` | Local variable initialization allocating `ways`. |
| **29** | `this.updateMegawayString(ways);` | Applies operational logic and state mutation. |
| **30** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as MegawayModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onReelStopped(col: number)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
