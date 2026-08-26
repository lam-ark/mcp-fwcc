---
id: "game-implement:9666:module:StackWildModuleData:methods:getMatrix"
title: "StackWildModuleData.getMatrix Line-by-Line Method Walkthrough"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "StackWildModuleData", "stack_wild_module_data", "methods", "getMatrix"]
---

# 📖 `StackWildModuleData.getMatrix()`

---

## 1. Method Signature & Overview

```typescript
public getMatrix(): string[]
```

- **Declaring Class**: `StackWildModuleData` ([`StackWildModuleData.ts`](file:///C:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/StackWildModuleData.ts))
- **Source Range**: Lines 116 to 119
- **Execution Cost**: $O(1)$ synchronous logic or timer Promise.

---

## 2. Complete Source Implementation

```typescript
	getMatrix(): string[] {
		const rawMatrix = this.getRawMatrix();
		return this.getMainTableMegaMatrix(Array.from(rawMatrix));
	}
```

---

## 3. Line-by-Line Code Breakdown

| Line # | Code Snippet | Technical Analysis & Engine Behavior |
| :---: | :--- | :--- |
| **116** | `getMatrix(): string[] {` | Method entry signature declaring `getMatrix()` returning `string[]`. |
| **117** | `const rawMatrix = this.getRawMatrix();` | Allocates local variable `rawMatrix`. |
| **118** | `return this.getMainTableMegaMatrix(Array.from(rawMatrix));` | Returns value or promise to calling sequence. |
| **119** | `}` | Scope boundary closing block. |

---

## 4. Execution Call Graph & Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Caller as GameDirector / Table / EventBus
    participant Mod as StackWildModuleData
    participant Target as Engine / UI

    Caller->>Mod: Call getMatrix()
    Mod->>Mod: Execute line-by-line statements
    Mod->>Target: Update UI / Emit Events
    Mod-->>Caller: Return string[]
```
