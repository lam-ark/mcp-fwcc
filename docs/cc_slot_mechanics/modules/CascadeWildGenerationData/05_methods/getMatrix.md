---
id: "cc_slot_mechanics:CascadeWildGenerationData:methods:getMatrix"
title: "CascadeWildGenerationData.getMatrix Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationData", "cascade_wild_generation_data", "cc_slot_mechanics", "methods", "getMatrix"]
---

# 📖 `CascadeWildGenerationData.getMatrix()`

---

## 1. Method Signature & Overview

```typescript
public getMatrix(): string[][]
```

- **Declaring Class**: `CascadeWildGenerationData` (`assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/CascadeWildGenerationData.ts`)
- **Source Code Location**: Lines 39 to 50
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	getMatrix(): string[][] {
		let matrix = [];
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				matrix = this["normalGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
			case GAME_MODE_ENUM.FREE_GAME:
				matrix = this["freeGameMatrix"] || this["matrix0"] || this["matrix"];
				break;
		}
		return matrix;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **39** | `getMatrix(): string[][] {` | Method entry signature declaring `getMatrix()` with return type `string[][]`. |
| **40** | `let matrix = [];` | Local variable initialization allocating `matrix`. |
| **41** | `switch (this.gameMode) {` | Applies operational logic and state mutation. |
| **42** | `case GAME_MODE_ENUM.NORMAL_GAME:` | Applies operational logic and state mutation. |
| **43** | `matrix = this["normalGameMatrix"] \|\| this["matrix0"] \|\| this["matrix"];` | Applies operational logic and state mutation. |
| **44** | `break;` | Applies operational logic and state mutation. |
| **45** | `case GAME_MODE_ENUM.FREE_GAME:` | Applies operational logic and state mutation. |
| **46** | `matrix = this["freeGameMatrix"] \|\| this["matrix0"] \|\| this["matrix"];` | Applies operational logic and state mutation. |
| **47** | `break;` | Applies operational logic and state mutation. |
| **48** | `}` | Method exit boundary, closing block scope. |
| **49** | `return matrix;` | Returns computed value / promise to caller. |
| **50** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as CascadeWildGenerationData
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
