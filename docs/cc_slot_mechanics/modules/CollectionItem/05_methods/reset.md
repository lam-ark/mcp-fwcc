---
id: "cc_slot_mechanics:CollectionItem:methods:reset"
title: "CollectionItem.reset Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "methods", "reset"]
---

# 📖 `CollectionItem.reset()`

---

## 1. Method Signature & Overview

```typescript
public reset(): void
```

- **Declaring Class**: `CollectionItem` (`assets/cc-common/cc-slot-mechanics/CollectionItem/scripts/CollectionItem.ts`)
- **Source Code Location**: Lines 39 to 43
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	reset(): void {
		this._currentAmount = 0;
		this._totalAmount = 0;
		this.lbCollection.string = `${this._currentAmount}/${this._totalAmount}`;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **39** | `reset(): void {` | Method entry signature declaring `reset()` with return type `void`. |
| **40** | `this._currentAmount = 0;` | Applies operational logic and state mutation. |
| **41** | `this._totalAmount = 0;` | Applies operational logic and state mutation. |
| **42** | `this.lbCollection.string = `${this._currentAmount}/${this._totalAmount}`;` | Updates rendered text on label component. |
| **43** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as CollectionItem
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke reset()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
