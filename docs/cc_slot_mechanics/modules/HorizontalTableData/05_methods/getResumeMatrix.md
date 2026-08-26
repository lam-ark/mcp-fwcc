---
id: "cc_slot_mechanics:HorizontalTableData:methods:getResumeMatrix"
title: "HorizontalTableData.getResumeMatrix Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["HorizontalTableData", "horizontal_table_data", "cc_slot_mechanics", "methods", "getResumeMatrix"]
---

# 📖 `HorizontalTableData.getResumeMatrix()`

---

## 1. Method Signature & Overview

```typescript
public getResumeMatrix(gameMode?: number): string[][]
```

- **Declaring Class**: `HorizontalTableData` (`assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableData.ts`)
- **Source Code Location**: Lines 32 to 42
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	getResumeMatrix(gameMode?: number): string[][] {
		const gameModeData = this.dataStore.getGameModeData(gameMode || this.gameMode);
		let rawMatrix = gameModeData.matrix || this.getRawResumeMatrix();
		if (!rawMatrix) {
			return [];
		}
		this.dataStore.setGameModeDataMap("matrix", rawMatrix);
		const horizontalSymbolIndexes = this.config.HORIZONTAL_SYMBOL_INDEXES;
		const horizontalMatrix = rawMatrix.filter((_symbolValue, symbolIndex) => horizontalSymbolIndexes.indexOf(symbolIndex) !== -1);
		return [[...horizontalMatrix]];
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **32** | `getResumeMatrix(gameMode?: number): string[][] {` | Method entry signature declaring `getResumeMatrix(gameMode?: number)` with return type `string[][]`. |
| **33** | `const gameModeData = this.dataStore.getGameModeData(gameMode \|\| this.gameMode);` | Local variable initialization allocating `gameModeData`. |
| **34** | `let rawMatrix = gameModeData.matrix \|\| this.getRawResumeMatrix();` | Local variable initialization allocating `rawMatrix`. |
| **35** | `if (!rawMatrix) {` | Conditional branch evaluation guarding edge cases or prerequisites. |
| **36** | `return [];` | Returns computed value / promise to caller. |
| **37** | `}` | Method exit boundary, closing block scope. |
| **38** | `this.dataStore.setGameModeDataMap("matrix", rawMatrix);` | Applies operational logic and state mutation. |
| **39** | `const horizontalSymbolIndexes = this.config.HORIZONTAL_SYMBOL_INDEXES;` | Local variable initialization allocating `horizontalSymbolIndexes`. |
| **40** | `const horizontalMatrix = rawMatrix.filter((_symbolValue, symbolIndex) => horizontalSymbolIndexes.indexOf(symbolIndex) !== -1);` | Local variable initialization allocating `horizontalMatrix`. |
| **41** | `return [[...horizontalMatrix]];` | Returns computed value / promise to caller. |
| **42** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as HorizontalTableData
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke getResumeMatrix(gameMode?: number)
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return string[][]
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
