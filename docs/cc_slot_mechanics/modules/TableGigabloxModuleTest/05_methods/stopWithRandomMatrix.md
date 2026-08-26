---
id: "cc_slot_mechanics:TableGigabloxModuleTest:methods:stopWithRandomMatrix"
title: "TableGigabloxModuleTest.stopWithRandomMatrix Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModuleTest", "table_gigablox_module_test", "cc_slot_mechanics", "methods", "stopWithRandomMatrix"]
---

# 📖 `TableGigabloxModuleTest.stopWithRandomMatrix()`

---

## 1. Method Signature & Overview

```typescript
public stopWithRandomMatrix(): void
```

- **Declaring Class**: `TableGigabloxModuleTest` (`assets/cc-common/cc-slot-mechanics/Gigablox/scripts/TableGigabloxModuleTest.ts`)
- **Source Code Location**: Lines 22 to 26
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	stopWithRandomMatrix(): void {
        const slotData = this.table.getComponent(TableGigabloxData);
        slotData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5].map(String);
		this.table.stopSpin();
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **22** | `stopWithRandomMatrix(): void {` | Method entry signature declaring `stopWithRandomMatrix()` with return type `void`. |
| **23** | `const slotData = this.table.getComponent(TableGigabloxData);` | Local variable initialization allocating `slotData`. |
| **24** | `slotData["matrix"] = [2,3,3,2,2,3,4,4,4,3,4,2,5,6,5].map(String);` | Applies operational logic and state mutation. |
| **25** | `this.table.stopSpin();` | Applies operational logic and state mutation. |
| **26** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as TableGigabloxModuleTest
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke stopWithRandomMatrix()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return void
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
