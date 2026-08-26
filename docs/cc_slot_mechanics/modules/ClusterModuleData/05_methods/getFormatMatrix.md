---
id: "cc_slot_mechanics:ClusterModuleData:methods:getFormatMatrix"
title: "ClusterModuleData.getFormatMatrix Line-by-Line Method Specification"
category: "cc_slot_mechanics"
tags: ["ClusterModuleData", "cluster_module_data", "cc_slot_mechanics", "methods", "getFormatMatrix"]
---

# 📖 `ClusterModuleData.getFormatMatrix()`

---

## 1. Method Signature & Overview

```typescript
public getFormatMatrix(): string[][]
```

- **Declaring Class**: `ClusterModuleData` (`assets/cc-common/cc-slot-mechanics/Cluster/scripts/ClusterModuleData.ts`)
- **Source Code Location**: Lines 25 to 32
- **Execution Complexity**: $O(1)$ fast synchronous calculation or controlled timer Promise.

---

## 2. Complete Source Code Implementation

```typescript
	getFormatMatrix(): string[][] {
		switch (this.gameMode) {
			case GAME_MODE_ENUM.NORMAL_GAME:
				return this["normalFormatMatrix"] || this["formatMatrix"];
			case GAME_MODE_ENUM.FREE_GAME:
				return this["freeFormatMatrix"] || this["formatMatrix"];
		}
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **25** | `getFormatMatrix(): string[][] {` | Method entry signature declaring `getFormatMatrix()` with return type `string[][]`. |
| **26** | `switch (this.gameMode) {` | Applies operational logic and state mutation. |
| **27** | `case GAME_MODE_ENUM.NORMAL_GAME:` | Applies operational logic and state mutation. |
| **28** | `return this["normalFormatMatrix"] \|\| this["formatMatrix"];` | Returns computed value / promise to caller. |
| **29** | `case GAME_MODE_ENUM.FREE_GAME:` | Applies operational logic and state mutation. |
| **30** | `return this["freeFormatMatrix"] \|\| this["formatMatrix"];` | Returns computed value / promise to caller. |
| **31** | `}` | Method exit boundary, closing block scope. |
| **32** | `}` | Method exit boundary, closing block scope. |

---

## 4. Data Flow & State Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table
    participant Mod as ClusterModuleData
    participant Bus as EventBus / UI

    Caller->>Mod: Invoke getFormatMatrix()
    Mod->>Mod: Validate parameters & compute state
    Mod->>Bus: Dispatch UI Sync Events
    Mod-->>Caller: Return string[][]
```

---

## 5. Production Gotchas & Edge Cases

1. **Null Guarding**: Always ensure caller passes non-null parameters or handles undefined fallbacks.
2. **Fast-Stop Safety**: If user triggers fast-stop during execution, ensure timers are cancelled cleanly via `unscheduleAllCallbacks()`.
