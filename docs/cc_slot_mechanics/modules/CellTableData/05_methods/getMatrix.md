---
id: "cc_slot_mechanics:CellTableData:methods:getMatrix"
title: "CellTableData.getMatrix Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["CellTableData", "cell_table_data", "cc_slot_mechanics", "methods", "getMatrix"]
---

# 📖 `CellTableData.getMatrix()`

---

## 1. Method Signature & Overview

```typescript
public getMatrix(): string[][]
```

- **Declaring Class**: `CellTableData` (`assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/CellTableData.ts`)
- **Source Code Location**: Lines 23 to 26
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	getMatrix(): string[][] {
		let rawMatrix = this.getRawMatrix();
		return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **23** | `getMatrix(): string[][] {` | Method entry signature declaring `getMatrix()` with return type `string[][]`. |
| **24** | `let rawMatrix = this.getRawMatrix();` | Local variable initialization allocating `rawMatrix`. |
| **25** | `return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_FORMAT);` | Returns computed value / promise to caller. |
| **26** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as CellTableData
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke getMatrix()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return string[][]
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
