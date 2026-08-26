---
id: "cc_slot_mechanics:InstantCashData:methods:getInstantCashMultiplier"
title: "InstantCashData.getInstantCashMultiplier Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["InstantCashData", "instant_cash_data", "cc_slot_mechanics", "methods", "getInstantCashMultiplier"]
---

# 📖 `InstantCashData.getInstantCashMultiplier()`

---

## 1. Method Signature & Overview

```typescript
public getInstantCashMultiplier(): number
```

- **Declaring Class**: `InstantCashData` (`assets/cc-common/cc-slot-mechanics/InstantCash/scripts/InstantCashData.ts`)
- **Source Code Location**: Lines 15 to 17
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	getInstantCashMultiplier(): number {
		return this.instantCashMultiplier || 1;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **15** | `getInstantCashMultiplier(): number {` | Method entry signature declaring `getInstantCashMultiplier()` with return type `number`. |
| **16** | `return this.instantCashMultiplier \|\| 1;` | Returns computed value / promise to caller. |
| **17** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as InstantCashData
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke getInstantCashMultiplier()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return number
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
