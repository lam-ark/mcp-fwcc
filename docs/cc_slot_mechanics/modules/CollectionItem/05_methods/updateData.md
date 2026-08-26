---
id: "cc_slot_mechanics:CollectionItem:methods:updateData"
title: "CollectionItem.updateData Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "methods", "updateData"]
---

# 📖 `CollectionItem.updateData()`

---

## 1. Method Signature & Overview

```typescript
public updateData(current: number, total: number): void
```

- **Declaring Class**: `CollectionItem` (`assets/cc-common/cc-slot-mechanics/CollectionItem/scripts/CollectionItem.ts`)
- **Source Code Location**: Lines 33 to 37
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	updateData(current: number, total: number): void {
		this._currentAmount = current;
		this._totalAmount = total;
		this.lbCollection.string = `${current}/${total}`;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **33** | `updateData(current: number, total: number): void {` | Method entry signature declaring `updateData(current: number, total: number)` with return type `void`. |
| **34** | `this._currentAmount = current;` | Applies operational logic and state mutation. |
| **35** | `this._totalAmount = total;` | Applies operational logic and state mutation. |
| **36** | `this.lbCollection.string = `${current}/${total}`;` | Updates rendered text on label component. |
| **37** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as CollectionItem
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke updateData(current: number, total: number)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
