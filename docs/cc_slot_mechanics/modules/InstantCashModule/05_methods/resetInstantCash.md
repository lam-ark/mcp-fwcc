---
id: "cc_slot_mechanics:InstantCashModule:methods:resetInstantCash"
title: "InstantCashModule.resetInstantCash Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "methods", "resetInstantCash"]
---

# 📖 `InstantCashModule.resetInstantCash()`

---

## 1. Method Signature & Overview

```typescript
public resetInstantCash(): void
```

- **Declaring Class**: `InstantCashModule` (`assets/cc-common/cc-slot-mechanics/InstantCash/scripts/InstantCashModule.ts`)
- **Source Code Location**: Lines 28 to 30
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	resetInstantCash(): void {
		this.lbInstantCash.string = "";
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **28** | `resetInstantCash(): void {` | Method entry signature declaring `resetInstantCash()` with return type `void`. |
| **29** | `this.lbInstantCash.string = "";` | Updates rendered text on label component. |
| **30** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as InstantCashModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke resetInstantCash()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
