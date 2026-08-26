---
id: "cc_slot_mechanics:MultiplierReelData:methods:onDataUpdate"
title: "MultiplierReelData.onDataUpdate Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["MultiplierReelData", "multiplier_reel_data", "cc_slot_mechanics", "methods", "onDataUpdate"]
---

# 📖 `MultiplierReelData.onDataUpdate()`

---

## 1. Method Signature & Overview

```typescript
public onDataUpdate(key: string, value: any): void
```

- **Declaring Class**: `MultiplierReelData` (`assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReelData.ts`)
- **Source Code Location**: Lines 18 to 21
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onDataUpdate(key: string, value: any): void {
		super.onDataUpdate(key, value);
		this.multiplierReel = this['normalMultipliers'] || this['freeMultipliers'] || [];
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **18** | `onDataUpdate(key: string, value: any): void {` | Method entry signature declaring `onDataUpdate(key: string, value: any)` with return type `void`. |
| **19** | `super.onDataUpdate(key, value);` | Applies operational logic and state mutation. |
| **20** | `this.multiplierReel = this['normalMultipliers'] \|\| this['freeMultipliers'] \|\| [];` | Applies operational logic and state mutation. |
| **21** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as MultiplierReelData
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onDataUpdate(key: string, value: any)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
