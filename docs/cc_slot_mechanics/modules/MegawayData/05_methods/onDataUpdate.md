---
id: "cc_slot_mechanics:MegawayData:methods:onDataUpdate"
title: "MegawayData.onDataUpdate Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["MegawayData", "megaway_data", "cc_slot_mechanics", "methods", "onDataUpdate"]
---

# 📖 `MegawayData.onDataUpdate()`

---

## 1. Method Signature & Overview

```typescript
public onDataUpdate(key: string, value: any): void
```

- **Declaring Class**: `MegawayData` (`assets/cc-common/cc-slot-mechanics/Megaway/scripts/MegawayData.ts`)
- **Source Code Location**: Lines 26 to 29
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onDataUpdate(key: string, value: any): void {
		this[key] = value;
		this._tableFormat = value.map(item => item.split("").length);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **26** | `onDataUpdate(key: string, value: any): void {` | Method entry signature declaring `onDataUpdate(key: string, value: any)` with return type `void`. |
| **27** | `this[key] = value;` | Applies operational logic and state mutation. |
| **28** | `this._tableFormat = value.map(item => item.split("").length);` | Applies operational logic and state mutation. |
| **29** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as MegawayData
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
