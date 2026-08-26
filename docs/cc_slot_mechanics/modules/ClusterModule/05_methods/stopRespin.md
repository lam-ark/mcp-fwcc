---
id: "cc_slot_mechanics:ClusterModule:methods:stopRespin"
title: "ClusterModule.stopRespin Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["ClusterModule", "cluster_module", "cc_slot_mechanics", "methods", "stopRespin"]
---

# 📖 `ClusterModule.stopRespin()`

---

## 1. Method Signature & Overview

```typescript
public stopRespin(matrix: string[][], traceWays: string[][]): Promise<void>
```

- **Declaring Class**: `ClusterModule` (`assets/cc-common/cc-slot-mechanics/Cluster/scripts/ClusterModule.ts`)
- **Source Code Location**: Lines 47 to 73
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	async stopRespin(matrix: string[][], traceWays: string[][]): Promise<void> {
		this.matrix = matrix;

		this.updateNewSymbolPosition();
		this.removeDroppedSymbols(); // remove symbol by traceWay data
		this.generateNewSymbols(); // generate new symbols
		this.checkForDropSymbols();
		this.processOldSymbols(); // get old symbols for dropping
		this.processNewSymbols(); // create all new symbols

		this.fallingSymbols(this.listDroppedSymbols);
		this.fallingSymbols(this.listNewSymbols);

		//TODO - for testing
		this.scheduleOnce(() => {
			this.listTraceWay = traceWays;
			this._stopRespinCB && this._stopRespinCB();
			this._stopRespinCB = null;
			this._listClusterSymbols = [];
			this._listSymbolPosition = [];
		}, 1);


		return new Promise((resolve) => {
			this._stopRespinCB = resolve;
		});
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **47** | `async stopRespin(matrix: string[][], traceWays: string[][]): Promise<void> {` | Method entry signature declaring `stopRespin(matrix: string[][], traceWays: string[][])` with return type `Promise<void>`. |
| **48** | `this.matrix = matrix;` | Applies operational logic and state mutation. |
| **49** | `` | Applies operational logic and state mutation. |
| **50** | `this.updateNewSymbolPosition();` | Applies operational logic and state mutation. |
| **51** | `this.removeDroppedSymbols(); // remove symbol by traceWay data` | Applies operational logic and state mutation. |
| **52** | `this.generateNewSymbols(); // generate new symbols` | Applies operational logic and state mutation. |
| **53** | `this.checkForDropSymbols();` | Applies operational logic and state mutation. |
| **54** | `this.processOldSymbols(); // get old symbols for dropping` | Applies operational logic and state mutation. |
| **55** | `this.processNewSymbols(); // create all new symbols` | Applies operational logic and state mutation. |
| **56** | `` | Applies operational logic and state mutation. |
| **57** | `this.fallingSymbols(this.listDroppedSymbols);` | Applies operational logic and state mutation. |
| **58** | `this.fallingSymbols(this.listNewSymbols);` | Applies operational logic and state mutation. |
| **59** | `` | Applies operational logic and state mutation. |
| **60** | `//TODO - for testing` | Applies operational logic and state mutation. |
| **61** | `this.scheduleOnce(() => {` | Schedules delayed execution callback using Cocos Creator timer. |
| **62** | `this.listTraceWay = traceWays;` | Applies operational logic and state mutation. |
| **63** | `this._stopRespinCB && this._stopRespinCB();` | Applies operational logic and state mutation. |
| **64** | `this._stopRespinCB = null;` | Applies operational logic and state mutation. |
| **65** | `this._listClusterSymbols = [];` | Applies operational logic and state mutation. |
| **66** | `this._listSymbolPosition = [];` | Applies operational logic and state mutation. |
| **67** | `}, 1);` | Applies operational logic and state mutation. |
| **68** | `` | Applies operational logic and state mutation. |
| **69** | `` | Applies operational logic and state mutation. |
| **70** | `return new Promise((resolve) => {` | Returns computed value / promise to caller. |
| **71** | `this._stopRespinCB = resolve;` | Applies operational logic and state mutation. |
| **72** | `});` | Applies operational logic and state mutation. |
| **73** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as ClusterModule
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke stopRespin(matrix: string[][], traceWays: string[][])
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return Promise<void>
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
