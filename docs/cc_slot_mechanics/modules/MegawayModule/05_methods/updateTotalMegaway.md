---
id: "cc_slot_mechanics:MegawayModule:methods:updateTotalMegaway"
title: "MegawayModule.updateTotalMegaway Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "methods", "updateTotalMegaway"]
---

# 📖 `MegawayModule.updateTotalMegaway()`

---

## 1. Method Signature & Overview

```typescript
public updateTotalMegaway(totalWay: number): void
```

- **Declaring Class**: `MegawayModule` (`assets/cc-common/cc-slot-mechanics/Megaway/scripts/MegawayModule.ts`)
- **Source Code Location**: Lines 32 to 35
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	updateTotalMegaway(totalWay: number): void {
		const ways = totalWay || this._data.getTotalWay();
		this.updateMegawayString(ways);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **32** | `updateTotalMegaway(totalWay: number): void {` | Method entry signature declaring `updateTotalMegaway(totalWay: number)` with return type `void`. |
| **33** | `const ways = totalWay \|\| this._data.getTotalWay();` | Local variable initialization allocating `ways`. |
| **34** | `this.updateMegawayString(ways);` | Applies operational logic and state mutation. |
| **35** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as MegawayModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke updateTotalMegaway(totalWay: number)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
