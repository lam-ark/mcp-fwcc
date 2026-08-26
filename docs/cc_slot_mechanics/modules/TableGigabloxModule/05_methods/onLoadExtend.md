---
id: "cc_slot_mechanics:TableGigabloxModule:methods:onLoadExtend"
title: "TableGigabloxModule.onLoadExtend Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModule", "table_gigablox_module", "cc_slot_mechanics", "methods", "onLoadExtend"]
---

# 📖 `TableGigabloxModule.onLoadExtend()`

---

## 1. Method Signature & Overview

```typescript
public onLoadExtend(): void
```

- **Declaring Class**: `TableGigabloxModule` (`assets/cc-common/cc-slot-mechanics/Gigablox/scripts/TableGigabloxModule.ts`)
- **Source Code Location**: Lines 20 to 24
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	onLoadExtend(): void {
		this.config = this.getComponent(TableGigabloxConfig);
		this._slotTableData = this.getComponent(TableGigabloxData);
		this.getConfigValue();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **20** | `onLoadExtend(): void {` | Method entry signature declaring `onLoadExtend()` with return type `void`. |
| **21** | `this.config = this.getComponent(TableGigabloxConfig);` | Queries attached component instance from scene graph node. |
| **22** | `this._slotTableData = this.getComponent(TableGigabloxData);` | Queries attached component instance from scene graph node. |
| **23** | `this.getConfigValue();` | Applies operational logic and state mutation. |
| **24** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as TableGigabloxModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onLoadExtend()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
