---
id: "cc_slot_mechanics:CellTableData:methods:getRawMatrix"
title: "CellTableData.getRawMatrix Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["CellTableData", "cell_table_data", "cc_slot_mechanics", "methods", "getRawMatrix"]
---

# 📖 `CellTableData.getRawMatrix()`

---

## 1. Method Signature & Overview

```typescript
public getRawMatrix(): string[]
```

- **Declaring Class**: `CellTableData` (`assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/CellTableData.ts`)
- **Source Code Location**: Lines 28 to 31
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	getRawMatrix(): string[] {
		let mx = this["freeGameMatrix"] || this["normalGameMatrix"] || this["matrix"];
		return mx;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **28** | `getRawMatrix(): string[] {` | Method entry signature declaring `getRawMatrix()` with return type `string[]`. |
| **29** | `let mx = this["freeGameMatrix"] \|\| this["normalGameMatrix"] \|\| this["matrix"];` | Local variable initialization allocating `mx`. |
| **30** | `return mx;` | Returns computed value / promise to caller. |
| **31** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as CellTableData
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke getRawMatrix()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return string[]
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
