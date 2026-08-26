---
id: "cc_slot_mechanics:MultiplierReelData:methods:getMultiplierReel"
title: "MultiplierReelData.getMultiplierReel Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["MultiplierReelData", "multiplier_reel_data", "cc_slot_mechanics", "methods", "getMultiplierReel"]
---

# 📖 `MultiplierReelData.getMultiplierReel()`

---

## 1. Method Signature & Overview

```typescript
public getMultiplierReel(index: number): number
```

- **Declaring Class**: `MultiplierReelData` (`assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReelData.ts`)
- **Source Code Location**: Lines 23 to 25
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	getMultiplierReel(index: number): number {
		return this.multiplierReel[index] || 1;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **23** | `getMultiplierReel(index: number): number {` | Method entry signature declaring `getMultiplierReel(index: number)` with return type `number`. |
| **24** | `return this.multiplierReel[index] \|\| 1;` | Returns computed value / promise to caller. |
| **25** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as MultiplierReelData
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke getMultiplierReel(index: number)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return number
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
