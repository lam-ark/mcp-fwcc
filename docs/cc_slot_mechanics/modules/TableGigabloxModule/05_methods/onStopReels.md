---
id: "cc_slot_mechanics:TableGigabloxModule:methods:onStopReels"
title: "TableGigabloxModule.onStopReels Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModule", "table_gigablox_module", "cc_slot_mechanics", "methods", "onStopReels"]
---

# 📖 `TableGigabloxModule.onStopReels()`

---

## 1. Method Signature & Overview

```typescript
public onStopReels({ mode, context }): void
```

- **Declaring Class**: `TableGigabloxModule` (`assets/cc-common/cc-slot-mechanics/Gigablox/scripts/TableGigabloxModule.ts`)
- **Source Code Location**: Lines 30 to 36
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	protected onStopReels({ mode, context }): void {
		const { blox } = this._slotTableData.getCustomMatrix();
		this._bloxes = blox;
		
		this.setupGigablox(context);
		this.setupReelGigabloxDelay(context);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **30** | `protected onStopReels({ mode, context }): void {` | Method entry signature declaring `onStopReels({ mode, context })` with return type `void`. |
| **31** | `const { blox } = this._slotTableData.getCustomMatrix();` | Local variable initialization allocating `{ blox }`. |
| **32** | `this._bloxes = blox;` | Applies operational logic and state mutation. |
| **33** | `` | Applies operational logic and state mutation. |
| **34** | `this.setupGigablox(context);` | Applies operational logic and state mutation. |
| **35** | `this.setupReelGigabloxDelay(context);` | Applies operational logic and state mutation. |
| **36** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as TableGigabloxModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke onStopReels({ mode, context })
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
