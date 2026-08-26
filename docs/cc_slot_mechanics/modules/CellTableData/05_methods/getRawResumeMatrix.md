---
id: "cc_slot_mechanics:CellTableData:methods:getRawResumeMatrix"
title: "CellTableData.getRawResumeMatrix Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["CellTableData", "cell_table_data", "cc_slot_mechanics", "methods", "getRawResumeMatrix"]
---

# 📖 `CellTableData.getRawResumeMatrix()`

---

## 1. Method Signature & Overview

```typescript
public getRawResumeMatrix(): string[]
```

- **Declaring Class**: `CellTableData` (`assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/CellTableData.ts`)
- **Source Code Location**: Lines 33 to 45
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	getRawResumeMatrix(): string[] {
		let mx = [];
		switch (this.gameMode) {
			case GAME_MODE_ENUM.FREE_GAME:
				mx = this["freeGameMatrix"] || this["matrix"];
				break;
			case GAME_MODE_ENUM.NORMAL_GAME:
				mx = this["normalGameMatrix"] || this["matrix"];
				break;
		}

		return mx;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **33** | `getRawResumeMatrix(): string[] {` | Method entry signature declaring `getRawResumeMatrix()` with return type `string[]`. |
| **34** | `let mx = [];` | Local variable initialization allocating `mx`. |
| **35** | `switch (this.gameMode) {` | Applies operational logic and state mutation. |
| **36** | `case GAME_MODE_ENUM.FREE_GAME:` | Applies operational logic and state mutation. |
| **37** | `mx = this["freeGameMatrix"] \|\| this["matrix"];` | Applies operational logic and state mutation. |
| **38** | `break;` | Applies operational logic and state mutation. |
| **39** | `case GAME_MODE_ENUM.NORMAL_GAME:` | Applies operational logic and state mutation. |
| **40** | `mx = this["normalGameMatrix"] \|\| this["matrix"];` | Applies operational logic and state mutation. |
| **41** | `break;` | Applies operational logic and state mutation. |
| **42** | `}` | Method exit boundary, closing block scope. |
| **43** | `` | Applies operational logic and state mutation. |
| **44** | `return mx;` | Returns computed value / promise to caller. |
| **45** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as CellTableData
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke getRawResumeMatrix()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return string[]
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
