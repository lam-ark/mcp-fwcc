---
id: "cc_slot_mechanics:TransformSymbolData:methods:getMatrix"
title: "TransformSymbolData.getMatrix Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["TransformSymbolData", "transform_symbol_data", "cc_slot_mechanics", "methods", "getMatrix"]
---

# 📖 `TransformSymbolData.getMatrix()`

---

## 1. Method Signature & Overview

```typescript
public getMatrix(): string[]
```

- **Declaring Class**: `TransformSymbolData` (`assets/cc-common/cc-slot-mechanics/TransformSymbol/scripts/TransformSymbolData.ts`)
- **Source Code Location**: Lines 49 to 63
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	getMatrix(): string[] {
		let rawMatrix = this["matrix"] || this["matrix0"];
		switch (this["state"]) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				rawMatrix = this["normalGameMatrix"] || rawMatrix;
				break;
			case GAME_MODE_ENUM.FREE_GAME:
				rawMatrix = this["freeGameMatrix"] || rawMatrix;
				break;
			case GAME_MODE_ENUM.RESPIN_GAME:
				rawMatrix = this["respinGameMatrix"] || rawMatrix;
				break;
		}
		return Array.from(rawMatrix || []);
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **49** | `getMatrix(): string[] {` | Method entry signature declaring `getMatrix()` with return type `string[]`. |
| **50** | `let rawMatrix = this["matrix"] \|\| this["matrix0"];` | Local variable initialization allocating `rawMatrix`. |
| **51** | `switch (this["state"]) {` | Applies operational logic and state mutation. |
| **52** | `case GAME_MODE_ENUM.NORMAL_GAME:` | Applies operational logic and state mutation. |
| **53** | `rawMatrix = this["normalGameMatrix"] \|\| rawMatrix;` | Applies operational logic and state mutation. |
| **54** | `break;` | Applies operational logic and state mutation. |
| **55** | `case GAME_MODE_ENUM.FREE_GAME:` | Applies operational logic and state mutation. |
| **56** | `rawMatrix = this["freeGameMatrix"] \|\| rawMatrix;` | Applies operational logic and state mutation. |
| **57** | `break;` | Applies operational logic and state mutation. |
| **58** | `case GAME_MODE_ENUM.RESPIN_GAME:` | Applies operational logic and state mutation. |
| **59** | `rawMatrix = this["respinGameMatrix"] \|\| rawMatrix;` | Applies operational logic and state mutation. |
| **60** | `break;` | Applies operational logic and state mutation. |
| **61** | `}` | Method exit boundary, closing block scope. |
| **62** | `return Array.from(rawMatrix \|\| []);` | Returns computed value / promise to caller. |
| **63** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as TransformSymbolData
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke getMatrix()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return string[]
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
