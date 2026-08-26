---
id: "cc_slot_mechanics:HorizontalTableData:methods:getMatrix"
title: "HorizontalTableData.getMatrix Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["HorizontalTableData", "horizontal_table_data", "cc_slot_mechanics", "methods", "getMatrix"]
---

# 📖 `HorizontalTableData.getMatrix()`

---

## 1. Method Signature & Overview

```typescript
public getMatrix(): string[][]
```

- **Declaring Class**: `HorizontalTableData` (`assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableData.ts`)
- **Source Code Location**: Lines 22 to 30
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	getMatrix(): string[][] {
		let rawMatrix = this.getRawMatrix();
		if (!rawMatrix) {
			return [];
		}
		const horizontalSymbolIndexes = this.config.HORIZONTAL_SYMBOL_INDEXES;
		const horizontalMatrix = rawMatrix.filter((_symbolValue, symbolIndex) => horizontalSymbolIndexes.indexOf(symbolIndex) !== -1);
		return [[...horizontalMatrix]];
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **22** | `getMatrix(): string[][] {` | Method entry signature declaring `getMatrix()` with return type `string[][]`. |
| **23** | `let rawMatrix = this.getRawMatrix();` | Local variable initialization allocating `rawMatrix`. |
| **24** | `if (!rawMatrix) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **25** | `return [];` | Returns computed value / promise to caller. |
| **26** | `}` | Method exit boundary, closing block scope. |
| **27** | `const horizontalSymbolIndexes = this.config.HORIZONTAL_SYMBOL_INDEXES;` | Local variable initialization allocating `horizontalSymbolIndexes`. |
| **28** | `const horizontalMatrix = rawMatrix.filter((_symbolValue, symbolIndex) => horizontalSymbolIndexes.indexOf(symbolIndex) !== -1);` | Local variable initialization allocating `horizontalMatrix`. |
| **29** | `return [[...horizontalMatrix]];` | Returns computed value / promise to caller. |
| **30** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as HorizontalTableData
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
