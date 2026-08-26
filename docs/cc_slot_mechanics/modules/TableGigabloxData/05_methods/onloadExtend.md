---
id: "cc_slot_mechanics:TableGigabloxData:methods:onloadExtend"
title: "TableGigabloxData.onloadExtend Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["TableGigabloxData", "table_gigablox_data", "cc_slot_mechanics", "methods", "onloadExtend"]
---

# 📖 `TableGigabloxData.onloadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onloadExtend(): void
```

- **Declaring Class**: `TableGigabloxData` (`assets/cc-common/cc-slot-mechanics/Gigablox/scripts/TableGigabloxData.ts`)
- **Source Code Location**: Lines 18 to 20
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onloadExtend(): void {
		this.config = this.getComponent(TableGigabloxConfig);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **18** | `onloadExtend(): void {` | Method entry signature declaring `onloadExtend()` with return type `void`. |
| **19** | `this.config = this.getComponent(TableGigabloxConfig);` | Queries attached component instance from scene graph node. |
| **20** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as TableGigabloxData
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onloadExtend()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
