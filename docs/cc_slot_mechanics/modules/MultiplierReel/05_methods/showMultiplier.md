---
id: "cc_slot_mechanics:MultiplierReel:methods:showMultiplier"
title: "MultiplierReel.showMultiplier Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["MultiplierReel", "multiplier_reel", "cc_slot_mechanics", "methods", "showMultiplier"]
---

# 📖 `MultiplierReel.showMultiplier()`

---

## 1. Method Signature & Overview

```typescript
public showMultiplier(multiplier: number, prefix: string = "x"): void
```

- **Declaring Class**: `MultiplierReel` (`assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReel.ts`)
- **Source Code Location**: Lines 12 to 14
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	showMultiplier(multiplier: number, prefix: string = "x"): void {
		this.lbMultiplier.string = `${prefix}${multiplier}`;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **12** | `showMultiplier(multiplier: number, prefix: string = "x"): void {` | Method entry signature declaring `showMultiplier(multiplier: number, prefix: string = "x")` with return type `void`. |
| **13** | `this.lbMultiplier.string = `${prefix}${multiplier}`;` | Updates rendered text on label component. |
| **14** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as MultiplierReel
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke showMultiplier(multiplier: number, prefix: string = "x")
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
