---
id: "game-implement:9666:module:StackWildModuleData:methods:getRawMatrix"
title: "StackWildModuleData.getRawMatrix Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "StackWildModuleData", "stack_wild_module_data", "methods", "getRawMatrix"]
---

# 📖 `StackWildModuleData.getRawMatrix()`

---

## 1. Method Signature & Overview

```typescript
public getRawMatrix(): string[]
```

- **Declaring Class**: `StackWildModuleData` ([`StackWildModuleData.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/StackWildModuleData.ts))
- **Source Range**: Lines 121 to 135
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	getRawMatrix(): string[] {
		let rawMatrix = this["matrix"] || this["matrix0"] || [];
		switch (this["state"]) {
			case 0: // NORMAL_GAME
				rawMatrix = this["normalGameMatrix"] || rawMatrix;
				break;
			case 1: // FREE_GAME
				rawMatrix = this["freeGameMatrix"] || rawMatrix;
				break;
			case 2: // RESPIN_GAME
				rawMatrix = this["respinGameMatrix"] || rawMatrix;
				break;
		}
		return rawMatrix;
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **121** | `getRawMatrix(): string[] {` | Method entry signature declaring `getRawMatrix()` returning `string[]`. |
| **122** | `let rawMatrix = this["matrix"] \|\| this["matrix0"] \|\| [];` | Allocates local variable `rawMatrix`. |
| **123** | `switch (this["state"]) {` | Executes core logic. |
| **124** | `case 0: // NORMAL_GAME` | Executes core logic. |
| **125** | `rawMatrix = this["normalGameMatrix"] \|\| rawMatrix;` | Executes core logic. |
| **126** | `break;` | Executes core logic. |
| **127** | `case 1: // FREE_GAME` | Executes core logic. |
| **128** | `rawMatrix = this["freeGameMatrix"] \|\| rawMatrix;` | Executes core logic. |
| **129** | `break;` | Executes core logic. |
| **130** | `case 2: // RESPIN_GAME` | Executes core logic. |
| **131** | `rawMatrix = this["respinGameMatrix"] \|\| rawMatrix;` | Executes core logic. |
| **132** | `break;` | Executes core logic. |
| **133** | `}` | Scope boundary closing block. |
| **134** | `return rawMatrix;` | Returns value or promise to calling sequence. |
| **135** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as StackWildModuleData
    participant Target as Engine / UI

    Caller->>Mod: Call getRawMatrix()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return string[]
```
